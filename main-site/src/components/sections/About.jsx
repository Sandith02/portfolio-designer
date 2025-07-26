import React from 'react';

const About = () => {
  return (
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
  );
};

export default About;