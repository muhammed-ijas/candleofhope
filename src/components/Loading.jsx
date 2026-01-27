import React, { useEffect } from 'react';

function Loading({ onLoadingComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <style>{`
        .logo-container {
          width: 70px;
          height: 70px;
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
          width: 80px;
          height: 8px;
          background: #f0808050;
          position: absolute;
          top: 90px;
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
        <h2 className="mt-12 text-xl sm:text-2xl font-bold text-gray-800">
          Candle of Hope International
        </h2>
      </div>
    </div>
  );
}

export default Loading;