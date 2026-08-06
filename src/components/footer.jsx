'use client';

import { PortofolioData } from '../data/PortofolioData';
import { ArrowUp, Github, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Brand — Name only, no logo box */}
          <div>
            <div className="text-stone-700 font-semibold text-sm">{PortofolioData.name}</div>
            <div className="text-xs text-stone-400">Sarjana Informatika — ITSK Soepraoen</div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a href={PortofolioData.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-stone-400 hover:text-stone-700 transition-colors p-2">
              <Github className="w-5 h-5" />
            </a>
            <a href={PortofolioData.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-stone-400 hover:text-stone-700 transition-colors p-2">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={PortofolioData.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="text-stone-400 hover:text-stone-700 transition-colors p-2">
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Kembali ke atas"
            className="p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-stone-400 hover:text-stone-700 transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-6 pt-5 border-t border-stone-100 text-center text-xs text-stone-400">
          © {new Date().getFullYear()} Bagus Artandyo Witjaksono
        </div>
      </div>
    </footer>
  );
}
