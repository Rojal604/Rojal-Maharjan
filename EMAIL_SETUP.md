# Email Setup Instructions

## Gmail Configuration

To enable the contact form to send emails to your Gmail account (rojalmaharjan052@gmail.com), you need to set up Gmail App Passwords.

### Step 1: Enable 2-Factor Authentication
1. Go to your Google Account settings
2. Navigate to Security
3. Enable 2-Step Verification if not already enabled

### Step 2: Generate App Password
1. Go to Google Account settings
2. Navigate to Security → 2-Step Verification
3. Scroll down to "App passwords"
4. Click "App passwords"
5. Select "Mail" and "Other (custom name)"
6. Enter "Portfolio Contact Form" as the name
7. Copy the generated 16-character password

### Step 3: Environment Variables
Create a `.env.local` file in your project root with:

```env
GMAIL_USER=rojalmaharjan052@gmail.com
GMAIL_APP_PASSWORD=your_16_character_app_password_here
```

### Step 4: Test the Setup
1. Start your development server: `pnpm dev`
2. Navigate to the contact form
3. Fill out and submit the form
4. Check your Gmail inbox for the message

## Email Features

- **Professional HTML formatting** with your brand colors
- **Automatic reply-to** set to the sender's email
- **Subject line** includes "Portfolio Contact:" prefix
- **Form validation** ensures all fields are filled
- **Success/Error feedback** for better user experience

## Troubleshooting

If emails aren't being sent:
1. Verify your App Password is correct (16 characters, no spaces)
2. Check that 2-Factor Authentication is enabled
3. Ensure the `.env.local` file is in the project root
4. Check the browser console for any error messages
5. Verify your Gmail account allows "Less secure app access" if needed

## Security Notes

- Never commit your `.env.local` file to version control
- The App Password is specific to this application
- You can revoke the App Password anytime from Google Account settings
