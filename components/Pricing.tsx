import React from 'react';
import { PRICING_TIERS, CONTACT_INFO } from '../constants';
import { Check, ShoppingCart, Gift, Shield } from 'lucide-react';

const Pricing: React.FC = () => {
  const formatCurrency = (val: number) => 
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(val);

  return (
    <section className="py-20 bg-gradient-to-b from-primary-50 to-white" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Investasi Kesehatan Terjangkau
          </h2>
          <p className="text-gray-600">Pilih paket yang sesuai dengan kebutuhan Anda</p>
        </div>

        {/* Bonus Banner */}
        <div className="max-w-4xl mx-auto bg-gold-100 border border-gold-200 rounded-xl p-4 mb-12 flex items-center justify-center gap-3 text-gold-800 animate-pulse">
          <Gift className="w-5 h-5" />
          <span className="font-bold text-sm md:text-base text-center">
            Bonus Spesial Hari Ini: E-Book "30 Resep Hidup Sehat" & Konsultasi Nutrisi Gratis!
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {PRICING_TIERS.map((tier) => (
            <div 
              key={tier.id} 
              className={`relative bg-white rounded-2xl shadow-xl border ${tier.isPopular ? 'border-primary-500 ring-4 ring-primary-500/10 transform scale-105 z-10' : 'border-gray-200'} overflow-hidden flex flex-col`}
            >
              {tier.isPopular && (
                <div className="absolute top-0 left-0 w-full bg-primary-600 text-white text-center py-2 font-bold uppercase tracking-wider text-xs">
                  Paling Hemat (Best Seller)
                </div>
              )}
              {tier.shipping && (
                 <div className="absolute top-4 right-4 bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">
                   {tier.shipping}
                 </div>
              )}

              <div className={`p-8 ${tier.isPopular ? 'pt-12' : ''}`}>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                
                <div className="flex items-end gap-2 mb-4">
                   <span className="text-4xl font-bold text-primary-700">{formatCurrency(tier.price)}</span>
                   {tier.originalPrice && (
                     <span className="text-sm text-gray-400 line-through mb-1.5">{formatCurrency(tier.originalPrice)}</span>
                   )}
                </div>
                
                {tier.savings && (
                  <div className="inline-block bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full mb-6">
                    Hemat {formatCurrency(tier.savings)}
                  </div>
                )}

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <a 
                  href={`#/order?qty=${tier.id}`}
                  className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold transition-all ${
                    tier.isPopular 
                      ? 'bg-gold-500 hover:bg-gold-600 text-white shadow-lg shadow-gold-500/25' 
                      : 'bg-gray-800 hover:bg-gray-900 text-white'
                  }`}
                >
                  <ShoppingCart className="w-4 h-4" />
                  Pesan Sekarang
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
           <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
              <Shield className="w-8 h-8 text-gray-600" />
           </div>
           <h4 className="text-lg font-bold text-gray-900 mb-2">Garansi 100% Uang Kembali</h4>
           <p className="text-gray-500 text-sm">
             Jika produk rusak, tidak sesuai, atau kadaluarsa saat diterima, kami ganti baru atau uang kembali 100%. Tanpa ribet.
           </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;