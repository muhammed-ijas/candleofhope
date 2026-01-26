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
        .loader {
          width: 48px;
          height: 48px;
          margin: auto;
          position: relative;
        }
        .loader:before {
          content: '';
          width: 48px;
          height: 5px;
          background: #f0808050;
          position: absolute;
          top: 60px;
          left: 0;
          border-radius: 50%;
          animation: shadow324 0.5s linear infinite;
        }
        .loader:after {
          content: '';
          width: 100%;
          height: 100%;
          background: #f08080;
          position: absolute;
          top: 0;
          left: 0;
          border-radius: 4px;
          animation: jump7456 0.5s linear infinite;
        }
        @keyframes jump7456 {
          15% {
            border-bottom-right-radius: 3px;
          }
          25% {
            transform: translateY(9px) rotate(22.5deg);
          }
          50% {
            transform: translateY(18px) scale(1, .9) rotate(45deg);
            border-bottom-right-radius: 40px;
          }
          75% {
            transform: translateY(9px) rotate(67.5deg);
          }
          100% {
            transform: translateY(0) rotate(90deg);
          }
        }
        @keyframes shadow324 {
          0%, 100% {
            transform: scale(1, 1);
          }
          50% {
            transform: scale(1.2, 1);
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
        <div className="loader"></div>
        <h2 className="mt-12 text-xl sm:text-2xl font-bold text-gray-800">
          Candle of Hope International
        </h2>
      </div>
    </div>
  );
}

export default Loading;