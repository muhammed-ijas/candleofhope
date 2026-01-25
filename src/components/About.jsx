import React from 'react';

function AboutUs() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-gradient-to-br from-slate-50 via-gray-50 to-red-50">
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-20 w-96 h-96 bg-red-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-16 xl:px-32 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="text-gray-800 space-y-5 order-2 lg:order-1">
            
            {/* Main Heading */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
                About Us
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-red-900 to-transparent mt-3"></div>
            </div>

            {/* Content Paragraphs */}
            <div className="space-y-5">
              <p className="text-sm lg:text-base leading-relaxed text-gray-700">
                Fuelled by the passion and expertise of <span className="font-semibold text-red-900">young professionals</span>, Candle of Hope International (COHI) serves as a platform that unites socially committed individuals dedicated to rural transformation. Together, they bring their knowledge, skills, and innovative ideas to drive transformative, sustainable educational and social initiatives that create meaningful, lasting impact.
              </p>

              <p className="text-sm lg:text-base leading-relaxed text-gray-700">
                Registered as a non-profit under the <span className="font-semibold text-red-900">Trusts Registration Act of 1860</span>, COHI works at the grassroots level across East and Northeast India, uplifting rural communities through a diverse range of impactful programs.
              </p>

              <p className="text-sm lg:text-base leading-relaxed text-gray-700">
                Our initiatives are designed to address the challenges faced by underserved groups, serving as a <span className="font-semibold text-red-900">bridge between aspiration and opportunity</span>, and ensuring that transformation reaches even the most remote corners of India.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-2xl p-4 border border-red-100">
                <div className="w-10 h-10 bg-gradient-to-br from-red-900 to-red-700 rounded-xl flex items-center justify-center mb-2">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-sm text-gray-900 mb-1">Community Focus</h3>
                <p className="text-xs text-gray-600">Grassroots transformation</p>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-4 border border-amber-100">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-orange-600 rounded-xl flex items-center justify-center mb-2">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-bold text-sm text-gray-900 mb-1">Innovation</h3>
                <p className="text-xs text-gray-600">Sustainable solutions</p>
              </div>
            </div>
          </div>

          {/* Right Side - Image with Creative Shape */}
          <div className="relative order-1 lg:order-2">
            
            {/* Decorative Circle Background */}
            <div className="absolute w-[400px] h-[400px] bg-gradient-to-br from-red-400/20 to-amber-400/20 rounded-full blur-3xl"></div>
            
            {/* Main Image Container */}
            <div className="relative z-10">
              
              {/* Image with Modern Shape */}
              <div className="relative group">
                
                {/* Glowing Border Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-red-400 via-rose-400 to-amber-400 rounded-[60%_40%_30%_70%/40%_50%_60%_50%] opacity-75 blur-lg group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Main Image Container */}
                <div className="relative w-[320px] h-[380px] sm:w-[380px] sm:h-[440px] lg:w-[450px] lg:h-[500px] overflow-hidden rounded-[60%_40%_30%_70%/40%_50%_60%_50%] shadow-2xl transform transition-transform duration-700 hover:scale-105">
                  
                  <img 
                    src="/image2.png" 
                    alt="Candle of Hope International" 
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-red-900/50 via-transparent to-transparent"></div>
                  
                  {/* Decorative Dots Pattern */}
                  <div className="absolute top-6 right-6 grid grid-cols-3 gap-2">
                    <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                    <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                    <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                    <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                    <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                    <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Floating Vision Badge */}
              <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-red-900 to-red-700 text-white rounded-2xl shadow-2xl p-6 max-w-[220px] transform transition-transform duration-500 hover:scale-105">
                <div className="text-sm font-bold mb-2 opacity-90">Our Vision</div>
                <p className="text-xs leading-relaxed">
                  "Empowering communities to create lasting impact"
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutUs;