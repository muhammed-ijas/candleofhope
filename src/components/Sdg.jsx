import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../Varients';

function SDG() {
  const sdgs = [
    {
      id: 3,
      number: "3",
      title: "Good Health and Well-being",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500",
      borderColor: "border-green-500",
      description: "Promoting health through medical camps and community wellness programs.",
      icon: (
        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      )
    },
    {
      id: 4,
      number: "4",
      title: "Quality Education",
      color: "from-red-600 to-red-700",
      bgColor: "bg-red-600",
      borderColor: "border-red-600",
      description: "Providing quality education through learning centres and teacher training.",
      icon: (
        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
        </svg>
      )
    },
    {
      id: 5,
      number: "5",
      title: "Gender Equality",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500",
      borderColor: "border-orange-500",
      description: "Empowering women through skill development and livelihood programs.",
      icon: (
        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z"/>
        </svg>
      )
    },
    {
      id: 8,
      number: "8",
      title: "Decent Work and Economic Growth",
      color: "from-red-700 to-red-900",
      bgColor: "bg-red-800",
      borderColor: "border-red-800",
      description: "Creating employment opportunities through industry partnerships.",
      icon: (
        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
        </svg>
      )
    },
    {
      id: 10,
      number: "10",
      title: "Reduced Inequalities",
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-500",
      borderColor: "border-pink-500",
      description: "Supporting marginalized communities with humanitarian programs.",
      icon: (
        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="relative flex items-center py-12 lg:py-16 overflow-hidden bg-gradient-to-br from-red-950 via-red-900 to-rose-950">
      
      {/* Background Decorations */}
      <style>{`
        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>

      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(255 255 255) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Gradient Accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-red-400/20 to-transparent opacity-60 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-pink-400/20 to-transparent opacity-60 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-amber-500/10 to-transparent opacity-40 blur-3xl rounded-full"></div>

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
         

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-white mb-3">
            SDG's in Action
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-white via-red-300 to-pink-300 rounded-full mx-auto mb-4"></div>
          <p className="text-sm text-white/90 max-w-2xl mx-auto">
            Aligning our initiatives with the UN Sustainable Development Goals
          </p>
        </motion.div>

        {/* SDG Cards Grid - 5 columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
          {sdgs.map((sdg, index) => (
            <motion.div
              key={sdg.id}
              variants={fadeIn("up", 0.1 * index)}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                margin: "-100px 0px -100px 0px",
              }}
              className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-transparent"
              style={{
                animation: `floatSlow ${4 + index * 0.5}s ease-in-out infinite`
              }}
            >
              {/* Colored Header with Icon */}
              <div className={`relative bg-gradient-to-br ${sdg.color} p-4 text-white`}>
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                <div className="relative z-10">
                  <div className="flex flex-col items-center text-center">
                    <div className={`inline-block ${sdg.bgColor} text-white font-bold text-lg px-3 py-1 rounded-lg mb-2`}>
                      {sdg.number}
                    </div>
                    <h3 className="text-sm font-bold leading-tight">
                      {sdg.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Description Section */}
              <div className="p-4">
                <p className="text-gray-600 leading-relaxed text-xs line-clamp-3">
                  {sdg.description}
                </p>

                {/* Bottom Accent Line */}
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <div className={`w-12 h-0.5 bg-gradient-to-r ${sdg.color} rounded-full group-hover:w-full transition-all duration-500`}></div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${sdg.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}

export default SDG;