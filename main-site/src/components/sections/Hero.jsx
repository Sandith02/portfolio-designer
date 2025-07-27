import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    // Start immediately to reduce delay after splash
    setIsLoaded(true);
    
    // Set initial viewport height
    const setVH = () => {
      const vh = window.innerHeight;
      setViewportHeight(vh);
      document.documentElement.style.setProperty('--vh', `${vh * 0.01}px`);
    };

    setVH();
    window.addEventListener('resize', setVH);
    window.addEventListener('orientationchange', setVH);

    return () => {
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
      className="px-4 md:px-12 flex items-center pt-20 md:pt-20"
      style={{
        minHeight: `calc(var(--vh, 1vh) * 100)`,
        height: `calc(var(--vh, 1vh) * 100)`
      }}
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
         
          {/* Left Content */}
          <div className={`transition-all duration-600 ease-out ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}>
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-6 md:mb-8 transition-all duration-700 ease-out delay-75 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}>
              Design is thinking<br />
              made <span className="font-medium">visual</span>
            </h1>
           
            <p className={`text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed transition-all duration-600 ease-out delay-150 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}>
              Creative Designer, brand strategist, UI/UX enthusiast, and Technologist crafting meaningful
              digital experiences through research-driven design.
            </p>
           
            <div className={`flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-6 transition-all duration-600 ease-out delay-225 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}>
              <button
                onClick={scrollToWork}
                className="bg-black text-white px-6 md:px-8 py-3 text-sm hover:bg-gray-800 transition-colors duration-300 w-full sm:w-auto"
              >
                View Work
              </button>
              <button
                onClick={downloadCV}
                className="border border-gray-300 px-6 md:px-8 py-3 text-sm hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 w-full sm:w-auto"
              >
                Download CV
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className={`relative transition-all duration-700 ease-out delay-100 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}>
            <div className="aspect-[4/5] md:aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden group">
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