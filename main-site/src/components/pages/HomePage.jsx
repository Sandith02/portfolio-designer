import React from 'react';

const HomePage = () => {
  const projects = [
    {
      title: "DoctorAid",
      subtitle: "Healthcare UX/UI Design",
      description: "Complete design system for healthcare platform with user research, prototyping, and brand identity.",
      year: "2024"
    },
    {
      title: "Villa Management",
      subtitle: "Brand & Digital Experience",
      description: "End-to-end brand design and digital experience for luxury villa business.",
      year: "2025"
    },
    {
      title: "IEEE Design Leadership",
      subtitle: "Creative Direction",
      description: "Leading visual design for major events - posters, merchandise, and brand campaigns.",
      year: "2025"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: 'Raleway' }}>
      
      {/* Header */}
      <header className="flex justify-between items-center px-12 py-8">
        <div className="font-bold text-xl">ST</div>
        <nav className="hidden md:flex space-x-12 text-sm">
          <a href="#work" className="hover:text-gray-600 transition-colors">Work</a>
          <a href="#about" className="hover:text-gray-600 transition-colors">About</a>
          <a href="#contact" className="hover:text-gray-600 transition-colors">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
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

      {/* Work Section */}
      <section id="work" className="px-12 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          
          <div className="mb-16">
            <h2 className="text-3xl font-light mb-4">Selected Work</h2>
            <p className="text-gray-600">Design projects showcasing my approach to solving complex problems</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-[4/3] bg-white rounded-lg mb-6 flex items-center justify-center hover:shadow-lg transition-shadow duration-300">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                      {index === 0 && '🏥'}
                      {index === 1 && '🏖️'}
                      {index === 2 && '⚡'}
                    </div>
                    <div className="text-sm text-gray-500">{project.year}</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-medium mb-2 group-hover:text-gray-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{project.subtitle}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-12 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            
            <div>
              <h2 className="text-3xl font-light mb-6">About</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                I'm Sandith, a Computer Science student at IIT with a passion for design thinking. 
                I believe great products start with understanding people, not technology.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Currently leading design initiatives at IEEE and working on healthcare and 
                tourism platforms that solve real problems through thoughtful design.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-6">Skills</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-600 mb-1">UI/UX Design</div>
                  <div className="text-xs text-gray-500">User Research, Prototyping, Design Systems</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Brand Design</div>
                  <div className="text-xs text-gray-500">Identity, Guidelines, Marketing Materials</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Development</div>
                  <div className="text-xs text-gray-500">React, Node.js, Tailwind CSS</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Creative Direction</div>
                  <div className="text-xs text-gray-500">Strategy, Team Leadership, Campaign Design</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-12 py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-6">Let's work together</h2>
          <p className="text-gray-600 mb-12">
            I'm always interested in new opportunities and creative challenges.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm">
            <a href="mailto:lhthenuwara@gmail.com" className="hover:text-gray-600 transition-colors">
              lhthenuwara@gmail.com
            </a>
            <a href="tel:+94766926418" className="hover:text-gray-600 transition-colors">
              +94 76 692 6418
            </a>
            <a href="#" className="hover:text-gray-600 transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-12 py-8 text-center">
        <div className="text-xs text-gray-500">
          © 2025 Sandith Thenuwara
        </div>
      </footer>
    </div>
  );
};

export default HomePage;