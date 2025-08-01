import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    // Detect if it's mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Set CSS custom property for viewport height
    const setVH = () => {
      // Use window.innerHeight for more accurate mobile viewport
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVH();
    
    // Update on resize and orientation change
    window.addEventListener('resize', setVH);
    window.addEventListener('orientationchange', () => {
      // Delay to let the browser finish orientation change
      setTimeout(setVH, 100);
    });

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('resize', setVH);
      window.removeEventListener('orientationchange', setVH);
    };
  }, []);

  const scrollToWork = () => {
    const workSection = document.getElementById('design');
    if (workSection) {
      workSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const downloadCV = () => {
    // You can replace this with the actual CV file path
    const cvUrl = '/cv.pdf'; // Make sure to place your CV in the public folder
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Sandith_Thenuwara_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section 
      id="hero" 
      className="px-4 md:px-12 flex items-center pt-24 pb-8 md:pt-20 md:pb-0"
      style={{
        minHeight: isMobile 
          ? 'calc(110vh - 96px)' // Increased to account for larger navbar
          : 'calc(var(--vh, 1vh) * 100)',
        height: isMobile 
          ? 'calc(100vh - 96px)'
          : 'calc(var(--vh, 1vh) * 100)'
      }}
    >
      <div className="max-w-6xl mx-auto w-full h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-16 items-center w-full">
         
          {/* Left Content */}
          <div className={`order-last lg:order-first transition-all duration-600 ease-out ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}>
            <h1 className={`text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-light leading-tight mb-3 md:mb-8 transition-all duration-700 ease-out delay-75 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}>
              Design is thinking<br />
              made <span className="font-medium">visual</span>
            </h1>
           
            <p className={`text-sm md:text-lg text-gray-600 mb-4 md:mb-8 leading-relaxed transition-all duration-600 ease-out delay-150 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}>
              Creative Designer, brand strategist, UI/UX enthusiast, and Technologist crafting meaningful
              digital experiences through research-driven design.
            </p>
           
            <div className={`flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 transition-all duration-600 ease-out delay-225 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}>
              <button
                onClick={scrollToWork}
                className="bg-black text-white px-6 md:px-8 py-2.5 md:py-3 text-sm hover:bg-gray-800 transition-colors duration-300 w-full sm:w-auto"
              >
                View Work
              </button>
              <button
                onClick={downloadCV}
                className="border border-gray-300 px-6 md:px-8 py-2.5 md:py-3 text-sm hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 w-full sm:w-auto"
              >
                Download CV
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className={`relative order-first lg:order-last transition-all duration-700 ease-out delay-100 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}>
            <div className="aspect-[4/5] md:aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden group max-h-96 md:max-h-none w-full md:max-w-none">
              <img
                src="/myPic2.png"
                alt="Sandith Thenuwara"
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                loading="eager"
                decoding="async"
              />
            </div>
           
            <div className={`absolute top-4 right-4 bg-white px-3 py-1 text-xs font-medium rounded-full shadow-sm transition-all duration-500 ease-out delay-300 hover:shadow-md ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'
            }`}>
              Designer
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;