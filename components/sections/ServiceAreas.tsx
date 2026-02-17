import React from 'react';
import { BUSINESS_INFO } from '../../constants';
import FadeIn from '../ui/FadeIn';
import { MapPin, Phone, Mail, Car } from 'lucide-react';

const ServiceAreas: React.FC = () => {
  return (
    <section id="areas" className="py-24 bg-brand-beige">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-lg shadow-brand-burgundy/5 overflow-hidden relative border border-brand-burgundy/5">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12 relative z-10">
            <div className="md:w-3/5">
               <FadeIn>
                  <h2 className="text-4xl md:text-5xl font-semibold text-brand-dark tracking-tighter mb-6">
                    Mobile Service Area.
                  </h2>
                  <p className="text-xl text-brand-text/70 leading-relaxed mb-10 font-light">
                    We bring the garage to your driveway. Serving Ottawa, Gatineau, and surrounding communities with professional on-site repair.
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    {BUSINESS_INFO.areas.map((area, index) => (
                      <span key={area} className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-brand-cream text-brand-text font-medium border border-brand-burgundy/10 hover:border-brand-orange/50 transition-colors cursor-default">
                        <MapPin size={16} className="text-brand-orange" />
                        {area}
                      </span>
                    ))}
                    <span className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-brand-cream text-brand-text/50 font-medium border border-brand-burgundy/10 border-dashed">
                        + Surrounding Areas
                    </span>
                  </div>
               </FadeIn>
            </div>
            
            <div className="md:w-2/5 w-full">
              <FadeIn delay={0.2}>
                <div className="bg-brand-burgundy rounded-3xl p-8 md:p-10 text-brand-cream relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-8 opacity-10 transform translate-x-1/4 -translate-y-1/4">
                      <Car size={200} />
                   </div>
                   <h3 className="text-2xl font-semibold mb-2 relative z-10 text-brand-yellow">We Come To You</h3>
                   <p className="text-brand-cream/80 mb-8 relative z-10">Save time. No towing. No waiting rooms. Call us for a quote.</p>
                   
                   <div className="flex flex-col gap-3 relative z-10">
                     <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center justify-center gap-2 bg-white text-brand-burgundy px-6 py-4 rounded-full font-bold hover:bg-brand-yellow hover:text-brand-burgundy transition-all duration-300 shadow-md">
                        <Phone size={18} />
                        Call {BUSINESS_INFO.phone}
                     </a>
                     <a href={`mailto:${BUSINESS_INFO.email}`} className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-6 py-4 rounded-full font-medium hover:bg-white/10 transition-colors">
                        <Mail size={18} />
                        Email for Quote
                     </a>
                   </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;