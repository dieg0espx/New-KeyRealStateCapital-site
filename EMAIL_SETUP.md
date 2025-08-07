# Email Setup Guide

## Overview
The contact form now sends emails using Nodemailer with a beautiful HTML template that matches the site's design.

## Setup Instructions

### 1. Gmail Configuration
1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" and your device
   - Copy the generated 16-character password

### 2. Environment Variables
Update your `.env.local` file with your Gmail credentials:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-character-app-password
```

### 3. Email Template Features
The email template includes:
- **Professional HTML design** matching the site's aesthetic
- **Contact information** from the form
- **Loan details** and project information
- **Company branding** with Key Real Estate Capital styling
- **Responsive design** that works on all devices
- **Company contact information** in the footer

### 4. Form Features
The contact form now includes:
- **Form validation** using Zod schema
- **Real-time error messages**
- **Loading states** during submission
- **Success/error feedback**
- **Form reset** after successful submission

### 5. Security Notes
- Uses environment variables for sensitive data
- Includes proper error handling
- Validates all form inputs
- Sanitizes user input

### 6. Testing
To test the email functionality:
1. Fill out the contact form
2. Submit the form
3. Check your email at `loans@keyrealestatecapital.com`
4. Verify the email template looks correct

### 7. Customization
You can customize the email template by editing:
- `app/api/contact/route.ts` - Email template HTML
- `app/contact/page.tsx` - Form validation and styling

## Troubleshooting

### Common Issues:
1. **"Failed to send email"** - Check your Gmail credentials
2. **"Authentication failed"** - Ensure you're using an App Password, not your regular password
3. **"Connection timeout"** - Check your internet connection

### Gmail Security:
- Make sure 2FA is enabled
- Use App Passwords, not regular passwords
- Check Gmail's "Less secure app access" settings

## Email Template Preview
The email will include:
- Professional header with company branding
- Contact information section
- Loan details section
- Message content
- Company contact information
- NMLS ID in footer

The template uses the same color scheme and styling as your website for brand consistency. 