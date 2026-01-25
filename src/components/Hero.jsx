import React, { useEffect, useState } from 'react';

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-900 via-red-800 to-rose-900">
      
      {/* Animation Styles */}
      <style>{`
        @keyframes flameFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-3px);
          }
        }
      `}</style>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-32 z-10 py-8 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Image Stack */}
          <div className={`relative flex items-center justify-center order-2 lg:order-1 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            
            {/* Decorative Circle Background */}
            <div className="absolute w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] lg:w-[380px] lg:h-[380px] bg-gradient-to-br from-amber-400/20 to-rose-400/20 rounded-full blur-3xl opacity-60"></div>
            
            {/* Main Image Container */}
            <div className="relative z-10 w-full max-w-[280px] sm:max-w-[360px] lg:max-w-[450px]">
              <div className="relative group">
                
                {/* Background Image (image2.jpg) - Behind with stroke only */}
                <div className="absolute top-6 left-6 sm:top-8 sm:left-8 lg:top-10 lg:left-10 w-full h-full">
                  <div className="w-full h-[280px] sm:h-[360px] lg:h-[450px] overflow-hidden shadow-xl border-4 border-red-300/60" style={{ borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%', background: 'transparent' }}>
                  
                  </div>
                </div>

               
                
                {/* Main Image (image1.jpg) - Front with original shape */}
                <div className="relative w-full h-[280px] sm:h-[360px] lg:h-[450px] overflow-hidden shadow-2xl transform transition-transform duration-700 hover:scale-105 bg-white" style={{ borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%' }}>
                  
                  <img 
                    src="/image1.jpg" 
                    alt="Candle of Hope International" 
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-red-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Decorative Corner Accents */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-8 h-8 sm:w-12 sm:h-12 border-t-4 border-l-4 border-white/40 rounded-tl-2xl"></div>
                  <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-8 h-8 sm:w-12 sm:h-12 border-b-4 border-r-4 border-white/40 rounded-br-2xl"></div>
                </div>
              </div>

              {/* Candle Icon - Static */}
              
            </div>
          </div>

          {/* Right Content */}
          <div className={`text-white space-y-3 sm:space-y-4 order-1 lg:order-2 transition-all duration-1000 delay-300 relative ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            
            {/* Subtle Background Decoration */}
            <div className="absolute -inset-10 sm:-inset-20 bg-gradient-to-br from-amber-500/10 via-transparent to-rose-500/10 rounded-3xl blur-3xl pointer-events-none"></div>
            
            {/* Main Heading - Larger */}
            <div className="space-y-1 relative z-10">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight font-numans">
                <span className="block text-white drop-shadow-2xl">
                  Candle of Hope
                </span>
              </h1>
              
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-amber-50 drop-shadow-xl font-numans">
                International
              </h2>
            </div>

            {/* Elegant Divider */}
            <div className="w-16 sm:w-20 h-0.5 bg-gradient-to-r from-white/80 via-white/40 to-transparent"></div>

            {/* Mission Statement - One Paragraph */}
            <p className="text-sm sm:text-sm md:text-base leading-relaxed text-gray-100 font-light max-w-xl relative z-10">
              Empowering rural communities through transformative educational and social initiatives across East and Northeast India. We are dedicated to bringing hope, opportunity, and sustainable development to underserved regions through comprehensive community development, creating lasting change for thousands of families.
            </p>
            
            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2 sm:pt-3 relative z-10">
              
              <button 
                className="group relative px-6 sm:px-7 py-2.5 sm:py-3 bg-white text-red-900 text-xs sm:text-sm font-bold rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-white/30 focus:outline-none focus:ring-4 focus:ring-white/50"
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
                className="group relative px-6 sm:px-7 py-2.5 sm:py-3 bg-transparent text-white text-xs sm:text-sm font-bold rounded-full border-2 border-white/90 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:bg-white hover:text-red-900 hover:scale-105 hover:shadow-xl hover:shadow-white/30 focus:outline-none focus:ring-4 focus:ring-white/50"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Join Our Mission
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;