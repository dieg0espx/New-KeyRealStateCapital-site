import { NextResponse } from 'next/server'
import { sendEmail } from '@/lib/resend'

export async function GET() {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: 'RESEND_API_KEY is not configured' },
      { status: 500 }
    )
  }

  const to = process.env.EMAIL_TO || 'josh@comcreate.org'

  try {
    const data = await sendEmail({
      to,
      subject: 'Test Email - Key Real Estate Capital',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #0ea5e9;">Test Email</h1>
          <p>This is a test email from Key Real Estate Capital.</p>
          <p>If you received this, your Resend email configuration is working correctly.</p>
          <p style="color: #6b7280; font-size: 14px;">Sent at: ${new Date().toISOString()}</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Test email failed:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to send test email' },
      { status: 500 }
    )
  }
}
