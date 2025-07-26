import React from 'react';

const Hero = () => {
  return (
    <section className="px-12 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-light leading-tight mb-8">
              Design is thinking<br />
              made <span className="font-medium">visual</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              UI/UX Designer and Creative Technologist crafting meaningful 
              digital experiences through research-driven design.
            </p>
            
            <div className="flex space-x-6">
              <button className="bg-black text-white px-8 py-3 text-sm hover:bg-gray-800 transition-colors">
                View Work
              </button>
              <button className="border border-gray-300 px-8 py-3 text-sm hover:border-gray-400 transition-colors">
                Download CV
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="/myPic2.png"
                alt="Sandith Thenuwara"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-4 right-4 bg-white px-3 py-1 text-xs font-medium rounded-full">
              Designer
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;