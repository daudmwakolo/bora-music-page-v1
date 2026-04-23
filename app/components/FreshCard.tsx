'use client';
import React from 'react';
import FreshCard from './FreshCard';

const FreshDrops = () => {
  const drops = [
    { song: "Sielewi", artist: "Zekebxt" },
    { song: "Matitu Anthem", artist: "Iringa Drill" },
    { song: "Bongo Vibe", artist: "Flex TZ" },
    { song: "New Era", artist: "Nation" },
    { song: "Street Soul", artist: "Bora Music" }, // Added 5th song for full scroll
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-[#050505]">
      
      {/* 1. THE TINGATINGA CANVAS LAYER */}
      <div 
        className="absolute inset-0 z-0 opacity-10 contrast-[1.1] saturate-[0.9]"
        style={{
          backgroundImage: "url('/assets/tingatinga.png')",
          backgroundSize: '1000px', // Larger size for mural effect
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
          // Double mask: Fades the pattern smoothly at top and bottom
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
          maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
        }}
      />

      {/* 2. AMBIENT GLOW (Connecting the pattern to the brand) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#DC143C]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* 3. CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <h2 className="font-['Cinzel'] text-white/30 text-[10px] uppercase font-black tracking-[0.6em] mb-3">
              Kazi Mpya / The Arrival
            </h2>
            <h3 className="font-['Cinzel'] text-4xl md:text-5xl font-black text-white uppercase tracking-[-0.03em]">
              Fresh <span className="text-[#DC143C] drop-shadow-[0_0_20px_rgba(220,20,60,0.3)]">Drops</span>
            </h3>
          </div>
          
          <button className="hidden md:block font-['Cinzel'] text-white/20 text-[9px] uppercase font-black tracking-[0.5em] hover:text-[#DC143C] transition-all hover:tracking-[0.7em] pb-2 border-b border-white/5">
            View Archive
          </button>
        </div>

        {/* 4. HORIZONTAL SCROLLING CARDS */}
        {/* The -mx-6 px-6 allows the Tingatinga pattern to show "through" the gaps between cards as you scroll */}
        <div className="flex gap-8 overflow-x-auto no-scrollbar pb-12 -mx-6 px-6 scroll-smooth">
          {drops.map((drop, i) => (
            <div key={i} className="flex-shrink-0 transition-transform duration-500 hover:-translate-y-2">
              <FreshCard 
                song={drop.song} 
                artist={drop.artist} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreshDrops;