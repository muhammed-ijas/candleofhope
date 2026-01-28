import React, { useState } from "react";
import { Send, MapPin, Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "../Varients";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = () => {
    if (!formData.name.trim()) {
      alert("Please enter your name");
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
    window.open(`https://wa.me/918157919753?text=${whatsappMessage}`, "_blank");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="relative py-16 sm:py-20 overflow-hidden bg-gradient-to-br from-red-900 via-red-800 to-red-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-700 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-600 rounded-full blur-3xl opacity-20"></div>

        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg width="100%" height="100%">
            <defs>
              <pattern
                id="contactGrid"
                x="0"
                y="0"
                width="50"
                height="50"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="25" cy="25" r="1" fill="#dc2626" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contactGrid)" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-24 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            variants={fadeIn("down", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              margin: "-100px 0px -100px 0px",
            }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3"
          >
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-300">
              Us
            </span>
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              margin: "-100px 0px -100px 0px",
            }}
            className="text-amber-100/80 text-sm sm:text-base max-w-2xl mx-auto"
          >
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left - Contact Form */}
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                margin: "-100px 0px -100px 0px",
              }}
            >
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 sm:p-8 shadow-lg border border-red-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Send Message
                    </h3>
                    <p className="text-xs text-gray-600">
                      We'll get back to you soon
                    </p>
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
                      Email{" "}
                      <span className="text-gray-400 text-xs">(Optional)</span>
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
                      Phone{" "}
                      <span className="text-gray-400 text-xs">(Optional)</span>
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
                      Message{" "}
                      <span className="text-gray-400 text-xs">(Optional)</span>
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
            </motion.div>

            {/* Right - Map & Info */}
            <div className="space-y-6">
              {/* Map */}
              <motion.div
                variants={fadeIn("left", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{
                  once: true,
                  margin: "-100px 0px -100px 0px",
                }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-64 sm:h-80"
              >
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
              </motion.div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <motion.div
                    variants={fadeIn("up", 0.3)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{
                      once: true,
                      margin: "-100px 0px -100px 0px",
                    }}
                    className="bg-gradient-to-br from-red-600 to-orange-600 rounded-xl p-5 text-white shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-3">
                      <Phone className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-sm mb-1">Call Us</h4>
                    <a
                      href="tel:+918157919753"
                      className="text-sm hover:underline"
                    >
                      +91 81579 19753
                    </a>
                  </motion.div>

                  <motion.div
                    variants={fadeIn("up", 0.4)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{
                      once: true,
                      margin: "-100px 0px -100px 0px",
                    }}
                    className="bg-gradient-to-br from-orange-600 to-red-600 rounded-xl p-5 text-white shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-3">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-sm mb-1">Location</h4>
                    <p className="text-sm">Akna Mirzzapur, West Bengal</p>
                  </motion.div>
                </div>

                {/* Social Media Icons - Improved Design */}
                <motion.div
                  variants={fadeIn("up", 0.5)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{
                    once: true,
                    margin: "-100px 0px -100px 0px",
                  }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"
                >
                  <h4 className="font-bold text-gray-900 mb-4 text-center text-base">Connect With Us</h4>
                  <div className="flex items-center justify-center gap-4">
                    {/* Instagram */}
                    <a
                      href="https://www.instagram.com/candleofhope_international/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative"
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 rounded-2xl flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </div>
                      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-medium text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Instagram
                      </span>
                    </a>

                    {/* Facebook */}
                    <a
                      href="https://www.facebook.com/candleofhopeinternational/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative"
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </div>
                      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-medium text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Facebook
                      </span>
                    </a>

                    {/* YouTube */}
                    <a
                      href="https://www.youtube.com/@CandleofHopeInternational"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative"
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      </div>
                      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-medium text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        YouTube
                      </span>
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}