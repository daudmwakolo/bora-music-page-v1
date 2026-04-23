'use client';
import Link from 'next/link';

export default function Header() {
  return (
    // Reduced bottom padding (pb-4) to kill the deadspace
    <header className="relative border-b border-white/5 pt-28 pb-4 px-6 select-none overflow-hidden bg-[#050505]">
      
      {/* 1. THE KITENGE LAYER */}
      <div 
        className="absolute inset-0 z-0 opacity-20 contrast-125 saturate-150"
        style={{
          backgroundImage: "url('/assets/kitenge.png')",
          backgroundSize: '450px',
          backgroundRepeat: 'repeat',
          mixBlendMode: 'luminosity',
          WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)',
          maskImage: 'linear-gradient(to bottom, black, transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
         
         {/* 2. OVERLAP BRAND BLOCK */}
         <Link href="/" className="relative flex flex-col items-center group w-full py-4">
            
            {/* MASSIVE BACKGROUND LOGO */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-[450px] md:h-[450px] z-0 opacity-70 transition-all duration-1000 group-hover:scale-110 group-hover:opacity-90">
              <img 
                src="/assets/logo.png" 
                alt="" 
                className="w-full h-full object-contain drop-shadow-[0_0_60px_rgba(220,20,60,0.4)]"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-[#DC143C]/15 blur-[100px] rounded-full z-0" />
            </div>

            <h1 className="relative z-10 font-['Cinzel'] text-5xl md:text-8xl font-black tracking-[-0.04em] uppercase text-center leading-none">
               <span className="text-white [text-shadow:_0_8px_30px_rgb(0_0_0_/_100%)]">Bora</span>
               <br className="md:hidden" /> 
               <span className="text-white/50 ml-0 md:ml-4 [text-shadow:_0_8px_30px_rgb(0_0_0_/_100%)]">Music Charts</span>
            </h1>
         </Link>

         {/* 3. NAVIGATION (Squeezed to the bottom border) */}
         <nav className="mt-2 mb-2 flex flex-wrap justify-center gap-x-12 gap-y-4 relative z-20">
            {[
              { name: 'Official Top 20', link: '#top20' },
              { name: 'Fresh Drops', link: '#drops' },
              { name: 'News Bulletin', link: '#news' }
            ].map((item) => (
              <Link 
                key={item.name} 
                href={item.link} 
                className="font-['Cinzel'] text-white/60 text-[10px] uppercase font-black tracking-[0.6em] hover:text-[#D4AF37] transition-all hover:tracking-[0.8em] whitespace-nowrap drop-shadow-md"
              >
                {item.name}
              </Link>
            ))}
         </nav>
      </div>
    </header>
  );
}