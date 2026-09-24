import {Instagram, MapPin} from 'lucide-react';
import {Logo} from './logo';

export function Footer() {
  const mapUrl = "https://maps.google.com/maps?q=Thunder%20Fitness%20Gym%20JA%20Heights%20RT%20Nagar%20Bengaluru&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <footer id="contact" className="pt-20 pb-10 bg-zinc-950 border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Logo className="w-10 h-10" textClassName="text-2xl" />
            </div>
            <p className="text-zinc-500 max-w-sm leading-relaxed mb-8">
              The premier fitness destination in RT Nagar, Bengaluru. We are dedicated to providing the highest quality equipment and coaching to help you achieve your physical peak.
            </p>
            
            {/* Embedded Map Preview as requested */}
            <div className="w-full h-48 bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 mb-8 relative group">
              <iframe 
                src={mapUrl}
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2) brightness(0.8)' }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-70 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 pointer-events-none border border-inset border-white/5" />
            </div>

            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/thunderfitnessofficial?stkn=MTBqOGs3Yzg4MmF5dg==" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-brand hover:border-brand transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-100 mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li><a href="#services" className="hover:text-zinc-100 transition-colors">Services</a></li>
              <li><a href="#equipment" className="hover:text-zinc-100 transition-colors">Equipment</a></li>
              <li><a href="#gallery" className="hover:text-zinc-100 transition-colors">Gallery</a></li>
              <li><a href="#location" className="hover:text-zinc-100 transition-colors">Location</a></li>
              <li><a href="https://maps.app.goo.gl/QQm7R2xQDphv7PgD6" className="hover:text-zinc-100 transition-colors">Directions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-100 mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li>RT Nagar, Bengaluru</li>
              <li>+91 98765 43210</li>
              <li>hello@thunderfitness.com</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-zinc-600 uppercase tracking-widest">
            © 2026 Thunder Fitness Gym. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] text-zinc-600 uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-zinc-400">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
