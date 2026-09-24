'use client';

import {MapPin, Phone, Mail, Clock, ExternalLink} from 'lucide-react';
import {TiltCard} from './tilt-card';

export function Location() {
  const mapLink = "https://maps.app.goo.gl/QQm7R2xQDphv7PgD6";
  const address = "1st Floor, JA HEIGHTS, 4, Sultanpalya Main Rd, RT Nagar, Bengaluru, Karnataka 560032";

  return (
    <section id="location" className="py-32 bg-zinc-950 relative overflow-hidden">
      {/* Decorative Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-mesh opacity-30 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-12 leading-[0.85]">
              <span className="text-gradient">Strategic</span> <br />
              <span className="text-zinc-500 italic">Location</span>
            </h2>
            
            <div className="grid gap-8">
              <TiltCard>
                <div className="p-10 glass-card h-full group hover:border-brand/50 transition-all duration-500">
                  <div className="w-16 h-16 glass-card flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                    <MapPin className="w-8 h-8 text-brand" />
                  </div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-zinc-500 mb-4">Main Facility</h3>
                  <p className="text-zinc-200 text-2xl font-bold leading-tight mb-8">
                    {address}
                  </p>
                  <a 
                    href={mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-brand text-xs font-bold uppercase tracking-[0.3em] hover:tracking-[0.4em] transition-all"
                  >
                    Launch Navigation <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </TiltCard>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <TiltCard>
                  <div className="p-10 glass-card h-full group hover:border-brand/50 transition-all duration-500">
                    <Clock className="w-8 h-8 text-brand mb-6" />
                    <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500 mb-4">Operation Hours</h3>
                    <p className="text-zinc-200 text-lg font-bold tracking-tight">MON - SAT: 05:00 - 22:00</p>
                    <p className="text-zinc-400 text-sm font-medium mt-1">SUNDAY: 07:00 - 12:00</p>
                  </div>
                </TiltCard>
                <TiltCard>
                  <div className="p-10 glass-card h-full group hover:border-brand/50 transition-all duration-500">
                    <Phone className="w-8 h-8 text-brand mb-6" />
                    <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500 mb-4">Support Direct</h3>
                    <p className="text-zinc-200 text-lg font-bold tracking-tight">+91 98765 43210</p>
                    <p className="text-zinc-400 text-sm font-medium mt-1">24/7 Member Hotline</p>
                  </div>
                </TiltCard>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-brand/20 blur-3xl opacity-10 group-hover:opacity-20 transition-opacity" />
            <div className="aspect-square w-full border border-zinc-800 bg-zinc-900 overflow-hidden relative glass-card">
               <iframe 
                src="https://maps.google.com/maps?q=Thunder%20Fitness%20Gym%20JA%20Heights%20RT%20Nagar%20Bengaluru&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2) brightness(0.9)' }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-50 group-hover:opacity-100 transition-opacity duration-700"
              />
              
              {/* Overlay Content (Remains visible but subtle) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center z-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-700">
                  <div className="w-24 h-24 bg-brand/10 border border-brand/20 rounded-full flex items-center justify-center mb-8 animate-pulse">
                    <MapPin className="w-10 h-10 text-brand" />
                  </div>
                  <h4 className="text-3xl font-display font-black uppercase tracking-tighter mb-4 italic">
                    RT Nagar <br />
                    <span className="text-zinc-500">Karnataka</span>
                  </h4>
                  <div className="h-px w-20 bg-zinc-800 mb-8" />
                  <p className="text-zinc-400 text-sm mb-12 max-w-xs leading-relaxed uppercase tracking-widest font-bold">
                    Centered in the heart of Sultanpalya
                  </p>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ExerciseGym",
            "name": "Thunder Fitness Gym",
            "image": "https://picsum.photos/seed/thunder/800/600",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1st Floor, JA HEIGHTS, 4, Sultanpalya Main Rd, RT Nagar, Sultanpalya",
              "addressLocality": "Bengaluru",
              "postalCode": "560032",
              "addressRegion": "Karnataka",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 13.0186,
              "longitude": 77.5954
            },
            "url": "https://thunderfitness.in",
            "telephone": "+919876543210",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "05:00",
                "closes": "22:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Sunday",
                "opens": "07:00",
                "closes": "12:00"
              }
            ]
          })
        }}
      />
    </section>
  );
}
