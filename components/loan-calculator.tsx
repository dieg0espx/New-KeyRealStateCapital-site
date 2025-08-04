"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Calculator, DollarSign, Calendar, Percent } from "lucide-react"
import Link from "next/link"

export function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(500000)
  const [interestRate, setInterestRate] = useState(8.5)
  const [loanTerm, setLoanTerm] = useState(12)
  const [loanType, setLoanType] = useState("fix-flip")

  const calculatePayment = () => {
    const principal = loanAmount
    const monthlyRate = interestRate / 100 / 12
    const numPayments = loanTerm

    if (loanType === "fix-flip" || loanType === "bridge") {
      // Interest-only payment
      return (principal * monthlyRate).toFixed(2)
    } else {
      // Amortizing payment
      const payment =
        (principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
        (Math.pow(1 + monthlyRate, numPayments) - 1)
      return payment.toFixed(2)
    }
  }

  const totalInterest = () => {
    const monthlyPayment = Number.parseFloat(calculatePayment())
    if (loanType === "fix-flip" || loanType === "bridge") {
      return (monthlyPayment * loanTerm).toFixed(2)
    } else {
      return (monthlyPayment * loanTerm - loanAmount).toFixed(2)
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto border-0 shadow-xl">
      <CardHeader className="bg-sky-600 text-white">
        <CardTitle className="flex items-center text-2xl font-light">
          <Calculator className="h-6 w-6 mr-3" />
          Loan Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="p-8">
        <div className="space-y-6">
          {/* Loan Type */}
          <div>
            <Label htmlFor="loanType" className="text-gray-700 font-medium mb-2 block">
              Loan Type
            </Label>
            <Select value={loanType} onValueChange={setLoanType}>
              <SelectTrigger className="border-gray-200 focus:border-sky-600">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fix-flip">Fix-and-Flip</SelectItem>
                <SelectItem value="rental">Single Property Rental</SelectItem>
                <SelectItem value="construction">New Construction</SelectItem>
                <SelectItem value="portfolio">Rental Portfolio</SelectItem>
                <SelectItem value="bridge">Stabilized Bridge</SelectItem>
                <SelectItem value="commercial">Multi-Family / Commercial</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Loan Amount */}
          <div>
            <Label className="text-gray-700 font-medium mb-2 block">Loan Amount: ${loanAmount.toLocaleString()}</Label>
            <Slider
              value={[loanAmount]}
              onValueChange={(value) => setLoanAmount(value[0])}
              max={2000000}
              min={100000}
              step={25000}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>$100K</span>
              <span>$2M</span>
            </div>
          </div>

          {/* Interest Rate */}
          <div>
            <Label className="text-gray-700 font-medium mb-2 block">Interest Rate: {interestRate}%</Label>
            <Slider
              value={[interestRate]}
              onValueChange={(value) => setInterestRate(value[0])}
              max={15}
              min={6}
              step={0.25}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>6%</span>
              <span>15%</span>
            </div>
          </div>

          {/* Loan Term */}
          <div>
            <Label htmlFor="loanTerm" className="text-gray-700 font-medium mb-2 block">
              Loan Term (Months)
            </Label>
            <Input
              id="loanTerm"
              type="number"
              value={loanTerm}
              onChange={(e) => setLoanTerm(Number.parseInt(e.target.value) || 12)}
              className="border-gray-200 focus:border-sky-600"
              min="6"
              max="360"
            />
          </div>

          {/* Results */}
          <div className="bg-gray-50 p-6 space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Loan Summary</h3>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <DollarSign className="h-5 w-5 text-sky-600 mr-1" />
                  <span className="text-sm text-gray-600">Monthly Payment</span>
                </div>
                <div className="text-2xl font-semibold text-gray-900">
                  ${Number.parseFloat(calculatePayment()).toLocaleString()}
                </div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Calendar className="h-5 w-5 text-sky-600 mr-1" />
                  <span className="text-sm text-gray-600">Total Interest</span>
                </div>
                <div className="text-2xl font-semibold text-gray-900">
                  ${Number.parseFloat(totalInterest()).toLocaleString()}
                </div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Percent className="h-5 w-5 text-sky-600 mr-1" />
                  <span className="text-sm text-gray-600">Payment Type</span>
                </div>
                <div className="text-lg font-semibold text-gray-900">
                  {loanType === "fix-flip" || loanType === "bridge" ? "Interest Only" : "Principal & Interest"}
                </div>
              </div>
            </div>
          </div>

          <div className="text-center pt-4">
            <Link href="/contact">
              <Button className="bg-sky-600 hover:bg-sky-700 text-white font-light px-8 py-3">Get Pre-Qualified</Button>
            </Link>
            <p className="text-sm text-gray-500 mt-2">
              *This calculator provides estimates only. Actual rates and terms may vary.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
