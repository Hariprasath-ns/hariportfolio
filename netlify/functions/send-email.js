// Netlify Function to send an email via SendGrid
// Requires environment variable SENDGRID_API_KEY and optional EMAIL_TO

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  let payload;
  try {
    payload = JSON.parse(event.body);
  } catch (err) {
    return { statusCode: 400, body: 'Invalid JSON' };
  }

  const { name, email, message, subject } = payload;
  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
  const EMAIL_TO = process.env.EMAIL_TO || payload.to || 'hariprasathns804@gmail.com';

  if (!SENDGRID_API_KEY) {
    return { statusCode: 500, body: 'SendGrid API key not configured (SENDGRID_API_KEY)' };
  }

  const mail = {
    personalizations: [
      {
        to: [{ email: EMAIL_TO }],
        subject: subject || 'New contact form submission',
      },
    ],
    from: { email: 'no-reply@portfolio.local', name: 'Portfolio Contact' },
    reply_to: { email: email },
    content: [
      {
        type: 'text/plain',
        value: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      },
    ],
  };

  try {
    const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mail),
    });

    if (!res.ok) {
      const text = await res.text();
      return { statusCode: res.status, body: text };
    }

    return { statusCode: 200, body: 'Email sent' };
  } catch (err) {
    return { statusCode: 500, body: String(err) };
  }
};
