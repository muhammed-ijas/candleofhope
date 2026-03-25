import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../Varients';

const coreValues = [
  {
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    gradient: "from-red-600 to-red-500",
    hoverBorder: "hover:border-red-300",
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

function AboutUs() {
  return (
    <>
      {/* ── ABOUT SECTION ── */}
      <section className="relative min-h-screen flex items-center py-20 overflow-hidden bg-white" id="about-section">

        <style>{`
          @keyframes floatDown {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(12px); }
          }
          @keyframes floatMiddle {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
        `}</style>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(148 163 184) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
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

              {/* Heading */}
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 mb-4">
                  About Us
                </h2>
                <div className="w-24 h-1.5 bg-gradient-to-r from-red-600 via-red-500 to-amber-500 rounded-full"></div>
              </div>

              {/* Paragraphs */}
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

              {/* Vision Block */}
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
              >
                <div className="relative bg-white rounded-2xl p-6 sm:p-8 overflow-hidden border-l-4 border-red-600 shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-50/60 via-white to-amber-50/40 pointer-events-none"></div>

                  {/* Label row */}
                  <div className="flex items-center gap-3 mb-3 relative z-10">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <span className="text-sm font-bold text-red-600 tracking-widest uppercase">Our Vision</span>
                  </div>

                  <div className="w-12 h-0.5 bg-gradient-to-r from-red-400 to-transparent mb-4 relative z-10"></div>

                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed relative z-10">
                    To transform rural villages into thriving, self-sustained communities through education, empowerment, and sustainable development, creating a lasting impact for generations to come.
                  </p>
                </div>
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
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
                  style={{ animation: 'floatDown 4s ease-in-out infinite' }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <img src="/image2.png" alt="Community Initiative" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>

                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group mt-8"
                  style={{ animation: 'floatMiddle 4.5s ease-in-out infinite' }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <img src="/image3.png" alt="Educational Programs" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>

                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
                  style={{ animation: 'floatDown 5s ease-in-out infinite' }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <img src="/image4.png" alt="Social Impact" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>

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

      {/* ── CORE VALUES STRIP ── */}
      <section className="relative py-12 sm:py-16 overflow-hidden bg-white">

        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-200 to-transparent"></div>

        {/* Background */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="diagCV" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <line x1="0" y1="40" x2="40" y2="0" stroke="#dc2626" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagCV)" />
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-red-100/40 to-transparent rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-100/30 to-transparent rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-24 relative z-10">

          {/* Subheading */}
          <motion.div
            variants={fadeIn("down", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
            className="flex items-center gap-4 mb-10 sm:mb-12"
          >
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-red-200"></div>
            <div className="text-center shrink-0">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Core{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-600 to-amber-600">
                  Values
                </span>
              </h3>
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-red-200"></div>
          </motion.div>

          {/* 5 Cards — single row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
            {coreValues.map((v, i) => (
              <motion.div
                key={i}
                variants={fadeIn("up", 0.07 * i)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
                className={i === 4 ? 'col-span-2 sm:col-span-1' : ''}
              >
                <div className={`group relative bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100 ${v.hoverBorder} hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden h-full`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${v.hoverBg} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  {/* Top accent line */}
                  <div className={`absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r ${v.gradient} group-hover:w-full transition-all duration-500`}></div>

                  <div className="relative z-10 flex flex-col items-center text-center gap-3">
                    <div className={`w-11 h-11 bg-gradient-to-br ${v.gradient} rounded-xl flex items-center justify-center shadow-md group-hover:scale-110  transition-transform duration-300`}>
                      {v.icon}
                    </div>
                    <div>
                      <h4 className={`font-bold text-xs sm:text-sm text-gray-900 mb-1 ${v.hoverText} transition-colors duration-300 leading-snug`}>
                        {v.title}
                      </h4>
                      <p className="text-xs text-gray-500 leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-200 to-transparent"></div>
      </section>
    </>
  );
}

export default AboutUs;