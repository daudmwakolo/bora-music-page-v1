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
  onVote: (songName: string, type: 'up' | 'down', tier: 'throne') => void;
}

const Throne: React.FC<ThroneProps> = ({
  song,
  artist,
  votes,
  weeksInChart,
  weeksAtNo1,
  ytRank,
  spRank,
  bpRank,
  onVote
}) => {
  const handleVote = (type: 'up' | 'down') => {
    if (typeof onVote === 'function') {
      onVote(song, type, 'throne');
    }
  };

  return (
    <section className="relative w-full border-t border-b border-[#D4AF37]/40 bg-[#080808] pt-24 pb-16 px-4 text-center mb-14 mt-10 overflow-visible">

      {/* Rank Badge */}
      <div className="absolute -top-[18px] left-1/2 -translate-x-1/2 z-50">
        <div className="bg-[#080808] border border-[#D4AF37] px-10 py-3 rounded-sm shadow-[0_10px_40px_rgba(0,0,0,1)] flex flex-col items-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-[2.5px] bg-[#D4AF37] shadow-[0_0_15px_#D4AF37]"></div>

          <span className="text-[#D4AF37] font-['Cinzel'] text-[13px] tracking-[0.7em] font-black uppercase">
            Rank I
          </span>
          <span className="text-white/30 text-[8px] tracking-[0.5em] font-black uppercase mt-2">
            The Throne
          </span>
        </div>
      </div>

      {/* Crown */}
      <div className="absolute -top-10 -right-10 select-none pointer-events-none z-0 rotate-[10deg] opacity-60">
        <span className="font-['Cinzel'] text-[300px] md:text-[450px] font-black text-transparent bg-clip-text bg-gradient-to-br from-[#D4AF37]/30 to-transparent blur-[1.5px]">
          ♛
        </span>
      </div>

      <div className="flex flex-col items-center relative z-10">

        {/* Platforms */}
        <div className="flex items-center gap-6 mb-10 bg-white/[0.03] border border-white/10 px-8 py-3 rounded-full backdrop-blur-2xl">
          <span className="text-red-600 text-[10px] font-black">YT</span>
          <span className="text-white font-mono text-sm font-bold">{ytRank}</span>

          <div className="h-4 w-[1px] bg-white/10"></div>

          <span className="text-green-500 text-[10px] font-black">SP</span>
          <span className="text-white font-mono text-sm font-bold">{spRank}</span>

          <div className="h-4 w-[1px] bg-white/10"></div>

          <span className="text-blue-400 text-[10px] font-black">BP</span>
          <span className="text-white font-mono text-sm font-bold">{bpRank}</span>
        </div>

        {/* Song */}
        <div className="mb-10">
          <h2 className="font-['Cinzel'] text-[#D4AF37] text-6xl md:text-9xl font-black uppercase leading-none">
            {song}
          </h2>
          <p className="text-white/50 text-[11px] md:text-base tracking-[1em] uppercase font-bold">
            {artist}
          </p>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-10 mb-14">
          <div className="flex flex-col items-center">
            <span className="text-white/20 text-[8px] uppercase">Weeks In</span>
            <span className="text-white font-['Cinzel'] font-black">{weeksInChart}</span>
          </div>

          <div className="h-10 w-[1px] bg-[#D4AF37]/30"></div>

          <div className="flex flex-col items-center">
            <span className="text-[#D4AF37]/40 text-[8px] uppercase">Weeks #1</span>
            <span className="text-[#D4AF37] font-['Cinzel'] font-black">{weeksAtNo1}</span>
          </div>
        </div>

        {/* Votes */}
        <div className="flex items-center gap-12 border border-white/15 px-12 py-5 rounded-full bg-white/[0.04]">
          
          <button
            onClick={() => handleVote('up')}
            className="text-[#D4AF37] text-3xl hover:scale-125 active:scale-75 transition"
          >
            ▲
          </button>

          <div className="flex flex-col items-center min-w-[80px]">
            <span className="font-['Cinzel'] text-[24px] text-white font-black">
              {votes}
            </span>
            <span className="text-[7px] text-white/30 uppercase tracking-[0.5em]">
              Pulse
            </span>
          </div>

          <button
            onClick={() => handleVote('down')}
            className="text-white/20 text-3xl hover:text-white hover:scale-125 active:scale-75 transition"
          >
            ▼
          </button>

        </div>
      </div>
    </section>
  );
};

export default Throne;