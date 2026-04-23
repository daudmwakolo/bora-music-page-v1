'use client';
import Link from 'next/link';

export default function InfoPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white font-['Inter'] selection:bg-[#D4AF37] selection:text-black">
      
      {/* 1. MINIMALIST HEADER */}
      <nav className="border-b border-white/5 py-8 px-6 sticky top-0 bg-[#050505]/80 backdrop-blur-md z-50">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-6 h-6 bg-[#D4AF37] rounded-full flex items-center justify-center font-black text-black text-[10px] transition-transform group-hover:-translate-x-1">←</div>
            <span className="font-['Cinzel'] text-xs font-black tracking-[0.3em] uppercase">Return to Standings</span>
          </Link>
          <div className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20">Bora Index v1.1</div>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-24">
        
        {/* 2. HERO TITLE */}
        <header className="mb-32">
          <span className="text-[#DC143C] font-black text-[9px] tracking-[1em] uppercase block mb-4">Official Protocol</span>
          <h1 className="font-['Cinzel'] text-5xl md:text-7xl font-black uppercase leading-none tracking-tighter">
            Infrastructure <br />
            <span className="text-white/10">& Personnel</span>
          </h1>
        </header>

        {/* 3. CONTENT SECTIONS */}
        <div className="space-y-32">
          
          {/* PHILOSOPHY & FAQ (Keep existing or abbreviated) */}
          <section id="about" className="scroll-mt-32">
             <div className="flex items-center gap-4 mb-8">
              <span className="text-[#D4AF37] font-mono text-xs">01//</span>
              <h2 className="font-['Cinzel'] text-xl font-black uppercase tracking-widest">Philosophy</h2>
            </div>
            <p className="text-white/50 text-sm leading-relaxed tracking-wide font-light">
               Bora Charts serves as the creative architect for Tanzanian music, prioritizing high-energy sounds and street-level data.
            </p>
          </section>

          {/* TEAM & CREDITS */}
          <section id="team" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-12">
              <span className="text-[#D4AF37] font-mono text-xs">02//</span>
              <h2 className="font-['Cinzel'] text-xl font-black uppercase tracking-widest">The Collective</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
              <div className="bg-white/[0.03] p-8 border border-white/5">
                <span className="text-[#DC143C] text-[8px] font-black uppercase tracking-widest block mb-2">Architect & Strategist</span>
                <h4 className="font-['Cinzel'] text-lg font-black uppercase">Flex TZ</h4>
                <p className="text-white/20 text-[10px] uppercase mt-1">Lead Design & Infrastructure</p>
              </div>
              <div className="bg-white/[0.03] p-8 border border-white/5">
                <span className="text-[#D4AF37] text-[8px] font-black uppercase tracking-widest block mb-2">Sonic Identity</span>
                <h4 className="font-['Cinzel'] text-lg font-black uppercase">Zeke.bxt</h4>
                <p className="text-white/20 text-[10px] uppercase mt-1">Production & Curation</p>
              </div>
              <div className="bg-white/[0.03] p-8 border border-white/5 md:col-span-2">
                <span className="text-white/40 text-[8px] font-black uppercase tracking-widest block mb-2">Global Operations</span>
                <h4 className="font-['Cinzel'] text-lg font-black uppercase">Matitu Nation</h4>
                <p className="text-white/20 text-[10px] uppercase mt-1">Collective Oversight & Distribution</p>
              </div>
            </div>
          </section>

          {/* CONTACT US */}
          <section id="contact" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[#D4AF37] font-mono text-xs">03//</span>
              <h2 className="font-['Cinzel'] text-xl font-black uppercase tracking-widest">Inquiries</h2>
            </div>
            <div className="flex flex-col gap-6">
              <a href="mailto:your-email@example.com" className="group flex flex-col gap-1">
                <span className="text-white/20 text-[9px] font-black uppercase tracking-[0.3em]">Direct Email</span>
                <span className="text-white group-hover:text-[#D4AF37] transition-colors font-mono text-lg underline decoration-white/10 underline-offset-8 decoration-2">
                   your-email@example.com
                </span>
              </a>
              <a href="tel:+255000000000" className="group flex flex-col gap-1">
                <span className="text-white/20 text-[9px] font-black uppercase tracking-[0.3em]">Studio Line</span>
                <span className="text-white group-hover:text-[#D4AF37] transition-colors font-mono text-lg">
                   +255 (0) 000 000 000
                </span>
              </a>
            </div>
          </section>

          {/* LEGAL DISCLAIMER */}
          <section id="disclaimer" className="scroll-mt-32 pb-20 border-t border-white/5 pt-12">
            <p className="text-white/20 text-[9px] leading-relaxed uppercase tracking-widest text-center">
              Bora Charts is an independent entity. All data and rankings are for cultural analysis. Matitu Nation © 2026.
            </p>
          </section>

        </div>
      </div>

      <footer className="py-12 text-center opacity-30 text-[8px] uppercase tracking-[1em]">
        Design by Flex TZ
      </footer>
    </main>
  );
}