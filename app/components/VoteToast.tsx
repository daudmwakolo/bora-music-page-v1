'use client';
import React from 'react';

interface VoteToastProps {
  message: string;
  isVisible: boolean;
  type: 'up' | 'down';
}

const VoteToast: React.FC<VoteToastProps> = ({ message, isVisible, type }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-[200] animate-toast pointer-events-none">
      <div className={`backdrop-blur-2xl border px-8 py-4 rounded-full flex items-center gap-5 shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-colors duration-500 ${
        type === 'up' 
          ? 'border-[#D4AF37]/40 bg-black/80' 
          : 'border-[#DC143C]/40 bg-[#080000]/90' // Darker red-tinted background for strikes
      }`}>
        
        {/* DYNAMIC INDICATOR */}
        <div className="relative flex items-center justify-center">
          <span className={`absolute w-3 h-3 rounded-full animate-ping opacity-50 ${
            type === 'up' ? 'bg-[#D4AF37]' : 'bg-[#DC143C]'
          }`}></span>
          <div className={`w-2 h-2 rounded-full ${
            type === 'up' ? 'bg-[#D4AF37]' : 'bg-[#DC143C]'
          }`}></div>
        </div>

        <div className="flex flex-col">
          <p className={`font-['Cinzel'] text-[9px] tracking-[0.3em] uppercase font-black transition-colors ${
             type === 'up' ? 'text-white' : 'text-[#DC143C]'
          }`}>
            {message}
          </p>
          
          {/* DYNAMIC SUBTEXT FOR RIVALRY LOOP */}
          <span className={`text-[6px] uppercase tracking-[0.5em] font-bold mt-1 transition-all ${
            type === 'up' ? 'text-white/30' : 'text-[#DC143C]/50 animate-pulse'
          }`}>
            {type === 'up' ? 'Matitu Core Contribution' : 'Rivalry Strike Registered'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default VoteToast;