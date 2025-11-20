import React from 'react';
import { SCIENCE_DATA } from '../constants';
import { FileText, Microscope, FlaskConical } from 'lucide-react';

const Science: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900 text-white" id="science">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 text-white mx-auto mb-4">
              <Microscope className="w-6 h-6" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bukan Sekadar Herbal Biasa
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Habbatussauda SR12 diformulasikan berdasarkan 15+ penelitian medis internasional. 
            Mengandung <strong>Thymoquinone 2.5%</strong> yang teruji klinis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SCIENCE_DATA.map((item, index) => (
            <div 
              key={index} 
              className="bg-gray-800 border border-gray-700 p-6 rounded-2xl hover:bg-gray-750 transition-colors relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary-600/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <FileText className="w-8 h-8 text-primary-500 mb-4" />
              <div className="text-xs font-bold text-primary-400 mb-2 uppercase tracking-wider">
                {item.journal} • {item.year}
              </div>
              <p className="font-medium text-lg leading-relaxed">
                "{item.finding}"
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary-800 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 border border-primary-700">
          <div className="flex-shrink-0">
             <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
               <FlaskConical className="w-10 h-10 text-primary-700" />
             </div>
          </div>
          <div className="flex-grow text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Mengapa SR12 Lebih Ampuh?</h3>
            <p className="text-primary-100">
              Kami menggunakan metode <strong>Cold-Pressed Extraction</strong> untuk menjaga keutuhan nutrisi. 
              Tanpa pemanasan yang merusak kandungan Thymoquinone, sehingga manfaat yang Anda terima 100% murni.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Science;