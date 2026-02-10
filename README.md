# Astronix Cloud - Premium Cyberpunk Landing Page

A high-end, production-ready landing page for Astronix Cloud hosting services, built with React.js, Tailwind CSS, and Framer Motion.

## 🚀 Features

### Design & Aesthetics
- **Cyberpunk/Futuristic Theme**: Dark mode with neon cyan, purple, and pink gradients
- **Glassmorphic UI**: Backdrop blur effects and transparent cards
- **Animated Background**: Live cyberpunk grid with floating particles and glowing orbs
- **Smooth Animations**: Scroll reveals, hover effects, and micro-interactions using Framer Motion
- **Premium Typography**: Exo 2 for headings, JetBrains Mono for code elements

### Dynamic Pricing System
Complete tab-based pricing with **4 categories**:

1. **Normal CPU VPS (Linux/Windows)** - Base pricing from ₹100 to ₹3500
2. **Admin RDP (Full Access)** - Base price + ₹20
3. **GPU VPS (High Performance)** - Base price + ₹50 (1-4 cores) or + ₹200 (8-64 cores)
4. **GPU RDP (Gaming & Rendering)** - Base price + ₹200

Each category includes **14 different configurations** with programmatic price calculations.

### Core Sections
- **Hero Section**: Full-screen with animated background and prominent CTA
- **Features**: Glassmorphic cards showcasing key benefits
- **Live Monitoring**: Real-time simulated dashboard with server load and network status
- **Pricing**: Tab-based system with hover-glow pricing cards
- **Footer**: Complete with branding, services, and contact information

### Technical Features
- Fully responsive (mobile-first design)
- Smooth scroll animations
- Hover glow effects on all interactive elements
- Custom scrollbar styling
- Direct Telegram integration
- Production-optimized code structure

## 📦 Project Structure

```
astronix-cloud-landing/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── CyberpunkBackground.jsx
│   │   ├── Navigation.jsx
│   │   ├── HeroSection.jsx
│   │   ├── FeaturesSection.jsx
│   │   ├── LiveMonitoring.jsx
│   │   ├── PricingSection.jsx
│   │   ├── PricingCard.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── pricingData.js
│   ├── App.jsx
│   ├── index.js
│   └── index.css
├── tailwind.config.js
└── package.json
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 16.x or higher
- npm or yarn package manager

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm start
```

The application will open at `http://localhost:3000`

### Step 3: Build for Production
```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## 🎨 Customization Guide

### Updating Prices
All pricing logic is centralized in `src/data/pricingData.js`. Modify the `basePlans` array or calculation functions:

```javascript
// Example: Change base price for 1 Core / 4GB
{ cores: 1, ram: "4GB", basePrice: 150 }  // Changed from 100 to 150

// Modify Admin RDP increment
const calculateAdminRDP = (plan) => ({
  ...plan,
  price: plan.basePrice + 30  // Changed from +20 to +30
});
```

### Changing Colors
Update the color scheme in components using Tailwind classes:
- **Cyan**: `cyan-400`, `cyan-500`, `cyan-600`
- **Purple**: `purple-400`, `purple-500`, `purple-600`
- **Pink**: `pink-400`, `pink-500`, `pink-600`

Or modify the gradient classes:
```javascript
// Change gradient in HeroSection.jsx
<span className="bg-gradient-to-r from-blue-400 via-green-400 to-yellow-500 ...">
```

### Updating Contact Information
Replace all instances of `https://t.me/offx_sahil` with your Telegram handle or contact URL.

### Modifying Animation Speed
Adjust Framer Motion transition durations:
```javascript
transition={{ duration: 0.8 }}  // Make slower/faster
```

### Adding New Pricing Plans
Edit `src/data/pricingData.js`:
```javascript
const basePlans = [
  ...existingPlans,
  { cores: 128, ram: "1TB", basePrice: 5000 }  // New plan
];
```

## 📱 Mobile Responsiveness

The site uses Tailwind's responsive breakpoints:
- **Mobile**: `< 640px` - Single column layout
- **Tablet**: `640px - 1024px` - 2 column grid
- **Desktop**: `> 1024px` - 3-4 column grid

Pricing cards automatically adapt to a swipeable layout on mobile devices.

## 🚀 Deployment

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag the `build` folder to [Netlify Drop](https://app.netlify.com/drop)

### Deploy to GitHub Pages
1. Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/astronix-cloud",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```
2. Install: `npm install --save-dev gh-pages`
3. Deploy: `npm run deploy`

## 🎯 Performance Optimizations

- **Code Splitting**: React lazy loading for components
- **Animation Performance**: Framer Motion with viewport triggers
- **Image Optimization**: SVG icons via lucide-react
- **CSS Optimization**: Tailwind's JIT compiler
- **Bundle Size**: Production build < 500KB

## 🔧 Tech Stack

- **Framework**: React 18.2.0
- **Styling**: Tailwind CSS 3.4.1
- **Animations**: Framer Motion 11.0.0
- **Icons**: Lucide React 0.344.0
- **Build Tool**: Create React App
- **Fonts**: Google Fonts (Exo 2, JetBrains Mono)

## 📋 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Color Palette

```css
Primary Cyan: #06b6d4
Primary Purple: #a855f7
Accent Pink: #ec4899
Background: #000000
Card Background: rgba(17, 24, 39, 0.4)
Border: rgba(6, 182, 212, 0.2)
Text Primary: #ffffff
Text Secondary: #9ca3af
```

## 🔗 Links & Contact

- **Telegram**: [@offx_sahil](https://t.me/offx_sahil)
- **Category Pages**: All "Order Now" buttons link to Telegram

## 📝 License

This is a custom landing page for Astronix Cloud. All rights reserved.

## 🙏 Credits

- **Design**: Cyberpunk-inspired UI with custom animations
- **Framework**: React.js
- **Styling**: Tailwind CSS
- **Motion**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts

---

**Built with ⚡ by Astronix Cloud Team**
