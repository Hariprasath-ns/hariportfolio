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

Notes:
- The form includes a honeypot (`bot-field`) to reduce spam; keep it.
- If you need direct transactional email delivery, prefer a provider like SendGrid for reliability.
