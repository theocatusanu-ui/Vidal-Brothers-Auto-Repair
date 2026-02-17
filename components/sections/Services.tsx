import React, { useState } from 'react';
import { SERVICES, BUSINESS_INFO } from '../../constants';
import { ServiceItem } from '../../types';
import FadeIn from '../ui/FadeIn';
import Button from '../ui/Button';
import Modal from '../ui/Modal';
import { Mail, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-24 md:py-32 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <FadeIn className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-semibold text-brand-dark tracking-tighter mb-6">
              Expert Mobile Repair.
            </h2>
            <p className="text-xl text-brand-text/70 leading-relaxed font-light">
              Professional mechanics at your doorstep. We handle everything from diagnostics to repairs right in your driveway.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="flex-shrink-0">
             <a href={`mailto:${BUSINESS_INFO.email}?subject=Quote Request`}>
              <Button variant="white" className="gap-2 border border-brand-burgundy/10 hover:border-brand-burgundy/30 text-brand-burgundy shadow-sm">
                <Mail size={18} />
                Get a Quote
              </Button>
            </a>
          </FadeIn>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.1} className="h-full">
              <div className="group h-full bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-brand-burgundy/5 transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between border border-transparent hover:border-brand-burgundy/10">
                <div>
                  <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-beige text-brand-dark group-hover:bg-brand-red group-hover:text-brand-cream transition-colors duration-300">
                    <service.icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-semibold text-brand-dark mb-3 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-brand-text/70 leading-relaxed font-light text-lg">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-brand-beige">
                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className="group/btn inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-red/10 text-brand-red font-medium hover:bg-brand-red hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2"
                  >
                    Learn more
                    <ArrowRight size={16} className="transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Service Detail Modal - popup with summary, no redirect */}
      <Modal isOpen={!!selectedService} onClose={() => setSelectedService(null)}>
        {selectedService && (
          <div className="text-center pt-4">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-beige text-brand-red mb-6 shadow-inner">
              <selectedService.icon size={40} strokeWidth={1.5} />
            </div>

            <h3 className="text-3xl font-bold text-brand-dark mb-2 tracking-tight">
              {selectedService.title}
            </h3>
            <p className="text-brand-text/70 text-base mb-6">
              {selectedService.description}
            </p>

            <div className="text-left mb-8">
              <h4 className="text-sm font-semibold text-brand-dark uppercase tracking-wider mb-3">
                Summary
              </h4>
              <p className="text-lg text-brand-text/80 leading-relaxed font-light">
                {selectedService.details}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setSelectedService(null)}
              className="px-5 py-2.5 rounded-xl bg-brand-dark text-white font-medium hover:bg-brand-burgundy transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand-dark focus:ring-offset-2"
            >
              Close
            </button>
          </div>
        )}
      </Modal>

    </section>
  );
};

export default Services;