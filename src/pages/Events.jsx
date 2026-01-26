import React from 'react';

export default function UpcomingEvents() {
  return (
    <section className="relative min-h-[60vh] py-12 sm:py-16 lg:py-20 overflow-hidden bg-white">
      
      {/* Animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(30px, -30px) rotate(120deg);
          }
          66% {
            transform: translate(-20px, 20px) rotate(240deg);
          }
        }
        @keyframes floatReverse {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(-30px, 30px) rotate(-120deg);
          }
          66% {
            transform: translate(20px, -20px) rotate(-240deg);
          }
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05);
          }
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .float-shape {
          animation: float 20s ease-in-out infinite;
        }
        .float-reverse {
          animation: floatReverse 25s ease-in-out infinite;
        }
        .pulse-shape {
          animation: pulse 4s ease-in-out infinite;
        }
        .slide-in {
          animation: slideIn 0.8s ease-out forwards;
        }
      `}</style>

      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Circle - Top Right */}
        <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-gradient-to-br from-red-400/20 to-orange-400/20 blur-3xl float-shape"></div>
        
        {/* Medium Circle - Bottom Left */}
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-gradient-to-tr from-amber-400/20 to-red-400/20 blur-3xl float-reverse" style={{ animationDelay: '5s' }}></div>

        {/* Geometric Shapes */}
        <div className="absolute top-16 left-16 w-24 h-24 border-4 border-red-200/20 rotate-45 float-shape" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-24 right-24 w-32 h-32 border-4 border-orange-200/20 float-reverse" style={{ animationDelay: '7s' }}></div>

        {/* Subtle Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #dc2626 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-24 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 slide-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-50 rounded-full border border-red-100 mb-4">
            <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></div>
            <span className="text-xs font-semibold text-red-900 tracking-wide uppercase">What's Next</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 mb-4">
            Upcoming Events
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-red-400 via-orange-300 to-orange-400 rounded-full mx-auto"></div>
        </div>

        {/* No Events State */}
        <div className="max-w-2xl mx-auto">
          <div className="slide-in relative bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200" style={{ animationDelay: '200ms' }}>
            
            {/* Top Accent Bar */}
            <div className="h-1.5 bg-gradient-to-r from-red-600 via-orange-600 to-amber-600"></div>

            {/* Content */}
            <div className="p-8 sm:p-10 text-center">
              
              {/* Icon */}
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-red-400/20 to-orange-400/20 rounded-full blur-xl"></div>
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-br from-red-100 to-orange-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              {/* Text */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                No Upcoming Events
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 max-w-lg mx-auto">
                We're currently planning our next set of community programs. Check back soon for updates.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
               
              </div>
            </div>

            {/* Bottom Accent Bar */}
            <div className="h-1.5 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600"></div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            
            <div className="slide-in relative bg-white rounded-xl shadow-md overflow-hidden border border-red-200 hover:shadow-lg transition-all duration-300 p-4 text-center" style={{ animationDelay: '400ms' }}>
              <div className="absolute top-0 right-0 w-16 h-16 bg-red-400/10 rounded-full blur-xl"></div>
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-3 shadow-md">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">Stay Notified</h3>
                <p className="text-xs text-gray-600">Get alerts</p>
              </div>
            </div>

            <div className="slide-in relative bg-white rounded-xl shadow-md overflow-hidden border border-orange-200 hover:shadow-lg transition-all duration-300 p-4 text-center" style={{ animationDelay: '600ms' }}>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-orange-400/10 rounded-full blur-xl"></div>
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center mx-auto mb-3 shadow-md">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">Join Us</h3>
                <p className="text-xs text-gray-600">Connect</p>
              </div>
            </div>

            <div className="slide-in relative bg-white rounded-xl shadow-md overflow-hidden border border-amber-200 hover:shadow-lg transition-all duration-300 p-4 text-center" style={{ animationDelay: '800ms' }}>
              <div className="absolute top-0 left-0 w-16 h-16 bg-amber-400/10 rounded-full blur-xl"></div>
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-3 shadow-md">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">Plan Events</h3>
                <p className="text-xs text-gray-600">Organize</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}