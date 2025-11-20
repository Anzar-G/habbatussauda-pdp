import React from 'react';
import { CONTACT_INFO, CERTIFICATIONS, COMPANY_INFO, SHIPPING_INFO, PAYMENT_OPTIONS } from '../constants';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <div className="text-2xl font-serif font-bold text-white mb-4 flex items-center gap-2">
               <span className="bg-primary-600 px-2 py-1 rounded text-white text-lg">SR12</span>
               Habbatussauda
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Suplemen herbal premium untuk mendukung imunitas dan kesehatan jangka panjang Anda. 
              Halal, Aman, dan Teruji Ilmiah.
            </p>
            <div className="space-y-2 text-xs text-gray-500">
              <p>BPOM: {CERTIFICATIONS.bpom}</p>
              <p>MUI: {CERTIFICATIONS.halal}</p>
              {COMPANY_INFO.name && (
                <p>Produsen: {COMPANY_INFO.name}</p>
              )}
            </div>
            {COMPANY_INFO.address && (
              <div className="mt-3 text-xs text-gray-400 flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary-500 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Hubungi Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-primary-500 mt-0.5" />
                <a href={CONTACT_INFO.whatsappLink} className="hover:text-primary-400 transition-colors">
                  WhatsApp: {CONTACT_INFO.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-primary-500 mt-0.5" />
                <span>{CONTACT_INFO.email}</span>
              </li>
              {SHIPPING_INFO.codCities && SHIPPING_INFO.codCities.length > 0 && (
                <li className="text-gray-300">
                  <span className="block text-sm font-semibold mb-2">COD Tersedia:</span>
                  <div className="flex flex-wrap gap-2 text-xs text-gray-400">
                    {SHIPPING_INFO.codCities.map((city) => (
                      <span key={city} className="bg-gray-800 rounded px-2 py-1 border border-gray-700">{city}</span>
                    ))}
                  </div>
                </li>
              )}
              {SHIPPING_INFO.couriers && SHIPPING_INFO.couriers.length > 0 && (
                <li className="text-gray-300">
                  <span className="block text-sm font-semibold mb-2">Ekspedisi:</span>
                  <div className="flex flex-wrap gap-2 text-xs text-gray-400">
                    {SHIPPING_INFO.couriers.map((c) => (
                      <span key={c} className="bg-gray-800 rounded px-2 py-1 border border-gray-700">{c}</span>
                    ))}
                  </div>
                </li>
              )}
              <li className="flex items-start gap-3 text-gray-300">
                <Clock className="w-5 h-5 text-primary-500 mt-0.5" />
                <span>Senin - Sabtu, 08.00 - 17.00 WIB</span>
              </li>
            </ul>
          </div>

          {/* Quick Links & Payment */}
          <div>
             <h4 className="text-lg font-bold text-white mb-6">Pembayaran & Pengiriman</h4>
             <div className="grid grid-cols-3 gap-3 mb-6">
               {PAYMENT_OPTIONS.bankAccounts.map((b) => (
                 <div key={`${b.bank}-${b.number}`} className="bg-gray-800 rounded px-2 py-1 text-xs text-center text-gray-400 border border-gray-700">
                   {b.bank}
                 </div>
               ))}
               {PAYMENT_OPTIONS.ewallets?.map((e) => (
                 <div key={`${e.name}-${e.number}`} className="bg-gray-800 rounded px-2 py-1 text-xs text-center text-gray-400 border border-gray-700">
                   {e.name}
                 </div>
               ))}
               {(!PAYMENT_OPTIONS.ewallets || PAYMENT_OPTIONS.ewallets.length === 0) && (
                 <div className="bg-gray-800 rounded px-2 py-1 text-xs text-center text-gray-400 border border-gray-700">E-Wallet</div>
               )}
             </div>
             <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
               <p className="text-sm text-gray-300 mb-2">Bisa <strong>COD (Bayar di Tempat)</strong></p>
               <p className="text-xs text-gray-500">Tersedia untuk area tertentu. Konfirmasi via WhatsApp.</p>
               <div className="mt-4 space-y-1 text-xs text-gray-400">
                 {PAYMENT_OPTIONS.bankAccounts.map((b) => (
                   <p key={`${b.bank}-${b.number}`}>{b.bank}: {b.number} a.n. {b.holder}</p>
                 ))}
                 {PAYMENT_OPTIONS.ewallets?.map((e) => (
                   <p key={`${e.name}-${e.number}`}>{e.name}: {e.number}</p>
                 ))}
               </div>
             </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center md:text-left">
          <div className="bg-gray-800/50 p-4 rounded-lg text-xs text-gray-500 leading-relaxed mb-6 text-justify">
            <strong>Disclaimer:</strong> Produk ini adalah suplemen makanan, bukan obat, dan tidak dimaksudkan untuk mendiagnosis, mengobati, menyembuhkan, atau mencegah penyakit. Hasil yang didapatkan setiap individu bisa berbeda-beda tergantung kondisi tubuh dan pola hidup. Tetap jaga pola makan seimbang dan olahraga teratur.
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Habbatussauda SR12 Official. All rights reserved.
            </p>
            <p className="text-sm text-gray-600">
              Designed for Better Health.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;