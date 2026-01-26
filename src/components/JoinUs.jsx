import React, { useState } from 'react';

export default function JoinUs() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const joinOptions = [
    {
      id: 1,
      number: "01",
      title: "Donate",
      description: "Support our mission through donations, with full eligibility for 80G tax benefits. Your contribution helps expand education, skill development, health services, and community upliftment to the most underserved villages.",
      gradient: "from-red-600 to-red-700"
    },
    {
      id: 2,
      number: "02",
      title: "Share Your Expertise",
      description: "Contribute your expertise and mentorship to empower communities. Your professional knowledge can help shape better futures for rural families across East and Northeast India.",
      gradient: "from-orange-600 to-orange-700"
    },
    {
      id: 3,
      number: "03",
      title: "CSR Partnership",
      description: "Partner with us through CSR to scale sustainable projects in education, health, skills, and community development. Create meaningful corporate social impact that transforms lives.",
      gradient: "from-amber-600 to-amber-700"
    },
    {
      id: 4,
      number: "04",
      title: "Sponsor & Adopt",
      description: "Sponsor a child or classroom, and adopt a village to ensure continuous learning for marginalized students, helping transform it into a thriving, self-reliant community.",
      gradient: "from-red-500 to-orange-600"
    },
    {
      id: 5,
      number: "05",
      title: "Institutional Support",
      description: "Extend your institutional expertise to amplify impact across communities. Collaborate with us to bring innovative solutions to grassroots challenges.",
      gradient: "from-orange-500 to-red-600"
    },
    {
      id: 6,
      number: "06",
      title: "Volunteer & Intern",
      description: "Become a volunteer, intern, or join our team to contribute to meaningful change on the ground. Experience the joy of direct community engagement and transformation.",
      gradient: "from-red-600 to-amber-600"
    },
    {
      id: 7,
      number: "07",
      title: "Connect Networks",
      description: "Link us with like-minded well-wishers and networks who can share in this vision. Help us expand our reach and multiply our impact through strategic connections.",
      gradient: "from-amber-600 to-orange-600"
    }
  ];

  return (
    <section className="relative min-h-screen py-16 sm:py-20 lg:py-24 overflow-hidden bg-white">
      
      {/* Animations */}
      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes expandLine {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
        .animate-slide-up {
          animation: slideInUp 0.6s ease-out forwards;
        }
        .line-expand {
          animation: expandLine 0.8s ease-out forwards;
        }
      `}</style>

      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Diagonal Lines Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="diagonalLines" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <line x1="0" y1="40" x2="40" y2="0" stroke="#dc2626" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagonalLines)" />
          </svg>
        </div>

        {/* Gradient Shapes */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-red-100/40 via-orange-50/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-amber-100/40 via-red-50/30 to-transparent rounded-full blur-3xl"></div>
        
        {/* Geometric Accent Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 border-4 border-red-200/20 rotate-12"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 border-4 border-orange-200/20 rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-24 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-5xl mx-auto text-center mb-20">
          <div className="mb-6">
            <div className="inline-block">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-red-600"></div>
                <span className="text-sm font-bold text-red-600 tracking-widest uppercase">Get Involved</span>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-red-600"></div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl  font-bold leading-tight text-gray-900 mb-8">
            Join Us in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-600 to-amber-600">
              Creating Change
            </span>
          </h2>
          
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute -left-4 top-0 text-red-200 text-6xl font-serif">"</div>
            <p className="text-base sm:text-base text-gray-700 leading-relaxed px-8">
              Candle of Hope welcomes individuals, organisations, and institutions to partner with us in transforming rural communities across East and Northeast India. Your support helps expand education, strengthen health systems, empower women and youth, and uplift marginalised families.
            </p>
            <div className="absolute -right-4 bottom-0 text-red-200 text-6xl font-serif">"</div>
          </div>
        </div>

        {/* Ways to Join - Staggered Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6">
            {joinOptions.map((option, index) => (
              <div
                key={option.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredCard(option.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`group relative bg-white rounded-none border-l-8 border-gray-200 hover:border-red-600 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden ${
                  index % 2 === 0 ? 'ml-0 mr-8' : 'ml-8 mr-0'
                }`}>
                  
                  {/* Sliding Background Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${option.gradient} translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10 p-5 sm:p-6 flex items-start gap-4 sm:gap-5">
                    
                    {/* Number */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className={`text-5xl sm:text-6xl font-bold text-gray-100 group-hover:text-white/20 transition-colors duration-500`}>
                          {option.number}
                        </div>
                        <div className="absolute bottom-0 left-0 h-2 bg-gradient-to-r from-red-600 to-orange-600 group-hover:from-white group-hover:to-white w-0 group-hover:w-full transition-all duration-700"></div>
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 pt-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors duration-500">
                        {option.title}
                      </h3>
                      
                      <p className="text-sm text-gray-600 group-hover:text-white/90 leading-relaxed transition-colors duration-500">
                        {option.description}
                      </p>

                      {/* Animated Arrow */}
                      <div className="mt-4 flex items-center gap-3">
                        <span className="text-xs font-bold text-red-600 group-hover:text-white transition-colors duration-500">
                          Learn More
                        </span>
                        <div className="w-0 group-hover:w-10 h-px bg-white transition-all duration-500"></div>
                        <div className="transform translate-x-0 group-hover:translate-x-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-transparent border-r-gray-100 group-hover:border-r-white/20 transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

       

      </div>
    </section>
  );
}