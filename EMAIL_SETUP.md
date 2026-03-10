# Email Setup Guide

## Overview
Email sending is powered by [Resend](https://resend.com), an API-based email service. All routes use the shared `lib/resend.ts` utility with automatic fallback if the configured domain is not yet verified.

## Setup Instructions

### 1. Resend Configuration
1. Sign up at https://resend.com
2. Verify your sending domain (add DNS records: SPF, DKIM, DMARC)
3. Create an API key at https://resend.com/api-keys

### 2. Environment Variables
Add to your `.env.local`:

```env
RESEND_API_KEY=re_xxxxxxxxxxxx
EMAIL_FROM=Key Real Estate Capital <noreply@yourdomain.com>
EMAIL_TO=josh@comcreate.org,diego@comcreate.org,seth@boostwebresults.com,loans@keyrealestatecapital.com
```

- `RESEND_API_KEY` - Required. Your Resend API key.
- `EMAIL_FROM` - Optional. Sender address (must match a verified domain). Falls back to `noreply@comcreate.org`.
- `EMAIL_TO` - Optional. Comma-separated recipient list.

### 3. Testing
Visit `/api/test-email` in your browser to send a test email and verify configuration.

### 4. Email Template Features
The email templates include:
- **Professional HTML design** matching the site's aesthetic
- **Contact information** from the form
- **Loan details** and project information
- **Company branding** with Key Real Estate Capital styling
- **Responsive design** that works on all devices
- **Company contact information** in the footer

### 5. Form Features
The forms include:
- **Form validation** using Zod schema
- **Real-time error messages**
- **Loading states** during submission
- **Success/error feedback**
- **Form reset** after successful submission

### 6. Domain Not Verified Fallback
If `EMAIL_FROM` points to an unverified domain, the `sendEmail` utility automatically retries using the verified fallback address (`noreply@comcreate.org`). This prevents emails from failing while you set up a new domain.

### 7. Customization
You can customize the email templates by editing:
- `lib/resend.ts` - Shared email utility (from address, retry logic)
- `app/api/contact/route.ts` - Contact form email template
- `app/api/newsletter/route.ts` - Newsletter subscription email template
- `app/api/apply/route.ts` - Loan application email template

## Troubleshooting

### Common Issues:
1. **"RESEND_API_KEY is not configured"** - Add your API key to `.env.local`
2. **"domain is not verified"** - Verify your domain in the Resend dashboard, or the fallback will be used
3. **"Failed to send email"** - Check your API key is valid and not expired

## API Routes
- `POST /api/contact` - Contact form (deprecated, replaced by Typeform)
- `POST /api/newsletter` - Newsletter subscription
- `POST /api/apply` - Loan application
- `GET /api/test-email` - Test email configuration
