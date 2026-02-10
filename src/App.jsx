import React from 'react';
import CyberpunkBackground from './components/CyberpunkBackground';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import LiveMonitoring from './components/LiveMonitoring';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased overflow-x-hidden">
      <CyberpunkBackground />
      <Navigation />
      <main>
        <HeroSection />
        <FeaturesSection />
        <LiveMonitoring />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
