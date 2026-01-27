import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../Varients';

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const images = [
    '/image1.png',
    '/image3.png',
    '/image4.png',
    '/image5.jpg',
    '/image6.jpg',
    '/image7.jpg',
    '/image8.jpg',
  ];

  // Preload all images on component mount
  useEffect(() => {
    setIsVisible(true);
    
    // Preload images to cache them
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
        setIsTransitioning(false);
      }, 500); // Half of transition duration
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const nextImageIndex = (currentImageIndex + 1) % images.length;

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const goToJoinUs = () => {
    window.location.href = '/join-us';
  };

  return (
    <section className="relative h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-950 via-red-900 to-rose-950">
      
      {/* Shining Squares Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-12 grid-rows-8 w-full h-full gap-4 p-4">
            {[...Array(96)].map((_, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg"
                style={{
                  animation: `shine 3s ease-in-out infinite`,
                  animationDelay: `${(i * 0.05)}s`
                }}
              ></div>
            ))}
          </div>
        </div>
        
        <div className="absolute top-20 right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes shine {
          0%, 100% {
            opacity: 0.1;
            transform: scale(1);
            box-shadow: 0 0 0 rgba(255, 255, 255, 0);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
            box-shadow: 0 0 20px rgba(251, 191, 36, 0.3);
          }
        }
        
        @keyframes rotateShine {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        .shine-border {
          animation: rotateShine 8s linear infinite;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-32 z-10 py-8 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Auto-Changing Image Stack */}
          <motion.div 
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              margin: "-100px 0px -100px 0px",
            }}
            className="relative flex items-center justify-center order-2 lg:order-1"
          >
            
            {/* Decorative Circle Background */}
            <div className="absolute w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] lg:w-[380px] lg:h-[380px] bg-gradient-to-br from-red-400/20 to-red-600/20 rounded-full blur-3xl opacity-60"></div>
            
            {/* Main Image Container */}
            <div className="relative z-10 w-full max-w-[280px] sm:max-w-[360px] lg:max-w-[450px]">
              <div className="relative group">
             
                {/* Animated Shine Border - Rotating */}
                <div className="absolute -inset-1 shine-border">
                  <div className="w-full h-full" style={{ borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%' }}>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-300 to-transparent opacity-60" style={{ 
                      borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%',
                      background: 'conic-gradient(from 0deg, transparent 0%, rgba(254, 202, 202, 0.9) 10%, rgba(254, 226, 226, 1) 20%, rgba(254, 202, 202, 0.9) 30%, transparent 40%, transparent 100%)'
                    }}></div>
                  </div>
                </div>
                
                {/* Image Container with Stacked Images */}
                <div className="relative w-full h-[280px] sm:h-[360px] lg:h-[450px]" style={{ perspective: '1000px' }}>
                  
                  {/* Background Image (Next Image) - Rotated and Behind */}
                  <div 
                    className="absolute -inset-2 w-[calc(100%+1rem)] h-[calc(100%+1rem)] -left-2 -top-2 overflow-hidden shadow-xl bg-gradient-to-br from-red-950 via-red-900 to-black" 
                    style={{ 
                      borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%',
                      transform: 'rotate(6deg) scale(0.95) translateZ(-50px)',
                      opacity: 0.5,
                      zIndex: 1
                    }}
                  >
                    <img 
                      src={images[nextImageIndex]} 
                      alt="Next background" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Main Image (Current Image) - Front */}
                  <div 
                    className="absolute inset-0 w-full h-full overflow-hidden shadow-2xl bg-gradient-to-br from-red-950 via-red-900 to-black" 
                    style={{ 
                      borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%',
                      transform: 'translateZ(0)',
                      zIndex: 2
                    }}
                  >
                    <div className={`w-full h-full transform transition-all duration-700 group-hover:scale-110 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                      <img 
                        src={images[currentImageIndex]} 
                        alt="Candle of Hope International" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-red-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Decorative Corner Accents */}
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-8 h-8 sm:w-12 sm:h-12 border-t-4 border-l-4 border-white/40 rounded-tl-2xl"></div>
                    <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-8 h-8 sm:w-12 sm:h-12 border-b-4 border-r-4 border-white/40 rounded-br-2xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div 
            variants={fadeIn("left", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              margin: "-100px 0px -100px 0px",
            }}
            className="text-white space-y-3 sm:space-y-4 order-1 lg:order-2 relative"
          >
            
            {/* Subtle Background Decoration */}
            <div className="absolute -inset-10 sm:-inset-20 bg-gradient-to-br from-red-500/10 via-transparent to-red-600/10 rounded-3xl blur-3xl pointer-events-none"></div>
            
            {/* Main Heading */}
            <div className="space-y-1 relative z-10">
              <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight font-numans">
                <span className="block text-white drop-shadow-2xl">
                  Candle of Hope
                </span>
              </h1>
              
              <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-semibold text-white drop-shadow-xl font-numans">
                International
              </h2>
            </div>

            {/* Elegant Divider */}
            <div className="w-16 sm:w-20 h-0.5 bg-gradient-to-r from-red-300/80 via-red-300/40 to-transparent"></div>

            {/* Mission Statement */}
            <p className="text-sm sm:text-sm md:text-base leading-relaxed text-white font-light max-w-xl relative z-10">
              Empowering rural communities through transformative educational and social initiatives across East and Northeast India. We are dedicated to bringing hope, opportunity, and sustainable development to underserved regions through comprehensive community development, creating lasting change for thousands of families.
            </p>
            
            {/* Call-to-Action Buttons */}
            <motion.div 
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                margin: "-100px 0px -100px 0px",
              }}
              className="flex flex-row gap-3 pt-2 sm:pt-3 relative z-10"
            >
              
              <button 
                onClick={scrollToAbout}
                className="group relative px-4 sm:px-7 py-2.5 sm:py-3 bg-white text-red-900 text-xs sm:text-sm font-bold rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-white/30 focus:outline-none focus:ring-4 focus:ring-white/50"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Learn More
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-50 to-rose-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
              
              <button 
                onClick={goToJoinUs}
                className="group relative px-4 sm:px-7 py-2.5 sm:py-3 bg-transparent text-white text-xs sm:text-sm font-bold rounded-full border-2 border-white/90 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:bg-white hover:text-red-900 hover:scale-105 hover:shadow-xl hover:shadow-white/30 focus:outline-none focus:ring-4 focus:ring-white/50"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Join Our Mission
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Hero;