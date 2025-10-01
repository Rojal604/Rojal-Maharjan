# 🚀 Quick Start - Deploy Your Portfolio

## Option 1: Vercel (Recommended - 2 minutes)

### Why Vercel?
- ✅ **Best for Next.js** - zero configuration
- ✅ **Free custom domain** 
- ✅ **Automatic deployments**
- ✅ **Serverless functions** (for your contact form)

### Steps:
1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project"
   - Import your repository
   - Click "Deploy" (takes 2 minutes!)

3. **Set up email (optional):**
   - Go to Project Settings → Environment Variables
   - Add `GMAIL_USER` and `GMAIL_APP_PASSWORD`

**Result:** Your site will be live at `https://your-project.vercel.app`

---

## Option 2: GitHub Pages (Free but limited)

### Steps:
1. **Create GitHub repository:**
   - Go to GitHub.com → New repository
   - Name: `cinematic-3d-portfolio`
   - Make it **Public**

2. **Push your code:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/cinematic-3d-portfolio.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Repository → Settings → Pages
   - Source: "GitHub Actions"
   - GitHub will auto-detect Next.js

**Result:** Your site will be live at `https://YOUR_USERNAME.github.io/cinematic-3d-portfolio`

---

## Option 3: Netlify (Alternative)

### Steps:
1. **Push to GitHub** (same as above)
2. **Deploy on Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub
   - Click "New site from Git"
   - Choose your repository
   - Build settings:
     - Build command: `pnpm build`
     - Publish directory: `out`
   - Click "Deploy site"

---

## 🎯 Recommended: Use Vercel

**Why Vercel is perfect for your portfolio:**
- ✅ **Zero setup** - just connect GitHub
- ✅ **Contact form works** (serverless functions)
- ✅ **Custom domain** for free
- ✅ **Automatic SSL** certificates
- ✅ **Global CDN** for fast loading
- ✅ **Preview deployments** for testing

## 📧 Email Setup (Optional)

If you want the contact form to work:

1. **Get Gmail App Password:**
   - Google Account → Security → 2-Step Verification
   - App passwords → Generate password for "Mail"

2. **Add to Vercel:**
   - Project Settings → Environment Variables
   - `GMAIL_USER` = `rojalmaharjan052@gmail.com`
   - `GMAIL_APP_PASSWORD` = `your_16_character_password`

## 🎨 Custom Domain (Optional)

1. **Buy domain** (Namecheap, GoDaddy, etc.)
2. **Add to Vercel:**
   - Project Settings → Domains
   - Add your domain
   - Update DNS records as shown
3. **SSL certificate** auto-generated!

## 🚀 Ready to Deploy?

**Choose your method:**
- **Quick & Easy:** Vercel (recommended)
- **Free & Simple:** GitHub Pages
- **Alternative:** Netlify

**Your portfolio will be live in minutes!** 🎉
