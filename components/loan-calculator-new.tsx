"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CustomSelect } from "@/components/ui/custom-select"
import { Calculator, FileText, AlertCircle } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"

// Configuration
const MIN_LOAN_AMOUNT = 50000
const MAX_LOAN_AMOUNT = 2000000
const MIN_LOAN_AMOUNT_5_PLUS_UNITS = 250000
const MIN_PROPERTY_VALUE = 75000
const MIN_PROPERTY_VALUE_5_PLUS_UNITS = 350000
// States with special adjustments (if FICO >= 680 and Min. 1.00x DSCR = 0, otherwise +0.375)
const stateList = ["AL","GA","KS","ME","MO","MS","NE","SD","WI","WY"]
// Ineligible states - ND, NV, and SD
const ineligibleStates = ["ND","NV","SD"]

interface FormData {
  state: string
  propertyType: string
  dscr: string
  loanType: string
  purchasePrice: string
  ltv: string
  ppp: string
  fico: string
  name: string
  phone: string
  email: string
}

interface CalculationResults {
  baseRate: number
  loanAmount: number
  monthlyPI: number
  originationFee: number
  underwritingFee: number
  totalFee: number
}

export function LoanCalculator() {
  const [formData, setFormData] = useState<FormData>({
    state: "",
    propertyType: "",
    dscr: "",
    loanType: "",
    purchasePrice: "",
    ltv: "",
    ppp: "",
    fico: "",
    name: "",
    phone: "",
    email: ""
  })

  const [results, setResults] = useState<CalculationResults | null>(null)
  const [error, setError] = useState<string>("")
  const [showResults, setShowResults] = useState(false)
  const { toast } = useToast()

  // Check if all required fields have valid values
  const areAllInputsFilled = () => {
    const { state, propertyType, dscr, loanType, purchasePrice, ltv, ppp, fico } = formData
    const purchasePriceNum = parseFloat(purchasePrice) || 0
    const ficoNum = parseInt(fico, 10) || 0

    return !!(state && propertyType && dscr && loanType && ltv && ppp && 
              purchasePriceNum > 0 && ficoNum > 0)
  }

  // Main calculation function
  const calculateRate = () => {
    if (!areAllInputsFilled()) {
      setShowResults(false)
      return
    }

    setError("")
    setResults(null)

    let baseRate = 5.875
    const st = formData.state.trim().toUpperCase()
    const propertyType = formData.propertyType
    const dscrVal = parseFloat(formData.dscr) || 0
    
    // Validate DSCR
    if (isNaN(dscrVal) || dscrVal <= 0) {
      setError("Invalid DSCR value. Please select a valid debt service coverage ratio.")
      setShowResults(true)
      return
    }
    const loanPurpose = formData.loanType
    const purchasePrice = parseFloat(formData.purchasePrice) || 0
    
    // Validate purchase price
    if (isNaN(purchasePrice) || purchasePrice <= 0) {
      setError("Invalid purchase price. Please enter a valid amount.")
      setShowResults(true)
      return
    }
    const ltvStr = formData.ltv.replace('%', '')
    const LTV = parseFloat(ltvStr) / 100
    
    // Validate LTV
    if (isNaN(LTV) || LTV <= 0 || LTV > 1) {
      setError("Invalid LTV value. Please select a valid loan-to-value ratio.")
      setShowResults(true)
      return
    }
    const pppVal = formData.ppp
    const FICO = parseInt(formData.fico, 10) || 0
    
    // Validate FICO score
    if (isNaN(FICO) || FICO < 300 || FICO > 850) {
      setError("Invalid FICO score. Please enter a score between 300 and 850.")
      setShowResults(true)
      return
    }

    // Compute initial loanAmount
    const loanAmount = purchasePrice * LTV

    // Validation checks

    // Check ineligible states
    if (ineligibleStates.includes(st)) {
      setError(`Properties in ${st} are not eligible for this loan program.`)
      setShowResults(true)
      return
    }

    // Minimum property value check
    if (propertyType === "5-8 unit" && purchasePrice < MIN_PROPERTY_VALUE_5_PLUS_UNITS) {
      setError("Minimum property value for 5-8 unit properties is $350,000")
      setShowResults(true)
      return
    }
    if (purchasePrice < MIN_PROPERTY_VALUE) {
      setError("Minimum property value is $75,000")
      setShowResults(true)
      return
    }

    // Loan amount validations
    if (loanAmount < MIN_LOAN_AMOUNT) {
      setError("Loan amount is too small, lender requires a minimum of $50k loan amount")
      setShowResults(true)
      return
    }
    if (propertyType === "5-8 unit" && loanAmount < MIN_LOAN_AMOUNT_5_PLUS_UNITS) {
      setError("Minimum loan amount for 5-8 unit properties is $250,000")
      setShowResults(true)
      return
    }
    if (loanAmount > MAX_LOAN_AMOUNT) {
      setError("Maximum loan amount is $2,000,000. Contact us for larger loans.")
      setShowResults(true)
      return
    }

    if (FICO < 660) {
      setError("Credit is too low for a DSCR Loan. Minimum FICO is 660.")
      setShowResults(true)
      return
    }
    if ((LTV > 0.7) && FICO < 680) {
      setError("Max LTV for credit under 680 is 70%.")
      setShowResults(true)
      return
    }
    // FICO 660-679 cannot do 75.01-80% LTV
    if (FICO >= 660 && FICO < 680 && LTV > 0.75) {
      setError("Max LTV for FICO 660-679 is 75%.")
      setShowResults(true)
      return
    }
    if (loanPurpose === "Cashout Refinance" && propertyType === "5-8 unit" && FICO < 700) {
      setError("FICO must be 700+ for 5-8 Unit Cashout Refinance.")
      setShowResults(true)
      return
    }
    // 5-8 unit cashout also requires minimum DSCR 1.30x
    if (loanPurpose === "Cashout Refinance" && propertyType === "5-8 unit" && dscrVal < 1.3) {
      setError("5-8 Unit Cashout Refinance requires minimum DSCR of 1.30x")
      setShowResults(true)
      return
    }

    // LTV-based adjustments based on C2 Expanded Rate Sheet (effective 12/1/2025)
    // Adjustments to Interest Rate by LTV and FICO Score
    if (LTV <= 0.55) {
      // <=55% LTV
      if (FICO >= 780) baseRate += 0.000
      else if (FICO >= 760) baseRate += 0.000
      else if (FICO >= 740) baseRate += 0.000
      else if (FICO >= 720) baseRate += 0.000
      else if (FICO >= 700) baseRate += 0.000
      else if (FICO >= 680) baseRate += 0.250
      else if (FICO >= 660) baseRate += 0.625
    } else if (LTV <= 0.60) {
      // 55.01 - 60% LTV
      if (FICO >= 780) baseRate += 0.000
      else if (FICO >= 760) baseRate += 0.000
      else if (FICO >= 740) baseRate += 0.000
      else if (FICO >= 720) baseRate += 0.000
      else if (FICO >= 700) baseRate += 0.000
      else if (FICO >= 680) baseRate += 0.375
      else if (FICO >= 660) baseRate += 0.750
    } else if (LTV <= 0.65) {
      // 60.01 - 65% LTV
      if (FICO >= 780) baseRate += 0.000
      else if (FICO >= 760) baseRate += 0.125
      else if (FICO >= 740) baseRate += 0.250
      else if (FICO >= 720) baseRate += 0.375
      else if (FICO >= 700) baseRate += 0.500
      else if (FICO >= 680) baseRate += 0.500
      else if (FICO >= 660) baseRate += 0.875
    } else if (LTV <= 0.70) {
      // 65.01 - 70% LTV
      if (FICO >= 780) baseRate += 0.000
      else if (FICO >= 760) baseRate += 0.250
      else if (FICO >= 740) baseRate += 0.375
      else if (FICO >= 720) baseRate += 0.500
      else if (FICO >= 700) baseRate += 0.625
      else if (FICO >= 680) baseRate += 0.625
      else if (FICO >= 660) baseRate += 1.000
    } else if (LTV <= 0.75) {
      // 70.01 - 75% LTV
      if (FICO >= 780) baseRate += 0.125
      else if (FICO >= 760) baseRate += 0.375
      else if (FICO >= 740) baseRate += 0.500
      else if (FICO >= 720) baseRate += 0.625
      else if (FICO >= 700) baseRate += 0.875
      else if (FICO >= 680) baseRate += 1.000
      // 660-679 not eligible at this LTV (n/a)
    } else if (LTV <= 0.80) {
      // 75.01 - 80% LTV
      if (FICO >= 780) baseRate += 0.500
      else if (FICO >= 760) baseRate += 0.625
      else if (FICO >= 740) baseRate += 0.750
      else if (FICO >= 720) baseRate += 0.875
      else if (FICO >= 700) baseRate += 1.000
      else if (FICO >= 680) baseRate += 1.750
      // 660-679 not eligible at this LTV (n/a)
    }

    // State-based logic (AL, GA, KS, ME, MO, MS, NE, SD, WI, WY)
    // If FICO >= 680 with Min. 1.00x DSCR: 0.000 adjustment
    // If FICO < 680 or DSCR < 1.10x: +0.375 adjustment
    if (stateList.includes(st)) {
      if (FICO < 680 || dscrVal < 1.10) {
        baseRate += 0.375
      }
      // else no adjustment (0.000)
    }

    // Property Type adjustments based on C2 Rate Sheet
    if (propertyType === "2-4 unit") {
      // 2-4 Unit Properties adjustments by LTV
      if (LTV <= 0.55) baseRate += 0.125
      else if (LTV <= 0.60) baseRate += 0.250
      else if (LTV <= 0.65) baseRate += 0.250
      else if (LTV <= 0.70) baseRate += 0.375
      else if (LTV <= 0.75) baseRate += 0.375
      else if (LTV <= 0.80) baseRate += 0.500
    }
    if (propertyType === "5-8 unit") {
      // 5-8 Unit Properties (Min. Note Rate 7.5%, Min. DSCR 1.30x)
      if (dscrVal < 1.30) {
        setError("5-8 Unit properties require minimum DSCR of 1.30x")
        setShowResults(true)
        return
      }
      // 5-8 units not available at 70.01-75% or 75.01-80% LTV (n/a in rate sheet)
      if (LTV > 0.70) {
        setError("5-8 Unit properties have a max LTV of 70%")
        setShowResults(true)
        return
      }
      // Adjustments by LTV
      if (LTV <= 0.55) baseRate += 1.000
      else if (LTV <= 0.60) baseRate += 1.125
      else if (LTV <= 0.65) baseRate += 1.375
      // 70% and above n/a
    }

    // DSCR adjustments based on C2 Rate Sheet
    // Minimum DSCR requirements by LTV:
    // <= 65% LTV: Minimum DSCR 0.75x
    // 65.01 - 80% LTV: Minimum DSCR 1.00x
    if (dscrVal < 0.75) {
      setError("Minimum DSCR is 0.75x")
      setShowResults(true)
      return
    }
    if (dscrVal < 1.0 && LTV > 0.65) {
      setError("Max LTV for DSCR below 1.00x is 65%.")
      setShowResults(true)
      return
    }

    // DSCR rate adjustments by LTV range
    if (dscrVal >= 0.75 && dscrVal < 0.95) {
      // 0.75 - 0.94 DSCR (FICO >= 720, Loan Amount >= 150K required)
      if (FICO < 720) {
        setError("DSCR 0.75-0.94 requires FICO >= 720")
        setShowResults(true)
        return
      }
      if (loanAmount < 150000) {
        setError("DSCR 0.75-0.94 requires loan amount >= $150,000")
        setShowResults(true)
        return
      }
      if (LTV <= 0.55) baseRate += 1.000
      else if (LTV <= 0.60) baseRate += 1.125
      else if (LTV <= 0.65) baseRate += 1.250
      // n/a for higher LTVs
    } else if (dscrVal >= 0.95 && dscrVal < 1.0) {
      // 0.95 - 0.99 DSCR
      if (LTV <= 0.55) baseRate += 0.750
      else if (LTV <= 0.60) baseRate += 0.750
      else if (LTV <= 0.65) baseRate += 0.750
      // n/a for higher LTVs
    } else if (dscrVal >= 1.0 && dscrVal < 1.15) {
      // 1.00 - 1.15 DSCR
      if (LTV <= 0.55) baseRate += 0.000
      else if (LTV <= 0.60) baseRate += 0.000
      else if (LTV <= 0.65) baseRate += 0.125
      else if (LTV <= 0.70) baseRate += 0.125
      else if (LTV <= 0.75) baseRate += 0.125
      else if (LTV <= 0.80) baseRate += 0.250
    }
    // 1.15+ DSCR: no additional adjustment (0.000 across all LTVs)

    // Loan Type adjustments based on C2 Rate Sheet
    // Purchase: 0.000 across all LTVs
    // Rate/Term Refinance: 0.000 across all LTVs
    // Purchase and Rate/Term Refi max LTV is 80%
    if (loanPurpose === "Purchase" || loanPurpose === "Rate Term Refinance") {
      // No additional rate adjustment, but validate max LTV
      if (LTV > 0.80) {
        setError("Max LTV for Purchase/Rate-Term Refinance is 80%")
        setShowResults(true)
        return
      }
    }

    // Cashout Refinance adjustments by LTV (1-4 units)
    if (loanPurpose === "Cashout Refinance" && propertyType !== "5-8 unit") {
      // Max LTV for cashout is 75%
      if (LTV > 0.75) {
        setError("Max LTV on a Cashout Refi is 75%")
        setShowResults(true)
        return
      }
      // Cashout Refinance (<100,000 Loan Amount) adjustments
      if (loanAmount < 100000) {
        if (LTV <= 0.55) baseRate += 0.375
        else if (LTV <= 0.60) baseRate += 0.375
        else if (LTV <= 0.65) baseRate += 0.375
        else if (LTV <= 0.70) baseRate += 0.375
        else if (LTV <= 0.75) baseRate += 0.500
      } else {
        // Cashout Refinance (>=100,000 Loan Amount) adjustments
        if (LTV <= 0.55) baseRate += 0.250
        else if (LTV <= 0.60) baseRate += 0.250
        else if (LTV <= 0.65) baseRate += 0.250
        else if (LTV <= 0.70) baseRate += 0.250
        else if (LTV <= 0.75) baseRate += 0.375
      }
    }

    // Loan Amount adjustments based on C2 Rate Sheet
    if (loanAmount > 1500000) {
      // > $1,500,000
      if (LTV <= 0.55) baseRate += 0.500
      else if (LTV <= 0.60) baseRate += 0.500
      else if (LTV <= 0.65) baseRate += 0.500
      // n/a for higher LTVs (already blocked by max loan amount for STR)
    } else if (loanAmount >= 100000 && loanAmount <= 149999) {
      // $100,000 - $149,999
      if (LTV <= 0.55) baseRate += 0.250
      else if (LTV <= 0.60) baseRate += 0.250
      else if (LTV <= 0.65) baseRate += 0.250
      else if (LTV <= 0.70) baseRate += 0.250
      else if (LTV <= 0.75) baseRate += 0.250
      else if (LTV <= 0.80) baseRate += 0.250
    } else if (loanAmount < 100000) {
      // < $100,000
      if (LTV <= 0.55) baseRate += 0.750
      else if (LTV <= 0.60) baseRate += 0.750
      else if (LTV <= 0.65) baseRate += 0.750
      else if (LTV <= 0.70) baseRate += 0.750
      else if (LTV <= 0.75) baseRate += 0.750
      else if (LTV <= 0.80) baseRate += 0.750
    }

    // Prepayment Penalty adjustment
    // 3yr PPP: +0.375 across all LTVs
    if (pppVal === "3 year") baseRate += 0.375

    // Rate floor for 5-8 units: Minimum Note Rate 7.5%
    if (baseRate < 7.5 && propertyType === "5-8 unit") {
      baseRate = 7.5
    }

    // Fees based on C2 Rate Sheet (Lender Admin. Fees / Underwriting)
    let originationFee
    if (loanAmount * 0.0425 < 3750) {
      originationFee = loanAmount * 0.0425
    } else if (loanAmount * 0.025 > 3750) {
      originationFee = loanAmount * 0.025
    } else {
      originationFee = 3750
    }

    // Underwriting fees per property type from rate sheet
    let underwritingFee
    if (propertyType === "2-4 unit") {
      // Multifamily 2-4 Family Property: $2,495/property
      underwritingFee = 2495
    } else if (propertyType === "5-8 unit") {
      // Multifamily 5-8 Family Property: $3,995/property
      underwritingFee = 3995
    } else {
      // SFR: $1,995/property
      underwritingFee = 1995
    }

    const totalFee = originationFee + underwritingFee

    // Monthly P&I
    const monthlyInterestRate = baseRate / 100 / 12
    const totalPayments = 30 * 12
    const monthlyPI = loanAmount * (
      (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments)) /
      (Math.pow(1 + monthlyInterestRate, totalPayments) - 1)
    )

    setResults({
      baseRate,
      loanAmount,
      monthlyPI,
      originationFee,
      underwritingFee,
      totalFee
    })
    setShowResults(true)
  }

  // Auto-calculate when inputs change
  useEffect(() => {
    calculateRate()
  }, [formData])

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    // Prevent mobile scroll to top issue
    if (e.nativeEvent) {
      e.nativeEvent.preventDefault()
      e.nativeEvent.stopPropagation()
    }
    
    calculateRate()

    if (error) {
      return
    }

    if (!results) {
      toast({
        title: "Error",
        description: "Please fill in all required fields to generate a loan estimate.",
        variant: "destructive"
      })
      return
    }

    // Generate PDF (simplified version - in a real app you'd use a proper PDF library)
    const pdfContent = `
Loan Rate Estimate for ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

Property Information:
- Property State: ${formData.state}
- Property Type: ${formData.propertyType}
- DSCR: ${formData.dscr}

Loan Information:
- Loan Purpose: ${formData.loanType}
- Purchase Price: $${formData.purchasePrice}
- LTV: ${formData.ltv}
- Pre-payment Penalty: ${formData.ppp}

Borrower Information:
- FICO Score: ${formData.fico}

Results:
- Base Rate: ${results.baseRate.toFixed(3)}%
- Loan Amount: $${results.loanAmount.toFixed(2)}
- Monthly P&I: $${results.monthlyPI.toFixed(2)}
- Origination Fee: $${results.originationFee.toFixed(2)}
- Underwriting Fee: $${results.underwritingFee.toFixed(2)}
- Total Fees: $${results.totalFee.toFixed(2)}

Rate based on information above. Subject to change.
    `

    // Create and download PDF
    const blob = new Blob([pdfContent], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `Loan Rate for ${formData.name} by Key Real Estate Capital.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)

    toast({
      title: "Success",
      description: "Loan estimate has been generated and downloaded.",
    })

    // Reset form
    setFormData({
      state: "",
      propertyType: "",
      dscr: "",
      loanType: "",
      purchasePrice: "",
      ltv: "",
      ppp: "",
      fico: "",
      name: "",
      phone: "",
      email: ""
    })
    setShowResults(false)
  }

  const getPurchasePriceLabel = () => {
    return formData.loanType === "Purchase" ? "Purchase Price ($)" : "Appraised Value ($)"
  }

  // Options for dropdowns
  const stateOptions = [
    { value: "", label: "--Select--" },
    { value: "AL", label: "AL" },
    { value: "AK", label: "AK" },
    { value: "AZ", label: "AZ" },
    { value: "AR", label: "AR" },
    { value: "CA", label: "CA" },
    { value: "CO", label: "CO" },
    { value: "CT", label: "CT" },
    { value: "DE", label: "DE" },
    { value: "FL", label: "FL" },
    { value: "GA", label: "GA" },
    { value: "HI", label: "HI" },
    { value: "ID", label: "ID" },
    { value: "IL", label: "IL" },
    { value: "IN", label: "IN" },
    { value: "IA", label: "IA" },
    { value: "KS", label: "KS" },
    { value: "KY", label: "KY" },
    { value: "LA", label: "LA" },
    { value: "ME", label: "ME" },
    { value: "MD", label: "MD" },
    { value: "MA", label: "MA" },
    { value: "MI", label: "MI" },
    { value: "MN", label: "MN" },
    { value: "MS", label: "MS" },
    { value: "MO", label: "MO" },
    { value: "MT", label: "MT" },
    { value: "NE", label: "NE" },
    { value: "NV", label: "NV" },
    { value: "NH", label: "NH" },
    { value: "NJ", label: "NJ" },
    { value: "NM", label: "NM" },
    { value: "NY", label: "NY" },
    { value: "NC", label: "NC" },
    { value: "ND", label: "ND" },
    { value: "OH", label: "OH" },
    { value: "OK", label: "OK" },
    { value: "OR", label: "OR" },
    { value: "PA", label: "PA" },
    { value: "RI", label: "RI" },
    { value: "SC", label: "SC" },
    { value: "SD", label: "SD" },
    { value: "TN", label: "TN" },
    { value: "TX", label: "TX" },
    { value: "UT", label: "UT" },
    { value: "VT", label: "VT" },
    { value: "VA", label: "VA" },
    { value: "WA", label: "WA" },
    { value: "WV", label: "WV" },
    { value: "WI", label: "WI" },
    { value: "WY", label: "WY" }
  ]

  const propertyTypeOptions = [
    { value: "", label: "--Select--" },
    { value: "Single-family", label: "Single-family" },
    { value: "2-4 unit", label: "2-4 unit" },
    { value: "5-8 unit", label: "5-8 unit" }
  ]

  const dscrOptions = [
    { value: "", label: "--Select--" },
    { value: "1.5", label: "1.15+ (Strong Cashflow)" },
    { value: "1.1", label: "1.00 - 1.15 (Cashflowing)" },
    { value: "0.97", label: "0.95 - 0.99 (Breakeven)" },
    { value: "0.85", label: "0.75 - 0.94 (Below Breakeven)" }
  ]

  const loanTypeOptions = [
    { value: "", label: "--Select--" },
    { value: "Purchase", label: "Purchase" },
    { value: "Rate Term Refinance", label: "Rate/Term Refinance" },
    { value: "Cashout Refinance", label: "Cashout Refinance" }
  ]

  const ltvOptions = [
    { value: "", label: "--Select--" },
    { value: "80%", label: "80%" },
    { value: "75%", label: "75%" },
    { value: "70%", label: "70%" },
    { value: "65%", label: "65%" },
    { value: "60%", label: "60%" },
    { value: "55%", label: "55%" }
  ]

  const pppOptions = [
    { value: "", label: "--Select--" },
    { value: "5 year", label: "5 year" },
    { value: "3 year", label: "3 year" }
  ]

  return (
    <Card className="w-full max-w-4xl mx-auto border-0 shadow-lg h-full flex flex-col relative z-10 bg-white overflow-hidden">
      <CardHeader className="bg-perry text-white">
        <CardTitle className="flex items-center text-2xl font-light">
          <Calculator className="w-6 mr-3" />
          Loan Rate Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 flex-1 flex flex-col">
        <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
          {/* Property Information */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Property Information</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Rates vary per state and property type. Supported hard money options are available in the dropdowns below.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex flex-col">
                <Label htmlFor="state" className="text-gray-700 font-medium mb-2 block">
                  Property State
                </Label>
                <CustomSelect
                  value={formData.state}
                  onChange={(value) => handleInputChange("state", value)}
                  options={stateOptions}
                />
              </div>
              <div className="flex flex-col">
                <Label htmlFor="propertyType" className="text-gray-700 font-medium mb-2 block">
                  Property Type
                </Label>
                <CustomSelect
                  value={formData.propertyType}
                  onChange={(value) => handleInputChange("propertyType", value)}
                  options={propertyTypeOptions}
                />
              </div>
              <div className="flex flex-col">
                <Label htmlFor="dscr" className="text-gray-700 font-medium mb-2 block">
                  Debt Service Coverage Ratio (DSCR)
                </Label>
                <CustomSelect
                  value={formData.dscr}
                  onChange={(value) => handleInputChange("dscr", value)}
                  options={dscrOptions}
                />
              </div>
            </div>
          </div>

          {/* Loan Information */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Loan Information</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Used to help determine the rate. Provide more details about how the loan will be used and the amount of money that will be put down.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex flex-col">
                <Label htmlFor="loanType" className="text-gray-700 font-medium mb-2 block">
                  Loan Purpose
                </Label>
                <CustomSelect
                  value={formData.loanType}
                  onChange={(value) => handleInputChange("loanType", value)}
                  options={loanTypeOptions}
                />
              </div>
              <div className="flex flex-col">
                <Label htmlFor="purchasePrice" className="text-gray-700 font-medium mb-2 block">
                  {getPurchasePriceLabel()}
                </Label>
                <Input
                  id="purchasePrice"
                  type="number"
                  value={formData.purchasePrice}
                  onChange={(e) => handleInputChange("purchasePrice", e.target.value)}
                  className="h-12 px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-light-green focus:outline-none focus:ring-4 focus:ring-light-green/20 bg-white text-gray-900 text-base font-medium transition-all duration-200 hover:border-gray-300 shadow-sm hover:shadow-md"
                  step="0.01"
                />
              </div>
              <div className="flex flex-col">
                <Label htmlFor="ltv" className="text-gray-700 font-medium mb-2 block">
                  Desired Loan to Value
                </Label>
                <CustomSelect
                  value={formData.ltv}
                  onChange={(value) => handleInputChange("ltv", value)}
                  options={ltvOptions}
                />
              </div>
              <div className="flex flex-col">
                <Label htmlFor="ppp" className="text-gray-700 font-medium mb-2 block">
                  Pre-payment Penalty
                </Label>
                <CustomSelect
                  value={formData.ppp}
                  onChange={(value) => handleInputChange("ppp", value)}
                  options={pppOptions}
                />
              </div>
            </div>
          </div>

          {/* Borrower Information */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Borrower Information</h3>
            <p className="text-gray-600 mb-4 text-sm">Used to help determine the rate.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex flex-col">
                <Label htmlFor="fico" className="text-gray-700 font-medium mb-2 block">
                  Estimated Credit Score (FICO)
                </Label>
                <Input
                  id="fico"
                  type="number"
                  value={formData.fico}
                  onChange={(e) => handleInputChange("fico", e.target.value)}
                  className="h-12 px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-light-green focus:outline-none focus:ring-4 focus:ring-light-green/20 bg-white text-gray-900 text-base font-medium transition-all duration-200 hover:border-gray-300 shadow-sm hover:shadow-md"
                  min="300"
                  max="850"
                  placeholder="e.g. 780"
                />
              </div>
            </div>
          </div>

          {/* Results */}
          {showResults && (
            <div className="bg-light-green/10 p-6 space-y-4">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Rate Calculation Results</h3>
              {error ? (
                <div className="flex items-center space-x-2 text-red-600">
                  <AlertCircle className="w-5 h-5" />
                  <p className="font-medium">{error}</p>
                </div>
              ) : results ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <p className="text-2xl font-medium text-light-green">
                        Base Rate: {results.baseRate.toFixed(3)}%
                      </p>
                      <p className="text-xl font-medium text-light-green">
                        Loan Amount: ${results.loanAmount.toLocaleString()}
                      </p>
                      <p className="text-gray-700">
                        Monthly P&I: ${results.monthlyPI.toLocaleString()}
                      </p>
                    </div>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        Origination Fee: ${results.originationFee.toLocaleString()}
                      </p>
                      <p className="text-gray-700">
                        Underwriting Fee: ${results.underwritingFee.toLocaleString()}
                      </p>
                      <p className="text-lg font-medium text-gray-900">
                        Total Fees: ${results.totalFee.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    Rate based on information above. Subject to change.
                  </p>
                </div>
              ) : null}
            </div>
          )}

          {/* Generate Loan Estimate */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Generate Loan Estimate</h3>
            <p className="text-gray-600 mb-4 text-sm">
              To secure your rate, please provide the following information:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="name" className="text-gray-700 font-medium mb-2 block">
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="h-12 px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-light-green focus:outline-none focus:ring-4 focus:ring-light-green/20 bg-white text-gray-900 text-base font-medium transition-all duration-200 hover:border-gray-300 shadow-sm hover:shadow-md"
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-gray-700 font-medium mb-2 block">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="text"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="h-12 px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-light-green focus:outline-none focus:ring-4 focus:ring-light-green/20 bg-white text-gray-900 text-base font-medium transition-all duration-200 hover:border-gray-300 shadow-sm hover:shadow-md"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-gray-700 font-medium mb-2 block">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="h-12 px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-light-green focus:outline-none focus:ring-4 focus:ring-light-green/20 bg-white text-gray-900 text-base font-medium transition-all duration-200 hover:border-gray-300 shadow-sm hover:shadow-md"
                />
              </div>
            </div>
          </div>

          <div className="text-center pt-4">
            <Button 
              type="submit" 
              className="bg-light-green hover:bg-perry text-white font-medium px-8 py-4 h-14 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              disabled={!areAllInputsFilled() || !formData.name || !formData.phone || !formData.email}
              onClick={(e) => {
                // Additional mobile-specific prevention
                e.preventDefault()
                e.stopPropagation()
                
                // Prevent mobile scroll to top
                const isMobile = window.innerWidth < 768
                if (isMobile) {
                  // Store current scroll position
                  const currentScrollY = window.scrollY
                  
                  // Handle the form submission
                  handleSubmit(e)
                  
                  // Restore scroll position after a brief delay
                  setTimeout(() => {
                    window.scrollTo(0, currentScrollY)
                  }, 100)
                } else {
                  handleSubmit(e)
                }
              }}
            >
              Generate Loan Estimate
            </Button>
            <p className="text-sm text-gray-500 mt-2">
              *This calculator provides estimates only. Actual rates and terms may vary.
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
