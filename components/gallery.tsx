'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import Image from 'next/image';

const galleryImages = [
  { src: "https://i.ibb.co/RTD7Q8M8/1790279030486.jpg", alt: "Thunder Fitness Gym Interior" },
  { src: "https://i.ibb.co/Y4z1Y6P2/1790279015969.jpg", alt: "Weight Training Area" },
  { src: "https://i.ibb.co/Z6HZBVKG/1790279000982.jpg", alt: "Cardio Section" },
  { src: "https://i.ibb.co/BK3YdyjJ/1790278987522.jpg", alt: "Premium Equipment" },
  { src: "https://i.ibb.co/FkZycgZY/1790278959655.jpg", alt: "Workout Space" },
  { src: "https://i.ibb.co/Cp7rtsZd/1790278972070.jpg", alt: "Dumbbell Rack" },
  { src: "https://i.ibb.co/6RVx09SW/1790278938107.jpg", alt: "Gym Environment" },
];

export function Gallery() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({
    container: targetRef,
  });

  return (
    <section id="gallery" className="py-32 bg-zinc-950 relative overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter leading-[0.85]">
          <span className="text-gradient">Training</span> <br />
          <span className="text-zinc-500 italic">Environment</span>
        </h2>
      </div>

      <div 
        ref={targetRef}
        className="flex gap-8 overflow-x-auto pb-12 px-6 no-scrollbar cursor-grab active:cursor-grabbing"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {galleryImages.map((image, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="relative shrink-0 w-[80vw] md:w-[40vw] aspect-[16/10] glass-card overflow-hidden group"
            style={{ scrollSnapAlign: 'center' }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-6 left-6">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand">Facility Preview</p>
              <p className="text-lg font-display font-bold text-white uppercase tracking-tight">{image.alt}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Custom Scrollbar Visual */}
      <div className="container mx-auto px-6">
        <div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-brand"
            style={{ scaleX: scrollXProgress, transformOrigin: 'left' }}
          />
        </div>
      </div>
    </section>
  );
}
