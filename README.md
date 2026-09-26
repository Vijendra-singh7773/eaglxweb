# Eaglxweb Consultancy Services — React + 3D website

Responsive agency website built with React, TypeScript, Vite, Tailwind CSS, Framer Motion and React Three Fiber. Includes the supplied eagle logo at `public/assets/eaglx-eagle.png`, black/white branding, responsive navigation, services, portfolio, about section and an email enquiry form.

## Run locally
1. Install Node.js LTS.
2. Extract the ZIP and open the project folder in VS Code.
3. Run `npm install`
4. Run `npm run dev`

## Configure contact email before publishing
The contact form uses FormSubmit. In `src/App.tsx`, replace `your-email@example.com` in:
- form action: `https://formsubmit.co/your-email@example.com`
- displayed contact email and mailto link

with the inbox where you want enquiries delivered. FormSubmit may send a one-time activation/confirmation email to that inbox; confirm it, then test the form. No email password or SMTP secret is placed in frontend code.

Also add your real WhatsApp number and update the sample project cards before launch.
For production, run `npm run build` and deploy the `dist` folder to Vercel, Netlify, or another static host.
