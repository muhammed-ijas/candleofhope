import React, { useState } from 'react';
import { Send, Users } from 'lucide-react';

export default function JoinUsPage() {
  const [formData, setFormData] = useState({
    interestType: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const joinOptions = [
    { value: 'donate', label: 'Donate', description: 'Support our mission through donations with 80G tax benefits' },
    { value: 'expertise', label: 'Share Your Expertise', description: 'Contribute your professional knowledge and mentorship' },
    { value: 'csr', label: 'CSR Partnership', description: 'Partner through CSR for sustainable community projects' },
    { value: 'sponsor', label: 'Sponsor & Adopt', description: 'Sponsor a child/classroom or adopt a village' },
    { value: 'institutional', label: 'Institutional Support', description: 'Extend institutional expertise to amplify impact' },
    { value: 'volunteer', label: 'Volunteer & Intern', description: 'Join our team for direct community engagement' },
    { value: 'network', label: 'Connect Networks', description: 'Link us with like-minded supporters and networks' }
  ];

  const handleSubmit = () => {
    if (!formData.interestType || !formData.name.trim()) {
      alert('Please select your interest and enter your name');
      return;
    }
    
    const selectedOption = joinOptions.find(opt => opt.value === formData.interestType);
    
    // Create WhatsApp message
    let whatsappMessage = `Hello! I'm interested in: *${selectedOption.label}*%0A%0A`;
    whatsappMessage += `Name: ${formData.name}`;
    
    if (formData.email) {
      whatsappMessage += `%0AEmail: ${formData.email}`;
    }
    
    if (formData.phone) {
      whatsappMessage += `%0APhone: ${formData.phone}`;
    }
    
    if (formData.message) {
      whatsappMessage += `%0A%0AMessage: ${formData.message}`;
    }
    
    // Redirect to WhatsApp
    window.open(`https://wa.me/918157919753?text=${whatsappMessage}`, '_blank');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="relative min-h-screen py-16 sm:py-20 overflow-hidden bg-white">
      
      {/* Animations */}
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
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
            transform: scale(1.1);
          }
        }
        @keyframes flowDiagonal {
          0% {
            transform: translate(-100%, -100%);
          }
          100% {
            transform: translate(100%, 100%);
          }
        }
        .animate-slide-up {
          animation: slideUp 0.6s ease-out forwards;
        }
        .float-shape {
          animation: float 40s ease-in-out infinite;
        }
        .float-reverse {
          animation: floatReverse 50s ease-in-out infinite;
        }
        .pulse-shape {
          animation: pulse 8s ease-in-out infinite;
        }
        .flow-diagonal {
          animation: flowDiagonal 60s linear infinite;
        }
      `}</style>

      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        
        {/* Flowing Gradient Orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-red-400/20 to-orange-400/20 blur-3xl float-shape"></div>
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-amber-400/20 to-red-400/20 blur-3xl float-reverse" style={{ animationDelay: '5s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-gradient-to-br from-orange-300/15 to-red-300/15 blur-3xl pulse-shape" style={{ animationDelay: '2s' }}></div>

        {/* Diagonal Flowing Lines */}
        <div className="absolute inset-0 opacity-[0.04] flow-diagonal">
          <svg width="200%" height="200%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="diagonalFlow" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <line x1="0" y1="60" x2="60" y2="0" stroke="#dc2626" strokeWidth="2"/>
              </pattern>
            </defs>
            <rect width="200%" height="200%" fill="url(#diagonalFlow)" />
          </svg>
        </div>

        {/* Geometric Floating Shapes */}
        <div className="absolute top-20 left-20 w-40 h-40 border-4 border-red-200/20 rotate-45 float-shape" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-40 right-32 w-48 h-48 border-4 border-orange-200/20 float-reverse" style={{ animationDelay: '7s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 rounded-full border-4 border-amber-200/20 pulse-shape" style={{ animationDelay: '4s' }}></div>
        
        {/* Additional Accent Shapes */}
        <div className="absolute top-1/4 right-1/3 w-24 h-24 border-4 border-red-300/15 rotate-12 float-shape" style={{ animationDelay: '6s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-36 h-36 border-4 border-orange-300/15 rounded-full float-reverse" style={{ animationDelay: '8s' }}></div>

        {/* Subtle Dot Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #dc2626 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Gradient Overlays for Depth */}
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-red-50/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-orange-50/30 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-24 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-red-600"></div>
            <span className="text-xs font-bold text-red-600 tracking-widest uppercase">Get Involved</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-red-600"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Our Mission</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Choose how you'd like to contribute and help us transform lives across rural communities
          </p>
        </div>

        {/* Form Section */}
        <div className="max-w-3xl mx-auto">
          <div className="animate-slide-up" style={{ animationDelay: '100ms' }}>
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl border border-red-100">
              
              {/* Header with Icon */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Join Us Form</h3>
                  <p className="text-sm text-gray-600">Fill in your details to get started</p>
                </div>
              </div>

              <div className="space-y-5">
                
                {/* Interest Type Dropdown */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    I'm interested in <span className="text-red-600">*</span>
                  </label>
                  <select
                    name="interestType"
                    value={formData.interestType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-gray-900"
                  >
                    <option value="">Select an option</option>
                    {joinOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  
                  {/* Show description when option is selected */}
                  {formData.interestType && (
                    <div className="mt-3 p-3 bg-white rounded-lg border border-red-100">
                      <p className="text-xs text-gray-600">
                        <span className="font-semibold text-red-600">
                          {joinOptions.find(opt => opt.value === formData.interestType)?.label}:
                        </span>{' '}
                        {joinOptions.find(opt => opt.value === formData.interestType)?.description}
                      </p>
                    </div>
                  )}
                </div>

                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-gray-900"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email <span className="text-gray-400 text-xs">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-gray-900"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone <span className="text-gray-400 text-xs">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-gray-900"
                    placeholder="+91 00000 00000"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message <span className="text-gray-400 text-xs">(Optional)</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 bg-white border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-none text-gray-900"
                    placeholder="Tell us more about your interest and how you'd like to contribute..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 mt-6"
                >
                  <Send className="w-5 h-5" />
                  Send via WhatsApp
                </button>

                <p className="text-xs text-center text-gray-500 mt-3">
                  You'll be redirected to WhatsApp to complete your submission
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}