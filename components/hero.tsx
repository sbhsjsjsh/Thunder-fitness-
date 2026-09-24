'use client';

import {motion} from 'motion/react';
import {ArrowRight} from 'lucide-react';
import {ThreeBG} from './three-bg';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-zinc-950 bg-mesh">
      {/* 3D Background */}
      <ThreeBG />
      
      {/* Dynamic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950 z-1" />
      
      {/* Visual Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-1" 
           style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block text-xs font-bold tracking-[0.4em] uppercase text-brand mb-6">
              Premium Fitness RT Nagar
            </span>
            <h1 className="text-6xl md:text-9xl font-display font-extrabold tracking-tighter leading-[0.85] mb-8 uppercase text-wrap-balance">
              <span className="text-gradient">Thunder</span> <br />
              <span className="text-zinc-500 italic">Fitness Gym</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mb-12 leading-relaxed font-medium">
              Forge your physique in Bengaluru&apos;s ultimate training environment. 
              Precision equipment, elite coaching, and a culture of pure performance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/917204113282?text=Hello%20Thunder%20Fitness!%20I'm%20interested%20in%20joining%20the%20gym.%20Please%20provide%20more%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-widest text-zinc-950 bg-brand hover:bg-brand/90 transition-all"
              >
                Join Now
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-widest text-zinc-100 border border-zinc-800 hover:bg-zinc-900 transition-all"
              >
                View Services
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative vertical line */}
      <div className="absolute right-12 bottom-0 w-px h-32 bg-gradient-to-t from-brand/50 to-transparent hidden lg:block" />
    </section>
  );
}
