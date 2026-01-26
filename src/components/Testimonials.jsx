import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../Varients';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Student, Foundation Learning Centre",
      image: "person1.jpg",
      testimonial: "Candle of Hope transformed my life through their Foundation Learning Centre. I gained literacy skills that opened doors I never knew existed. Today, I can read, write, and pursue my dreams with confidence.",
      location: "Village Samdari, Rajasthan"
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Skill Development Graduate",
      image: "person2.jpg",
      testimonial: "The stitching training program gave me the skills and confidence to start my own tailoring business. Now I support my family and inspire other women in my community to become independent.",
      location: "Madhubani, Bihar"
    },
    {
      id: 3,
      name: "Arjun Singh",
      role: "Career Compass Beneficiary",
      image: "person3.jpg",
      testimonial: "Career Compass helped me understand different career paths and guided me toward higher education. Without their support, I wouldn't be pursuing my engineering degree today.",
      location: "Shillong, Meghalaya"
    },
    {
      id: 4,
      name: "Meera Devi",
      role: "Community Leader",
      image: "person1.jpg",
      testimonial: "The medical camps and health awareness programs have brought healthcare to our doorstep. Our village now understands the importance of preventive care and healthy living.",
      location: "Gumla, Jharkhand"
    },
    {
      id: 5,
      name: "Vikram Patel",
      role: "Industry Connect Participant",
      image: "person2.jpg",
      testimonial: "Through the Industry Connect Program, I received hands-on training and secured employment in a manufacturing company. This opportunity changed my family's future completely.",
      location: "Ranchi, Jharkhand"
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative py-12 lg:py-16 overflow-hidden bg-gradient-to-br from-red-900 via-red-800 to-orange-900">
      
      {/* Animations */}
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes glow {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }
        .testimonial-slide {
          animation: slideIn 0.5s ease-out;
        }
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
        .glow-animation {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 bg-orange-400 rounded-full blur-3xl float-animation"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-400 rounded-full blur-3xl float-animation" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-24 relative z-10">
        
        {/* Header */}
        <motion.div 
          variants={fadeIn("down", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            margin: "-100px 0px -100px 0px",
          }}
          className="max-w-3xl mx-auto text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white mb-3">
            Testimonials
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-300 via-orange-300 to-amber-300 rounded-full mx-auto mb-4"></div>
          <p className="text-sm sm:text-base text-amber-50/90">
            Real voices from the communities we serve
          </p>
        </motion.div>

        {/* Testimonial Card */}
        <motion.div 
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            margin: "-100px 0px -100px 0px",
          }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative  rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
            
            {/* Quote Icon */}
            <div className="absolute top-4 left-4 opacity-20">
              <Quote className="w-10 h-10 text-amber-300" fill="currentColor" />
            </div>

            <div className="grid lg:grid-cols-3 gap-6 items-center testimonial-slide" key={currentIndex}>
              
              {/* Left - Image */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative">
                  {/* Decorative Glow */}
                  
                  {/* Image Placeholder */}
                  <div className="relative w-32 h-32 bg-gradient-to-br from-orange-300 to-red-400 rounded-xl shadow-lg overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-14 h-14 mx-auto mb-1 bg-white/20 rounded-full flex items-center justify-center">
                          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <p className="text-white/70 text-xs font-medium">{testimonials[currentIndex].image}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Content */}
              <div className="lg:col-span-2 space-y-3 text-center lg:text-left">
                <p className="text-base sm:text-lg text-amber-50 leading-relaxed italic">
                  "{testimonials[currentIndex].testimonial}"
                </p>
                
                <div className="pt-2">
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-amber-200 font-medium text-sm mb-1">
                    {testimonials[currentIndex].role}
                  </p>
                  <div className="flex items-center gap-1.5 justify-center lg:justify-start">
                    <svg className="w-3.5 h-3.5 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-amber-100/80 text-xs">
                      {testimonials[currentIndex].location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-3 mt-6">
              <button
                onClick={prevTestimonial}
                className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/30 hover:scale-110"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>

              {/* Dots */}
              <div className="flex gap-1.5">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                      setIsAutoPlaying(false);
                    }}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentIndex
                        ? 'w-6 h-2.5 bg-amber-300'
                        : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/60'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/30 hover:scale-110"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}