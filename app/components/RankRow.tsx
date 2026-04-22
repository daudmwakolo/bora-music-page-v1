'use client';
import React, { useState } from 'react';

const toRoman = (num: number) => {
  const map: { [key: string]: number } = { X: 10, IX: 9, V: 5, IV: 4, I: 1 };
  let result = '';
  for (let key in map) {
    while (num >= map[key]) { result += key; num -= map[key]; }
  }
  return result;
};

export default function RankRow({ rank, song, artist, votes, onVote }: { 
  rank: number; 
  song: string; 
  artist: string; 
  votes: string;
  onVote?: (type: 'up' | 'down') => void;
}) {
  const [voted, setVoted] = useState<'up' | 'down' | null>(null);
  const isElite = rank >= 4 && rank <= 10;

  // --- UPDATED LOGIC FOR TACTICAL VIBRATION ---
  const handleVote = (type: 'up' | 'down') => {
    if (typeof window !== 'undefined' && window.navigator.vibrate) {
      if (type === 'up') {
        // LIGHT PULSE: Single clean tap
        window.navigator.vibrate(15);
      } else {
        // HEAVY STRIKE: Aggressive double-tap pattern
        window.navigator.vibrate([40, 30, 40]);
      }
    }

    setVoted(type);
    
    if (onVote) {
      onVote(type);
    }

    setTimeout(() => setVoted(null), 450);
  };

  return (
    <div className={`group relative flex items-center justify-between p-6 mb-4 rounded-xl border transition-all duration-300 ${
      voted ? 'animate-card-pulse' : ''
    } ${isElite ? 'bg-[#0a0a0a] border-white/5' : 'bg-[#080808] border-white/5'}`}>
      
      <div className="absolute left-24 top-1/2 -translate-y-1/2 select-none pointer-events-none z-0">
        <span className="font-['Cinzel'] text-[130px] font-black text-white/[0.06] group-hover:text-[#D4AF37]/[0.10] transition-all">
          {toRoman(rank)}
        </span>
      </div>

      <div className="flex items-center gap-5 relative z-10">
        <span className={`font-['Cinzel'] text-xl font-black w-10 text-center ${isElite ? 'text-[#DC143C]' : 'text-white/20'}`}>
          {rank}
        </span>
        <div className="text-left">
          <h4 className="font-['Cinzel'] font-bold text-sm uppercase text-white group-hover:text-[#D4AF37] transition-colors">{song}</h4>
          <p className="text-[10px] font-black uppercase text-white/30">{artist}</p>
          <div className="flex gap-4 mt-3 opacity-60">
            <span className="text-[8px] font-black text-red-600">YT</span>
            <span className="text-[8px] font-black text-green-500">SP</span>
            <span className="text-[8px] font-black text-blue-400">BP</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-6 relative z-10">
        <div className="text-right">
          <span className="block text-[11px] font-black text-white tracking-[0.2em] uppercase">{votes}</span>
          <span className="text-[6px] text-white/20 font-bold uppercase">Pulse</span>
        </div>
        <div className="flex flex-col gap-1.5 p-3 rounded-full bg-black/30 border border-white/5">
          <button onClick={() => handleVote('up')} className={`transition-all ${voted === 'up' ? 'animate-ignite-gold' : 'text-[#D4AF37]'}`}>▲</button>
          <button onClick={() => handleVote('down')} className={`transition-all ${voted === 'down' ? 'animate-ignite-red' : 'text-white/10'}`}>▼</button>
        </div>
      </div>
    </div>
  );
}