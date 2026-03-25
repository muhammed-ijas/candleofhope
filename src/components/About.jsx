import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../Varients';

function AboutUs() {
  const values = [
    {
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      gradient: "from-red-600 to-red-500",
      hoverBorder: "hover:border-red-200",
      hoverBg: "from-red-50",
      hoverText: "group-hover:text-red-600",
      title: "Education as Empowerment",
      desc: "Foundation for dignity & opportunity",
    },
    {
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
        </svg>
      ),
      gradient: "from-green-600 to-emerald-500",
      hoverBorder: "hover:border-green-200",
      hoverBg: "from-green-50",
      hoverText: "group-hover:text-green-600",
      title: "Transformative Impact",
      desc: "Uplifting entire communities",
    },
    {
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      gradient: "from-amber-500 to-orange-500",
      hoverBorder: "hover:border-amber-200",
      hoverBg: "from-amber-50",
      hoverText: "group-hover:text-amber-600",
      title: "Sustainability",
      desc: "Communities growing independently",
    },
    {
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      gradient: "from-pink-500 to-rose-500",
      hoverBorder: "hover:border-pink-200",
      hoverBg: "from-pink-50",
      hoverText: "group-hover:text-pink-600",
      title: "Dignity & Inclusion",
      desc: "Every individual seen & heard",
    },
    {
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      gradient: "from-red-700 to-orange-600",
      hoverBorder: "hover:border-red-300",
      hoverBg: "from-red-50",
      hoverText: "group-hover:text-red-700",
      title: "Integrity & Commitment",
      desc: "Transparency & accountability",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden bg-white" id="about-section">
      
      {/* Floating Animation */}
      <style>{`
        @keyframes floatUp {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes floatDown {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(12px); }
        }
        @keyframes floatMiddle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(148 163 184) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Gradient Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-red-50 to-transparent opacity-60 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-amber-50 to-transparent opacity-60 blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-16 xl:px-24 z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <motion.div 
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
            className="lg:col-span-7 space-y-8"
          >
            
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full border border-red-100">
              <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
              <span className="text-xs font-semibold text-red-900 tracking-wide uppercase">Who We Are</span>
            </div>

            {/* Main Heading */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 mb-4">
                About Us
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-red-600 via-red-500 to-amber-500 rounded-full"></div>
            </div>

            {/* Content Paragraphs */}
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-sm lg:text-base">
                Candle of Hope International is a grassroots movement driven by passionate young professionals committed to transforming rural India. We work in some of the most underserved and isolated communities across East and Northeast India where access to education, opportunity, and basic development remains a challenge.
              </p>
              <p className="text-sm lg:text-base">
                Through transformative education and community-driven initiatives, we strive to bridge the gap between aspiration and opportunity, empowering individuals, strengthening communities, and creating pathways for sustainable growth and dignity.
              </p>
              <p className="text-sm lg:text-base">
                Registered under the Trusts Registration Act of 1860, our work is rooted in the belief that real change begins at the grassroots. Every initiative we undertake is designed to create meaningful, lasting impact in the lives of those who need it most.
              </p>
            </div>

            {/* 5 Value Cards Grid */}
            <motion.div 
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 pt-4"
            >
              {values.map((v, i) => (
                <div
                  key={i}
                  className={`group relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100 ${v.hoverBorder} hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden ${
                    i === 4 ? 'col-span-2 sm:col-span-1' : ''
                  }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${v.hoverBg} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <div className="relative z-10">
                    <div className={`w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-br ${v.gradient} rounded-lg sm:rounded-xl flex items-center justify-center mb-3 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                      {v.icon}
                    </div>
                    <h3 className={`font-bold text-xs sm:text-sm text-gray-900 mb-1 ${v.hoverText} transition-colors duration-300 leading-snug`}>
                      {v.title}
                    </h3>
                    <p className="text-xs text-gray-500">{v.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

          </motion.div>

          {/* Right Side - Image Bento Grid */}
          <motion.div 
            variants={fadeIn("left", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
            className="lg:col-span-5"
          >
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:ml-auto">
              
              {/* Image 2 - Top Left */}
              <div 
                className="relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
                style={{ animation: 'floatDown 4s ease-in-out infinite' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img src="/image2.png" alt="Community Initiative" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>

              {/* Image 3 - Top Right, offset down */}
              <div 
                className="relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group mt-8"
                style={{ animation: 'floatMiddle 4.5s ease-in-out infinite' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img src="/image3.png" alt="Educational Programs" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>

              {/* Image 4 - Bottom Left */}
              <div 
                className="relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
                style={{ animation: 'floatDown 5s ease-in-out infinite' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img src="/image4.png" alt="Social Impact" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>

              {/* Decorative Element - Bottom Right */}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-red-600 via-red-500 to-amber-500 flex items-center justify-center shadow-lg mt-8">
                <div className="text-center text-white p-6">
                  <div className="text-4xl font-bold mb-2">15+</div>
                  <div className="text-sm font-medium opacity-90">Years of Impact</div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default AboutUs;