# Netlify Forms — Email Notifications

1. Deploy the site to Netlify (connect your repo or drag & drop the project root).

2. Netlify will run `npm run build` and publish the `dist` folder (configured in `netlify.toml`).

3. Confirm the form is present on the deployed site. The contact form uses `name="contact"` and `data-netlify="true"` so Netlify will capture submissions.

4. Enable email notifications for the form (Netlify dashboard):
   - Open your site in the Netlify dashboard.
   - Go to "Forms", select the `contact` form.
   - Click "Notifications" (or "Add notification") and choose the Email option.
   - Enter `hariprasathns804@gmail.com` and save.

5. Test the form:
   - Submit a test message from the live site.
   - Check the Netlify "Forms" -> "Submissions" list for the entry and verify the notification email.

6. Alternatives if email option isn't suitable:
   - Use a webhook or Zapier to forward submissions to Gmail.
   - Add a Netlify Function that sends email via SendGrid / Nodemailer on form submission.

7. Add a Netlify Function (SendGrid) — setup steps
   - Add your SendGrid API key in the Netlify dashboard: Site → Settings → Build & deploy → Environment → Environment variables.
     - Key: `SENDGRID_API_KEY`
     - Value: (your SendGrid API key)
   - Optionally set `EMAIL_TO` to `hariprasathns804@gmail.com` (otherwise the function defaults to that address).
   - Deploy the site. The function is located at `/.netlify/functions/send-email` and the contact form will POST to it.

Notes:
- If you want to test the function locally, run `netlify dev` (you already installed `netlify-cli`) and set env vars in a `.env` file or in your shell.
- Example `.env` for local testing (DO NOT commit to git):

```
SENDGRID_API_KEY=SG.xxxxxxx
EMAIL_TO=hariprasathns804@gmail.com
```


Notes:
- The form includes a honeypot (`bot-field`) to reduce spam; keep it.
- If you need direct transactional email delivery, prefer a provider like SendGrid for reliability.
