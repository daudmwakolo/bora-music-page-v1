'use client';
import React from 'react';

interface VoteToastProps {
  message: string;
  isVisible: boolean;
  type: 'up' | 'down';
  tier?: 'throne' | 'podium' | 'standard'; // Added Tier
}

const VoteToast: React.FC<VoteToastProps> = ({ message, isVisible, type, tier = 'standard' }) => {
  if (!isVisible) return null;

  // DYNAMIC CONFIGURATION BASED ON TIER
  const getStyles = () => {
    if (tier === 'throne') {
      return {
        border: "border-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.3)]",
        bg: "bg-black/95",
        accent: "text-[#D4AF37]",
        dot: "bg-[#D4AF37]",
        label: "ROYAL PULSE REGISTERED",
        sub: "Imperial Rank I Authority"
      };
    }
    if (tier === 'podium') {
      return {
        border: "border-white/60 shadow-[0_0_25px_rgba(255,255,255,0.1)]",
        bg: "bg-[#111111]/95",
        accent: "text-white",
        dot: "bg-white",
        label: "ELITE PULSE REGISTERED",
        sub: "Imperial Standing Influence"
      };
    }
    // Standard / Default
    return {
      border: type === 'up' ? 'border-[#D4AF37]/40' : 'border-[#DC143C]/40',
      bg: type === 'up' ? 'bg-black/80' : 'bg-[#080000]/90',
      accent: type === 'up' ? 'text-white' : 'text-[#DC143C]',
      dot: type === 'up' ? 'bg-[#D4AF37]' : 'bg-[#DC143C]',
      label: message,
      sub: type === 'up' ? 'Matitu Core Contribution' : 'Rivalry Strike Registered'
    };
  };

  const style = getStyles();

  return (
    <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-[200] animate-toast pointer-events-none">
      <div className={`backdrop-blur-2xl border px-8 py-4 rounded-full flex items-center gap-5 shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-500 ${style.border} ${style.bg}`}>
        
        {/* DYNAMIC INDICATOR */}
        <div className="relative flex items-center justify-center">
          <span className={`absolute w-3 h-3 rounded-full animate-ping opacity-50 ${style.dot}`}></span>
          <div className={`w-2 h-2 rounded-full ${style.dot}`}></div>
        </div>

        <div className="flex flex-col">
          <p className={`font-['Cinzel'] text-[9px] tracking-[0.3em] uppercase font-black transition-colors ${style.accent}`}>
            {style.label}
          </p>
          
          <span className={`text-[6px] uppercase tracking-[0.5em] font-bold mt-1 transition-all ${
            tier !== 'standard' ? 'text-white/50' : type === 'up' ? 'text-white/30' : 'text-[#DC143C]/50 animate-pulse'
          }`}>
            {style.sub}
          </span>
        </div>
      </div>
    </div>
  );
};

export default VoteToast;