'use client';

import {useState} from 'react';
import {motion, AnimatePresence} from 'motion/react';
import {Menu, X} from 'lucide-react';
import Link from 'next/link';
import {Logo} from './logo';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Equipment', href: '#equipment' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-brand transition-colors">
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/917204113282?text=Hello%20Thunder%20Fitness!%20I'm%20interested%20in%20joining%20the%20gym.%20Please%20provide%20more%20details."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block px-4 py-2 text-xs font-bold uppercase tracking-widest text-zinc-950 bg-brand hover:bg-brand/90 transition-colors rounded-none"
          >
            Join Now
          </a>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-zinc-400 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 right-0 bg-zinc-950 border-b border-zinc-800 p-6 md:hidden flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-bold uppercase tracking-widest text-zinc-400 hover:text-brand transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/917204113282?text=Hello%20Thunder%20Fitness!%20I'm%20interested%20in%20joining%20the%20gym.%20Please%20provide%20more%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center px-4 py-4 text-sm font-bold uppercase tracking-widest text-zinc-950 bg-brand"
              onClick={() => setIsOpen(false)}
            >
              Join Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
