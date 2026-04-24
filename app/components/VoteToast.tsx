'use client';

import React, { useState } from 'react';

const toRoman = (num: number) => {
  const map: [string, number][] = [
    ['XX', 20],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1],
  ];

  let result = '';
  let remaining = num;

  for (const [key, value] of map) {
    while (remaining >= value) {
      result += key;
      remaining -= value;
    }
  }

  return result;
};

export const RankingsDivider = () => {
  return (
    <div className="relative w-full py-16 flex flex-col items-center justify-center overflow-hidden select-none">
      <div className="flex items-center w-full px-2 gap-4 relative z-10">
        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]/30" />
        <div className="relative px-8 py-2 flex flex-col items-center gap-1">
          <span className="font-['Cinzel'] text-[12px] tracking-[0.6em] uppercase font-black text-[#D4AF37]">
            Full Standings
          </span>
          <span className="font-['Cinzel'] text-white/20 text-[7px] tracking-[0.8em] uppercase font-bold">
            Rank IV — XX
          </span>
        </div>
        <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]/30" />
      </div>
    </div>
  );
};

type Props = {
  rank: number;
  song: string;
  artist: string;
  votes: string;
  weeks: number;
  yt: string;
  sp: string;
  bp: string;
  onVote?: (type: 'up' | 'down') => void;
};

export default function RankRow({
  rank,
  song,
  artist,
  votes,
  weeks,
  yt,
  sp,
  bp,
  onVote,
}: Props) {
  const [voted, setVoted] = useState<'up' | 'down' | null>(null);

  const isElite = rank >= 4 && rank <= 10;

  const handleVote = (type: 'up' | 'down') => {
    setVoted(type);
    onVote?.(type);

    if (typeof window !== 'undefined' && navigator.vibrate) {
      navigator.vibrate(type === 'up' ? 15 : [30, 20]);
    }

    setTimeout(() => setVoted(null), 450);
  };

  return (
    <div
      className={`group relative flex items-center justify-between p-5 mb-3 rounded-xl border transition-all duration-300 overflow-hidden ${
        isElite
          ? 'bg-[#0f0f0f] border-white/20'
          : 'bg-[#080808] border-white/5'
      }`}
    >
      <div className="absolute left-36 top-1/2 -translate-y-1/2 pointer-events-none opacity-10">
        <span className="font-['Cinzel'] text-[110px] font-black italic text-white/10">
          {toRoman(rank)}
        </span>
      </div>

      <div className="relative z-10 flex items-center gap-4 w-full max-w-[75%]">
        <span className="font-['Cinzel'] text-2xl font-black w-8 text-center text-white/40">
          {rank}
        </span>

        <div>
          <h4 className="font-['Cinzel'] text-[16px] font-black uppercase text-white">
            {song}
          </h4>

          <p className="text-white/40 text-[10px] uppercase">{artist}</p>

          <div className="flex gap-3 text-[10px] text-white/70 mt-2">
            <span>YT {yt}</span>
            <span>SP {sp}</span>
            <span>BP {bp}</span>
            <span>{weeks}w</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex items-center gap-3">
        <span className="text-white font-bold">{votes}</span>

        <div className="flex flex-col">
          <button
            onClick={() => handleVote('up')}
            className={voted === 'up' ? 'text-yellow-400' : 'text-white'}
          >
            ▲
          </button>
          <button
            onClick={() => handleVote('down')}
            className={voted === 'down' ? 'text-red-500' : 'text-white/40'}
          >
            ▼
          </button>
        </div>
      </div>
    </div>
  );
}