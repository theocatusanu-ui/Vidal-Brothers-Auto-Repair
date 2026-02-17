import React from 'react';
import FadeIn from '../ui/FadeIn';
import Button from '../ui/Button';
import { Facebook, Instagram, Star } from 'lucide-react';
import { BUSINESS_INFO } from '../../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-32 bg-brand-cream">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <FadeIn>
          {/* Visual Hook: Stars */}
          <div className="flex justify-center gap-2 mb-8">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} size={32} className="fill-brand-yellow text-brand-yellow" />
            ))}
          </div>

          <h2 className="text-4xl md:text-6xl font-semibold text-brand-dark mb-10 tracking-tighter leading-tight">
            Hundreds of reviews <br/> across all platforms.
          </h2>
          
          <p className="text-xl text-brand-text/70 mb-12 font-light max-w-2xl mx-auto">
             Our reputation is built on trust, transparency, and the convenience of coming to you. Join the community of satisfied drivers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={BUSINESS_INFO.social.facebook} target="_blank" rel="noopener noreferrer">
              <Button variant="white" className="gap-2 shadow-sm border border-brand-burgundy/10 text-[#1877F2] hover:bg-white hover:border-[#1877F2]/20 w-full sm:w-auto px-8 py-4">
                <Facebook size={20} fill="currentColor" />
                See us on Facebook
              </Button>
            </a>
            <a href={BUSINESS_INFO.social.instagram} target="_blank" rel="noopener noreferrer">
               <Button variant="white" className="gap-2 shadow-sm border border-brand-burgundy/10 text-[#E1306C] hover:bg-white hover:border-[#E1306C]/20 w-full sm:w-auto px-8 py-4">
                <Instagram size={20} />
                Follow on Instagram
              </Button>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Testimonials;