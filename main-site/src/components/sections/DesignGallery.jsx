import React, { useState } from 'react';

const DesignGallery = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Design work cards positioned around a circle
  const designCards = [
    {
      id: 1,
      image: "/ydmun.jpg",
      title: "IEEE RAS Branding",
      category: "Brand Identity",
      position: "top-16 left-16",
      rotation: "-rotate-12",
      size: "w-32 h-40"
    },
    {
      id: 2,
      image: "/WADP-1.png",
      title: "DoctorAid Interface",
      category: "UI/UX Design",
      position: "top-8 left-64",
      rotation: "rotate-6",
      size: "w-36 h-28"
    },
    {
      id: 3,
      image: "/sacmunc.jpg",
      title: "Rugby Team Logo",
      category: "Logo Design",
      position: "top-20 right-20",
      rotation: "rotate-15",
      size: "w-32 h-32"
    },
    {
      id: 4,
      image: "/TV54FDPS1.png",
      title: "Typography Study",
      category: "Creative Work",
      position: "top-56 right-8",
      rotation: "-rotate-8",
      size: "w-28 h-36"
    },
    {
      id: 5,
      image: "/WhatsApp Image 2024-11-29 at 03.51.04_2b770cea.jpg",
      title: "Villa Booking UI",
      category: "Web Design",
      position: "bottom-32 right-16",
      rotation: "rotate-12",
      size: "w-40 h-32"
    },
    {
      id: 6,
      image: "/WhatsApp Image 2024-11-29 at 03.49.31_596e4484.jpg",
      title: "Event Materials",
      category: "Print Design",
      position: "bottom-16 right-64",
      rotation: "-rotate-6",
      size: "w-32 h-28"
    },
    {
      id: 7,
      image: "/SimpleTickets.png",
      title: "Mobile App Design",
      category: "App Design",
      position: "bottom-20 left-20",
      rotation: "rotate-9",
      size: "w-28 h-40"
    },
    {
      id: 8,
      image: "/Untitled-2.png",
      title: "Brand Strategy",
      category: "Visual Identity",
      position: "bottom-48 left-8",
      rotation: "-rotate-15",
      size: "w-36 h-32"
    },
    {
      id: 9,
      image: "/Main.png",
      title: "Creative Exploration",
      category: "Experimental",
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
    <section id="design" className="px-12 py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Floating Design Cards in Circle */}
        <div className="relative h-[700px] mb-20">
          
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
                Create Stunning Design
                <br />
                <span className="font-medium">Projects Instantly</span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
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
                  <p className="text-sm text-gray-500 mb-4">Design Vice Chair • 2025</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Led visual identity for MicroMaze 2.0, Traction 01, and Robotnexus events. 
                    Created cohesive brand experiences across digital and print materials.
                  </p>
                </div>
                <div className="md:col-span-2">
                  <div className="flex flex-wrap gap-3">
                    <a href="https://instagram.com/ieee_ras_iit" target="_blank" rel="noopener noreferrer" 
                       className="text-xs px-3 py-1 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
                      Instagram
                    </a>
                    <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">Brand Identity</span>
                    <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">Event Design</span>
                    <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">Leadership</span>
                  </div>
                </div>
              </div>
            </div>

            {/* DoctorAid Platform */}
            <div className="border-b border-gray-100 pb-12">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-xl font-medium mb-2">DoctorAid Healthcare Platform</h4>
                  <p className="text-sm text-gray-500 mb-4">Lead Designer & Project Leader • 2024</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Complete UI/UX design for healthcare platform. Designed web app for doctors 
                    and mobile app for patients, focusing on accessibility and user experience.
                  </p>
                </div>
                <div className="md:col-span-2">
                  <div className="flex flex-wrap gap-3">
                    <a href="https://doctoraid.site" target="_blank" rel="noopener noreferrer"
                       className="text-xs px-3 py-1 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
                      Website
                    </a>
                    <a href="https://instagram.com/doctoraid_official" target="_blank" rel="noopener noreferrer"
                       className="text-xs px-3 py-1 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
                      Instagram
                    </a>
                    <a href="https://github.com/DoctorAid" target="_blank" rel="noopener noreferrer"
                       className="text-xs px-3 py-1 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
                      GitHub
                    </a>
                    <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">UI/UX Design</span>
                    <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">Healthcare</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Rugby Logo */}
            <div className="border-b border-gray-100 pb-12">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-xl font-medium mb-2">Saint Aloysius Rugby Logo</h4>
                  <p className="text-sm text-gray-500 mb-4">Creative Design Lead • 2024</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Official rugby team logo design representing team spirit and heritage. 
                    Used across all team materials and merchandise.
                  </p>
                </div>
                <div className="md:col-span-2">
                  <div className="flex flex-wrap gap-3">
                    <a href="https://behance.net/sandith" target="_blank" rel="noopener noreferrer"
                       className="text-xs px-3 py-1 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
                      Behance
                    </a>
                    <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">Logo Design</span>
                    <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">Sports Branding</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Villa Management */}
            <div className="border-b border-gray-100 pb-12">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-xl font-medium mb-2">Villa Management Interface</h4>
                  <p className="text-sm text-gray-500 mb-4">Designer & Developer • 2025</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    QR-based villa booking interface focused on tourist experience. 
                    Mobile-first design for seamless villa discovery and booking.
                  </p>
                </div>
                <div className="md:col-span-2">
                  <div className="flex flex-wrap gap-3">
                    <a href="https://villa-demo.vercel.app" target="_blank" rel="noopener noreferrer"
                       className="text-xs px-3 py-1 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
                      Demo
                    </a>
                    <a href="https://github.com/sandith02/villa-management" target="_blank" rel="noopener noreferrer"
                       className="text-xs px-3 py-1 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
                      GitHub
                    </a>
                    <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">Web Design</span>
                    <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">Tourism UX</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Creative Explorations */}
            <div>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-xl font-medium mb-2">Creative Explorations</h4>
                  <p className="text-sm text-gray-500 mb-4">Creative Explorer • 2024-2025</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Personal design experiments including typography studies and visual compositions. 
                    Showcasing creative problem-solving and experimental design techniques.
                  </p>
                </div>
                <div className="md:col-span-2">
                  <div className="flex flex-wrap gap-3">
                    <a href="https://behance.net/sandith" target="_blank" rel="noopener noreferrer"
                       className="text-xs px-3 py-1 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
                      Behance
                    </a>
                    <a href="https://instagram.com/thedesignerinme" target="_blank" rel="noopener noreferrer"
                       className="text-xs px-3 py-1 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
                      Instagram
                    </a>
                    <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">Typography</span>
                    <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">Experimental</span>
                  </div>
                </div>
              </div>
            </div>

              {/* SACMUNC & YDMUN Leadership */}
            <div className="border-b border-gray-100 pb-12">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-xl font-medium mb-2">SACMUNC & YDMUN Leadership</h4>
                  <p className="text-sm text-gray-500 mb-4">Head of International Press Corps • 2019</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Led International Press Corps division at premier Model United Nations conferences. 
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
                    <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">Music Creation</span>
                    <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">AI Voice Technology</span>
                    <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">Lyric Writing</span>
                    <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">Independent Artist</span>
                    <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">Creative Innovation</span>
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