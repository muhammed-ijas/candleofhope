import React, { useState } from 'react';
import { Send, MapPin, Phone, MessageCircle } from 'lucide-react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = () => {
    if (!formData.name.trim()) {
      alert('Please enter your name');
      return;
    }
    
    // Create WhatsApp message
    let whatsappMessage = `Hello! I'm ${formData.name}`;
    
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
    <section className="relative py-16 sm:py-20 overflow-hidden bg-gradient-to-br from-red-900 via-red-800 to-red-900">
      
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
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }
        .animate-slide-up {
          animation: slideUp 0.6s ease-out forwards;
        }
        .float-shape {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-700 rounded-full blur-3xl opacity-20 float-shape"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-600 rounded-full blur-3xl opacity-20 float-shape" style={{ animationDelay: '2s' }}></div>
        
        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="contactGrid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                <circle cx="25" cy="25" r="1" fill="#dc2626"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contactGrid)" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-24 relative z-10">
        
        {/* Header */}
                  <div className="text-center mb-12 animate-slide-up">
         
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-300">Us</span>
          </h2>
          <p className="text-amber-100/80 text-sm sm:text-base max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Left - Contact Form */}
            <div className="animate-slide-up" style={{ animationDelay: '100ms' }}>
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 sm:p-8 shadow-lg border border-red-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Send Message</h3>
                    <p className="text-xs text-gray-600">We'll get back to you soon</p>
                  </div>
                </div>

                <div className="space-y-4">
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
                      placeholder="Your name"
                    />
                  </div>

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
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    <Send className="w-5 h-5" />
                    Send via WhatsApp
                  </button>

                  <p className="text-xs text-center text-gray-500 mt-2">
                    You'll be redirected to WhatsApp to send your message
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Map & Info */}
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: '200ms' }}>
              
              {/* Map */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-64 sm:h-80">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14755.38384112555!2d88.43726097070163!3d22.397163782934154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a026d14dab49f39%3A0xeb9ff6cf91799998!2sAkna%20Mirzzapur%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1769405180332!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Candle of Hope Location"
                ></iframe>
              </div>

              {/* Contact Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-red-600 to-orange-600 rounded-xl p-5 text-white shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-3">
                    <Phone className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm mb-1">Call Us</h4>
                  <a href="tel:+918157919753" className="text-sm hover:underline">+91 81579 19753</a>
                </div>

                <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-xl p-5 text-white shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-3">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm mb-1">Location</h4>
                  <p className="text-sm">Akna Mirzzapur, West Bengal</p>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}