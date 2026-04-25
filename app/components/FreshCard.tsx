'use client';
import React from 'react';

type FreshCardProps = {
  song: string;
  artist: string;
};

const FreshCard = ({ song, artist }: FreshCardProps) => {
  return (
    <div className="w-44 bg-[#0c0c0c] border border-white/10 rounded-lg p-4 hover:border-[#DC143C]/30 transition-all">
      
      <div className="aspect-square bg-black/40 rounded-md mb-3"></div>

      <h3 className="text-white text-[12px] font-bold uppercase truncate">
        {song}
      </h3>

      <p className="text-white/40 text-[10px] uppercase tracking-wide">
        {artist}
      </p>

    </div>
  );
};

export default FreshCard;