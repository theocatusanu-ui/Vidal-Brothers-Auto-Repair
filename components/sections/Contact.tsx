import React from 'react';
import { BUSINESS_INFO } from '../../constants';
import Button from '../ui/Button';
import FadeIn from '../ui/FadeIn';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-brand-burgundy text-brand-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Ready to book your mobile repair?
          </h2>
          <p className="text-xl text-brand-cream/70 mb-10 max-w-2xl mx-auto">
            Contact us today for a quote or to schedule a service at your home or office.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`tel:${BUSINESS_INFO.phone}`}>
              <Button size="lg" className="bg-brand-cream text-brand-burgundy hover:bg-white">
                Call {BUSINESS_INFO.phone}
              </Button>
            </a>
            <a href={`mailto:${BUSINESS_INFO.email}`}>
              <Button size="lg" variant="outline" className="border-brand-cream/30 text-brand-cream hover:bg-brand-cream/10 hover:text-white">
                Email Us
              </Button>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;