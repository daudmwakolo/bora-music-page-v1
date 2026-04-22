import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center px-8 py-12 bg-[#080808]">
      <div className="flex-1">
        <h1 className="font-['Dancing_Script'] text-[#D4AF37] text-3xl">Matitu Nation</h1>
      </div>
      
      {/* CENTER LOGO SLOT */}
      <div className="flex-1 flex justify-center">
        <div className="w-14 h-14 border border-white/5 rounded-full flex items-center justify-center">
          <span className="text-[7px] text-white/10 tracking-[0.4em] uppercase">Center Slot</span>
        </div>
      </div>

      <div className="flex-1 text-right">
        <h2 className="font-['Cinzel'] font-black text-white text-lg md:text-xl leading-none uppercase">
          Bora<br/>
          <span className="text-[#D4AF37] text-[10px] tracking-[0.4em] font-bold">Music Charts</span>
        </h2>
      </div>
    </header>
  );
};

export default Header;