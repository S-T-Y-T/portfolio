'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Watch from '@/components/Watch';
import Loader from '@/components/Loader';

export default function EntrancePage() {
  const router = useRouter();
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [showEnterButton, setShowEnterButton] = useState(false);
  const [progress, setProgress] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    // Simulate loading progress
    const loadingInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 20;
        if (newProgress >= 100) {
          clearInterval(loadingInterval);
          setLoadingComplete(true);
          setTimeout(() => setShowEnterButton(true), 500);
          return 100;
        }
        return newProgress;
      });
    }, 300);

    return () => clearInterval(loadingInterval);
  }, []);

  useEffect(() => {
    if (!canvasRef.current || loadingComplete) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let time = 0;

    const animate = () => {
      if (!ctx) return;
      
      ctx.fillStyle = 'rgba(17, 17, 17, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw ghost particles
      for (let i = 0; i < 3; i++) {
        const x = canvas.width / 2 + Math.sin(time + i * 2) * 100;
        const y = canvas.height / 2 + Math.cos(time + i * 2) * 50;
        
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${0.3 + Math.sin(time * 2) * 0.2})`;
        ctx.fill();
      }

      time += 0.02;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [loadingComplete]);

  const handleEnterPortfolio = () => {
    router.push('/portfolio');
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Preloader */}
      {!loadingComplete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
          <div className="text-center">
            {/* Ghost SVG */}
            <div className="mb-8">
              <svg 
                className="w-16 h-16 mx-auto animate-pulse" 
                height="80" 
                viewBox="0 0 512 512" 
                width="80" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  className="ghost-body" 
                  d="m508.374 432.802s-46.6-39.038-79.495-275.781c-8.833-87.68-82.856-156.139-172.879-156.139-90.015 0-164.046 68.458-172.879 156.138-32.895 236.743-79.495 275.782-79.495 275.782-15.107 25.181 20.733 28.178 38.699 27.94 35.254-.478 35.254 40.294 70.516 40.294 35.254 0 35.254-35.261 70.508-35.261s37.396 45.343 72.65 45.343 37.389-45.343 72.651-45.343c35.254 0 35.254 35.261 70.508 35.261s35.27-40.772 70.524-40.294c17.959.238 53.798-2.76 38.692-27.94z" 
                  fill="white" 
                />
                <circle className="ghost-eye left-eye" cx="208" cy="225" r="22" fill="black" />
                <circle className="ghost-eye right-eye" cx="297" cy="225" r="22" fill="black" />
              </svg>
            </div>
            
            <div className="mb-4 text-sm uppercase tracking-widest text-gray-400 animate-pulse">
              Summoning spirits
            </div>
            
            {/* Progress bar */}
            <div className="w-24 h-0.5 mx-auto bg-gray-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-green-400 to-green-600 transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className={`transition-opacity duration-1000 ${loadingComplete ? 'opacity-100' : 'opacity-0'}`}>
        {/* Background Canvas */}
        <canvas 
          ref={canvasRef}
          className="absolute inset-0 z-0"
        />

        {/* Watch Widget */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden md:block opacity-75 hover:opacity-100 transition-opacity duration-500">
          <Watch />
        </div>

        {/* Loader Widget */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 z-20 hidden md:block opacity-75 hover:opacity-100 transition-opacity duration-500 scale-75 lg:scale-100">
          <Loader />
        </div>

        {/* Quote Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center">
          <div className="text-center px-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Veil of Dust<br />
              Trail of Ash<br />
              Heart of Ice
            </h1>
            <p className="text-sm md:text-base text-gray-400 mb-12 uppercase tracking-widest">
              Whispers through memory
            </p>
            
            {/* Enter Button */}
            <div className={`transition-all duration-1000 transform ${showEnterButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <button
                onClick={handleEnterPortfolio}
                className="group relative px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Enter Portfolio
                  <svg 
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom styles */}
      <style jsx>{`
        @keyframes ghostFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .ghost-svg {
          animation: ghostFloat 3s ease-in-out infinite;
        }

        .ghost-eye {
          animation: eyePulse 2s ease-in-out infinite;
        }

        .left-eye {
          animation-delay: 0s;
        }

        .right-eye {
          animation-delay: 0.1s;
        }

        @keyframes eyePulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.3);
          }
        }
      `}</style>
    </div>
  );
}
