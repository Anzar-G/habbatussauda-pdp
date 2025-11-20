import React from 'react';
import { XCircle, CheckCircle, Activity, Heart, Shield, Zap } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="benefits">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kenapa Tubuh Anda Memberi Sinyal <span className="text-red-600">SOS?</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Gaya hidup modern seringkali melemahkan sistem pertahanan tubuh kita. Apakah Anda merasakan gejala ini?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Problem Column */}
          <div className="bg-red-50 rounded-3xl p-8 md:p-10 border border-red-100">
            <h3 className="text-xl font-bold text-red-800 mb-6 flex items-center gap-3">
              <XCircle className="w-8 h-8" />
              Tanda Imunitas Menurun
            </h3>
            <ul className="space-y-4">
              {[
                "Sering merasa lemas dan mudah lelah walau cukup tidur",
                "Mudah terserang flu dan batuk saat cuaca berubah",
                "Kadar kolesterol atau gula darah sulit dikontrol",
                "Pencernaan sering bermasalah (kembung/maag)",
                "Luka sembuh lebih lama dari biasanya"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-700">
                  <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution Column */}
          <div className="relative">
             <div className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10 hidden md:block">
                <div className="bg-primary-600 rounded-full p-2">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
             </div>

            <div className="bg-primary-50 rounded-3xl p-8 md:p-10 border border-primary-100 shadow-xl">
              <h3 className="text-xl font-bold text-primary-800 mb-6 flex items-center gap-3">
                <CheckCircle className="w-8 h-8" />
                Solusi: SR12 Habbatussauda
              </h3>
              <ul className="space-y-4">
                {[
                  "Meningkatkan aktivitas sel imun (Sel T & NK) hingga 47%",
                  "Membantu menurunkan kolesterol LDL hingga 23%",
                  "Stabilisasi gula darah & sensitivitas insulin",
                  "Perlindungan antioksidan 15x lebih kuat dari Vit C",
                  "Anti-inflamasi alami untuk pencernaan sehat"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700 font-medium">
                    <CheckCircle className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Icon Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="flex flex-col items-center text-center p-4">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-3">
              <Shield className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-gray-900">Booster Imun</h4>
            <p className="text-sm text-gray-500">Perlindungan Ganda</p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
             <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-3">
              <Heart className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-gray-900">Jantung Sehat</h4>
            <p className="text-sm text-gray-500">Kontrol Kolesterol</p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
             <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-xl flex items-center justify-center mb-3">
              <Activity className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-gray-900">Gula Darah</h4>
            <p className="text-sm text-gray-500">Lebih Stabil</p>
          </div>
           <div className="flex flex-col items-center text-center p-4">
             <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-3">
              <Zap className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-gray-900">Energi Vital</h4>
            <p className="text-sm text-gray-500">Anti Lemas</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;