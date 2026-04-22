'use client';
import { useState } from 'react';
import Marquee from './components/Marquee';
import Header from './components/Header';
import Throne from './components/Throne';
import Podium from './components/Podium';
import HotThree from './components/HotThree';
import RankRow from './components/RankRow';
import NewsSection from './components/NewsSection';
import Footer from './components/Footer';
import VoteToast from './components/VoteToast';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  
  const [toast, setToast] = useState<{msg: string, type: 'up' | 'down', visible: boolean}>({
    msg: '', type: 'up', visible: false
  });

  const triggerToast = (songName: string, type: 'up' | 'down') => {
    setToast({
      msg: type === 'up' ? `Pulse Added: ${songName}` : `Strike Cast: ${songName}`,
      type,
      visible: true
    });
    setTimeout(() => setToast(prev => ({...prev, visible: false})), 3000);
  };

  return (
    <main className="min-h-screen bg-[#050505] font-['Inter'] text-white antialiased">
      <Marquee />
      <Header />
      <Throne song="Bongo Anthem" artist="Davieh G ft. Matitu" votes="12.4K" />

      <div className="max-w-4xl mx-auto px-4">
        <Podium />
        <HotThree />

        {/* TOP 4-10 STANDINGS */}
        <section className="mb-10">
          <div className="flex items-center gap-4 mb-8 px-2">
            <h3 className="font-['Cinzel'] text-white/20 text-[9px] tracking-[0.5em] uppercase whitespace-nowrap">Official Standings</h3>
            <div className="h-[1px] w-full bg-white/5"></div>
          </div>
          {[4, 5, 6, 7, 8, 9, 10].map((num) => (
            <RankRow 
              key={num} 
              rank={num} 
              song="Elite Track" 
              artist="Matitu Studio" 
              votes="4.5K"
              onVote={(type) => triggerToast("Elite Track", type)} 
            />
          ))}
        </section>

        {/* THE IMPERIAL GATE (11-20) */}
        <section className="mb-20 relative group">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
          
          <div className={`overflow-hidden transition-all duration-[1500ms] cubic-bezier(0.23, 1, 0.32, 1) ${
            isOpen ? 'max-h-[3500px] opacity-100 pt-16' : 'max-h-0 opacity-0'
          }`}
          style={{ 
            maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' 
          }}>
            <div className="pb-10 w-full space-y-2">
               {[11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((num) => (
                 <RankRow 
                   key={num} 
                   rank={num} 
                   song="Archive Sequence" 
                   artist="Underground" 
                   votes="800" 
                   onVote={(type) => triggerToast("Archive Sequence", type)}
                 />
               ))}
            </div>
          </div>

          <div className="relative mt-8">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-full py-16 overflow-hidden border border-white/5 bg-[#080808] group/btn transition-all duration-700 hover:border-[#D4AF37]/20"
            >
              <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover/btn:animate-shimmer"></div>
              <div className="relative z-10 flex flex-col items-center">
                <span className="font-['Cinzel'] text-white/30 font-black text-[9px] uppercase tracking-[1.2em] group-hover/btn:text-[#D4AF37] group-hover/btn:tracking-[1.4em] transition-all duration-1000">
                  {isOpen ? 'Seal The Gate' : 'Open The Archive'}
                </span>
              </div>
            </button>
          </div>
        </section>

        {/* 6. INFINITE NEW DROPS - TWEAKED VISIBILITY */}
        <section className="my-24 py-12 border-y border-white/5">
          <div className="max-w-4xl mx-auto mb-12 flex items-end justify-between px-2">
            <div className="flex flex-col gap-1">
              <span className="text-[#DC143C] font-black text-[7px] tracking-[0.8em] uppercase opacity-70">Live Feed</span>
              <h3 className="font-['Cinzel'] text-white text-3xl font-black uppercase tracking-tighter">
                Fresh <span className="text-white/10">Drops</span>
              </h3>
            </div>
          </div>

          <div className="overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}>
            <div className="flex animate-infinite-scroll w-max gap-8 px-10">
              {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((item, index) => (
                <div key={index} className="w-[200px] bg-[#0c0c0c] p-6 rounded-xl border border-white/5 group/drop hover:bg-[#111] hover:border-[#D4AF37]/40 transition-all duration-500 cursor-pointer">
                  <div className="aspect-square bg-[#050505] rounded-lg mb-4 flex items-center justify-center text-[7px] text-[#DC143C] font-black tracking-[0.3em] opacity-20 uppercase border border-white/5 group-hover/drop:opacity-100 transition-all duration-700">
                    Matitu
                  </div>
                  <h4 className="text-white text-[11px] font-bold uppercase truncate tracking-wide group-hover/drop:text-[#D4AF37] transition-colors">Drop {item}</h4>
                  <p className="text-white/20 text-[8px] uppercase tracking-widest mt-1">Artist Name</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <NewsSection />
      </div>

      <Footer />

      <VoteToast 
        message={toast.msg} 
        type={toast.type} 
        isVisible={toast.visible} 
      />

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer { animation: shimmer 3s infinite; }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-infinite-scroll { display: flex; animation: scroll 45s linear infinite; }
        .animate-infinite-scroll:hover { animation-play-state: paused; }
      `}</style>
    </main>
  );
}