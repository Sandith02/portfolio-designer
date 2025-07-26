import React from 'react';

const Contact = () => {
  return (
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
  );
};

export default Contact;