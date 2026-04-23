'use client';
import React from 'react';

interface ThroneProps {
  song: string;
  artist: string;
  votes: string;
  weeksInChart: number;
  weeksAtNo1: number;
  ytRank: string;
  spRank: string;
  bpRank: string;
  // Updated onVote to include song name to fix notification errors
  onVote: (songName: string, type: 'up' | 'down', tier: 'throne') => void;
}

const Throne = ({ 
  song, 
  artist, 
  votes, 
  weeksInChart, 
  weeksAtNo1, 
  ytRank, 
  spRank, 
  bpRank, 
  onVote 
}: ThroneProps) => {
  return (
    <section className="relative w-full border-t border-b border-[#D4AF37]/40 bg-[#080808] pt-24 pb-16 px-4 text-center mb-14 mt-10 overflow-visible">
      
      {/* 1. THE IMPERIAL STICK-OUT RANK (The missing rank indicator) */}
      <div className="absolute -top-[18px] left-1/2 -translate-x-1/2 z-50">
        <div className="bg-[#080808] border border-[#D4AF37] px-10 py-3 rounded-sm shadow-[0_10px_40px_rgba(0,0,0,1)] flex flex-col items-center">
          {/* Top accent line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-[2.5px] bg-[#D4AF37] shadow-[0_0_15px_#D4AF37]"></div>
          
          <span className="text-[#D4AF37] font-['Cinzel'] text-[13px] tracking-[0.7em] font-black uppercase leading-none">
            Rank I
          </span>
          <span className="text-white/30 font-['Inter'] text-[8px] tracking-[0.5em] font-black uppercase mt-2">
            The Throne
          </span>
        </div>
      </div>

      {/* BACKGROUND CROWN WATERMARK - INCREASED OPACITY (Fix applied here) */}
      <div className="absolute -top-10 -right-10 select-none pointer-events-none z-0 rotate-[10deg] opacity-60">
        <span className="font-['Cinzel'] text-[300px] md:text-[450px] leading-none font-black text-transparent bg-clip-text bg-gradient-to-br from-[#D4AF37]/30 to-transparent blur-[1.5px]">
          ♛
        </span>
      </div>

      <div className="flex flex-col items-center relative z-10">
        
        {/* PLATFORM RANK BRIDGE (The Magnet) */}
        <div className="flex items-center gap-6 md:gap-8 mb-10 bg-white/[0.03] border border-white/10 px-8 py-3 rounded-full backdrop-blur-2xl shadow-xl">
          <div className="flex items-center gap-2">
            <span className="text-red-600 font-black text-[10px] tracking-tighter italic">YT</span>
            <span className="text-white font-mono text-sm font-bold">{ytRank}</span>
          </div>
          <div className="h-4 w-[1px] bg-white/10"></div>
          <div className="flex items-center gap-2">
            <span className="text-green-500 font-black text-[10px] tracking-tighter italic">SP</span>
            <span className="text-white font-mono text-sm font-bold">{spRank}</span>
          </div>
          <div className="h-4 w-[1px] bg-white/10"></div>
          <div className="flex items-center gap-2">
            <span className="text-blue-400 font-black text-[10px] tracking-tighter italic">BP</span>
            <span className="text-white font-mono text-sm font-bold">{bpRank}</span>
          </div>
        </div>

        {/* SONG & ARTIST - Large Scale */}
        <div className="relative mb-10">
          <h2 className="font-['Cinzel'] text-[#D4AF37] text-6xl md:text-9xl font-black tracking-tighter mb-3 uppercase leading-none drop-shadow-[0_10px_30px_rgba(212,175,55,0.4)]">
            {song}
          </h2>
          <p className="text-white/50 text-[11px] md:text-base tracking-[1em] uppercase font-bold pl-[1em]">
            {artist}
          </p>
        </div>

        {/* CHART LONGEVITY STATS */}
        <div className="flex items-center gap-10 mb-14">
          <div className="flex flex-col items-center">
            <span className="text-white/20 text-[8px] uppercase font-black tracking-[0.4em] mb-2">Weeks In</span>
            <span className="text-white font-['Cinzel'] text-base font-black">{weeksInChart}</span>
          </div>
          <div className="h-10 w-[1px] bg-[#D4AF37]/30"></div>
          <div className="flex flex-col items-center">
            <span className="text-[#D4AF37]/40 text-[8px] uppercase font-black tracking-[0.4em] mb-2">Weeks @ #1</span>
            <span className="text-[#D4AF37] font-['Cinzel'] text-base font-black">{weeksAtNo1}</span>
          </div>
        </div>
        
        {/* VOTE UNIT - Fixed Error Logic */}
        <div className="flex items-center gap-12 border border-white/15 px-12 py-5 rounded-full bg-white/[0.04] backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-white/30 transition-all group">
          <button 
            onClick={() => onVote(song, 'up', 'throne')} 
            className="text-[#D4AF37] text-3xl active:scale-75 transition-transform hover:scale-125"
          >
            ▲
          </button>
          <div className="flex flex-col items-center min-w-[80px]">
            <span className="font-['Cinzel'] text-[24px] tracking-[0.1em] font-black text-white leading-none">{votes}</span>
            <span className="text-[7px] text-white/30 uppercase font-bold tracking-[0.5em] mt-2">Pulse</span>
          </div>
          <button 
            onClick={() => onVote(song, 'down', 'throne')} 
            className="text-white/20 text-3xl active:scale-75 transition-transform hover:scale-125 hover:text-white"
          >
            ▼
          </button>
        </div>
      </div>
    </section>
  );
};

export default Throne;