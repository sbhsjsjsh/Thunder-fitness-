import React from 'react';

export function Logo({ className = "w-8 h-8", textClassName = "text-xl" }: { className?: string; textClassName?: string }) {
  return (
    <div className="flex items-center gap-2 group cursor-pointer">
      <div className={`${className} relative flex items-center justify-center`}>
        {/* Bolt SVG */}
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-brand fill-brand transition-transform group-hover:scale-110 group-hover:rotate-12 duration-300"
        >
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        {/* Glow effect */}
        <div className="absolute inset-0 bg-brand/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <span className={`${textClassName} font-display font-black tracking-tighter text-zinc-100 uppercase italic`}>
        Thunder<span className="text-brand">Fitness</span>
      </span>
    </div>
  );
}
