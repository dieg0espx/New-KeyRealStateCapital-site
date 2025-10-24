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
const stateList = ["AL","GA","KS","ME","MO","MS","NE","SD","WI","WY"]

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
  processingFee: number
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
    if (loanAmount < MIN_LOAN_AMOUNT) {
      setError("Loan amount is too small, lender requires a minimum of $50k loan amount")
      setShowResults(true)
      return
    }
    if (FICO < 660) {
      setError("Credit is too low for a DSCR Loan")
      setShowResults(true)
      return
    }
    if ((LTV > 0.7) && FICO < 680) {
      setError("Max LTV for credit under 680 is 70%.")
      setShowResults(true)
      return
    }
    if (loanPurpose === "Cashout Refinance" && propertyType === "5-8 unit" && FICO < 700) {
      setError("FICO must be 700+ for 5-8 Unit Cashout Refinance.")
      setShowResults(true)
      return
    }

    // LTV-based adjustments
    switch (LTV) {
      case 0.8:
        if (FICO >= 780) baseRate += 0.125
        else if (FICO >= 760) baseRate += 0.25
        else if (FICO >= 740) baseRate += 0.375
        else if (FICO >= 720) baseRate += 0.5
        else if (FICO >= 700) baseRate += 0.75
        else if (FICO >= 680) baseRate += 0.875
        break
      case 0.75:
        if (FICO >= 780) baseRate += 0
        else if (FICO >= 760) baseRate += 0.125
        else if (FICO >= 740) baseRate += 0.25
        else if (FICO >= 720) baseRate += 0.5
        else if (FICO >= 700) baseRate += 0.625
        else if (FICO >= 680) baseRate += 0.75
        break
      case 0.7:
        if (FICO >= 780) baseRate += 0
        else if (FICO >= 740) baseRate += 0.125
        else if (FICO >= 720) baseRate += 0.25
        else if (FICO >= 700) baseRate += 0.5
        else if (FICO >= 680) baseRate += 0.625
        else if (FICO >= 660) baseRate += 0.75
        break
      case 0.65:
        if (FICO >= 760) baseRate += 0
        else if (FICO >= 720) baseRate += 0.125
        else if (FICO >= 700) baseRate += 0.25
        else if (FICO >= 680) baseRate += 0.5
        else if (FICO >= 660) baseRate += 0.625
        break
      case 0.6:
        if (FICO >= 740) baseRate += 0
        else if (FICO >= 700) baseRate += 0.125
        else if (FICO >= 680) baseRate += 0.25
        else if (FICO >= 660) baseRate += 0.5
        break
      case 0.55:
        if (FICO >= 700) baseRate += 0
        else if (FICO >= 680) baseRate += 0.125
        else if (FICO >= 660) baseRate += 0.5
        break
    }

    // State-based logic
    if (stateList.includes(st) && FICO < 680) {
      baseRate += 0.375
    }

    // Property
    if (propertyType === "2-4 unit") {
      if (LTV === 0.8) baseRate += 0.5
      else if (LTV === 0.75) baseRate += 0.375
      else if (LTV < 0.75) baseRate += 0.25
    }
    if (propertyType === "5-8 unit") {
      if (LTV <= 0.75) baseRate += 1
      else if (LTV >= 0.8) {
        setError("5-8 Unit properties have a max LTV of 75%")
        setShowResults(true)
        return
      }
    }

    // DSCR
    if (dscrVal < 1.0 && LTV > 0.65) {
      setError("Max LTV for non-cashflowing properties is 65%.")
      setShowResults(true)
      return
    } else if (dscrVal >= 1.0 && dscrVal <= 1.15) {
      if (LTV > 0.6 && LTV <= 0.75) baseRate += 0.125
      else if (LTV > 0.75) baseRate += 0.25
    }

    // Loan Purpose
    if ((loanPurpose === "Rate Term Refinance" || loanPurpose === "Purchase") && LTV > 0.75) {
      baseRate += 0.375
    }
    if (loanPurpose === "Cashout Refinance") {
      if (LTV > 0.7 && LTV <= 0.75) baseRate += 0.5
      else if (LTV <= 0.7) baseRate += 0.25
      else if (LTV > 0.75) {
        setError("Max LTV on a Cashout Refi is 75%")
        setShowResults(true)
        return
      }
    }

    // Loan amount adjustments
    if (loanAmount < 100000) baseRate += 0.25
    else if (loanAmount > 1500000) baseRate += 0.5

    // Prepay
    if (pppVal === "3 year") baseRate += 0.375

    // Rate floor for 5-8 units
    if (baseRate < 8.375 && propertyType === "5-8 unit") {
      baseRate = 8.375
    }

    // Fees
    let originationFee
    if (loanAmount * 0.0425 < 3750) {
      originationFee = loanAmount * 0.0425
    } else if (loanAmount * 0.025 > 3750) {
      originationFee = loanAmount * 0.025
    } else {
      originationFee = 3750
    }

    let processingFee
    if (propertyType === "2-4 unit") processingFee = 1295
    else if (propertyType === "5-8 unit") processingFee = 3995
    else processingFee = 995

    const underwritingFee = 995
    const totalFee = originationFee + processingFee + underwritingFee

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
      processingFee,
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
- Processing Fee: $${results.processingFee.toFixed(2)}
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
    { value: "1.5", label: "Cashflowing" },
    { value: "1", label: "Barely Cashflowing" },
    { value: ".8", label: "Not Cashflowing" }
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
    <Card className="w-full max-w-4xl mx-auto border-0 shadow-lg h-full flex flex-col relative z-10 bg-white">
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                <Label htmlFor="dscr" className="text-gray-700 font-medium mb-2 block whitespace-nowrap">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                        Processing Fee: ${results.processingFee.toLocaleString()}
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
