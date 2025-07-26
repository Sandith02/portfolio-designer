import React, { useState } from 'react';

const DesignGallery = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Design work cards positioned around a circle
  const designCards = [
    {
      id: 1,
      image: "/ydmun.jpg",
      title: "YDMUN Branding",
      category: "Brand Identity",
      position: "top-16 left-16",
      rotation: "-rotate-12",
      size: "w-32 h-40"
    },
    {
      id: 2,
      image: "/WADP-1.png",
      title: "Traction 01 - Design VC",
      category: "IEEE Branding",
      position: "top-8 left-64",
      rotation: "rotate-6",
      size: "w-36 h-28"
    },
    {
      id: 3,
      image: "/sacmunc.jpg",
      title: "SACMUNC Branding",
      category: "Brand Identity",
      position: "top-20 right-20",
      rotation: "rotate-15",
      size: "w-32 h-32"
    },
    {
      id: 4,
      image: "/TV54FDPS1.png",
      title: "Villa 54 Branding",
      category: "Brand Identity",
      position: "top-56 right-8",
      rotation: "-rotate-8",
      size: "w-28 h-36"
    },
    {
      id: 5,
      image: "/WhatsApp Image 2024-11-29 at 03.51.04_2b770cea.jpg",
      title: "SAC Rugby",
      category: "Brand Identity",
      position: "bottom-32 right-16",
      rotation: "rotate-12",
      size: "w-40 h-32"
    },
    {
      id: 6,
      image: "/WhatsApp Image 2024-11-29 at 03.49.31_596e4484.jpg",
      title: "Club Branding",
      category: "Brand Identity",
      position: "bottom-16 right-64",
      rotation: "-rotate-6",
      size: "w-32 h-28"
    },
    {
      id: 7,
      image: "/SimpleTickets.png",
      title: "Simple Tickets",
      category: "Web Design",
      position: "bottom-20 left-20",
      rotation: "rotate-9",
      size: "w-28 h-40"
    },
    {
      id: 8,
      image: "/Untitled-2.png",
      title: "Song writing",
      category: "Music",
      position: "bottom-48 left-8",
      rotation: "-rotate-15",
      size: "w-36 h-32"
    },
    {
      id: 9,
      image: "/Main.png",
      title: "MicroMaze 2.0",
      category: "IEEE Branding",
      position: "top-48 left-32",
      rotation: "rotate-3",
      size: "w-26 h-32"
    },
    {
      id: 10,
      image: "/dp.png",
      title: "Competition Design",
      category: "Team Branding",
      position: "top-32 right-48",
      rotation: "-rotate-9",
      size: "w-32 h-26"
    },
    {
      id: 11,
      image: "/adobiq.png",
      title: "Platform Design",
      category: "Product Design",
      position: "bottom-56 right-40",
      rotation: "rotate-6",
      size: "w-28 h-32"
    }
  ];

  return (
    <section id="design" className="px-4 md:px-12 py-20  relative overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Section - Mobile First Approach */}
        <div className="relative mb-20">
          
          {/* Mobile Grid Layout (Hidden on Desktop) */}
          <div className="block lg:hidden">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-light mb-6 leading-tight text-gray-900">
                Drop of my Creativity
                <br />
                <span className="font-medium">feel it❤️‍🔥</span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed px-4">
                Transform your ideas into breathtaking visuals with creative design thinking 
                and innovative solutions.
              </p>

              <button className="bg-black text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors shadow-lg inline-flex items-center">
                <span className="mr-3">Start Exploring Now</span>
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            </div>

            {/* Mobile Grid of Design Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 px-4">
              {designCards.slice(0, 9).map((card) => (
                <div
                  key={card.id}
                  className="aspect-square cursor-pointer transition-all duration-500 hover:scale-105"
                  onTouchStart={() => setHoveredCard(card.id)}
                  onTouchEnd={() => setHoveredCard(null)}
                >
                  <div className="w-full h-full bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-500 relative">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Mobile Overlay - Always visible but subtle */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center p-3">
                      <div className="text-white text-center">
                        <div className="text-xs font-medium mb-1 uppercase tracking-wider opacity-90">
                          {card.category}
                        </div>
                        <div className="text-xs font-semibold leading-tight">
                          {card.title}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Circular Layout (Hidden on Mobile) */}
          <div className="hidden lg:block relative h-[700px]">
            
            {/* Design Work Cards */}
            {designCards.map((card) => (
              <div
                key={card.id}
                className={`absolute ${card.position} ${card.rotation} ${card.size} cursor-pointer transition-all duration-500 hover:scale-110 hover:rotate-0 hover:z-30`}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="w-full h-full bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Hover Overlay with Info */}
                  <div className={`absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center transition-opacity duration-300 ${
                    hoveredCard === card.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="text-white text-center p-3">
                      <div className="text-xs font-medium mb-1 uppercase tracking-wider opacity-80">
                        {card.category}
                      </div>
                      <div className="text-sm font-semibold leading-tight">
                        {card.title}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Center Content */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="text-center max-w-2xl">
                <h2 className="text-5xl lg:text-6xl font-light mb-6 leading-tight text-gray-900">
                  Drop of my Creativity
                  <br />
                  <span className="font-medium">feel it❤️‍🔥</span>
                </h2>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Transform your ideas into breathtaking visuals with creative design thinking 
                  and innovative solutions.
                </p>

                <button className="bg-black text-white px-8 py-4 rounded-full text-sm font-medium transition-colors shadow-lg inline-flex items-center">
                  <span className="mr-3">Scroll to Explore</span>
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Simple Project Details */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-light mb-4">Selected Work</h3>
            <p className="text-gray-600">
              A closer look at key projects and creative contributions
            </p>
          </div>

          {/* Project List */}
          <div className="space-y-12">
            
            {/* IEEE RAS Branding */}
            <div className="border-b border-gray-100 pb-12">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-xl font-medium mb-2">IEEE RAS Event Branding</h4>
                  <p className="text-sm text-gray-500 mb-4">Vice Chair & Volunteer • 2024 - Present</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Leading the visual identity for MicroMaze 2.0 as Public Visibility Vice Chair, led Traction 01 as Design Vice Chair, and contributed to Robotnexus 02 as a volunteer. 
                  </p>
                </div>
                <div className="md:col-span-2">
                  <div className="flex flex-wrap gap-3">
                    <a href="https://www.instagram.com/ieeeras_iit/" target="_blank" rel="noopener noreferrer" 
                       className="text-xs px-3 py-1 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
                      Instagram
                    </a>
                    <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">Brand Identity</span>
                    <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">Event Design</span>
                    <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">Leadership</span>
                    <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">Marketing</span>
                  </div>
                </div>
              </div>
            </div>

            {/* DoctorAid Platform */}
            <div className="border-b border-gray-100 pb-12">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-xl font-medium mb-2">DoctorAid Healthcare Platform</h4>
                  <p className="text-sm text-gray-500 mb-4">Lead Designer & Project Leader • 2024 - 2025</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Led the UI/UX design process for a healthcare platform. Designed web app for doctors
                    and mobile app for patients, focusing on accessibility and user experience. Did the marketing and branding for the platform.
                  </p>
                </div>
                <div className="md:col-span-2">
                  <div className="flex flex-wrap gap-3">
                    <a href="https://doctoraid.site" target="_blank" rel="noopener noreferrer"
                       className="text-xs px-3 py-1 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
                      Website
                    </a>
                    <a href="https://www.instagram.com/doctoraid.official" target="_blank" rel="noopener noreferrer"
                       className="text-xs px-3 py-1 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
                      Instagram
                    </a>
                    <a href="https://github.com/DoctorAid" target="_blank" rel="noopener noreferrer"
                       className="text-xs px-3 py-1 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
                      GitHub
                    </a>
                    <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">UI/UX Design</span>
                    <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">Healthcare</span>
                    <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">Poster Design</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Rugby Logo */}
            <div className="border-b border-gray-100 pb-12">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-xl font-medium mb-2">School's Brand Identity</h4>
                  <p className="text-sm text-gray-500 mb-4">Creative Design Lead • 2018 - 2021</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Official rugby team logo design representing team spirit and heritage
                    and managed comprehensive design projects across
                    academic contexts.  
                  </p>
                </div>
                <div className="md:col-span-2">
                  <div className="flex flex-wrap gap-3">
                    <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">Logo Design</span>
                    <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">Poster Design</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Villa Management */}
            <div className="border-b border-gray-100 pb-12">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-xl font-medium mb-2">Villa Management, Marketing</h4>
                  <p className="text-sm text-gray-500 mb-4">Designer & Developer • 2025</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Management and marketing for family-owned villa business.
                    Developed a QR-based villa booking interface focused on tourist experience.
                    Mobile-first design as "web-as-app" for seamless villa discovery and booking.
                  </p>
                </div>
                <div className="md:col-span-2">
                  <div className="flex flex-wrap gap-3">
                    <a href="https://the-villa-54.vercel.app/" target="_blank" rel="noopener noreferrer"
                       className="text-xs px-3 py-1 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
                      Demo
                    </a>
                    <a href="https://github.com/Sandith02/glamour_tech_villa_management_suite" target="_blank" rel="noopener noreferrer"
                       className="text-xs px-3 py-1 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
                      GitHub
                    </a>
                    <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">Web Design</span>
                    <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">Tourism UX</span>
                    <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">web-as-app concept</span>
                  </div>
                </div>
              </div>
            </div>

            {/* SACMUNC & YDMUN Leadership */}
            <div className="border-b border-gray-100 pb-12">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-xl font-medium mb-2">SACMUNC & YDMUN Branding</h4>
                  <p className="text-sm text-gray-500 mb-4">Head of International Press Corps • 2019</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Led International Press Corps division at premier Model United Nations conference of the school. 
                    Managed media strategy, coordinated public relations, and oversaw international diplomatic event coverage.
                  </p>
                </div>
                <div className="md:col-span-2">
                  <div className="flex flex-wrap gap-3">
                    <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">Media Strategy</span>
                    <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">Event Leadership</span>
                    <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">Public Relations</span>
                    <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">MUN Conferences</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Moon In Two Music Project */}
            <div className="border-b border-gray-100 pb-12">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-xl font-medium mb-2">Moon In Two</h4>
                  <p className="text-sm text-gray-500 mb-4">Music Artist • Creative Project</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Independent music project creating original songs with AI voice technology. 
                    Write all lyrics personally and explore innovative approaches to music production and storytelling.
                  </p>
                </div>
                <div className="md:col-span-2">
                  <div className="flex flex-wrap gap-3">
                    <a href="https://www.youtube.com/@MoonInTwoMusic" target="_blank" rel="noopener noreferrer"
                       className="text-xs px-3 py-1 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
                      YouTube
                    </a>
                    <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">Music Creation</span>
                    <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">Lyric Writing</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Creative Explorations */}
            <div>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-xl font-medium mb-2">Photography & Exploration</h4>
                  <p className="text-sm text-gray-500 mb-4">Visual Storyteller </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Focuses on landscape, portrait, and street photography with emphasis on visual storytelling
                  </p>
                </div>
                <div className="md:col-span-2">
                  <div className="flex flex-wrap gap-3">
                    {/* <a href="https://behance.net/sandith" target="_blank" rel="noopener noreferrer"
                       className="text-xs px-3 py-1 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
                      Behance
                    </a>
                    <a href="https://instagram.com/thedesignerinme" target="_blank" rel="noopener noreferrer"
                       className="text-xs px-3 py-1 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
                      Instagram
                    </a> */}
                    <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">Visual Storytelling</span>
                    <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">Street Photography</span>
                    <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">Nature Photography</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignGallery;