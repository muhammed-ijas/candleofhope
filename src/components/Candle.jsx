import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export default function CandleAnimation() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  
  const quotes = [
    {
      left: ["Spreading light,", "one community", "at a time"],
      right: ["Empowering", "rural communities", "with hope"]
    },
    {
      left: ["Igniting change,", "through education", "and compassion"],
      right: ["Building futures,", "one village", "at a time"]
    },
    {
      left: ["Transforming lives,", "with sustainable", "development"],
      right: ["Creating pathways,", "to opportunity", "and growth"]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <div className="relative bg-black flex items-center justify-center overflow-hidden py-12 lg:py-20">
      
      {/* Animations */}
      <style>{`
        @keyframes flicker {
          0%, 100% {
            transform: scaleY(1) scaleX(1);
            opacity: 1;
          }
          25% {
            transform: scaleY(0.95) scaleX(1.05);
            opacity: 0.9;
          }
          50% {
            transform: scaleY(1.05) scaleX(0.95);
            opacity: 0.95;
          }
          75% {
            transform: scaleY(0.98) scaleX(1.02);
            opacity: 0.92;
          }
        }
        
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(255, 200, 50, 0.8),
                        0 0 40px rgba(255, 150, 50, 0.6),
                        0 0 60px rgba(255, 100, 50, 0.4);
          }
          50% {
            box-shadow: 0 0 30px rgba(255, 200, 50, 1),
                        0 0 60px rgba(255, 150, 50, 0.8),
                        0 0 90px rgba(255, 100, 50, 0.6);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes waxDrip {
          0% {
            height: 0;
            opacity: 0;
          }
          20% {
            opacity: 0.6;
          }
          100% {
            height: 100%;
            opacity: 0.3;
          }
        }
        
        @keyframes typewriter {
          0% {
            opacity: 0;
            transform: translateX(-20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeOut {
          0% {
            opacity: 1;
            transform: translateX(0);
          }
          100% {
            opacity: 0;
            transform: translateX(20px);
          }
        }
        
        .flame {
          animation: flicker 1.5s ease-in-out infinite;
        }
        
        .glow-effect {
          animation: glow 2s ease-in-out infinite;
        }
        
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
        
        .fade-in {
          animation: fadeIn 1.5s ease-out forwards;
        }
        
        .quote-line {
          animation: typewriter 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .quote-line:nth-child(1) {
          animation-delay: 0.2s;
        }
        
        .quote-line:nth-child(2) {
          animation-delay: 0.5s;
        }
        
        .quote-line:nth-child(3) {
          animation-delay: 0.8s;
        }
      `}</style>

      {/* Glowing Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-64 h-64 bg-orange-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          
          {/* Left Quote - Hidden on mobile */}
          <motion.div 
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              margin: "-100px 0px -100px 0px",
            }}
            className="hidden lg:block text-right"
          >
            <div className="space-y-4">
              <svg className="w-16 h-16 ml-auto text-orange-400 opacity-40 mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
              </svg>
              <div key={`left-${currentQuoteIndex}`}>
                <p className="quote-line text-2xl sm:text-3xl lg:text-4xl text-white font-bold leading-relaxed tracking-wide">
                  {quotes[currentQuoteIndex].left[0]}
                </p>
                <p className="quote-line text-2xl sm:text-3xl lg:text-4xl font-bold leading-relaxed tracking-wide">
                  <span className="text-orange-300">{quotes[currentQuoteIndex].left[1]}</span>
                </p>
                <p className="quote-line text-2xl sm:text-3xl lg:text-4xl text-white font-bold leading-relaxed tracking-wide">
                  {quotes[currentQuoteIndex].left[2]}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Center - Candle */}
          <motion.div 
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              margin: "-100px 0px -100px 0px",
            }}
            className="flex flex-col items-center justify-center gap-8"
          >
            <div className="relative float-animation" style={{ animationDelay: '0.5s' }}>
              
              {/* Flame */}
              <div className="relative mx-auto mb-2" style={{ width: '50px', height: '70px' }}>
                {/* Outer Glow */}
                <div className="absolute inset-0 glow-effect rounded-full" style={{
                  background: 'radial-gradient(circle, rgba(255,200,50,0.8) 0%, rgba(255,150,50,0.4) 40%, transparent 70%)',
                  filter: 'blur(15px)',
                  transform: 'translateY(-15px)'
                }}></div>
                
                {/* Main Flame */}
                <div className="flame absolute left-1/2 -translate-x-1/2" style={{
                  width: '40px',
                  height: '60px',
                  background: 'linear-gradient(to top, #ff6b00 0%, #ff8c00 20%, #ffa500 40%, #ffcc00 60%, #fff4e6 100%)',
                  borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                  transformOrigin: 'bottom center'
                }}>
                  {/* Inner Flame */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{
                    width: '20px',
                    height: '35px',
                    background: 'linear-gradient(to top, #ffcc00 0%, #fff4e6 50%, #ffffff 100%)',
                    borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                    opacity: 0.9
                  }}></div>
                </div>
                
                {/* Wick */}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-0" style={{
                  width: '3px',
                  height: '20px',
                  background: 'linear-gradient(to bottom, #2c1810 0%, #1a0f08 100%)',
                  borderRadius: '2px'
                }}></div>
              </div>

              {/* Candle Body */}
              <div className="relative mx-auto" style={{ width: '70px' }}>
                {/* Candle Body */}
                <div className="relative mx-auto" style={{
                  width: '70px',
                  height: '180px',
                  background: 'linear-gradient(to right, #8a1428 0%, #C41E3A 20%, #C41E3A 80%, #8a1428 100%)',
                  boxShadow: 'inset -8px 0 15px rgba(0,0,0,0.3), inset 8px 0 15px rgba(255,255,255,0.1), 0 8px 25px rgba(0,0,0,0.5)',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  {/* Wax Drip Effect */}
                  <div className="absolute top-0 left-5 w-1.5 overflow-hidden" style={{
                    height: '80px'
                  }}>
                    <div style={{
                      width: '100%',
                      background: 'linear-gradient(to bottom, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.2) 50%, transparent 100%)',
                      borderRadius: '2px',
                      animation: 'waxDrip 8s ease-in infinite',
                      animationDelay: '0s'
                    }}></div>
                  </div>
                  <div className="absolute top-0 right-6 w-2 overflow-hidden" style={{
                    height: '60px'
                  }}>
                    <div style={{
                      width: '100%',
                      background: 'linear-gradient(to bottom, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.15) 50%, transparent 100%)',
                      borderRadius: '2px',
                      animation: 'waxDrip 10s ease-in infinite',
                      animationDelay: '2s'
                    }}></div>
                  </div>
                  <div className="absolute top-0 left-8 w-1 overflow-hidden" style={{
                    height: '50px'
                  }}>
                    <div style={{
                      width: '100%',
                      background: 'linear-gradient(to bottom, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
                      borderRadius: '2px',
                      animation: 'waxDrip 12s ease-in infinite',
                      animationDelay: '4s'
                    }}></div>
                  </div>
                </div>
              </div>

              {/* Base Shadow */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-5" style={{
                width: '90px',
                height: '12px',
                background: 'radial-gradient(ellipse, rgba(0,0,0,0.5) 0%, transparent 70%)',
                filter: 'blur(8px)'
              }}></div>
            </div>
            
            {/* Mobile Quote - Only visible on mobile */}
            <div className="lg:hidden text-center">
              <div className="space-y-2" key={`mobile-${currentQuoteIndex}`}>
                <p className="quote-line text-2xl sm:text-3xl text-white font-bold leading-tight tracking-wide">
                  {quotes[currentQuoteIndex].left[0]}
                </p>
                <p className="quote-line text-2xl sm:text-3xl font-bold leading-tight tracking-wide">
                  <span className="text-orange-300">{quotes[currentQuoteIndex].left[1]}</span>
                </p>
                <p className="quote-line text-2xl sm:text-3xl text-white font-bold leading-tight tracking-wide">
                  {quotes[currentQuoteIndex].left[2]}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Quote - Hidden on mobile */}
          <motion.div 
            variants={fadeIn("left", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              margin: "-100px 0px -100px 0px",
            }}
            className="hidden lg:block text-left"
          >
            <div className="space-y-4">
              <svg className="w-16 h-16 mr-auto text-orange-400 opacity-40 mb-6 transform rotate-180" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
              </svg>
              <div key={`right-${currentQuoteIndex}`}>
                <p className="quote-line text-2xl sm:text-3xl lg:text-4xl text-white font-bold leading-relaxed tracking-wide">
                  {quotes[currentQuoteIndex].right[0]}
                </p>
                <p className="quote-line text-2xl sm:text-3xl lg:text-4xl font-bold leading-relaxed tracking-wide">
                  <span className="text-orange-300">{quotes[currentQuoteIndex].right[1]}</span>
                </p>
                <p className="quote-line text-2xl sm:text-3xl lg:text-4xl text-white font-bold leading-relaxed tracking-wide">
                  {quotes[currentQuoteIndex].right[2]}
                </p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
}