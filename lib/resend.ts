import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const VERIFIED_FALLBACK_FROM = 'Key Real Estate Capital <noreply@comcreate.org>'

export type EmailOptions = {
  to: string | string[]
  subject: string
  html: string
  text?: string
  replyTo?: string
}

export async function sendEmail(options: EmailOptions) {
  const from = process.env.EMAIL_FROM || VERIFIED_FALLBACK_FROM

  const payload = {
    from,
    to: Array.isArray(options.to) ? options.to : [options.to],
    subject: options.subject,
    html: options.html,
    text: options.text,
    reply_to: options.replyTo,
  }

  const { data, error } = await resend.emails.send(payload)

  if (error) {
    // If domain is not verified, retry with the verified fallback address
    if (error.message?.includes('domain is not verified')) {
      console.warn(`Domain not verified for "${from}", retrying with fallback: ${VERIFIED_FALLBACK_FROM}`)
      const { data: retryData, error: retryError } = await resend.emails.send({
        ...payload,
        from: VERIFIED_FALLBACK_FROM,
      })

      if (retryError) {
        throw new Error(`Failed to send email (fallback): ${retryError.message}`)
      }

      return retryData
    }

    throw new Error(`Failed to send email: ${error.message}`)
  }

  return data
}
