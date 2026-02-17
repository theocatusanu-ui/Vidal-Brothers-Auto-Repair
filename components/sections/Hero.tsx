import React from 'react';
import Button from '../ui/Button';
import { BUSINESS_INFO } from '../../constants';
import FadeIn from '../ui/FadeIn';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-brand-burgundy">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=2800&auto=format&fit=crop" 
          alt="Mobile mechanic working on car" 
          className="w-full h-full object-cover opacity-40"
        />
        {/* Warm Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-burgundy/80 via-brand-burgundy/60 to-brand-burgundy/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-brand-cream mb-8 leading-[0.9]">
              Vidal <span className="text-brand-orange">.</span><br />
              <span className="text-brand-orange/90">Brothers</span>
            </h1>
            
            <p className="text-xl md:text-3xl text-brand-cream/90 max-w-2xl mb-12 font-light leading-snug">
              Premium mobile auto repair. <br className="hidden md:block"/>
              <span className="text-brand-yellow font-normal">We come to you.</span> Ottawa & Gatineau.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <a href={`tel:${BUSINESS_INFO.phone}`}>
                <Button size="lg" variant="white" className="w-full sm:w-auto h-14 px-10 text-lg font-semibold text-brand-burgundy hover:text-brand-burgundy">
                  Call {BUSINESS_INFO.phone}
                </Button>
              </a>
              <a href="#services">
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-10 text-lg gap-2 group border-brand-cream text-brand-cream hover:bg-brand-cream hover:text-brand-burgundy">
                  Our Services
                  <ChevronRight size={20} className="text-brand-cream/70 group-hover:text-brand-burgundy transition-colors" />
                </Button>
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;