import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Manfaat', href: '#benefits', targetId: 'benefits' },
    { name: 'Bukti Ilmiah', href: '#science', targetId: 'science' },
    { name: 'Testimoni', href: '#testimonials', targetId: 'testimonials' },
    { name: 'Harga', href: '#pricing', targetId: 'pricing' },
    { name: 'FAQ', href: '#faq', targetId: 'faq' },
  ];

  const handleScrollTo = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="bg-primary-700 text-white p-1.5 rounded font-serif font-bold text-xl">
              SR12
            </div>
            <span className="font-bold text-gray-800 hidden sm:block tracking-tight">Habbatussauda Premium</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo(link.targetId);
                }}
                className="text-gray-600 hover:text-primary-600 font-medium transition-colors text-sm uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#/order"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg"
              aria-label="Pesan sekarang"
            >
              <Phone size={16} />
              Pesan Sekarang
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary-600 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo(link.targetId);
                  setIsOpen(false);
                }}
                className="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-primary-50 hover:text-primary-700 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#/order"
              className="block w-full text-center mt-4 bg-green-500 text-white px-4 py-3 rounded-lg font-bold"
              aria-label="Pesan sekarang"
            >
              Pesan Sekarang
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;