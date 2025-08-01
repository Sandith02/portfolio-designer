import React from 'react';
import Header from '../ui/Header';
import Hero from '../sections/Hero';
import Projects from '../sections/Projects';
import About from '../sections/About';
import Contact from '../sections/Contact';
import Footer from '../ui/Footer';
import DesignGallery from '../sections/DesignGallery';
const HomePage = () => {
  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: 'Raleway' }}>
      <Header />
      <Hero />
      <About />
      <DesignGallery />
      {/* <Projects /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;