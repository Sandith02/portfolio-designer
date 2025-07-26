import React from 'react';

const About = () => {
  return (
    <section id="about" className="px-12 py-20 ">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light mb-4">About</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Designer • Brand Strategist • Creative Thinker
          </p>
        </div>

          <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Main About */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-medium mb-6">The Story</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I'm Sandith Sithmaka, a Computer Science student at IIT affialiated with UOW, a alumnus of St. Aloysius' College, Galle who believes in the power of 
                <span className="text-black font-medium"> visual thinking</span>. My approach combines 
                analytical problem-solving with creative intuition.
              </p>
              <p>
                My creative journey spans <span className="text-black font-medium">brand identity design</span>, 
                <span className="text-black font-medium"> video creation</span>, and 
                <span className="text-black font-medium"> photography</span>. I've always been 
                drawn to creating visual experiences that resonate and tell meaningful stories.
              </p>
              <p>
                Currently leading <span className="text-black font-medium">design initiatives at IEEE </span> 
                and crafting solutions for healthcare and tourism platforms and for my family business,  <span className="text-black font-medium">"The Villa 54 by GLAMOUR Co."</span>
              </p>
            </div>
          </div>

          {/* Skills Grid */}
          <div>
            <h3 className="text-xl font-medium mb-6">Creative Arsenal</h3>
            <div className="space-y-6">
              
              <div className="border-l-2 border-gray-300 pl-4">
                <div className="text-sm font-medium text-gray-900 mb-1">Visual Design</div>
                <div className="text-xs text-gray-500 leading-relaxed">
                  UI/UX Design, Brand Identity, Graphic Design, Photography, Design Systems
                </div>
              </div>

              <div className="border-l-2 border-gray-300 pl-4">
                <div className="text-sm font-medium text-gray-900 mb-1">Creative Direction</div>
                <div className="text-xs text-gray-500 leading-relaxed">
                  Campaign Design, Event Branding, Video Creation, Merchandise Design
                </div>
              </div>

              {/* <div className="border-l-2 border-gray-300 pl-4">
                <div className="text-sm font-medium text-gray-900 mb-1">Digital Craft</div>
                <div className="text-xs text-gray-500 leading-relaxed">
                  React, Node.js, Tailwind CSS, Prototyping, User Research
                </div>
              </div> */}

              <div className="border-l-2 border-gray-300 pl-4">
                <div className="text-sm font-medium text-gray-900 mb-1">Creative Exploration</div>
                <div className="text-xs text-gray-500 leading-relaxed">
                  Music Production, Songwriting, Visual Storytelling, Content Creation
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Creative Philosophy */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-lg font-medium mb-4">Design Philosophy</h3>
            <p className="text-gray-600 leading-relaxed">
                "Great design isn't just about how it looks—it's about how it thinks. 
              Every pixel, every interaction, every brand moment should tell a story 
              and solve a problem. My multidisciplinary background in visual design, 
              and technology allows me to approach problems from unexpected angles."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
