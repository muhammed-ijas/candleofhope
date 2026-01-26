import React, { useState, useEffect, useRef } from 'react';

function AreasOfWork() {
  const [visibleCards, setVisibleCards] = useState({});
  const [visibleAudience, setVisibleAudience] = useState({});
  const containerRef = useRef(null);
  const audienceRef = useRef(null);

  const areasOfWork = [
    {
      id: 1,
      title: "Education & Literacy",
      description: "Strengthening foundational learning through community-based literacy programs, Foundation Learning Centres, and age-appropriate teaching approaches aligned with national education missions."
    },
    {
      id: 2,
      title: "Skill Development & Livelihood",
      description: "Providing vocational training and practical skill-building opportunities that enhance employability, support income generation, and promote economic resilience in rural households."
    },
    {
      id: 3,
      title: "Health & Wellbeing",
      description: "Improving community health through medical camps, awareness programs, maternal and menstrual health sessions, and initiatives supporting disability inclusion and preventive care."
    },
    {
      id: 4,
      title: "Youth Upskilling",
      description: "Equipping young people with digital skills, leadership training, communication development, and STEM learning to prepare them for future opportunities."
    }
  ];

  const targetAudience = [
    "Isolated Rural Communities",
    "School Dropouts & Out-of-School Children from Underprivileged Communities",
    "Unemployed & Under-skilled Youth",
    "Women in Marginalised Communities",
    "Rural Teachers & Educators"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = entry.target.getAttribute('data-card-id');
            setVisibleCards(prev => ({ ...prev, [cardId]: true }));
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = containerRef.current?.querySelectorAll('[data-card-id]');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemId = entry.target.getAttribute('data-item-id');
            setVisibleAudience(prev => ({ ...prev, [itemId]: true }));
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = audienceRef.current?.querySelectorAll('[data-item-id]');
    items?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      
      {/* Animations & Styles */}
      <style>{`
        @keyframes squareCut {
          0% {
            clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
            opacity: 0;
          }
          100% {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            opacity: 1;
          }
        }
        @keyframes slideInWithSquare {
          0% {
            clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
            opacity: 0;
          }
          100% {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            opacity: 1;
          }
        }
        .animate-square-cut {
          animation: squareCut 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .animate-slide-with-square {
          animation: slideInWithSquare 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .blob-shape {
          filter: blur(20px);
          -webkit-filter: blur(20px);
          -moz-filter: blur(20px);
        }
        .blob-shape-small {
          filter: blur(15px);
          -webkit-filter: blur(15px);
          -moz-filter: blur(15px);
        }
      `}</style>

      {/* Background Lines - ONLY for this component */}
      <div className="absolute inset-0 pointer-events-none opacity-5 z-0" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, #f87171 0, #f87171 10px, transparent 10px, transparent 20px)',
        backgroundSize: '200px 200px',
        backgroundAttachment: 'fixed'
      }}></div>

      {/* MAIN SECTION - Two Column Layout */}
      <section className="relative min-h-screen w-full flex items-center justify-center py-12 sm:py-16 lg:py-20 overflow-hidden">
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-24 z-10 relative w-full">
          
          {/* Two Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center">
            
            {/* LEFT SIDE - Areas of Work */}
            <div className="space-y-6">
              {/* Header */}
              <div className="text-left mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full border border-red-200 mb-4">
                  <div className="w-2 h-2 bg-gradient-to-r from-red-400 to-orange-300 rounded-full animate-pulse"></div>
                  <span className="text-xs font-semibold text-red-900 tracking-wide uppercase">What We Do</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-gray-900 mb-3">
                  Areas of Work
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-red-400 via-orange-300 to-orange-400 rounded-full"></div>
              </div>

              {/* Cards Grid - 2 columns, 2 rows */}
              <div ref={containerRef} className="grid grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
                {areasOfWork.map((area, index) => (
                  <div
                    key={area.id}
                    data-card-id={area.id}
                    className={`relative ${visibleCards[area.id] ? 'animate-square-cut' : 'opacity-0'}`}
                    style={{
                      animationDelay: visibleCards[area.id] ? `${index * 100}ms` : '0ms'
                    }}
                  >
                    {/* Card */}
                    <div className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 border border-gray-200 hover:border-red-300 overflow-hidden p-4 sm:p-5 h-full flex flex-col">
                      
                      {/* Inner Glow on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-red-50/0 via-transparent to-orange-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                      {/* Content */}
                      <div className="relative z-10 flex-1 flex flex-col">
                        {/* Number - Top Right Corner */}
                        <div className="text-right mb-2">
                          <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-red-400 to-orange-400 text-white font-bold text-base shadow-md group-hover:scale-110 transition-transform duration-300">
                            {area.id}
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300 leading-snug">
                          {area.title}
                        </h3>

                        {/* Description */}
                        <p className="text-xs text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300 flex-grow">
                          {area.description}
                        </p>
                      </div>

                      {/* Animated Line Bottom */}
                      <div className="h-1 mt-3 rounded-full overflow-hidden bg-gray-100">
                        <div className="h-full w-0 bg-gradient-to-r from-red-400 to-orange-400 group-hover:w-full transition-all duration-500"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE - Targeted Audience */}
            <div className="space-y-6 flex flex-col">
              {/* Header */}
              <div className="text-left mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full border border-red-200 mb-4">
                  <div className="w-2 h-2 bg-gradient-to-r from-red-400 to-orange-300 rounded-full animate-pulse"></div>
                  <span className="text-xs font-semibold text-red-900 tracking-wide uppercase">Who We Serve</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-gray-900 mb-3">
                  Targeted Audience
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-red-400 via-orange-300 to-orange-400 rounded-full"></div>
              </div>

              {/* Audience List - Full height card */}
              <div ref={audienceRef} className="relative flex-1">
                <div className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 border border-gray-200 hover:border-red-300 overflow-hidden p-6 sm:p-8 flex flex-col h-full">
                  
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-orange-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                  {/* Content */}
                  <div className="relative z-10 space-y-4">
                    {targetAudience.map((audience, index) => (
                      <div
                        key={index}
                        data-item-id={index}
                        className={`flex gap-3 items-start pb-4 border-b border-gray-200 last:border-b-0 last:pb-0 ${visibleAudience[index] ? 'animate-slide-with-square' : 'opacity-0'}`}
                        style={{
                          animationDelay: visibleAudience[index] ? `${index * 80}ms` : '0ms'
                        }}
                      >
                        {/* Checkmark */}
                        <div className="flex-shrink-0 w-5 h-5 rounded-sm bg-gradient-to-br from-red-400 to-orange-400 flex items-center justify-center mt-1">
                          <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>

                        {/* Text */}
                        <p className="text-xs sm:text-sm font-semibold text-gray-800 group-hover:text-red-600 transition-colors duration-300 leading-snug flex-grow">
                          {audience}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Animated Corner Accent */}
                  <div className="absolute top-0 right-0 w-0 h-0 border-l-[30px] border-b-[30px] border-l-transparent border-b-red-400/0 group-hover:border-b-red-400 transition-all duration-500"></div>
                </div>
              </div>

              {/* Decorative Bottom Section with Shapes */}
              <div className="relative h-32 lg:h-40 rounded-2xl overflow-hidden">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-orange-50 to-white"></div>

                {/* Decorative Shapes */}
                <div className="absolute -bottom-8 -right-8 w-48 h-48 opacity-30 blob-shape" style={{
                  background: 'radial-gradient(ellipse at 30% 50%, rgba(248, 113, 113, 0.4), rgba(251, 146, 60, 0.1))',
                  borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%'
                }}></div>

                <div className="absolute -top-12 -left-12 w-40 h-40 opacity-25 blob-shape-small" style={{
                  background: 'radial-gradient(ellipse at 50% 40%, rgba(249, 115, 22, 0.3), rgba(252, 165, 165, 0.1))',
                  borderRadius: '72% 28% 66% 34% / 44% 62% 38% 56%'
                }}></div>

                {/* Text Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    Ready to Make a Difference?
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Join us in our mission to empower rural communities
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Animated Background Shapes - Left Side */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {/* Large blob shape 1 */}
          <div className="absolute -top-32 -left-32 w-96 h-96 opacity-40 blob-shape" style={{
            background: 'radial-gradient(ellipse at 30% 50%, rgba(248, 113, 113, 0.6), rgba(251, 146, 60, 0.2))',
            borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%',
            backgroundAttachment: 'fixed'
          }}></div>

          {/* Medium blob shape 2 */}
          <div className="absolute -bottom-20 left-10 w-72 h-72 opacity-40 blob-shape" style={{
            background: 'radial-gradient(ellipse at 40% 60%, rgba(252, 165, 165, 0.5), rgba(249, 115, 22, 0.25))',
            borderRadius: '45% 55% 60% 40% / 55% 45% 55% 45%',
            backgroundAttachment: 'fixed'
          }}></div>

          {/* Small blob shape 3 */}
          <div className="absolute top-1/3 left-1/4 w-40 h-40 opacity-35 blob-shape-small" style={{
            background: 'radial-gradient(ellipse at 50% 40%, rgba(249, 115, 22, 0.5), rgba(252, 165, 165, 0.2))',
            borderRadius: '72% 28% 66% 34% / 44% 62% 38% 56%',
            backgroundAttachment: 'fixed'
          }}></div>

          {/* Large blob shape - Right Side */}
          <div className="absolute -top-40 -right-40 w-96 h-96 opacity-35 blob-shape" style={{
            background: 'radial-gradient(ellipse at 35% 50%, rgba(249, 115, 22, 0.5), rgba(252, 165, 165, 0.2))',
            borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%',
            backgroundAttachment: 'fixed'
          }}></div>

          {/* Medium blob shape - Right Side */}
          <div className="absolute top-1/2 -right-32 w-64 h-64 opacity-32 blob-shape" style={{
            background: 'radial-gradient(ellipse at 40% 60%, rgba(220, 38, 38, 0.4), rgba(249, 115, 22, 0.2))',
            borderRadius: '45% 55% 60% 40% / 55% 45% 55% 45%',
            backgroundAttachment: 'fixed'
          }}></div>

          {/* Small blob shape - Right Side */}
          <div className="absolute -bottom-20 -right-20 w-48 h-48 opacity-38 blob-shape-small" style={{
            background: 'radial-gradient(ellipse at 50% 40%, rgba(251, 146, 60, 0.45), rgba(248, 113, 113, 0.25))',
            borderRadius: '72% 28% 66% 34% / 44% 62% 38% 56%',
            backgroundAttachment: 'fixed'
          }}></div>
        </div>
      </section>
    </div>
  );
}

export default AreasOfWork;