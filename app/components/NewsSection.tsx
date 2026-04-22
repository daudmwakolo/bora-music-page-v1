import React from 'react';

const NewsCard = ({ category, title, date }: { category: string, title: string, date: string }) => (
  <div className="group relative bg-[#0a0a0a] border-l border-white/5 p-6 mb-4 hover:bg-[#111] transition-all cursor-pointer">
    {/* Decorative line that glows on hover */}
    <div className="absolute left-0 top-0 h-full w-[1px] bg-[#D4AF37] scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
    
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <span className={`text-[7px] font-black uppercase tracking-[0.3em] px-2 py-0.5 rounded-sm ${
          category === 'Live' ? 'bg-[#DC143C] text-white' : 'border border-[#D4AF37]/40 text-[#D4AF37]'
        }`}>
          {category}
        </span>
        <span className="text-[8px] text-white/20 uppercase tracking-widest">{date}</span>
      </div>
      
      <h4 className="font-['Cinzel'] text-white text-sm md:text-base leading-tight uppercase font-bold tracking-tight group-hover:text-[#D4AF37] transition-colors">
        {title}
      </h4>
    </div>
  </div>
);

const NewsSection = () => {
  return (
    <section className="my-24">
      <div className="flex items-center gap-4 mb-10 px-2">
        <h3 className="font-['Cinzel'] text-white text-[10px] tracking-[0.5em] uppercase whitespace-nowrap">The Universe</h3>
        <div className="h-[1px] w-full bg-gradient-to-r from-white/10 to-transparent"></div>
      </div>

      <div className="flex flex-col">
        <NewsCard 
          category="Exclusive" 
          title="Zekebxt: Navigating Shyness through the Balaclava" 
          date="April 20, 2026"
        />
        <NewsCard 
          category="Live" 
          title="Matitu Studio Launch: Dar Es Salaam Event" 
          date="Coming Soon"
        />
        <NewsCard 
          category="News" 
          title="Bora 1.1.0 Update: New Ranking Logic Implemented" 
          date="2 Hours Ago"
        />
        <NewsCard 
          category="IG Event" 
          title="Weekend Parlay Glitch: Statistical Analysis" 
          date="Today"
        />
      </div>
    </section>
  );
};

export default NewsSection;