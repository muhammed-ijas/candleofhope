import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../Varients';
import { ChevronLeft, ChevronRight, Quote, Play, Pause, Volume2, VolumeX } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

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

  // Intersection Observer - Only load video when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        rootMargin: '200px',
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Update video time and duration
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
      setVideoLoaded(true);
    };

    const handleCanPlay = () => {
      setVideoLoaded(true);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('canplay', handleCanPlay);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, [isInView]);

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

  const toggleVideoPlayback = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleProgressClick = (e) => {
    const video = videoRef.current;
    if (!video || !duration) return;

    const progressBar = e.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, clickX / rect.width));
    const newTime = percentage * duration;
    
    video.currentTime = newTime;
  };

  const formatTime = (time) => {
    if (isNaN(time) || !isFinite(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progressPercentage = duration > 0 ? Math.min(100, (currentTime / duration) * 100) : 0;

  return (
    <section 
      ref={sectionRef}
      className="relative py-12 lg:py-16 overflow-hidden bg-gradient-to-br from-red-900 via-red-800 to-orange-900"
    >
      
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
        .testimonial-slide {
          animation: slideIn 0.5s ease-out;
        }
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
        
        /* Video controls - show on hover */
        .video-controls {
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .video-container:hover .video-controls {
          opacity: 1;
        }
        
        /* Progress bar always visible */
        .video-progress-container {
          opacity: 0.9;
        }
        .video-container:hover .video-progress-container {
          opacity: 1;
        }
        
        /* Mute button */
        .mute-button {
          opacity: 0.8;
          transition: opacity 0.3s ease;
        }
        .mute-button:hover {
          opacity: 1;
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

        {/* Testimonial Content - Desktop Layout */}
        <motion.div 
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            margin: "-100px 0px -100px 0px",
          }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            
            {/* LEFT SIDE - Testimonial Slider */}
            <div className="relative rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl bg-white/5 backdrop-blur-sm flex flex-col">
              
              {/* Quote Icon */}
              <div className="absolute top-4 left-4 opacity-20">
                <Quote className="w-8 h-8 text-amber-300" fill="currentColor" />
              </div>

              <div className="space-y-4 testimonial-slide flex-grow flex flex-col justify-center" key={currentIndex}>
                
                {/* Profile Image */}
                <div className="flex justify-center pt-4">
                  {testimonials[currentIndex].image ? (
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24">
                      <img 
                        src={testimonials[currentIndex].image} 
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover rounded-full border-4 border-amber-300/30 shadow-lg"
                      />
                      <div className="absolute inset-0 rounded-full ring-2 ring-amber-300/50"></div>
                    </div>
                  ) : (
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-amber-300/30 bg-gradient-to-br from-amber-400/20 to-orange-400/20 flex items-center justify-center shadow-lg">
                      <div className="absolute inset-0 rounded-full ring-2 ring-amber-300/50"></div>
                      <svg className="w-10 h-10 sm:w-12 sm:h-12 text-amber-300/60" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                  )}
                </div>
                
                {/* Testimonial Text - Smaller */}
                <p className="text-sm sm:text-base text-amber-50 leading-relaxed italic text-center px-2">
                  "{testimonials[currentIndex].testimonial}"
                </p>
                
                {/* Person Info - Smaller */}
                <div className="pt-2 text-center">
                  <h4 className="text-base sm:text-lg font-bold text-white mb-1">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-amber-200 font-medium text-xs sm:text-sm mb-1">
                    {testimonials[currentIndex].role}
                  </p>
                  <div className="flex items-center justify-center gap-1.5">
                    <svg className="w-3 h-3 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-amber-100/80 text-xs">
                      {testimonials[currentIndex].location}
                    </p>
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

            {/* RIGHT SIDE - Video */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-red-950/50 to-orange-950/50 border border-white/20 video-container min-h-[400px]">
              
              {isInView ? (
                <>
                  {/* Video Element - Only loads when in view */}
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover rounded-2xl"
                    loop
                    muted={isMuted}
                    playsInline
                    preload="metadata"
                    onPlay={() => setIsVideoPlaying(true)}
                    onPause={() => setIsVideoPlaying(false)}
                  >
                    <source src="/video1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Play/Pause Controls - Show on hover */}
                  <div className="video-controls absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[1px] pointer-events-none">
                    <button
                      onClick={toggleVideoPlayback}
                      className="p-4 bg-white/95 hover:bg-white rounded-full transition-all duration-300 hover:scale-110 shadow-2xl pointer-events-auto"
                      aria-label={isVideoPlaying ? "Pause video" : "Play video"}
                    >
                      {isVideoPlaying ? (
                        <Pause className="w-8 h-8 text-red-900" fill="currentColor" />
                      ) : (
                        <Play className="w-8 h-8 text-red-900 ml-1" fill="currentColor" />
                      )}
                    </button>
                  </div>

                  {/* Video Progress Bar - Bottom */}
                  <div className="video-progress-container absolute bottom-0 left-0 right-0 px-4 pb-4 z-30 pointer-events-auto">
                    <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3 space-y-2">
                      {/* Progress Bar */}
                      <div 
                        className="relative h-2 bg-white/30 rounded-full cursor-pointer group hover:h-2.5 transition-all"
                        onClick={handleProgressClick}
                      >
                        {/* Progress Fill */}
                        <div 
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full transition-all pointer-events-none"
                          style={{ width: `${progressPercentage}%` }}
                        >
                          {/* Progress Handle */}
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                      </div>

                      {/* Time Display */}
                      <div className="flex justify-between items-center text-xs text-white/90 font-medium">
                        <span>{formatTime(currentTime)}</span>
                        <span>{formatTime(duration)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Mute/Unmute Button - Top-right corner */}
                  <button
                    onClick={toggleMute}
                    className="mute-button absolute top-4 right-4 p-3 bg-white/95 hover:bg-white rounded-full transition-all duration-300 hover:scale-110 shadow-lg z-20"
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                  >
                    {isMuted ? (
                      <VolumeX className="w-5 h-5 text-red-900" />
                    ) : (
                      <Volume2 className="w-5 h-5 text-red-900" />
                    )}
                  </button>

                  {/* Loading Indicator */}
                  {!videoLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-red-900/90 to-orange-900/90 z-40">
                      <div className="text-center">
                        <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-3"></div>
                        <p className="text-white text-sm">Loading video...</p>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                // Placeholder before video loads
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-red-950/80 to-orange-950/80">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-3 mx-auto">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                    <p className="text-white/80 text-sm">Video will load shortly...</p>
                  </div>
                </div>
              )}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}