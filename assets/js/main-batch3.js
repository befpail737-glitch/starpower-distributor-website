export default {
  async fetch(request, env) {
    // Only allow POST requests
    if (request.method !== 'POST') {
      return new Response('Method Not Allowed', { status: 405 });
    }

    // Set up CORS headers to allow requests from your website domain
    const corsHeaders = {
      'Access-Control-Allow-Origin': 'https://www.yourcompanyname.com', // Replace with your actual domain
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    // Handle CORS preflight requests
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    try {
      const formData = await request.formData();
      const body = Object.fromEntries(formData);

      // --- EMAIL SENDING LOGIC ---
      // This is where you would integrate with an email service like Mailgun, SendGrid, or Resend.
      // You would store API keys as secret environment variables in your Cloudflare Worker settings.
      //
      // Example using a generic fetch to an email API endpoint:
      /*
      const emailRequest = new Request('https://api.mailgun.net/v3/YOUR_DOMAIN_NAME/messages', {
        method: 'POST',
        headers: {
          'Authorization': 'Basic ' + btoa('api:' + env.MAILGUN_API_KEY), // MAILGUN_API_KEY is a secret variable
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          from: 'YourCompanyName <noreply@yourcompanyname.com>',
          to: 'sales@yourcompanyname.com',
          subject: `New Inquiry from ${body.name} - ${body.inquiry_type}`,
          text: `Name: ${body.name}\nEmail: ${body.email}\nCompany: ${body.company}\nPart Number: ${body.part_number}\n\nMessage:\n${body.message}`
        })
      });

      const emailResult = await fetch(emailRequest);
      if (!emailResult.ok) {
        throw new Error('Failed to send email.');
      }
      */
      // For this example, we will just return a success response without sending an email.
      console.log('Form data received:', body);


      // Return a success response
      const responseBody = JSON.stringify({ success: true, message: 'Inquiry submitted successfully!' });
      return new Response(responseBody, {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      });

    } catch (error) {
      console.error('Form submission error:', error);
      const errorBody = JSON.stringify({ success: false, message: 'An error occurred. Please try again.' });
      return new Response(errorBody, {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      });
    }
  },
};