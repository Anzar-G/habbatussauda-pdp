import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
const Hero = React.lazy(() => import('./components/Hero'));
const ProblemSolution = React.lazy(() => import('./components/ProblemSolution'));
const Science = React.lazy(() => import('./components/Science'));
const ProductDetails = React.lazy(() => import('./components/ProductDetails'));
const Testimonials = React.lazy(() => import('./components/Testimonials'));
const Pricing = React.lazy(() => import('./components/Pricing'));
const FAQ = React.lazy(() => import('./components/FAQ'));
import Footer from './components/Footer';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from './constants';

function App() {
  // Smooth scroll behavior fix for older browsers if needed, mainly handled by CSS in index.html
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <React.Suspense fallback={<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-pulse">Memuat...</div>}>
          <Hero />
        </React.Suspense>

        <React.Suspense fallback={<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-pulse">Memuat bagian...</div>}>
          <ProblemSolution />
        </React.Suspense>

        <React.Suspense fallback={<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-pulse">Memuat bagian...</div>}>
          <Science />
        </React.Suspense>

        <React.Suspense fallback={<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-pulse">Memuat bagian...</div>}>
          <ProductDetails />
        </React.Suspense>

        <React.Suspense fallback={<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-pulse">Memuat testimoni...</div>}>
          <Testimonials />
        </React.Suspense>

        <React.Suspense fallback={<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-pulse">Memuat harga...</div>}>
          <Pricing />
        </React.Suspense>

        <React.Suspense fallback={<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-pulse">Memuat FAQ...</div>}>
          <FAQ />
        </React.Suspense>
      </main>

      <Footer />

      {/* Sticky WhatsApp Float Button */}
      <a
        href={CONTACT_INFO.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110 hover:rotate-3 group flex items-center gap-2"
        aria-label="Chat via WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-bold">
          Konsultasi Gratis
        </span>
      </a>
    </div>
  );
}

export default App;