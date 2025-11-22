import React from 'react';
import { ShieldCheck, Award, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO, CERTIFICATIONS } from '../constants';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-primary-900 to-primary-800 text-white overflow-hidden pt-10 pb-20 lg:pt-20 lg:pb-28">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-gold-500 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary-800/50 border border-primary-600/50 rounded-full px-4 py-1.5 backdrop-blur-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-xs font-semibold tracking-wider uppercase text-green-100">Terbukti Secara Ilmiah</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-white">
              Imunitas Kuat, <br/>
              <span className="text-gold-400">Hidup Lebih Sehat</span> <br/>
              Secara Alami.
            </h1>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-xl">
              Dukung kesehatan harianmu dengan <strong>Minyak Habbatussauda Murni</strong>. 
              Tersertifikasi Halal & BPOM. 15x lebih kuat dari Vitamin C untuk perlindungan total.
            </p>

            <div className="flex flex-wrap gap-3 text-sm font-medium text-primary-100">
              <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-md">
                <ShieldCheck className="w-4 h-4 text-gold-400" /> BPOM {CERTIFICATIONS.bpom}
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-md">
                <Award className="w-4 h-4 text-gold-400" /> HALAL {CERTIFICATIONS.halal}
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <a 
                href="#pricing" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('pricing');
                }}
                className="bg-gold-500 hover:bg-gold-600 text-white text-center px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-gold-500/20 transition-transform transform hover:-translate-y-1"
              >
                Pesan Sekarang & Hemat
              </a>
              <a 
                href="#science" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('science');
                }}
                className="bg-white/10 hover:bg-white/20 text-white text-center px-8 py-4 rounded-xl font-semibold text-lg backdrop-blur-sm border border-white/20 transition-colors"
              >
                Lihat Bukti Ilmiah
              </a>
            </div>
          </div>

          {/* Image/Product Visual */}
          <div className="relative lg:h-[500px] flex items-center justify-center">
             {/* Product image card */}
             <div className="relative w-64 h-80 md:w-80 md:h-96 bg-white rounded-3xl shadow-2xl border-4 border-gold-500/30 flex flex-col items-center justify-center p-6 text-center transform rotate-3 hover:rotate-0 transition-transform duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/detail-produk.jpeg')] opacity-100 bg-center bg-cover"></div>
               
                
                {/* Floating Badge */}
                <div className="absolute -right-6 -top-6 bg-red-600 text-white w-20 h-20 rounded-full flex items-center justify-center font-bold text-center text-xs shadow-lg rotate-12 z-20 border-2 border-white">
                  BEST SELLER
                </div>
             </div>

             {/* Floating Features Cards */}
             <div className="absolute top-1/2 -left-4 md:-left-12 bg-white text-primary-900 p-4 rounded-lg shadow-xl max-w-[160px] hidden md:block animate-bounce duration-[3000ms]">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span className="font-bold text-sm">Imunitas</span>
                </div>
                <p className="text-xs text-gray-600">Naik 47% secara alami</p>
             </div>

             <div className="absolute bottom-12 -right-4 md:-right-8 bg-white text-primary-900 p-4 rounded-lg shadow-xl max-w-[160px] hidden md:block">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span className="font-bold text-sm">Kolesterol</span>
                </div>
                <p className="text-xs text-gray-600">Turun hingga 23%</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;