import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function InaugurationOverlay({ onComplete }) {
  const [stage, setStage] = useState('intro'); // intro, ribbon, cutting, complete
  const [showFireworks, setShowFireworks] = useState(false);
  const [ribbonCut, setRibbonCut] = useState(false);

  const handleProceedToInauguration = () => {
    setStage('ribbon');
    setShowFireworks(true);
  };

  const handleRibbonCut = () => {
    setRibbonCut(true);
    setStage('cutting');
    
    // Complete after ribbon animation
    setTimeout(() => {
      setStage('complete');
      setTimeout(() => {
        onComplete();
      }, 800);
    }, 2500);
  };

  return (
    <AnimatePresence>
      {stage !== 'complete' && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-red-50 overflow-hidden"
        >
          {/* Animations */}
          <style>{`
            @keyframes firework {
              0% {
                transform: translate(0, 0) scale(0);
                opacity: 1;
              }
              50% {
                opacity: 1;
              }
              100% {
                transform: translate(var(--tx), var(--ty)) scale(1);
                opacity: 0;
              }
            }
            
            @keyframes sparkle {
              0%, 100% {
                opacity: 0;
                transform: scale(0) rotate(0deg);
              }
              50% {
                opacity: 1;
                transform: scale(1) rotate(180deg);
              }
            }
            
            @keyframes goldShine {
              0% {
                background-position: -200% center;
              }
              100% {
                background-position: 200% center;
              }
            }
            
            @keyframes pulse-glow {
              0%, 100% {
                box-shadow: 0 0 20px rgba(234, 179, 8, 0.5), 0 0 40px rgba(234, 179, 8, 0.3);
              }
              50% {
                box-shadow: 0 0 40px rgba(234, 179, 8, 0.8), 0 0 80px rgba(234, 179, 8, 0.5);
              }
            }
            
            @keyframes ribbonFlow {
              0% {
                transform: translateY(0) scaleY(1);
              }
              25% {
                transform: translateY(-3px) scaleY(1.02);
              }
              50% {
                transform: translateY(0) scaleY(0.98);
              }
              75% {
                transform: translateY(3px) scaleY(1.02);
              }
              100% {
                transform: translateY(0) scaleY(1);
              }
            }
            
            .firework-particle {
              animation: firework 1.5s ease-out infinite;
            }
            
            .sparkle {
              animation: sparkle 3s ease-in-out infinite;
            }
            
            .gold-shine {
              background: linear-gradient(90deg, #B8860B 0%, #FFD700 25%, #FFF8DC 50%, #FFD700 75%, #B8860B 100%);
              background-size: 200% 100%;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              animation: goldShine 3s linear infinite;
            }
            
            .pulse-glow {
              animation: pulse-glow 2s ease-in-out infinite;
            }
            
            .ribbon-flow {
              animation: ribbonFlow 3s ease-in-out infinite;
            }
          `}</style>

          {/* Elegant Particle Background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Gold sparkles */}
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="sparkle absolute"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                }}
              >
                <svg width="8" height="8" viewBox="0 0 8 8">
                  <path d="M4 0 L4.5 3.5 L8 4 L4.5 4.5 L4 8 L3.5 4.5 L0 4 L3.5 3.5 Z" fill="#FFD700" opacity="0.6"/>
                </svg>
              </div>
            ))}

            {/* Fireworks after ribbon appears */}
            {showFireworks && (
              <>
                {[...Array(15)].map((_, i) => (
                  <div
                    key={i}
                    className="firework-particle absolute w-3 h-3 rounded-full"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                      background: `linear-gradient(135deg, #FFD700, #FFA500)`,
                      '--tx': `${(Math.random() - 0.5) * 300}px`,
                      '--ty': `${(Math.random() - 0.5) * 300}px`,
                      animationDelay: `${Math.random() * 2}s`,
                    }}
                  />
                ))}
              </>
            )}
          </div>

          {/* Decorative Corner Elements */}
          <div className="absolute top-0 left-0 w-64 h-64 opacity-20">
            <div className="absolute inset-0 border-t-4 border-l-4 border-yellow-600 rounded-tl-full"></div>
          </div>
          <div className="absolute bottom-0 right-0 w-64 h-64 opacity-20">
            <div className="absolute inset-0 border-b-4 border-r-4 border-yellow-600 rounded-br-full"></div>
          </div>

          {/* Main Content */}
          <div className="relative z-10 text-center px-4 w-full max-w-6xl mx-auto">
            
            {/* Intro Stage - Welcome Text Only */}
            {stage === 'intro' && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="space-y-12"
              >
                {/* Welcome Text */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-6"
                >
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-gray-800 tracking-wide">
                    Welcome to
                  </h1>
                  <h2 className="text-7xl sm:text-8xl lg:text-9xl font-bold gold-shine mb-6">
                    Candle of Hope
                  </h2>
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="h-px w-24 bg-gradient-to-r from-transparent via-yellow-600 to-transparent"></div>
                    <p className="text-4xl sm:text-5xl text-gray-700 font-serif italic">
                      International
                    </p>
                    <div className="h-px w-24 bg-gradient-to-r from-transparent via-yellow-600 to-transparent"></div>
                  </div>
                  <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Empowering rural communities through transformative educational and social initiatives
                  </p>
                </motion.div>

                {/* Proceed Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="pt-8"
                >
                  <button
                    onClick={handleProceedToInauguration}
                    className="group relative px-12 py-5 bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500 text-white text-lg font-bold rounded-full overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-2xl shadow-xl"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      Proceed to Inauguration
                      <motion.svg 
                        className="w-6 h-6" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </motion.svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <motion.div
                      className="absolute inset-0 bg-white opacity-0"
                      animate={{ opacity: [0, 0.2, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </button>
                </motion.div>
              </motion.div>
            )}

            {/* Ribbon Cutting Stage */}
            {(stage === 'ribbon' || stage === 'cutting') && (
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-20"
              >
                {/* Title */}
                <motion.div
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-4"
                >
                  <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-2">
                    Grand Inauguration
                  </h2>
                  <div className="flex items-center justify-center gap-3">
                    <div className="h-1 w-16 bg-gradient-to-r from-transparent to-yellow-600 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-600 rounded-full rotate-45"></div>
                    <div className="h-1 w-16 bg-gradient-to-l from-transparent to-yellow-600 rounded-full"></div>
                  </div>
                  <p className="text-xl sm:text-2xl text-gray-600 font-light pt-2">
                    Click the scissors to unveil our journey
                  </p>
                </motion.div>

                {/* Bigger Ribbon Section with Flowing Animation */}
                <div className="relative py-8">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.5, duration: 1.2, type: "spring", stiffness: 70 }}
                    className="flex items-center justify-center"
                  >
                    {/* Left ribbon - BIGGER */}
                    <motion.div
                      animate={{ 
                        x: ribbonCut ? -400 : 0,
                        rotate: ribbonCut ? -20 : 0,
                        opacity: ribbonCut ? 0 : 1 
                      }}
                      transition={{ duration: 1.5, ease: [0.68, -0.55, 0.265, 1.55] }}
                      className="relative h-48 w-[500px] ribbon-flow"
                    >
                      {/* White ribbon with gold trim - BIGGER */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-50 to-white shadow-2xl"
                        style={{ 
                          clipPath: 'polygon(0 15%, 100% 15%, 96% 85%, 0 85%)',
                        }}
                      >
                        {/* Gold top border - THICKER */}
                        <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600"></div>
                        {/* Gold bottom border - THICKER */}
                        <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600"></div>
                        {/* Multiple shine effects */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-40"></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent"></div>
                        {/* Center gold line - THICKER */}
                        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-5 bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 shadow-xl"></div>
                        {/* Decorative gold lines */}
                        <div className="absolute top-1/3 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500/50 via-yellow-400/50 to-yellow-500/50"></div>
                        <div className="absolute bottom-1/3 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500/50 via-yellow-400/50 to-yellow-500/50"></div>
                      </div>
                    </motion.div>

                    {/* Scissors Button - BIGGER */}
                    <motion.button
                      onClick={handleRibbonCut}
                      disabled={ribbonCut}
                      whileHover={{ scale: 1.15, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      animate={ribbonCut ? {
                        rotate: [0, -30, -25, -30, -35, 0],
                        y: [0, -15, -10, -15, -20, 60],
                        opacity: [1, 1, 1, 1, 1, 0]
                      } : {
                        rotate: [0, -10, 0, -10, 0],
                        y: [0, -8, 0]
                      }}
                      transition={ribbonCut ? {
                        duration: 2,
                        times: [0, 0.2, 0.4, 0.6, 0.8, 1]
                      } : {
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 0.5
                      }}
                      className="relative z-30 mx-10 group cursor-pointer disabled:cursor-default"
                    >
                      <div className="absolute inset-0 blur-3xl bg-yellow-400 opacity-60 group-hover:opacity-100 pulse-glow transition-opacity rounded-full scale-150"></div>
                      <div className="relative bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 p-10 rounded-full shadow-2xl border-4 border-white">
                        <svg className="w-20 h-20 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
                        </svg>
                      </div>
                    </motion.button>

                    {/* Right ribbon - BIGGER */}
                    <motion.div
                      animate={{ 
                        x: ribbonCut ? 400 : 0,
                        rotate: ribbonCut ? 20 : 0,
                        opacity: ribbonCut ? 0 : 1 
                      }}
                      transition={{ duration: 1.5, ease: [0.68, -0.55, 0.265, 1.55] }}
                      className="relative h-48 w-[500px] ribbon-flow"
                      style={{ animationDelay: '0.3s' }}
                    >
                      {/* White ribbon with gold trim - BIGGER */}
                      <div className="absolute inset-0 bg-gradient-to-l from-white via-gray-50 to-white shadow-2xl"
                        style={{ 
                          clipPath: 'polygon(4% 15%, 100% 15%, 100% 85%, 0% 85%)',
                        }}
                      >
                        {/* Gold top border - THICKER */}
                        <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600"></div>
                        {/* Gold bottom border - THICKER */}
                        <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600"></div>
                        {/* Multiple shine effects */}
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white to-transparent opacity-40"></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent"></div>
                        {/* Center gold line - THICKER */}
                        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-5 bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 shadow-xl"></div>
                        {/* Decorative gold lines */}
                        <div className="absolute top-1/3 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500/50 via-yellow-400/50 to-yellow-500/50"></div>
                        <div className="absolute bottom-1/3 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500/50 via-yellow-400/50 to-yellow-500/50"></div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Call to action */}
                {!ribbonCut && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8 }}
                    className="flex flex-col items-center gap-4"
                  >
                    <motion.div
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-4 h-4 bg-yellow-500 rounded-full shadow-lg"></div>
                      <p className="text-gray-700 text-xl font-semibold">Click to Inaugurate</p>
                      <div className="w-4 h-4 bg-yellow-500 rounded-full shadow-lg"></div>
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>
            )}
          </div>

          {/* Golden Confetti Burst */}
          {ribbonCut && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(200)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ 
                    x: '50vw', 
                    y: '50vh',
                    scale: 0,
                    rotate: 0,
                    opacity: 1
                  }}
                  animate={{ 
                    x: `${Math.random() * 100}vw`,
                    y: `${100 + Math.random() * 50}vh`,
                    scale: [0, 1.5, 1],
                    rotate: Math.random() * 720,
                    opacity: [1, 1, 0]
                  }}
                  transition={{ 
                    duration: 2.5,
                    ease: "easeOut"
                  }}
                  className="absolute rounded-full"
                  style={{
                    width: `${6 + Math.random() * 10}px`,
                    height: `${6 + Math.random() * 10}px`,
                    background: `linear-gradient(135deg, ${
                      ['#FFD700', '#FFA500', '#FFFFFF', '#DAA520', '#F0E68C'][Math.floor(Math.random() * 5)]
                    }, ${
                      ['#FFD700', '#FFA500', '#FFFFFF'][Math.floor(Math.random() * 3)]
                    })`
                  }}
                />
              ))}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}