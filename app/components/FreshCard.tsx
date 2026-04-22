import React from 'react';

const FreshCard = ({ song, artist }: { song: string; artist: string }) => {
  return (
    <div className="min-w-[160px] bg-[#0a0a0a] p-4 rounded-2xl border border-[#DC143C]/30 group">
      <div className="h-32 bg-[#151515] rounded-xl mb-3 border border-white/5 flex items-center justify-center">
        <span className="text-[8px] font-black text-[#DC143C] opacity-20 uppercase tracking-tighter">Visual FX</span>
      </div>
      <h4 className="text-white font-black text-xs uppercase truncate">{song}</h4>
      <p className="text-white/40 text-[10px] truncate">{artist}</p>
    </div>
  );
};

export default FreshCard;