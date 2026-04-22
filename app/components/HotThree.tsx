import React from 'react';

const HotThree = () => (
  <section className="mb-24 text-center">
    <div className="inline-flex items-center gap-3 mb-8">
      <span className="w-1.5 h-1.5 rounded-full bg-[#DC143C] animate-ping"></span>
      <h3 className="font-['Cinzel'] text-white text-[10px] tracking-[0.5em] uppercase">Trending Universe</h3>
    </div>
    <div className="flex flex-col md:flex-row gap-4 px-2">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex-1 bg-[#0a0a0a] border border-white/5 py-8 px-6 rounded-2xl hover:border-[#DC143C]/30 transition-all group">
          <span className="text-[7px] font-black text-[#DC143C] uppercase tracking-[0.4em] mb-4 block opacity-50 group-hover:opacity-100 transition-opacity italic">Viral Heat</span>
          <h4 className="font-['Cinzel'] text-white text-sm font-black uppercase mb-1">Viral Track {i}</h4>
          <p className="text-white/30 text-[8px] uppercase mb-6">Matitu Collective</p>
          <div className="flex justify-center gap-4 opacity-20 group-hover:opacity-100 transition-opacity">
            <span className="text-[8px] font-black text-red-600 cursor-pointer">YT</span>
            <span className="text-[8px] font-black text-green-500 cursor-pointer">SP</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default HotThree;