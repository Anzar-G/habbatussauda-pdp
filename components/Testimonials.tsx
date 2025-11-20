import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary-600 font-bold tracking-wider uppercase text-sm">Real Stories</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Dipercaya Ribuan Pelanggan
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div key={item.id} className="bg-gray-50 p-8 rounded-2xl relative hover:shadow-lg transition-shadow border border-gray-100 flex flex-col">
              <Quote className="w-10 h-10 text-primary-200 mb-4" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 italic text-lg mb-6 flex-grow">
                "{item.quote}"
              </p>
              
              <div className="bg-white p-4 rounded-xl border border-gray-100 mb-6">
                <p className="text-sm font-bold text-primary-700">Hasil:</p>
                <p className="text-sm text-gray-600">{item.result}</p>
              </div>

              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-200">
                 <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
                    <img
                      src={`https://picsum.photos/seed/${item.id}/100/100`}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                      width="100"
                      height="100"
                    />
                 </div>
                 <div>
                   <h4 className="font-bold text-gray-900 text-sm">{item.name}</h4>
                   <p className="text-xs text-gray-500">{item.age} th, {item.location}</p>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;