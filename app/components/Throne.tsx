import React from 'react';

const Throne = ({ song, artist, votes }: { song: string; artist: string; votes: string }) => {
  return (
    <section className="relative w-full border-t border-b border-[#D4AF37]/40 bg-gradient-to-b from-[#151208] to-[#080808] pt-12 pb-14 px-4 text-center mb-10">
      {/* THE CROWN BADGE */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#080808] px-6 text-[#D4AF37] font-['Cinzel'] text-[9px] tracking-[0.6em] border border-[#D4AF37]/40 py-1 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
        RANK I • THE THRONE
      </div>

      <div className="flex flex-col items-center">
        {/* PLATFORM STATS BRIDGE */}
        <div className="flex gap-6 mb-8 opacity-60">
          <div className="flex items-center gap-1.5">
            <span className="text-red-600 text-[8px] font-black tracking-tighter">YT</span>
            <span className="text-white font-['Cinzel'] text-[10px] font-bold">#01</span>
          </div>
          <div className="w-[1px] h-3 bg-white/10"></div>
          <div className="flex items-center gap-1.5">
            <span className="text-green-500 text-[8px] font-black tracking-tighter">SP</span>
            <span className="text-white font-['Cinzel'] text-[10px] font-bold">#04</span>
          </div>
          <div className="w-[1px] h-3 bg-white/10"></div>
          <div className="flex items-center gap-1.5">
            <span className="text-blue-400 text-[8px] font-black tracking-tighter">BP</span>
            <span className="text-white font-['Cinzel'] text-[10px] font-bold">#02</span>
          </div>
        </div>

        {/* SONG & ARTIST */}
        <h2 className="font-['Cinzel'] text-[#D4AF37] text-4xl md:text-6xl font-black tracking-tighter mb-3 uppercase leading-none drop-shadow-2xl">
          {song}
        </h2>
        <p className="text-white/40 text-[10px] md:text-xs tracking-[0.6em] uppercase mb-10 font-medium">
          {artist}
        </p>
        
        {/* VOTE UNIT */}
        <div className="flex items-center gap-8 border border-white/10 px-8 py-2.5 rounded-full bg-white/5 backdrop-blur-md shadow-inner">
          <button className="text-[#D4AF37] text-xl hover:scale-125 transition active:translate-y-[-2px]">▲</button>
          <span className="font-['Cinzel'] text-[11px] tracking-[0.3em] font-black text-white/90">{votes}</span>
          <button className="text-white/20 text-xl hover:scale-125 transition active:translate-y-[2px]">▼</button>
        </div>
      </div>
    </section>
  );
};

export default Throne;