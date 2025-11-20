import React from 'react';
import { Info, AlertTriangle, Clock, Database } from 'lucide-react';

const ProductDetails: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Composition Card */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Database className="w-6 h-6 text-primary-600" /> Komposisi Per Kapsul
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-dashed border-gray-200 pb-3">
                <span className="text-gray-600">Minyak Habbatussauda Murni</span>
                <span className="font-bold text-gray-900">500 mg</span>
              </div>
              <div className="flex justify-between items-center border-b border-dashed border-gray-200 pb-3">
                <span className="text-gray-600">Thymoquinone Content</span>
                <span className="font-bold text-primary-600">2.5%</span>
              </div>
              <div className="flex justify-between items-center border-b border-dashed border-gray-200 pb-3">
                <span className="text-gray-600">Jenis Kapsul</span>
                <span className="font-bold text-gray-900">Softgel (Halal)</span>
              </div>
              <div className="bg-green-50 p-4 rounded-lg mt-4 text-sm text-green-800 flex items-start gap-2">
                 <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
                 Bebas dari bahan pengawet, pewarna sintetis, dan gluten.
              </div>
            </div>
          </div>

          {/* Usage Card */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Clock className="w-6 h-6 text-primary-600" /> Aturan Pakai
            </h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-sm">1</div>
                <span className="text-gray-700">2x Sehari, 1 kapsul setelah makan</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-sm">2</div>
                <span className="text-gray-700">Minum dengan air putih hangat</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-sm">3</div>
                <span className="text-gray-700">Rutin selama 4-8 minggu untuk hasil optimal</span>
              </li>
            </ul>
            
            <div className="border-t border-gray-100 pt-6">
               <h4 className="text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
                 <AlertTriangle className="w-4 h-4 text-orange-500" /> Kontraindikasi
               </h4>
               <p className="text-xs text-gray-500 leading-relaxed">
                 Tidak disarankan untuk ibu hamil tanpa pengawasan dokter, anak di bawah 18 tahun, 
                 atau penderita autoimun aktif.
               </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductDetails;