import React from 'react';

const Trends = () => {
  const trends = [
    { tag: "EXPLODING", label: "Zekebxt" },
    { tag: "TRENDING", label: "Iringa Drill" },
    { tag: "HOT", label: "Matitu FX" }
  ];

  return (
    /* flex justify-center ensures it aligns with your centered "Bora" title */
    <div className="flex justify-center gap-4 px-6 mb-12 overflow-x-auto no-scrollbar py-2 relative z-20">
      {trends.map((item, i) => (
        <div 
          key={i} 
          className="flex items-center gap-3 bg-white/[0.03] border border-white/5 px-5 py-2.5 rounded-full whitespace-nowrap transition-all duration-300 hover:bg-white/[0.08] hover:border-[#DC143C]/40 group cursor-pointer backdrop-blur-sm"
        >
          {/* Status Tag - Pulsing effect on hover */}
          <span className="text-[7px] font-black bg-[#DC143C] text-white px-2 py-0.5 rounded-sm tracking-tighter italic group-hover:scale-110 group-hover:shadow-[0_0_10px_#DC143C] transition-all">
            {item.tag}
          </span>
          
          {/* Trend Label - Cinzel font to match your brand hierarchy */}
          <span className="font-['Cinzel'] text-[10px] font-black text-white/50 tracking-[0.25em] uppercase group-hover:text-white transition-colors">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Trends;