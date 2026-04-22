import React from 'react';

const Trends = () => {
  const trends = [
    { tag: "EXPLODING", label: "Zekebxt" },
    { tag: "TRENDING", label: "Iringa Drill" },
    { tag: "HOT", label: "Matitu FX" }
  ];

  return (
    <div className="flex gap-3 px-2 mb-10 overflow-x-auto scrollbar-hide">
      {trends.map((item, i) => (
        <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full whitespace-nowrap">
          <span className="text-[7px] font-black bg-[#DC143C] text-white px-2 py-0.5 rounded-sm tracking-tighter italic">
            {item.tag}
          </span>
          <span className="font-['Cinzel'] text-[10px] font-black text-white/80 tracking-widest uppercase">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Trends;