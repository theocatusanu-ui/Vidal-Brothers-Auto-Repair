import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import WhyChooseUs from './components/sections/WhyChooseUs';
import ServiceAreas from './components/sections/ServiceAreas';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';

const App: React.FC = () => {
  return (
    <div className="antialiased text-brand-dark bg-brand-cream">
      <Header />
      <main>
        <Hero />
        <Services />
        <ServiceAreas />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;