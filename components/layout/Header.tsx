import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ChevronRight, Instagram, Facebook } from 'lucide-react';
import { BUSINESS_INFO, NAV_ITEMS } from '../../constants';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const textColorClass = isScrolled || mobileMenuOpen ? 'text-brand-dark' : 'text-brand-cream';
  const logoColorClass = isScrolled || mobileMenuOpen ? 'text-brand-dark' : 'text-brand-cream';

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen 
          ? 'bg-brand-cream shadow-sm border-b border-brand-burgundy/5' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer z-50" onClick={() => {
            window.scrollTo(0,0);
            setMobileMenuOpen(false);
          }}>
            <span className={`text-xl font-bold tracking-tighter transition-colors duration-300 ${logoColorClass}`}>
              Vidal <span className="text-brand-orange">.</span> Brothers
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-brand-dark/70 hover:text-brand-red' 
                    : 'text-brand-cream/80 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Controls */}
          <div className="flex items-center gap-3 z-50">
            {/* Desktop Call Button */}
            <a href={`tel:${BUSINESS_INFO.phone}`} className="hidden md:block">
               <Button variant={isScrolled ? "primary" : "white"} size="sm" className="gap-2 shadow-none">
                 <Phone size={16} />
                 <span>{BUSINESS_INFO.phone}</span>
               </Button>
            </a>
            
            {/* Mobile Phone Button (Subtle) */}
            <a href={`tel:${BUSINESS_INFO.phone}`} className={`md:hidden p-2 rounded-full transition-colors ${
              isScrolled || mobileMenuOpen ? 'text-brand-dark hover:bg-brand-burgundy/5' : 'text-brand-cream hover:bg-white/10'
            }`}>
              <Phone size={24} />
            </a>

            {/* Mobile Menu Toggle */}
            <button 
              className={`md:hidden p-2 -mr-2 rounded-full transition-colors ${
                 isScrolled || mobileMenuOpen ? 'text-brand-dark hover:bg-brand-burgundy/5' : 'text-brand-cream hover:bg-white/10'
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay - Right Sidebar Style */}
      <div className={`fixed inset-0 z-40 md:hidden transition-transform duration-300 ease-in-out bg-brand-cream ${
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full pt-28 px-8 pb-12 overflow-y-auto">
          
          <nav className="flex flex-col space-y-2">
            {NAV_ITEMS.map((item, index) => (
              <a 
                key={item.label}
                href={item.href}
                className="group flex items-center justify-between text-3xl font-bold text-brand-dark py-4 border-b border-brand-burgundy/5"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
                <ChevronRight size={24} className="text-brand-orange opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 transition-transform duration-300" />
              </a>
            ))}
          </nav>
          
          <div className="mt-auto pt-10">
             <div className="mb-8">
               <p className="text-sm font-semibold uppercase tracking-wider text-brand-dark/40 mb-2">Service Area</p>
               <p className="text-xl text-brand-dark/80">{BUSINESS_INFO.areas.join(", ")}</p>
             </div>

             <div className="flex gap-6">
                <a href={BUSINESS_INFO.social.instagram} className="text-brand-dark/60 hover:text-brand-red transition-colors">
                  <Instagram size={24} />
                </a>
                <a href={BUSINESS_INFO.social.facebook} className="text-brand-dark/60 hover:text-brand-red transition-colors">
                  <Facebook size={24} />
                </a>
             </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;