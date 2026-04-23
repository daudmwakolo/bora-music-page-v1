'use client';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-40 bg-[#080808] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
        
        {/* MAIN FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20 w-full text-center">
          
          {/* 1. BRAND PILLAR */}
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-3">
               <div className="w-8 h-8 bg-[#DC143C] rounded-full flex items-center justify-center font-black text-black text-xs">B</div>
               <h2 className="font-['Cinzel'] text-xl font-black tracking-tighter uppercase">Bora <span className="text-white/20">Charts</span></h2>
            </div>
            <p className="text-white/30 text-[10px] leading-relaxed uppercase tracking-wider max-w-[250px]">
              The official pulse of Tanzanian music. Curated by Matitu Nation. Designed for the modern bedroom producer.
            </p>
          </div>

          {/* 2. NAVIGATION */}
          <div className="flex flex-col items-center gap-4">
            <span className="text-[#DC143C] text-[7px] font-black uppercase tracking-[0.5em]">Systems</span>
            <nav className="flex flex-col gap-3">
              {['Home', 'Fresh Drops', 'News Archive', 'Submit Music'].map((item) => (
                <a key={item} href="#" className="text-white/40 text-[10px] font-bold uppercase hover:text-white transition-colors tracking-widest">
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* 3. BORA INDEX (Replaced Connect) */}
          <div className="flex flex-col items-center gap-4">
            <span className="text-[#D4AF37] text-[7px] font-black uppercase tracking-[0.5em]">Bora Index</span>
            <div className="grid grid-cols-2 gap-2 w-full max-w-[240px]">
               {[
                 { name: 'Philosophy', path: '/info#about' },
                 { name: 'Pulse FAQ', path: '/info#faq' },
                 { name: 'Conduct', path: '/info#terms' },
                 { name: 'Legal', path: '/info#disclaimer' }
               ].map((link) => (
                 <Link 
                    key={link.name} 
                    href={link.path} 
                    className="h-10 border border-white/5 rounded-lg flex items-center justify-center hover:bg-white/5 transition-all group px-2"
                 >
                    <span className="text-white/20 text-[7px] font-black uppercase group-hover:text-[#D4AF37] transition-colors tracking-widest text-center leading-none">
                      {link.name}
                    </span>
                 </Link>
               ))}
            </div>
          </div>
        </div>

        {/* BOTTOM STRIP */}
        <div className="w-full flex flex-col items-center pt-10 border-t border-white/5 gap-6">
          <div className="flex items-center gap-2">
             <div className="w-1.5 h-1.5 bg-[#DC143C] animate-pulse"></div>
             <span className="text-[8px] text-white/20 font-black uppercase tracking-[0.4em]">All Systems Operational</span>
          </div>
          
          <span className="text-[8px] text-white/10 font-bold uppercase tracking-[0.2em] text-center">
            © {currentYear} Matitu Nation — Flex TZ Architect
          </span>
        </div>
      </div>
    </footer>
  );
}