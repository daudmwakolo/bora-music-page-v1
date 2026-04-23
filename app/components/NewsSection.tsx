'use client';

export default function NewsSection() {
  const newsItems = [
    {
      tag: "Project Update",
      title: "Matitu Nation 'Sielewi' Rollout Confirmed",
      desc: "The highly anticipated release is set for April 26. Get ready for the first official drop under the new BORA standards.",
      date: "APR 23, 2026"
    },
    {
      tag: "Platform News",
      title: "Archive Gate Now Fully Operational",
      desc: "Access historical rankings from 11-20. The BORA algorithm has been recalibrated for high-energy pulse tracking.",
      date: "APR 22, 2026"
    },
    {
      tag: "Market Intel",
      title: "Bongo Flava Drill Peak in Q2",
      desc: "New data shows a massive spike in Tanzanian Drill production. Matitu Studio lead engineers report record-breaking sessions.",
      date: "APR 20, 2026"
    },
    {
      tag: "System Status",
      title: "Bora Mobile Optimization Complete",
      desc: "The platform has been optimized for S-series devices. Visual fidelity and transition speeds have been increased by 40%.",
      date: "APR 18, 2026"
    },
    {
      tag: "Creative Sync",
      title: "Zeke.bxt Content Strategy Leaked",
      desc: "Sources indicate a new series of freestyle content featuring the signature lime green balaclava is hitting the feed soon.",
      date: "APR 15, 2026"
    }
  ];

  return (
    <section className="my-24 px-2">
      <div className="flex flex-col gap-1 mb-12">
        <span className="text-[#DC143C] font-black text-[7px] tracking-[0.8em] uppercase opacity-70">Intelligence</span>
        <h3 className="font-['Cinzel'] text-white text-3xl font-black uppercase tracking-tighter">
          Bora <span className="text-white/10">Bulletin</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsItems.map((news, i) => (
          <div 
            key={i} 
            className={`group bg-[#080808] border border-white/5 p-8 rounded-xl hover:border-[#DC143C]/30 transition-all duration-500 flex flex-col justify-between ${
              i === 0 ? 'md:col-span-2 lg:col-span-2' : '' // Featured first post takes more space
            }`}
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="bg-[#DC143C]/10 text-[#DC143C] text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-[#DC143C]/20">
                  {news.tag}
                </span>
                <span className="text-white/10 text-[9px] font-bold">{news.date}</span>
              </div>
              
              <h4 className={`${i === 0 ? 'text-2xl' : 'text-lg'} text-white font-bold uppercase tracking-tight mb-4 group-hover:text-[#DC143C] transition-colors duration-300`}>
                {news.title}
              </h4>
              
              <p className="text-white/40 text-xs leading-relaxed mb-8 font-medium">
                {news.desc}
              </p>
            </div>

            <button className="text-white/20 text-[9px] font-black uppercase tracking-[0.3em] group-hover:text-white group-hover:tracking-[0.4em] transition-all duration-500 text-left">
              Read Report →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}