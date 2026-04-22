import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-white/5 bg-[#050505] px-8 py-16 text-center">
      <div className="flex justify-center gap-8 text-[10px] font-black uppercase tracking-widest text-white/40 mb-10">
        <span className="hover:text-[#D4AF37] cursor-pointer transition">FAQ</span>
        <span className="hover:text-[#D4AF37] cursor-pointer transition">Contact</span>
        <span className="hover:text-[#D4AF37] cursor-pointer transition">Disclaimer</span>
      </div>
      <p className="font-['Cinzel'] text-[#D4AF37] text-[10px] tracking-[0.4em]">
        © 2026 MATITU NATION PRODUCTION • ALL RIGHTS RESERVED
      </p>
    </footer>
  );
};

export default Footer;