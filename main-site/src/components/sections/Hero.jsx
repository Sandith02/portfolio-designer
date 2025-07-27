import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Start immediately to reduce delay after splash
    setIsLoaded(true);
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
    <section id="hero" className="px-4 md:px-12 flex items-center h-[100vh] pt-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
         
          {/* Left Content */}
          <div className={`transition-all duration-600 ease-out ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}>
            <h1 className={`text-5xl lg:text-6xl font-light leading-tight mb-8 transition-all duration-700 ease-out delay-75 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}>
              Design is thinking<br />
              made <span className="font-medium">visual</span>
            </h1>
           
            <p className={`text-lg text-gray-600 mb-8 leading-relaxed transition-all duration-600 ease-out delay-150 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}>
              Creative Designer, brand strategist, UI/UX enthusiast, and Technologist crafting meaningful
              digital experiences through research-driven design.
            </p>
           
            <div className={`flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 transition-all duration-600 ease-out delay-225 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}>
              <button 
                onClick={scrollToWork}
                className="bg-black text-white px-8 py-3 text-sm hover:bg-gray-800 transition-colors duration-300"
              >
                View Work
              </button>
              <button 
                onClick={downloadCV}
                className="border border-gray-300 px-8 py-3 text-sm hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
              >
                Download CV
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className={`relative transition-all duration-700 ease-out delay-100 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}>
            <div className="aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden group">
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