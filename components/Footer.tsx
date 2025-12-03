import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-1">Eco Luxx Pergola</h3>
              <p className="text-xs text-slate-400">Smart design. More usable space. Premium quality.</p>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              German Engineering combined with modern aesthetics to create the perfect outdoor living space for your home.
            </p>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="text-white font-medium mb-6">Products</h4>
            <ul className="space-y-3 text-sm">
              {['250x250 Compact', '250x300 Social', '300x300 Dining', '300x400 Family', 'Accessories'].map((item) => (
                <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Corporate Column */}
          <div>
            <h4 className="text-white font-medium mb-6">Corporate</h4>
            <ul className="space-y-3 text-sm">
              {['About Us', 'Technology', 'Sustainability', 'Dealers', 'Career'].map((item) => (
                <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-medium mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-slate-500" />
                <span>info@ecoluxx.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-slate-500" />
                <span>+90 (212) 000 00 00</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 mt-1 text-slate-500" />
                <span>Istanbul, Türkiye</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; 2025 Eco Luxx. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
            <a href="#" className="hover:text-white">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};