'use client';

export default function NewsPulse() {
  const news = [
    "BREAKING: MATITU NATION ANNOUNCES 'SIELEWI' RELEASE DATE",
    "MARKET UPDATE: BONGO FLAVA PULSE RATE UP 12%",
    "SYSTEM: ARCHIVE GATE AUTHORIZED FOR PUBLIC ACCESS",
    "LIVE: THRONE POSITION CHALLENGED BY UNDERGROUND SEQUENCE"
  ];

  return (
    <div className="w-full bg-[#DC143C]/10 border-y border-[#DC143C]/20 py-2 overflow-hidden flex items-center">
      <div className="shrink-0 px-4 flex items-center gap-2 border-r border-[#DC143C]/30">
        <div className="w-2 h-2 bg-[#DC143C] rounded-full animate-pulse"></div>
        <span className="font-['Cinzel'] text-[#DC143C] text-[10px] font-black uppercase tracking-tighter">Live Bulletin</span>
      </div>
      
      <div className="flex animate-news-slide gap-12 whitespace-nowrap px-8">
        {[...news, ...news].map((item, i) => (
          <span key={i} className="text-white text-[9px] font-bold uppercase tracking-[0.2em] opacity-80">
            {item}
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes news-slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-news-slide {
          animation: news-slide 30s linear infinite;
        }
      `}</style>
    </div>
  );
}