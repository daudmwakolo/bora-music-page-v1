import React from 'react';

const Marquee = () => {
  return (
    <div className="bg-[#111] border-b border-[#D4AF37]/10 py-1.5 overflow-hidden whitespace-nowrap sticky top-0 z-50 backdrop-blur-md">
      <div className="inline-block animate-marquee text-[8px] font-black tracking-[0.5em] text-[#DC143C] uppercase">
        • LIVE CHART SYSTEM ONLINE • MATITU NATION PRODUCTION • THE PULSE OF DAR ES SALAAM • VOTE NOW • &nbsp;
      </div>
      <div className="inline-block animate-marquee text-[8px] font-black tracking-[0.5em] text-[#DC143C] uppercase">
        • LIVE CHART SYSTEM ONLINE • MATITU NATION PRODUCTION • THE PULSE OF DAR ES SALAAM • VOTE NOW • &nbsp;
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Marquee;