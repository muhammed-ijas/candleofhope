import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../Varients';

function SDG() {
  return (
    <section className="relative flex items-center py-12 lg:py-16 overflow-hidden bg-white">
      
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(220 38 38) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Gradient Accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-red-100 to-transparent opacity-40 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-pink-100 to-transparent opacity-40 blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-16 xl:px-24 z-10">
        
        {/* Header Section */}
        <motion.div 
          variants={fadeIn("down", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            margin: "-100px 0px -100px 0px",
          }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-gray-900 mb-3">
            SDG's in Action
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 via-red-500 to-pink-500 rounded-full mx-auto mb-4"></div>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            Aligning our initiatives with the UN Sustainable Development Goals
          </p>
        </motion.div>

        {/* SDG Images Grid - 5 columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {['sdg3.png', 'sdg4.png', 'sdg5.png', 'sdg8.png', 'sdg10.png'].map((image, index) => (
            <motion.div
              key={image}
              variants={fadeIn("up", 0.1 * index)}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                margin: "-100px 0px -100px 0px",
              }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-105">
                {/* Image with stroke */}
                <div className="relative p-1 bg-white rounded-lg shadow-lg border-2 border-gray-200 hover:border-red-400 transition-colors duration-300">
                  <img 
                    src={`/${image}`} 
                    alt={`SDG ${image.replace('sdg', '').replace('.png', '')}`}
                    className="w-full h-auto rounded-md"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default SDG;