import React from 'react';

function AboutUs() {
  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden bg-white" id="about-section">
      
      {/* Floating Animation */}
      <style>{`
        @keyframes floatUp {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }
        @keyframes floatDown {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(12px);
          }
        }
        @keyframes floatMiddle {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
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
          <div className="lg:col-span-7 space-y-8">
            
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
                Fuelled by the passion and expertise of <span className="font-semibold text-red-900">young professionals</span>, Candle of Hope International (COHI) serves as a platform that unites socially committed individuals dedicated to rural transformation. Together, they bring their knowledge, skills, and innovative ideas to drive transformative, sustainable educational and social initiatives that create meaningful, lasting impact.
              </p>

              <p className="text-sm lg:text-base">
                Registered as a non-profit under the <span className="font-semibold text-red-900">Trusts Registration Act of 1860</span>, COHI works at the grassroots level across East and Northeast India, uplifting rural communities through a diverse range of impactful programs.
              </p>

              <p className="text-sm lg:text-base">
                Our initiatives are designed to address the challenges faced by underserved groups, serving as a <span className="font-semibold text-red-900">bridge between aspiration and opportunity</span>, and ensuring that transformation reaches even the most remote corners of India.
              </p>
            </div>

            {/* Stats/Highlights Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-5 pt-4">
              <div className="group relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-red-200 hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-sm sm:text-lg text-gray-900 mb-1 sm:mb-2 group-hover:text-red-600 transition-colors duration-300">Community Focus</h3>
                  <p className="text-xs sm:text-sm text-gray-600">Grassroots transformation</p>
                </div>
              </div>

              <div className="group relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-amber-200 hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-sm sm:text-lg text-gray-900 mb-1 sm:mb-2 group-hover:text-amber-600 transition-colors duration-300">Innovation</h3>
                  <p className="text-xs sm:text-sm text-gray-600">Sustainable solutions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image Bento Grid */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:ml-auto">
              
              {/* Image 2 - Top Left */}
              <div 
                className="relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
                style={{
                  animation: 'floatDown 4s ease-in-out infinite'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img 
                  src="/image2.png" 
                  alt="Community Initiative" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Image 3 - Top Right, offset down */}
              <div 
                className="relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group mt-8"
                style={{
                  animation: 'floatMiddle 4.5s ease-in-out infinite'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img 
                  src="/image3.png" 
                  alt="Educational Programs" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Image 4 - Bottom Left */}
              <div 
                className="relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
                style={{
                  animation: 'floatDown 5s ease-in-out infinite'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img 
                  src="/image4.png" 
                  alt="Social Impact" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Decorative Element - Bottom Right */}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-red-600 via-red-500 to-amber-500 flex items-center justify-center shadow-lg mt-8">
                <div className="text-center text-white p-6">
                  <div className="text-4xl font-bold mb-2">15+</div>
                  <div className="text-sm font-medium opacity-90">Years of Impact</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutUs;