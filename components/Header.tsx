import React, { useState, useEffect } from 'react';
import { ShoppingCart, User, Globe, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#' },
    { name: 'Sizes', href: '#' },
    { name: 'Floor Plans', href: '#' },
    { name: 'Support', href: '#' },
    { name: 'Gallery', href: '#' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || location.pathname !== '/' ? 'bg-white shadow-sm py-3' : 'bg-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex flex-col z-50">
          <span className={`text-2xl font-bold tracking-tight ${isScrolled || location.pathname !== '/' ? 'text-slate-900' : 'text-slate-900 lg:text-white'}`}>Eco Luxx</span>
          <span className={`text-[0.6rem] tracking-widest uppercase ${isScrolled || location.pathname !== '/' ? 'text-slate-500' : 'text-slate-500 lg:text-gray-200'}`}>Smart Pergola Systems</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-medium hover:opacity-70 transition-opacity ${
                isScrolled || location.pathname !== '/' ? 'text-slate-600' : 'text-gray-100'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Icons */}
        <div className={`hidden lg:flex items-center space-x-6 ${
          isScrolled || location.pathname !== '/' ? 'text-slate-900' : 'text-white'
        }`}>
          <div className="relative cursor-pointer group">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full">1</span>
          </div>
          <User className="w-5 h-5 cursor-pointer hover:opacity-70" />
          <div className="flex items-center cursor-pointer hover:opacity-70">
            <Globe className="w-5 h-5 mr-1" />
            <span className="text-xs font-medium">EN</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden z-50 text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className={`w-6 h-6 ${isScrolled || location.pathname !== '/' ? 'text-slate-900' : 'text-slate-900 md:text-white'}`} />}
        </button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 lg:hidden">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-2xl font-medium text-slate-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex space-x-8 pt-8 border-t border-gray-100">
               <ShoppingCart className="w-8 h-8 text-slate-900" />
               <User className="w-8 h-8 text-slate-900" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};