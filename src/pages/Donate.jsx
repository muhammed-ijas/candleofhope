import React, { useState } from 'react';

export default function DonatePage() {
  const [copiedField, setCopiedField] = useState(null);

  const bankDetails = [
    { label: "Account Name", value: "Candle of Hope International" },
    { label: "Bank Name", value: "Federal Bank" },
    { label: "Account Number", value: "14000200024374" },
    { label: "IFSC Code", value: "FDRL0001400" }
  ];

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section className="relative min-h-screen py-16 sm:py-20 lg:py-24 overflow-hidden bg-white">
      
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
            transform: translateY(30px);
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
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-red-400/20 to-orange-400/20 blur-3xl float-shape"></div>
        
        {/* Medium Circle - Bottom Left */}
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-amber-400/20 to-red-400/20 blur-3xl float-reverse" style={{ animationDelay: '5s' }}></div>
        
        {/* Small Circle - Center */}
        <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-gradient-to-br from-orange-300/15 to-red-300/15 blur-3xl pulse-shape" style={{ animationDelay: '2s' }}></div>

        {/* Geometric Shapes */}
        <div className="absolute top-20 left-20 w-40 h-40 border-4 border-red-200/20 rotate-45 float-shape" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-40 right-32 w-48 h-48 border-4 border-orange-200/20 float-reverse" style={{ animationDelay: '7s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 rounded-full border-4 border-amber-200/20 pulse-shape" style={{ animationDelay: '4s' }}></div>

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
        <div className="max-w-4xl mx-auto text-center mb-16 slide-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full border border-red-100 mb-6">
            <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
            <span className="text-xs font-semibold text-red-900 tracking-wide uppercase">Support Our Mission</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">
            Make a Difference
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-red-400 via-orange-300 to-orange-400 rounded-full mx-auto mb-6"></div>
          
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Your generous contribution helps us expand education, skill development, health services, and community upliftment to the most underserved villages across East and Northeast India.
          </p>
        </div>

        {/* Main Donation Card */}
        <div className="max-w-4xl mx-auto">
          
          {/* Bank Details Card */}
          <div className="slide-in bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-200 mb-8" style={{ animationDelay: '200ms' }}>
            
            {/* Header Bar */}
            <div className="bg-gradient-to-r from-red-600 via-orange-600 to-red-600 p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">
                Bank Transfer Details
              </h2>
              <p className="text-red-100 text-xs text-center mt-2">Secure and Direct Payment</p>
            </div>

            {/* Bank Details Grid */}
            <div className="p-6 sm:p-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {bankDetails.map((detail, index) => (
                <div 
                  key={index}
                  className="group relative bg-gray-50 rounded-2xl border-2 border-gray-200 hover:border-red-400 p-5 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="mb-3">
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                        {detail.label}
                      </p>
                      <p className="text-base sm:text-lg font-bold text-gray-900 break-all">
                        {detail.value}
                      </p>
                    </div>
                    
                    {/* Copy Button */}
                    <button
                      onClick={() => copyToClipboard(detail.value, detail.label)}
                      className="w-full px-4 py-2 bg-white border-2 border-gray-300 text-gray-700 text-sm font-bold rounded-xl hover:border-red-600 hover:text-red-600 hover:bg-red-50 transition-all duration-300"
                    >
                      {copiedField === detail.label ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Copied!
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                          Copy
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Bar */}
            <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 px-6 py-5">
              <p className="text-xs text-gray-300 text-center font-medium">
                All transactions are secure and verified
              </p>
            </div>
          </div>

          {/* Important Notes Grid */}
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            
            {/* Tax Exemption Note */}
            <div className="slide-in relative bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-red-200 hover:shadow-xl transition-all duration-300" style={{ animationDelay: '400ms' }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-400/10 rounded-full blur-2xl"></div>
              <div className="relative p-6 sm:p-8">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">80G Tax Exemption</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  All donations are eligible for 80G tax exemption under Indian Income Tax Act.
                </p>
              </div>
            </div>

            {/* Receipt Note */}
            <div className="slide-in relative bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-orange-200 hover:shadow-xl transition-all duration-300" style={{ animationDelay: '600ms' }}>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-400/10 rounded-full blur-2xl"></div>
              <div className="relative p-6 sm:p-8">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Receipt & Documentation</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Share your transaction details for official receipt issuance and documentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}