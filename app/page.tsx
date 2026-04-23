'use client';
import { useState, useCallback, useRef } from 'react';

import Marquee from './components/Marquee';
import Header from './components/Header';
import Throne from './components/Throne';
import Podium from './components/Podium';
import HotThree from './components/HotThree';
import RankRow, { RankingsDivider } from './components/RankRow';
import NewsSection from './components/NewsSection';
import Footer from './components/Footer';
import VoteToast from './components/VoteToast';

export default function Home() {
  const [toast, setToast] = useState<{
    msg: string;
    type: 'up' | 'down';
    visible: boolean;
  }>({
    msg: '',
    type: 'up',
    visible: false
  });

  // Prevent stacking multiple timeouts
  const toastTimer = useRef<NodeJS.Timeout | null>(null);

  const triggerToast = useCallback((songName: string, type: 'up' | 'down') => {
    // Clear previous timeout
    if (toastTimer.current) {
      clearTimeout(toastTimer.current);
    }

    setToast({
      msg: type === 'up' ? `Pulse Added: ${songName}` : `Strike Cast: ${songName}`,
      type,
      visible: true
    });

    toastTimer.current = setTimeout(() => {
      setToast(prev => ({ ...prev, visible: false }));
    }, 3000);
  }, []);

  return (
    <main className="min-h-screen bg-[#050505] font-['Inter'] text-white antialiased">
      
      <Marquee />
      <Header />

      {/* 1. THRONE */}
      <Throne
        song="Bongo Anthem"
        artist="Davieh G ft. Matitu"
        votes="12.4K"
        weeksInChart={12}
        weeksAtNo1={5}
        ytRank="#01"
        spRank="#02"
        bpRank="#01"
        onVote={triggerToast}
      />

      <div className="max-w-4xl mx-auto px-4">

        {/* 2. PODIUM */}
        <Podium onVote={triggerToast} />

        {/* 3. HOT */}
        <HotThree />

        {/* 4. FULL STANDINGS */}
        <section className="mb-20">
          <RankingsDivider />

          <div className="flex flex-col gap-1">
            {[4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((num) => {
              const isTop10 = num <= 10;
              const songName = isTop10 ? "Sielewi" : "Archive Sequence";

              return (
                <RankRow
                  key={num}
                  rank={num}
                  song={songName}
                  artist={isTop10 ? "Zeke.bxt" : "Underground"}
                  votes={isTop10 ? "4.5K" : "800"}
                  weeks={num + 1}
                  yt={`#${num + 2}`}
                  sp={`#${num + 4}`}
                  bp={`#${num}`}
                  onVote={(type) => triggerToast(songName, type)}
                />
              );
            })}
          </div>
        </section>

        {/* 5. NEW RELEASES (REFINED — LESS DOMINANT) */}
        <section className="my-16 py-8 border-y border-white/5">
          
          <div className="mb-8 px-2">
            <span className="text-[#DC143C] text-[8px] tracking-[0.6em] uppercase opacity-60">
              Last 5 Days
            </span>
            <h3 className="text-white text-xl font-black uppercase tracking-tight">
              New Releases
            </h3>
          </div>

          <div className="overflow-hidden">
            <div className="flex gap-6 px-4 overflow-x-auto">

              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  className="min-w-[160px] bg-[#0c0c0c] p-4 rounded-lg border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-300"
                >
                  <div className="aspect-square bg-[#050505] rounded-md mb-3 border border-white/5"></div>

                  <h4 className="text-white text-[11px] font-bold uppercase truncate">
                    Drop {item}
                  </h4>

                  <p className="text-white/30 text-[9px] uppercase mt-1">
                    Artist Name
                  </p>

                  <div className="mt-3 text-[9px] text-white/40 flex flex-col gap-1">
                    <span>▶ YouTube</span>
                    <span>♫ Spotify</span>
                    <span>▶ Boomplay</span>
                  </div>
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

    </main>
  );
}