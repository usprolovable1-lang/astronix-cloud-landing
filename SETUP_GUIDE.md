# Astronix Cloud - Complete Setup Guide

This guide will help you set up and deploy your Astronix Cloud landing page from scratch.

## 📋 Table of Contents
1. [Prerequisites](#prerequisites)
2. [Project Setup](#project-setup)
3. [File Structure](#file-structure)
4. [Running Locally](#running-locally)
5. [Customization](#customization)
6. [Deployment](#deployment)
7. [Troubleshooting](#troubleshooting)

## Prerequisites

Before you begin, ensure you have the following installed:

### Required Software
- **Node.js** (v16.0.0 or higher)
  - Download from: https://nodejs.org/
  - Verify installation: `node --version`
  
- **npm** (comes with Node.js)
  - Verify installation: `npm --version`

### Optional Tools
- **Git** (for version control)
- **VS Code** (recommended code editor)

## Project Setup

### Step 1: Create React App Structure

Create a new React project using Create React App:

```bash
npx create-react-app astronix-cloud-landing
cd astronix-cloud-landing
```

### Step 2: Install Dependencies

Install all required packages:

```bash
npm install framer-motion lucide-react
npm install -D tailwindcss postcss autoprefixer
```

### Step 3: Initialize Tailwind CSS

```bash
npx tailwindcss init -p
```

### Step 4: Copy Project Files

Copy all the provided files to your project:

```
astronix-cloud-landing/
├── public/
│   └── index.html           # Copy provided file
├── src/
│   ├── components/          # Create this folder
│   │   ├── CyberpunkBackground.jsx
│   │   ├── Navigation.jsx
│   │   ├── HeroSection.jsx
│   │   ├── FeaturesSection.jsx
│   │   ├── LiveMonitoring.jsx
│   │   ├── PricingSection.jsx
│   │   ├── PricingCard.jsx
│   │   └── Footer.jsx
│   ├── data/                # Create this folder
│   │   └── pricingData.js
│   ├── App.jsx              # Replace default
│   ├── index.js             # Replace default
│   └── index.css            # Replace default
├── tailwind.config.js       # Replace generated file
└── package.json             # Merge dependencies
```

## File Structure

### Directory Organization

```
astronix-cloud-landing/
│
├── public/                  # Static files
│   ├── index.html          # Main HTML template
│   └── favicon.ico         # Site icon
│
├── src/                     # Source code
│   │
│   ├── components/          # React components
│   │   ├── CyberpunkBackground.jsx    # Animated background
│   │   ├── Navigation.jsx             # Top navigation bar
│   │   ├── HeroSection.jsx            # Landing hero section
│   │   ├── FeaturesSection.jsx        # Features grid
│   │   ├── LiveMonitoring.jsx         # Dashboard stats
│   │   ├── PricingSection.jsx         # Pricing tabs
│   │   ├── PricingCard.jsx            # Individual pricing card
│   │   └── Footer.jsx                 # Site footer
│   │
│   ├── data/                # Data files
│   │   └── pricingData.js  # Pricing logic and configurations
│   │
│   ├── App.jsx              # Main app component
│   ├── index.js             # Entry point
│   └── index.css            # Global styles + Tailwind
│
├── tailwind.config.js       # Tailwind configuration
├── package.json             # Dependencies
└── README.md                # Documentation
```

## Running Locally

### Start Development Server

```bash
npm start
```

The app will open at: `http://localhost:3000`

### Features During Development:
- **Hot Reload**: Changes appear instantly
- **Error Overlay**: See errors directly in browser
- **Auto Port Selection**: Picks available port if 3000 is busy

### Build for Production

```bash
npm run build
```

Creates optimized build in `build/` folder:
- Minified code
- Optimized images
- Compressed assets
- Ready for deployment

## Customization

### 1. Update Pricing

Edit `src/data/pricingData.js`:

```javascript
// Modify base plans
const basePlans = [
  { cores: 1, ram: "4GB", basePrice: 100 },  // Change any value
  // Add new plans
  { cores: 128, ram: "2TB", basePrice: 10000 }
];

// Modify calculation logic
const calculateAdminRDP = (plan) => ({
  ...plan,
  price: plan.basePrice + 30  // Change from +20 to +30
});
```

### 2. Change Contact Information

Replace `https://t.me/offx_sahil` in these files:
- `src/components/Navigation.jsx`
- `src/components/HeroSection.jsx`
- `src/components/PricingCard.jsx`
- `src/components/Footer.jsx`

### 3. Modify Colors

Update Tailwind classes throughout components:

```javascript
// From cyan to blue
className="text-cyan-400"  →  className="text-blue-400"

// Update gradients
className="bg-gradient-to-r from-cyan-500 to-purple-600"
→  className="bg-gradient-to-r from-blue-500 to-green-600"
```

### 4. Adjust Animations

Modify Framer Motion props:

```javascript
// Slower animation
transition={{ duration: 1.2 }}  // from 0.6

// Different easing
transition={{ ease: "easeOut" }}  // from "easeInOut"

// Disable animation
initial={false}  // or remove initial/animate props
```

### 5. Change Fonts

Edit `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap');

body {
  font-family: 'YourFont', sans-serif;
}
```

## Deployment

### Option 1: Vercel (Recommended)

1. **Install Vercel CLI:**
```bash
npm i -g vercel
```

2. **Deploy:**
```bash
npm run build
vercel
```

3. **Follow prompts:**
- Select project name
- Confirm settings
- Get live URL

### Option 2: Netlify

1. **Build project:**
```bash
npm run build
```

2. **Deploy:**
- Visit https://app.netlify.com/drop
- Drag `build` folder to upload
- Get instant live URL

### Option 3: GitHub Pages

1. **Install gh-pages:**
```bash
npm install --save-dev gh-pages
```

2. **Update package.json:**
```json
{
  "homepage": "https://yourusername.github.io/astronix-cloud",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

3. **Deploy:**
```bash
npm run deploy
```

### Option 4: Custom Server

1. **Build:**
```bash
npm run build
```

2. **Upload `build/` folder to server**

3. **Configure web server:**
- Point to `index.html`
- Enable gzip compression
- Set cache headers

## Troubleshooting

### Common Issues

#### 1. "Module not found" errors

**Solution:**
```bash
rm -rf node_modules package-lock.json
npm install
```

#### 2. Tailwind styles not applying

**Solution:**
- Check `tailwind.config.js` content paths
- Ensure `index.css` imports Tailwind
- Restart dev server

#### 3. Animations not working

**Solution:**
- Verify Framer Motion installation: `npm list framer-motion`
- Check browser console for errors
- Try different browser

#### 4. Build fails

**Solution:**
```bash
# Clear cache
rm -rf node_modules .cache build
npm install
npm run build
```

#### 5. Port 3000 already in use

**Solution:**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill

# Or use different port
PORT=3001 npm start
```

### Performance Issues

If site feels slow:

1. **Check bundle size:**
```bash
npm run build
# Review size warnings
```

2. **Optimize images:**
- Use WebP format
- Compress images
- Implement lazy loading

3. **Reduce animations:**
- Limit particles count in background
- Use CSS animations instead of JS where possible

### Browser Compatibility

Test on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Additional Resources

### Documentation
- [React Docs](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

### Support
- **Telegram**: [@offx_sahil](https://t.me/offx_sahil)
- **Issues**: Check browser console for errors
- **Community**: React/Tailwind Discord servers

## Next Steps

After setup:

1. ✅ Test all interactive elements
2. ✅ Verify pricing calculations
3. ✅ Test on mobile devices
4. ✅ Check contact links
5. ✅ Deploy to production
6. ✅ Monitor analytics

---

**Need Help?** Contact us on Telegram: [@offx_sahil](https://t.me/offx_sahil)
