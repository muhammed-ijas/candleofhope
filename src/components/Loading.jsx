import React, { useEffect } from 'react';

function Loading({ onLoadingComplete, imagesLoaded }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Only complete loading if images are loaded
      if (imagesLoaded) {
        onLoadingComplete();
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete, imagesLoaded]);

  // If images finish loading after 2 seconds, immediately complete
  useEffect(() => {
    if (imagesLoaded) {
      const checkTimer = setTimeout(() => {
        onLoadingComplete();
      }, 100);
      return () => clearTimeout(checkTimer);
    }
  }, [imagesLoaded, onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <style>{`
        .logo-container {
          width: 50px;
          height: 50px;
          margin: auto;
          position: relative;
        }
        
        .logo-container img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          animation: rotate 2s linear infinite;
        }
        
        .logo-container:before {
          content: '';
          width: 50px;
          height: 6px;
          background: #f0808050;
          position: absolute;
          top: 60px;
          left: 0;
          border-radius: 50%;
          animation: shadowPulse 2s ease-in-out infinite;
        }
        
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes shadowPulse {
          0%, 100% {
            transform: scale(1, 1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.2, 1);
            opacity: 0.5;
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .fade-in {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>

      <div className="text-center fade-in">
        <div className="logo-container">
          <img src="/logo.png" alt="Loading..." />
        </div>
        <h2 className="mt-8 text-base sm:text-lg font-bold text-gray-800">
          Candle of Hope International
        </h2>
        {!imagesLoaded && (
          <p className="mt-2 text-xs text-gray-500">Loading resources...</p>
        )}
      </div>
    </div>
  );
}

export default Loading;