'use client';
import React from 'react';

const HotThree = () => {
  const trends = [
    {
      id: 1,
      badge: "Trending #1",
      platform: "YouTube Heat",
      track: "Sielewi",
      artist: "Zeke.bxt",
      color: "#FF0000", // YouTube Red
      label: "YT"
    },
    {
      id: 2,
      badge: "Rapid Pulse",
      platform: "Live Velocity",
      track: "Bongo Anthem",
      artist: "Davieh G",
      color: "#D4AF37", // Imperial Gold
      label: "VOTE"
    },
    {
      id: 3,
      badge: "Most Streamed",
      platform: "Boomplay Top",
      track: "Elite Track",
      artist: "Matitu Nation",
      color: "#00E5FF", // Boomplay Cyan
      label: "BP"
    }
  ];

  return (
    <section className="mb-24 text-center px-4">
      {/* Heading */}
      <div className="inline-flex items-center gap-3 mb-10">
        <span className="w-2 h-2 rounded-full bg-[#DC143C] animate-ping"></span>
        <h3 className="font-['Cinzel'] text-white text-[11px] tracking-[0.5em] uppercase font-bold">Trending Universe</h3>
      </div>

      <div className="flex flex-col md:flex-row gap-5">
        {trends.map((item) => (
          <div 
            key={item.id} 
            className="flex-1 py-12 px-6 rounded-sm border border-white/5 transition-all group relative overflow-hidden hover:border-white/20"
            style={{
              background: 'radial-gradient(circle at center, #151515 0%, #050505 100%)'
            }}
          >
            {/* Visual Flare: Subtle glow based on the platform color */}
            <div 
              className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none"
              style={{ background: `linear-gradient(to bottom, ${item.color}, transparent)` }}
            />

            {/* Achievement Badge */}
            <div className="mb-6">
              <span 
                className="text-[8px] font-black uppercase tracking-[0.4em] px-3 py-1 border rounded-full italic"
                style={{ color: item.color, borderColor: `${item.color}44` }}
              >
                {item.badge}
              </span>
            </div>

            {/* Platform Identity */}
            <p className="text-white/20 text-[9px] font-black uppercase tracking-[0.3em] mb-2">
              {item.platform}
            </p>

            {/* Title & Artist */}
            <h4 className="font-['Cinzel'] text-white text-[20px] font-black uppercase mb-1 tracking-tight group-hover:text-[#D4AF37] transition-colors">
              {item.track}
            </h4>
            <p className="text-white/40 text-[10px] font-bold uppercase mb-10 tracking-[0.2em]">
              {item.artist}
            </p>

            {/* Platform Tag Footer */}
            <div className="flex justify-center items-center gap-2">
              <div className="h-[1px] w-4 bg-white/10"></div>
              <span 
                className="text-[12px] font-black italic tracking-tighter"
                style={{ color: item.color }}
              >
                {item.label}
              </span>
              <div className="h-[1px] w-4 bg-white/10"></div>
            </div>

            {/* Corner Rank - Visual Watermark */}
            <div className="absolute -bottom-2 -right-2 opacity-5 font-['Cinzel'] text-6xl font-black italic">
              0{item.id}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HotThree;