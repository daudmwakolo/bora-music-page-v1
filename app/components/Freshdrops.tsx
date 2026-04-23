'use client';
import React from 'react';
import FreshCard from './FreshCard'; // Ensure FreshCard.tsx is in the same folder

const FreshDrops = () => {
  // These are the 5 songs that will scroll through the Tingatinga background
  const drops = [
    { song: "Sielewi", artist: "Zekebxt" },
    { song: "Matitu Anthem", artist: "Iringa Drill" },
    { song: "Bongo Vibe", artist: "Flex TZ" },
    { song: "New Era", artist: "Nation" },
    { song: "Street Soul", artist: "Bora Music" },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-[#050505]">
      
      {/* 1. TINGATINGA BACKDROP */}
      <div 
        className="absolute inset-0 z-0 opacity-10 contrast-[1.1] saturate-[0.9]"
        style={{
          backgroundImage: "url('/assets/tingatinga.png')",
          backgroundSize: '1000px',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
          maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
        }}
      />

      {/* 2. CONTENT LAYER */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="flex items-end justify-between mb-16">
          <div className="flex flex-col gap-2">
            <span className="text-[#DC143C] font-black text-[8px] tracking-[0.8em] uppercase opacity-80">
              Kazi Mpya
            </span>
            <h3 className="font-['Cinzel'] text-4xl md:text-5xl font-black text-white uppercase tracking-[-0.02em]">
              Fresh <span className="text-[#DC143C] drop-shadow-[0_0_15px_rgba(220,20,60,0.4)]">Drops</span>
            </h3>
          </div>
          
          <button className="hidden md:block font-['Cinzel'] text-white/20 text-[9px] uppercase font-black tracking-[0.4em] hover:text-[#DC143C] transition-all border-b border-white/5 pb-2">
            View All
          </button>
        </div>

        {/* 3. SCROLLING FEED */}
        {/* We use overflow-x-auto and no-scrollbar so the user can swipe through the songs */}
        <div className="flex gap-8 overflow-x-auto no-scrollbar pb-12 -mx-6 px-6 scroll-smooth">
          {drops.map((drop, i) => (
            <div key={i} className="flex-shrink-0 transition-transform duration-500 hover:-translate-y-3">
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