"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { useRef } from "react"
import jsPDF from "jspdf"
import html2canvas from "html2canvas"

interface PDFGeneratorProps {
  contentRef: React.RefObject<HTMLDivElement>
  filename?: string
}

export default function PDFGenerator({ contentRef, filename = "loan-products.pdf" }: PDFGeneratorProps) {
  const generatePDF = async () => {
    if (!contentRef.current) return

    try {
      const canvas = await html2canvas(contentRef.current, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff'
      })

      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF('p', 'mm', 'a4')
      
      const imgWidth = 210
      const pageHeight = 295
      const imgHeight = (canvas.height * imgWidth) / canvas.width
      let heightLeft = imgHeight

      let position = 0

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
      heightLeft -= pageHeight

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight
        pdf.addPage()
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
        heightLeft -= pageHeight
      }

      pdf.save(filename)
    } catch (error) {
      console.error('Error generating PDF:', error)
    }
  }

  return (
    <Button
      onClick={generatePDF}
      data-pdf-button
      className="bg-light-green hover:bg-perry text-white font-light px-6 py-3"
    >
      <Download className="h-4 w-4 mr-2" />
      Download as PDF
    </Button>
  )
}
