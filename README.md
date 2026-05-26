# School Ticket Portal

A simple and beautiful School Ticket Portal built with vanilla HTML, CSS, and JS. It features a modern landing page, a navigation system, a clean input form with fields validation, and a submission confirmation modal.

## Project Structure
- `index.html`: Contains the structural frames for the landing/landing-load view and the form view.
- `style.css`: Contains CSS layout, responsive design variables, background blur elements, and input groups.
- `app.js`: Simple event listeners routing to the form, validating data, printing values, and trigger notifications.

---

## Deployment Guide

### Deploying to GitHub Pages

1. **Create GitHub Repository**:
   - Go to [GitHub](https://github.com/) and initialize a repository named `school-ticket-portal`.
2. **Push to GitHub**:
   In your workspace terminal run:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Simplified School Ticket Portal"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/school-ticket-portal.git
   git push -u origin main
   ```
3. **Configure Pages Settings**:
   - Navigate to the **Settings** tab of the GitHub repository.
   - Choose **Pages** from the sidebar.
   - Under Build and deployment, set Branch to `main`, keep folder as `/ (root)`, and click **Save**.

### Deploying to Vercel

1. **Import Repository**:
   - Connect your GitHub profile to [Vercel](https://vercel.com).
   - Import the newly created `school-ticket-portal` repository.
2. **Launch site**:
   - Keep default presets and hit **Deploy**. Vercel will launch your static website within seconds.
