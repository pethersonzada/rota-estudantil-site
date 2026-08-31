import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900" style={{ fontFamily: 'var(--font-body)' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap');
        :root {
          --font-display: 'Bebas Neue', Impact, sans-serif;
          --font-body: 'Inter', system-ui, -apple-system, sans-serif;
        }
        @keyframes drawLine {
          from { height: 0%; }
          to { height: 100%; }
        }
        @keyframes popIn {
          from { opacity: 0; transform: translateY(6px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .route-line { animation: drawLine 1.4s ease-out forwards; }
        .route-stop { opacity: 0; animation: popIn 0.5s ease-out forwards; }
        .route-stop:nth-child(1) { animation-delay: 0.3s; }
        .route-stop:nth-child(2) { animation-delay: 0.9s; }
        .route-stop:nth-child(3) { animation-delay: 1.5s; }
      `}</style>

      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </main>
  );
}