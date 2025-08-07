import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, loanType, loanAmount, timeline, message } = body;

    // Create transporter
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email template
    const emailTemplate = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #374151;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f9fafb;
          }
          .container {
            background-color: #ffffff;
            border-radius: 8px;
            padding: 40px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          }
          .header {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 2px solid #0ea5e9;
          }
          .logo {
            font-size: 28px;
            font-weight: 300;
            color: #0ea5e9;
            margin-bottom: 10px;
          }
          .subtitle {
            color: #6b7280;
            font-size: 16px;
            font-weight: 300;
          }
          .section {
            margin-bottom: 25px;
          }
          .section-title {
            font-size: 18px;
            font-weight: 500;
            color: #111827;
            margin-bottom: 10px;
            border-left: 3px solid #0ea5e9;
            padding-left: 12px;
          }
          .field {
            margin-bottom: 15px;
          }
          .field-label {
            font-weight: 500;
            color: #374151;
            margin-bottom: 5px;
            display: block;
          }
          .field-value {
            color: #6b7280;
            padding: 8px 12px;
            background-color: #f9fafb;
            border-radius: 4px;
            border-left: 3px solid #0ea5e9;
          }
          .message-box {
            background-color: #f0f9ff;
            border: 1px solid #0ea5e9;
            border-radius: 6px;
            padding: 15px;
            margin-top: 10px;
          }
          .footer {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e5e7eb;
            text-align: center;
            color: #6b7280;
            font-size: 14px;
          }
          .contact-info {
            background-color: #f0f9ff;
            border-radius: 6px;
            padding: 15px;
            margin-top: 20px;
          }
          .contact-item {
            display: flex;
            align-items: center;
            margin-bottom: 8px;
          }
          .contact-icon {
            width: 16px;
            height: 16px;
            margin-right: 8px;
            color: #0ea5e9;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">Key Real Estate Capital</div>
            <div class="subtitle">New Contact Form Submission</div>
          </div>

          <div class="section">
            <div class="section-title">Contact Information</div>
            <div class="field">
              <span class="field-label">Name:</span>
              <div class="field-value">${firstName} ${lastName}</div>
            </div>
            <div class="field">
              <span class="field-label">Email:</span>
              <div class="field-value">${email}</div>
            </div>
            <div class="field">
              <span class="field-label">Phone:</span>
              <div class="field-value">${phone}</div>
            </div>
          </div>

          <div class="section">
            <div class="section-title">Loan Details</div>
            <div class="field">
              <span class="field-label">Loan Type:</span>
              <div class="field-value">${loanType}</div>
            </div>
            <div class="field">
              <span class="field-label">Loan Amount:</span>
              <div class="field-value">${loanAmount}</div>
            </div>
            <div class="field">
              <span class="field-label">Timeline:</span>
              <div class="field-value">${timeline}</div>
            </div>
          </div>

          <div class="section">
            <div class="section-title">Message</div>
            <div class="message-box">
              ${message}
            </div>
          </div>

          <div class="contact-info">
            <div style="font-weight: 500; color: #111827; margin-bottom: 10px;">Company Contact Information:</div>
            <div class="contact-item">
              <span class="contact-icon">📍</span>
              <span>401 W A St Ste 200, San Diego, CA 92101</span>
            </div>
            <div class="contact-item">
              <span class="contact-icon">📞</span>
              <span>(619) 567-1385</span>
            </div>
            <div class="contact-item">
              <span class="contact-icon">✉️</span>
              <span>loans@keyrealestatecapital.com</span>
            </div>
            <div class="contact-item">
              <span class="contact-icon">🕒</span>
              <span>24/7 Service | Monday - Sunday</span>
            </div>
          </div>

          <div class="footer">
            <p>This email was sent from the Key Real Estate Capital contact form.</p>
            <p>NMLS ID: #2676974</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'loans@keyrealestatecapital.com',
      subject: `New Contact Form Submission - ${firstName} ${lastName}`,
      html: emailTemplate,
      replyTo: email,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 