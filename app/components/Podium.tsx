'use client';
import React, { useState } from 'react';

const PodiumCard = ({ rank, song, artist, votes }: { rank: number; song: string; artist: string; votes: string }) => {
  const [voted, setVoted] = useState<'up' | 'down' | null>(null);

  const handleVote = (type: 'up' | 'down') => {
    if (typeof window !== 'undefined' && window.navigator.vibrate) window.navigator.vibrate(20);
    setVoted(type);
    setTimeout(() => setVoted(null), 450);
  };

  return (
    <div className={`flex-1 relative group overflow-hidden rounded-xl border p-6 transition-all duration-500 bg-black/40 backdrop-blur-md ${
      voted ? 'animate-card-pulse border-[#D4AF37]/40' : 'border-white/10'
    }`}>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none z-0">
        <span className="font-['Cinzel'] text-[180px] font-black text-white/[0.08] group-hover:text-[#D4AF37]/[0.15] transition-all">
          {rank === 2 ? 'II' : 'III'}
        </span>
      </div>
      
      <div className="relative z-10 text-center">
        <div className="font-['Cinzel'] text-[#D4AF37] text-[8px] tracking-[0.6em] mb-4 uppercase font-black">
          {rank === 2 ? 'The Silver Throne' : 'The Bronze Pillar'}
        </div>
        <h3 className="font-['Cinzel'] text-white text-base font-black uppercase truncate mb-1.5 group-hover:text-[#D4AF37] transition-colors">{song}</h3>
        <p className="text-white/40 text-[9px] tracking-[0.4em] uppercase mb-8 font-bold">{artist}</p>
        
        <div className="flex justify-center gap-6 mb-8 opacity-60">
          <span className="text-[7px] font-black text-red-600">YT</span>
          <span className="text-[7px] font-black text-green-500">SP</span>
          <span className="text-[7px] font-black text-blue-400">BP</span>
        </div>

        <div className="flex justify-center items-center gap-6 py-3 border-t border-white/10 bg-black/40 rounded-b-lg">
           <button onClick={() => handleVote('up')} className={`text-sm transition-all ${voted === 'up' ? 'animate-ignite-gold' : 'text-[#D4AF37]'}`}>▲</button>
           <div className="flex flex-col">
              <span className="text-[10px] font-black text-white/90 tracking-[0.2em] uppercase">{votes}</span>
              <span className="text-[6px] text-white/30 font-bold uppercase">Pulse</span>
           </div>
           <button onClick={() => handleVote('down')} className={`text-sm transition-all ${voted === 'down' ? 'animate-ignite-red' : 'text-white/20'}`}>▼</button>
        </div>
      </div>
    </div>
  );
};

export default function Podium() {
  return (
    <div className="flex gap-4 mb-24 px-2">
      <PodiumCard rank={2} song="Dar Nights" artist="Zekebxt" votes="10.1K" />
      <PodiumCard rank={3} song="Street Luxury" artist="Dee" votes="8.9K" />
    </div>
  );
}