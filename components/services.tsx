'use client';

import {motion} from 'motion/react';
import {TiltCard} from './tilt-card';
import { 
  Dumbbell, 
  Activity, 
  UserCheck, 
  Apple, 
  Users, 
  TrendingDown, 
  TrendingUp, 
  Layers,
  Zap,
  Target,
  BarChart4,
  Flame
} from 'lucide-react';

const services = [
  {
    title: "Strength training",
    description: "Build foundational power with our elite strength programs.",
    icon: Dumbbell,
    className: "md:col-span-2 md:row-span-2",
    accent: "bg-brand/10",
  },
  {
    title: "Bodybuilding",
    description: "Hypertrophy focused training for peak aesthetic development.",
    icon: Activity,
    className: "md:col-span-1 md:row-span-1",
    accent: "bg-zinc-800",
  },
  {
    title: "Weight loss",
    description: "High-intensity metabolic conditioning to torch fat.",
    icon: Flame,
    className: "md:col-span-1 md:row-span-1",
    accent: "bg-zinc-800",
  },
  {
    title: "Personal training",
    description: "One-on-one guidance from Bengaluru's top fitness professionals.",
    icon: UserCheck,
    className: "md:col-span-1 md:row-span-2",
    accent: "bg-brand/20",
  },
  {
    title: "Nutrition plans",
    description: "Customized diet protocols tailored to your specific metabolism.",
    icon: Apple,
    className: "md:col-span-1 md:row-span-1",
    accent: "bg-zinc-800",
  },
  {
    title: "Group workouts",
    description: "Community-driven sessions for maximum motivation.",
    icon: Users,
    className: "md:col-span-1 md:row-span-1",
    accent: "bg-zinc-800",
  },
  {
    title: "Athletic bodybuilding",
    description: "Combine size with functional athletic performance.",
    icon: Target,
    className: "md:col-span-2 md:row-span-1",
    accent: "bg-zinc-900",
  },
];

const secondaryServices = [
  "Weight gain",
  "Cardio",
  "Body analysis",
  "Weight lifting",
  "New gym equipment"
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-4">
            Elite <span className="text-zinc-500">Services</span>
          </h2>
          <div className="w-12 h-1 bg-brand mb-8" />
          <p className="text-zinc-400 max-w-2xl">
            We offer a comprehensive range of fitness solutions designed to push you beyond your limits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`${service.className}`}
            >
              <TiltCard className="h-full">
                <div className={`h-full group relative overflow-hidden glass-card p-8 flex flex-col justify-between hover:border-brand/50 transition-all duration-500`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 glass-card flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                      <service.icon className="w-6 h-6 text-brand" />
                    </div>
                    <h3 className="text-2xl font-display font-bold uppercase tracking-tight mb-3 group-hover:text-brand transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed font-medium">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 group-hover:text-brand transition-colors relative z-10">
                    Explore More <Zap className="w-3 h-3 fill-brand" />
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 items-center">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 mr-4">Also Offering:</span>
          {secondaryServices.map((service) => (
            <span key={service} className="text-sm text-zinc-300 font-medium px-4 py-2 bg-zinc-900 border border-zinc-800">
              {service}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
