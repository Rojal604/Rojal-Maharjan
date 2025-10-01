# 🚀 Free Hosting Guide - GitHub Pages

## Option 1: GitHub Pages (Recommended for Static Sites)

### Step 1: Create GitHub Repository
1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon → "New repository"
3. Name it: `cinematic-3d-portfolio` (or your preferred name)
4. Make it **Public** (required for free GitHub Pages)
5. Don't initialize with README (we already have files)
6. Click "Create repository"

### Step 2: Connect Local Repository to GitHub
```bash
# Add all files to git
git add .

# Create initial commit
git commit -m "Initial commit: Cinematic 3D Portfolio"

# Add GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/cinematic-3d-portfolio.git

# Push to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under "Source", select **"GitHub Actions"**
5. GitHub will automatically detect Next.js and create a workflow

### Step 4: Configure Next.js for Static Export
Create `next.config.mjs` (update existing):
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

export default nextConfig
```

### Step 5: Create GitHub Actions Workflow
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy Next.js site to Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "18"
          cache: "npm"
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Install dependencies
        run: npm ci
      - name: Build with Next.js
        run: npm run build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## Option 2: Vercel (Recommended for Next.js)

### Why Vercel is Better for Next.js:
- ✅ **Zero configuration** - just connect GitHub repo
- ✅ **Automatic deployments** on every push
- ✅ **Custom domains** for free
- ✅ **Preview deployments** for pull requests
- ✅ **Built-in analytics**
- ✅ **Serverless functions** support

### Vercel Deployment Steps:
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub account
3. Click "New Project"
4. Import your GitHub repository
5. Vercel auto-detects Next.js settings
6. Click "Deploy"
7. Your site will be live at `https://your-project.vercel.app`

### Custom Domain on Vercel:
1. In Vercel dashboard → Project Settings
2. Go to "Domains" tab
3. Add your custom domain
4. Update DNS records as instructed
5. SSL certificate auto-generated

## Option 3: Netlify

### Netlify Deployment:
1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click "New site from Git"
4. Choose your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
6. Click "Deploy site"

## Environment Variables for Production

### For Email Functionality:
Create these in your hosting platform:

**Vercel:**
1. Go to Project Settings → Environment Variables
2. Add:
   - `GMAIL_USER` = `rojalmaharjan052@gmail.com`
   - `GMAIL_APP_PASSWORD` = `your_app_password`

**Netlify:**
1. Site Settings → Environment Variables
2. Add the same variables

**GitHub Pages:**
- Note: GitHub Pages doesn't support server-side functions
- Consider using a service like Formspree for contact forms

## Recommended Setup

### For Your Portfolio:
1. **Use Vercel** (best for Next.js)
2. **Connect GitHub repository**
3. **Set up custom domain** (optional)
4. **Configure environment variables** for email
5. **Enable automatic deployments**

### Benefits:
- ✅ **Free hosting** with custom domain
- ✅ **Automatic SSL** certificates
- ✅ **Global CDN** for fast loading
- ✅ **Preview deployments** for testing
- ✅ **Analytics** and performance monitoring

## Post-Deployment Checklist

- [ ] Test contact form functionality
- [ ] Verify all animations work
- [ ] Check mobile responsiveness
- [ ] Test loading performance
- [ ] Set up custom domain (optional)
- [ ] Configure email environment variables
- [ ] Test email sending functionality

## Troubleshooting

### Common Issues:
1. **Build fails**: Check `next.config.mjs` settings
2. **Images not loading**: Ensure `unoptimized: true` in config
3. **Email not working**: Verify environment variables
4. **Styling issues**: Check CSS imports and Tailwind config

### Performance Tips:
- Optimize images before uploading
- Use Next.js Image component
- Enable compression
- Monitor Core Web Vitals
