'use client';
import React from 'react';

interface PodiumProps {
  onVote: (songName: string, type: 'up' | 'down', tier: 'podium') => void;
}

const Podium: React.FC<PodiumProps> = ({ onVote }) => {
  const podiumSongs = [
    { 
      rank: 2, 
      roman: "II",
      name: "Afro Beat King", 
      artist: "Zeke.bxt", 
      votes: "8.2K",
      medal: "🥈",
      weeks: 5,
      platforms: { yt: "#02", sp: "#01", bp: "#03" }
    },
    { 
      rank: 3, 
      roman: "III",
      name: "Midnight Drill", 
      artist: "Flex TZ", 
      votes: "7.9K",
      medal: "🥉",
      weeks: 8,
      platforms: { yt: "#03", sp: "#06", bp: "#01" }
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 mt-10">
      {podiumSongs.map((s) => (
        <div key={s.rank} className="relative group flex items-start gap-6">
          
          {/* 1. THE VERTICAL RANK AXIS */}
          <div className="flex flex-col items-center">
            <span className="font-['Cinzel'] text-[#D4AF37] text-2xl font-black italic">{s.roman}</span>
            <div className="w-[2px] h-32 bg-gradient-to-b from-[#D4AF37] via-white/10 to-transparent my-2"></div>
            <span className="text-white/20 text-[60px] leading-none select-none grayscale group-hover:grayscale-0 transition-all">
              {s.medal}
            </span>
          </div>

          {/* 2. THE CONTENT BLADE */}
          <div className="flex-1 pt-2">
            {/* PLATFORM TICKER (Top) */}
            <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-red-600 font-black text-[9px] tracking-tighter">YT</span>
                <span className="text-white font-mono text-xs font-bold">{s.platforms.yt}</span>
              </div>
              <div className="h-3 w-[1px] bg-white/10"></div>
              <div className="flex items-center gap-2">
                <span className="text-green-500 font-black text-[9px] tracking-tighter">SP</span>
                <span className="text-white font-mono text-xs font-bold">{s.platforms.sp}</span>
              </div>
              <div className="h-3 w-[1px] bg-white/10"></div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400 font-black text-[9px] tracking-tighter">BP</span>
                <span className="text-white font-mono text-xs font-bold">{s.platforms.bp}</span>
              </div>
            </div>

            {/* IDENTITY & OBVIOUS WEEKS INDICATOR */}
            <div className="mb-10 flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-['Cinzel'] text-white text-2xl md:text-3xl font-black leading-none uppercase mb-2 tracking-tighter group-hover:text-[#D4AF37] transition-colors">
                  {s.name}
                </h3>
                <p className="text-white/40 text-[10px] tracking-[0.6em] uppercase font-bold pl-1">
                  {s.artist}
                </p>
              </div>

              {/* NEW: HIGH-VISIBILITY WEEKS BADGE */}
              <div className="flex flex-col items-end border-l border-[#D4AF37]/30 pl-4 py-1">
                <span className="text-[#D4AF37] font-black text-[14px] leading-none mb-1">{s.weeks}</span>
                <span className="text-white/20 text-[7px] uppercase font-black tracking-widest text-right">Wks In</span>
              </div>
            </div>

            {/* VOTE INTERFACE */}
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => onVote(s.name, 'up', 'podium')}
                  className="w-11 h-11 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all active:scale-90 shadow-[0_0_15px_rgba(212,175,55,0.1)]"
                >
                  ▲
                </button>
                <button 
                  onClick={() => onVote(s.name, 'down', 'podium')}
                  className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/20 hover:border-red-500 hover:text-red-500 transition-all active:scale-90"
                >
                  ▼
                </button>
              </div>
              
              <div className="h-10 w-[1px] bg-white/10"></div>

              <div className="flex flex-col">
                <span className="text-white font-['Cinzel'] text-2xl font-black leading-none tracking-widest italic">{s.votes}</span>
                <span className="text-white/20 text-[6px] uppercase font-black tracking-[0.4em] mt-1">Pulse Count</span>
              </div>
            </div>
          </div>

          {/* 3. LARGE WATERMARK BACKGROUND */}
          <div className="absolute right-0 bottom-0 select-none pointer-events-none z-[-1] opacity-5">
            <h4 className="font-['Cinzel'] text-[120px] font-black leading-none italic">{s.roman}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Podium;