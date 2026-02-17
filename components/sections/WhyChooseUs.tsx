import React from 'react';
import { FEATURES } from '../../constants';
import FadeIn from '../ui/FadeIn';
import { CheckCircle2 } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image Side - Mobile Unit Photo */}
          <div className="w-full lg:w-1/2 relative">
             <FadeIn direction="right">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-brand-burgundy/10 h-[500px] group">
                  <img 
                    src="/service-van.png" 
                    alt="Vidal & Brothers Service Van" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <div className="text-white">
                      <p className="font-semibold text-lg">Fully Equipped Mobile Unit</p>
                      <p className="text-white/80 text-sm">We bring the repair shop to you.</p>
                    </div>
                  </div>
                </div>
             </FadeIn>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-semibold text-brand-dark tracking-tight mb-6">
                Why Go Mobile?
              </h2>
              <p className="text-xl text-brand-text/70 mb-10 leading-relaxed font-light">
                We combine the expertise of a shop with the convenience of a home visit. Family owned, Canadian proud, with a touch of warmth.
              </p>
            </FadeIn>
            
            <div className="space-y-10">
              {FEATURES.map((feature, index) => (
                <FadeIn key={feature.title} delay={index * 0.15}>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-8 h-8 text-brand-red" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-brand-dark mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-brand-text/70 leading-relaxed text-lg font-light">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;