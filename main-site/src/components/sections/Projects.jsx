import React from 'react';

const Projects = () => {
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
  );
};

export default Projects;