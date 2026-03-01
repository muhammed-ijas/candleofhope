import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../Varients';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

export default function Testimonials() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  // Intersection Observer - Only load video when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { rootMargin: '200px', threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => setCurrentTime(video.currentTime);
    const handleLoadedMetadata = () => {
      setDuration(video.duration);
      setVideoLoaded(true);
    };
    const handleCanPlay = () => setVideoLoaded(true);

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('canplay', handleCanPlay);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, [isInView]);

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
    const rect = e.currentTarget.getBoundingClientRect();
    const percentage = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    video.currentTime = percentage * duration;
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
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .float-animation { animation: float 3s ease-in-out infinite; }
        .video-controls { opacity: 0; transition: opacity 0.3s ease; }
        .video-container:hover .video-controls { opacity: 1; }
        .video-progress-container { opacity: 0.9; }
        .video-container:hover .video-progress-container { opacity: 1; }
        .mute-button { opacity: 0.8; transition: opacity 0.3s ease; }
        .mute-button:hover { opacity: 1; }
      `}</style>

      {/* Decorative Background */}
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
          viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
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

        {/* Centered Video */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-red-950/50 to-orange-950/50 border border-white/20 video-container" style={{ minHeight: '420px' }}>

            {isInView ? (
              <>
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

                {/* Play/Pause Controls */}
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

                {/* Progress Bar */}
                <div className="video-progress-container absolute bottom-0 left-0 right-0 px-4 pb-4 z-30 pointer-events-auto">
                  <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3 space-y-2">
                    <div
                      className="relative h-2 bg-white/30 rounded-full cursor-pointer group hover:h-2.5 transition-all"
                      onClick={handleProgressClick}
                    >
                      <div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full transition-all pointer-events-none"
                        style={{ width: `${progressPercentage}%` }}
                      >
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-xs text-white/90 font-medium">
                      <span>{formatTime(currentTime)}</span>
                      <span>{formatTime(duration)}</span>
                    </div>
                  </div>
                </div>

                {/* Mute Button */}
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
        </motion.div>

      </div>
    </section>
  );
}