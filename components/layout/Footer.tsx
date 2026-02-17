import React from 'react';
import { BUSINESS_INFO, NAV_ITEMS } from '../../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-beige text-brand-dark py-16 border-t border-brand-burgundy/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold tracking-tight mb-4 text-brand-burgundy">{BUSINESS_INFO.name}</h3>
            <p className="text-brand-text/70 mb-6 max-w-sm leading-relaxed">
              Experience the difference of premium mobile auto care. We treat every vehicle as if it were our own, delivering honesty, quality, and reliability right to your door.
            </p>
            <p className="text-sm text-brand-text/40">
              © {new Date().getFullYear()} {BUSINESS_INFO.fullName}. All rights reserved.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-brand-dark/50">Navigation</h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map(item => (
                <li key={item.label}>
                  <a href={item.href} className="text-brand-text/70 hover:text-brand-red transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-brand-dark/50">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="text-brand-text/70 hover:text-brand-red transition-colors font-medium">
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-brand-text/70 hover:text-brand-red transition-colors break-words">
                  {BUSINESS_INFO.email}
                </a>
              </li>
              <li className="text-brand-text/70">
                {BUSINESS_INFO.areas.join(", ")}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;