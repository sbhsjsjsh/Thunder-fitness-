'use client';

import {motion} from 'motion/react';
import {Zap, ShieldCheck, Cpu} from 'lucide-react';
import {TiltCard} from './tilt-card';

export function Equipment() {
  return (
    <section id="equipment" className="py-32 bg-zinc-950 overflow-hidden relative">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-zinc-800/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-xs font-bold tracking-[0.5em] uppercase text-brand mb-6 block">State of the Art</span>
            <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-10 leading-[0.85]">
              <span className="text-gradient">Precision</span> <br />
              <span className="text-zinc-500 italic">Engineering for</span> <br />
              <span className="text-gradient">Performance</span>
            </h2>
            
            <div className="space-y-10">
              {[
                {
                  title: "Elite Biomechanics",
                  description: "Every machine is calibrated for anatomical precision and variable resistance.",
                  icon: ShieldCheck
                },
                {
                  title: "Real-time Metrics",
                  description: "Integrated cloud-tracking allows you to monitor volume, intensity, and progression.",
                  icon: Cpu
                }
              ].map((item, idx) => (
                <div key={item.title} className="flex gap-8 group">
                  <div className="shrink-0 w-16 h-16 glass-card flex items-center justify-center group-hover:scale-110 group-hover:border-brand/50 transition-all duration-500">
                    <item.icon className="w-8 h-8 text-brand" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold uppercase tracking-tight mb-3 group-hover:text-brand transition-colors">{item.title}</h3>
                    <p className="text-zinc-400 leading-relaxed font-medium">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <TiltCard>
              {/* Mocked "New Equipment" Showcase Card */}
              <div className="aspect-[4/3] glass-card overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-transparent mix-blend-overlay" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="p-12 text-center">
                    <Zap className="w-32 h-32 text-brand/10 mx-auto mb-8 animate-pulse" />
                    <p className="text-zinc-500 font-display font-black uppercase text-8xl tracking-tighter opacity-5">
                      THUNDER
                    </p>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand mb-2">New Arrival</p>
                      <h4 className="text-3xl font-display font-bold uppercase tracking-tight">Series-X Power Racks</h4>
                    </div>
                    <div className="px-4 py-2 glass-card text-brand text-[10px] font-black uppercase tracking-widest border-brand/20">
                      INSTALLED 2026
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
            
            {/* Secondary Floating Card */}
            <motion.div 
              initial={{ x: 20, y: 20 }}
              whileInView={{ x: 0, y: 0 }}
              className="absolute -bottom-10 -right-10 hidden xl:block w-72 p-8 glass-card border-brand/10 shadow-2xl"
            >
              <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Total Floor Space</p>
              <p className="text-5xl font-display font-black text-zinc-100 tabular-nums tracking-tighter">12,000<span className="text-xl text-brand ml-1">SQ FT</span></p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
