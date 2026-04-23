'use client';
import React, { useState } from 'react';

const toRoman = (num: number) => {
  const map: { [key: string]: number } = { XX: 20, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
  let result = '';
  const entries = Object.entries(map);
  let remaining = num;
  for (const [key, value] of entries) {
    while (remaining >= value) { result += key; remaining -= value; }
  }
  return result;
};

/* --- 1. THE NAMED EXPORT (This fixes your error) --- */
export const RankingsDivider = () => {
  return (
    <div className="relative w-full py-16 flex flex-col items-center justify-center overflow-hidden select-none">
      <div className="flex items-center w-full px-2 gap-4 relative z-10">
        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]/30"></div>
        <div className="relative px-8 py-2 flex flex-col items-center gap-1">
          <span className="font-['Cinzel'] text-[12px] tracking-[0.6em] uppercase font-black text-[#D4AF37]">
            Full Standings
          </span>
          <span className="font-['Cinzel'] text-white/20 text-[7px] tracking-[0.8em] uppercase font-bold">
            Rank IV — XX
          </span>
        </div>
        <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]/30"></div>
      </div>
      <div className="mt-4 opacity-30 animate-bounce">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="3">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" strokeLinecap="square"/>
        </svg>
      </div>
    </div>
  );
};

/* --- 2. THE DEFAULT EXPORT --- */
export default function RankRow({ 
  rank, song, artist, votes, weeks, yt, sp, bp, onVote 
}: { 
  rank: number; song: string; artist: string; votes: string;
  weeks: number; yt: string; sp: string; bp: string;
  onVote?: (type: 'up' | 'down') => void;
}) {
  const [voted, setVoted] = useState<'up' | 'down' | null>(null);
  const isElite = rank >= 4 && rank <= 10;

  const handleVote = (type: 'up' | 'down') => {
    setVoted(type);
    if (onVote) onVote(type);
    if (typeof window !== 'undefined' && window.navigator.vibrate) {
      window.navigator.vibrate(type === 'up' ? 15 : [30, 20]);
    }
    setTimeout(() => setVoted(null), 450);
  };

  return (
    <div className={`group relative flex items-center justify-between p-5 mb-3 rounded-xl border transition-all duration-300 overflow-hidden ${
      isElite ? 'bg-[#0f0f0f] border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' : 'bg-[#080808] border-white/5'
    }`}>
      
      {/* ROMAN WATERMARK */}
      <div className="absolute left-36 top-1/2 -translate-y-1/2 select-none pointer-events-none z-0">
        <span className="font-['Cinzel'] text-[110px] font-black text-white/[0.10] group-hover:text-[#D4AF37]/[0.18] transition-all duration-500 italic">
          {toRoman(rank)}
        </span>
      </div>

      <div className="flex items-center gap-4 relative z-10 w-full max-w-[75%]">
        <span className={`font-['Cinzel'] text-2xl font-black w-8 text-center shrink-0 ${isElite ? 'text-[#D4AF37]' : 'text-white/40'}`}>
          {rank}
        </span>
        
        <div className="text-left truncate">
          <h4 className="font-['Cinzel'] font-black text-[16px] uppercase text-white group-hover:text-[#D4AF37] transition-colors truncate mb-1">
            {song}
          </h4>
          
          {/* DATA STRIP */}
          <div className="flex items-center gap-4 py-1.5 px-3 bg-white/[0.05] rounded-sm w-fit border border-white/10">
             <div className="flex items-center gap-1.5 border-r border-white/10 pr-2">
                <span className="text-red-500 text-[8px] font-black italic drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]">YT</span>
                <span className="text-white font-mono text-[10px] font-bold">{yt}</span>
             </div>
             <div className="flex items-center gap-1.5 border-r border-white/10 pr-2">
                <span className="text-green-400 text-[8px] font-black italic drop-shadow-[0_0_8px_rgba(74,222,128,0.5)]">SP</span>
                <span className="text-white font-mono text-[10px] font-bold">{sp}</span>
             </div>
             <div className="flex items-center gap-1.5 border-r border-white/10 pr-2">
                <span className="text-blue-400 text-[8px] font-black italic drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]">BP</span>
                <span className="text-white font-mono text-[10px] font-bold">{bp}</span>
             </div>
             <div className="flex items-center gap-2">
                <span className="text-[#D4AF37] text-[7px] font-black uppercase tracking-widest">Weeks</span>
                <span className="text-white font-['Cinzel'] text-[10px] font-black">{weeks}</span>
             </div>
          </div>
        </div>
      </div>

      {/* VOTE UNIT */}
      <div className="flex items-center gap-4 relative z-10 shrink-0">
        <div className="text-right mr-2">
          <span className="block text-[15px] font-black text-white italic leading-none">{votes}</span>
          <span className="text-[7px] text-white/40 font-bold uppercase block mt-1 tracking-[0.3em]">Pulse</span>
        </div>
        <div className="flex flex-col gap-2 p-2.5 rounded-full bg-black/80 border border-white/15 shadow-2xl group-hover:border-[#D4AF37]/50 transition-all">
          <button onClick={() => handleVote('up')} className={`text-sm transition-all active:scale-150 ${voted === 'up' ? 'text-white' : 'text-[#D4AF37]'}`}>▲</button>
          <div className="h-[1px] w-full bg-white/5"></div>
          <button onClick={() => handleVote('down')} className={`text-sm transition-all active:scale-150 ${voted === 'down' ? 'text-white' : 'text-white/10'}`}>▼</button>
        </div>
      </div>
    </div>
  );
}