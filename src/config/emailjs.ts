// EmailJS Configuration
// Get these values from: https://dashboard.emailjs.com/admin
export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID", 
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY"
};

// Instructions for setting up EmailJS:
/*
1. Go to https://www.emailjs.com/ and create an account
2. Create a new email service (Gmail, Outlook, etc.)
3. Create an email template with variables: {{from_name}}, {{from_email}}, {{message}}, {{to_name}}
4. Copy your Service ID, Template ID, and Public Key
5. Create a .env file in your project root with:
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
6. Restart your development server
*/
