import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"
import * as z from "zod"

// Form validation schema
const newsletterFormSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the form data
    const validatedData = newsletterFormSchema.parse(body)
    
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
          .welcome-box { background: #f0f9ff; border: 1px solid #0ea5e9; border-radius: 8px; padding: 20px; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0; font-size: 28px; font-weight: 300;">New Newsletter Subscription</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Key Real Estate Capital</p>
          </div>
          
          <div class="content">
            <div class="highlight">
              <strong>Subscription received on:</strong> ${new Date().toLocaleString()}
            </div>
            
            <div class="section">
              <div class="section-title">📧 Subscriber Information</div>
              <div class="field">
                <div class="field-label">Email Address:</div>
                <div class="field-value">${validatedData.email}</div>
              </div>
            </div>
            
            <div class="welcome-box">
              <h3 style="margin: 0 0 15px 0; color: #0ea5e9;">Welcome to Our Newsletter!</h3>
              <p style="margin: 0 0 15px 0; color: #374151;">
                Thank you for subscribing to the Key Real Estate Capital newsletter. You'll now receive:
              </p>
              <ul style="margin: 0; padding-left: 20px; color: #374151;">
                <li>Latest market insights and trends</li>
                <li>Investment strategies and tips</li>
                <li>Financing updates and opportunities</li>
                <li>Exclusive deals and promotions</li>
                <li>Industry news and analysis</li>
              </ul>
            </div>
            
            <div class="section">
              <div class="section-title">📊 What You'll Receive</div>
              <div class="field">
                <div class="field-label">Newsletter Frequency:</div>
                <div class="field-value">Weekly updates with market insights</div>
              </div>
              <div class="field">
                <div class="field-label">Content Types:</div>
                <div class="field-value">Market analysis, investment tips, financing news, exclusive deals</div>
              </div>
              <div class="field">
                <div class="field-label">Unsubscribe Option:</div>
                <div class="field-value">Available in every newsletter email</div>
              </div>
            </div>
            
            <div class="footer">
              <p>This subscription was received through the Key Real Estate Capital website.</p>
              <p>Please add this subscriber to your email marketing list.</p>
              <p><strong>NMLS ID: #2676974</strong></p>
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
      subject: `New Newsletter Subscription - ${validatedData.email}`,
      html: emailHtml,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: "Newsletter subscription successful" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error processing newsletter subscription:", error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Invalid email address", errors: error.errors },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { message: "Failed to subscribe to newsletter" },
      { status: 500 }
    )
  }
} 