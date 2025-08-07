import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"
import * as z from "zod"

// Form validation schema
const applicationFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(1, "Phone number is required"),
  loanType: z.string().min(1, "Loan type is required"),
  loanAmount: z.string().min(1, "Loan amount is required"),
  timeline: z.string().min(1, "Timeline is required"),
  experience: z.string().optional(),
  propertyAddress: z.string().optional(),
  propertyValue: z.string().optional(),
  purchasePrice: z.string().optional(),
  downPayment: z.string().optional(),
  additionalInfo: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, "You must consent to be contacted"),
  creditCheck: z.boolean().refine((val) => val === true, "You must authorize credit check"),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the form data
    const validatedData = applicationFormSchema.parse(body)
    
    // Configure email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Create HTML email content
    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #0ea5e9, #0284c7); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; }
          .section { margin-bottom: 25px; }
          .section-title { font-size: 18px; font-weight: bold; color: #0ea5e9; margin-bottom: 10px; }
          .field { margin-bottom: 15px; }
          .field-label { font-weight: bold; color: #374151; }
          .field-value { color: #6b7280; margin-top: 5px; }
          .highlight { background: #dbeafe; padding: 15px; border-radius: 8px; margin: 20px 0; }
          .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0; font-size: 28px; font-weight: 300;">New Loan Application</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Key Real Estate Capital</p>
          </div>
          
          <div class="content">
            <div class="highlight">
              <strong>Application submitted on:</strong> ${new Date().toLocaleString()}
            </div>
            
            <div class="section">
              <div class="section-title">👤 Personal Information</div>
              <div class="field">
                <div class="field-label">Name:</div>
                <div class="field-value">${validatedData.firstName} ${validatedData.lastName}</div>
              </div>
              <div class="field">
                <div class="field-label">Email:</div>
                <div class="field-value">${validatedData.email}</div>
              </div>
              <div class="field">
                <div class="field-label">Phone:</div>
                <div class="field-value">${validatedData.phone}</div>
              </div>
            </div>
            
            <div class="section">
              <div class="section-title">💰 Loan Information</div>
              <div class="field">
                <div class="field-label">Loan Type:</div>
                <div class="field-value">${validatedData.loanType}</div>
              </div>
              <div class="field">
                <div class="field-label">Requested Amount:</div>
                <div class="field-value">${validatedData.loanAmount}</div>
              </div>
              <div class="field">
                <div class="field-label">Funding Timeline:</div>
                <div class="field-value">${validatedData.timeline}</div>
              </div>
              ${validatedData.experience ? `
              <div class="field">
                <div class="field-label">Real Estate Experience:</div>
                <div class="field-value">${validatedData.experience}</div>
              </div>
              ` : ''}
            </div>
            
            ${validatedData.propertyAddress || validatedData.propertyValue || validatedData.purchasePrice || validatedData.downPayment ? `
            <div class="section">
              <div class="section-title">🏠 Property Information</div>
              ${validatedData.propertyAddress ? `
              <div class="field">
                <div class="field-label">Property Address:</div>
                <div class="field-value">${validatedData.propertyAddress}</div>
              </div>
              ` : ''}
              ${validatedData.propertyValue ? `
              <div class="field">
                <div class="field-label">Estimated Property Value:</div>
                <div class="field-value">${validatedData.propertyValue}</div>
              </div>
              ` : ''}
              ${validatedData.purchasePrice ? `
              <div class="field">
                <div class="field-label">Purchase Price:</div>
                <div class="field-value">${validatedData.purchasePrice}</div>
              </div>
              ` : ''}
              ${validatedData.downPayment ? `
              <div class="field">
                <div class="field-label">Down Payment Amount:</div>
                <div class="field-value">${validatedData.downPayment}</div>
              </div>
              ` : ''}
            </div>
            ` : ''}
            
            ${validatedData.additionalInfo ? `
            <div class="section">
              <div class="section-title">📝 Additional Information</div>
              <div class="field-value">${validatedData.additionalInfo}</div>
            </div>
            ` : ''}
            
            <div class="section">
              <div class="section-title">✅ Consents</div>
              <div class="field">
                <div class="field-label">Contact Consent:</div>
                <div class="field-value">✅ Authorized</div>
              </div>
              <div class="field">
                <div class="field-label">Credit Check Authorization:</div>
                <div class="field-value">✅ Authorized</div>
              </div>
            </div>
            
            <div class="footer">
              <p>This application was submitted through the Key Real Estate Capital website.</p>
              <p>Please contact the applicant within 24 hours to discuss their loan requirements.</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || "diego@comcreate.org",
      subject: `New Loan Application - ${validatedData.firstName} ${validatedData.lastName}`,
      html: emailHtml,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: "Application submitted successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error processing application:", error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Invalid form data", errors: error.errors },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { message: "Failed to submit application" },
      { status: 500 }
    )
  }
} 