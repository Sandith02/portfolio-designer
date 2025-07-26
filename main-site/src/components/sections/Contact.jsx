import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="px-4 md:px-12 py-20 ">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-light mb-6 leading-tight">
          Let's work <span className="font-medium">together</span>
        </h2>
        <p className="text-lg text-gray-600 mb-12 leading-relaxed">
          I'm always interested in new opportunities and creative challenges.
        </p>
       
        {/* Contact Methods */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm mb-16">
          <a href="mailto:lhthenuwara@gmail.com" className="flex items-center space-x-2 hover:text-gray-600 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>lhthenuwara@gmail.com</span>
          </a>
          <a href="tel:+94766926418" className="flex items-center space-x-2 hover:text-gray-600 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>+94 76 692 6418</span>
          </a>
          <a href="https://linkedin.com/in/sandith-sithmaka" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-gray-600 transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Portfolio Links */}
        <div className="border-t border-gray-200 pt-16">
          <h3 className="text-xl font-light mb-8 text-gray-800">
            Explore my other <span className="font-medium">expertise</span>
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Developer Portfolio */}
            <a href="#" className="group bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-all duration-300">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-gray-200 transition-colors">
                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h4 className="font-medium text-gray-900 mb-2">#TheDeveloperInMe</h4>
              <p className="text-sm text-gray-600">Full-stack development & technical solutions</p>
            </a>

            {/* Business Analyst Portfolio */}
            <a href="#" className="group bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-all duration-300">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-gray-200 transition-colors">
                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="font-medium text-gray-900 mb-2">#TheAnalystInMe</h4>
              <p className="text-sm text-gray-600">Strategic planning & business solutions</p>
            </a>

            {/* Current Designer Portfolio */}
            <a href="#" className="group bg-black text-white rounded-lg p-6 transition-all duration-300 sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h4 className="font-medium mb-2">#TheDesignerInMe</h4>
              <p className="text-sm text-white/70">Creative design & visual solutions</p>
              <div className="mt-3 text-xs text-white/50">Current site</div>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;