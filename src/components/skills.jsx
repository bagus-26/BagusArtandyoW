'use client';

import { useState } from 'react';
import { PortofolioData } from '../data/PortofolioData';
import { CheckCircle2, Layers, FileCode2, Cpu, Monitor, Sparkles, Heart } from 'lucide-react';

/* ─────────────────────────────────────────────
   Language Marquee – auto-scrolls left
──────────────────────────────────────────────── */
function LanguageMarquee() {
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(null);
  const items = [...PortofolioData.languages, ...PortofolioData.languages];

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#f5f3ee] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#f5f3ee] to-transparent" />

      <div
        className="flex gap-5 w-max"
        style={{
          animation: 'marquee 22s linear infinite',
          animationPlayState: paused ? 'paused' : 'running',
        }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => { setPaused(false); setHovered(null); }}
      >
        {items.map((lang, idx) => (
          <div
            key={idx}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            className={`
              flex flex-col items-center justify-center gap-3 px-6 py-5 rounded-2xl border cursor-default select-none
              transition-all duration-300 w-32 flex-shrink-0
              ${hovered === idx
                ? 'bg-white border-amber-400/60 scale-110 shadow-lg shadow-amber-200/30'
                : 'bg-white/70 border-stone-200 hover:border-stone-300'
              }
            `}
          >
            <img
              src={lang.logo}
              alt={lang.name}
              draggable={false}
              className={`w-12 h-12 object-contain transition-all duration-300 ${
                hovered === idx ? 'scale-110' : ''
              }`}
            />
            <div className="text-center">
              <div className={`text-sm font-semibold transition-colors duration-200 ${
                hovered === idx ? 'text-amber-700' : 'text-stone-700'
              }`}>
                {lang.name}
              </div>
              <div className="text-[10px] text-stone-400 mt-0.5">{lang.category}</div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Platforms & Ecosystem Marquee (Windows, macOS, Linux, NVIDIA)
──────────────────────────────────────────────── */
function PlatformMarquee() {
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(null);
  
  // Duplicate 4x to ensure smooth infinite looping text/cards
  const platformsList = PortofolioData.platforms || [];
  const items = [...platformsList, ...platformsList, ...platformsList, ...platformsList];

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#f5f3ee] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#f5f3ee] to-transparent" />

      <div
        className="flex gap-6 w-max"
        style={{
          animation: 'marquee 18s linear infinite',
          animationPlayState: paused ? 'paused' : 'running',
        }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => { setPaused(false); setHovered(null); }}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            className={`
              relative flex items-center gap-4 px-6 py-4 rounded-2xl border cursor-default select-none
              transition-all duration-300 w-64 flex-shrink-0
              ${item.isMain
                ? 'bg-amber-50/90 border-amber-300 shadow-md shadow-amber-100'
                : 'bg-white/80 border-stone-200 hover:border-stone-300'
              }
              ${hovered === idx ? 'scale-105 shadow-xl bg-white border-amber-400' : ''}
            `}
          >
            {item.isMain && (
              <span className="absolute -top-2.5 right-4 px-2 py-0.5 rounded-full bg-amber-600 text-white text-[10px] font-bold tracking-wider uppercase shadow-xs flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Platform Utama
              </span>
            )}

            <div className="w-12 h-12 rounded-xl bg-stone-50 border border-stone-200/80 p-2.5 flex items-center justify-center flex-shrink-0">
              <img
                src={item.logo}
                alt={item.name}
                draggable={false}
                className="w-full h-full object-contain"
              />
            </div>

            <div>
              <div className="text-base font-bold text-stone-800 flex items-center gap-1.5">
                {item.name}
              </div>
              <div className="text-xs text-stone-500 font-medium">{item.category}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative bg-[#f5f3ee]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-800">
            Keahlian & Ekosistem
          </h2>
          <p className="text-stone-500 text-base">
            Bahasa pemrograman, platform sistem operasi, dan tools yang saya gunakan.
          </p>
        </div>

        {/* ── Marquee 1: Programming Languages & Frameworks ── */}
        <div className="mb-14">
          <h3 className="text-xs font-mono text-stone-400 mb-5 tracking-widest uppercase text-center">
            Bahasa Pemrograman & Framework
          </h3>
          <LanguageMarquee />
        </div>

        {/* ── Marquee 2: OS, Hardware & Platform Ecosystem ── */}
        <div className="mb-16">
          <h3 className="text-xs font-mono text-stone-400 mb-5 tracking-widest uppercase text-center flex items-center justify-center gap-2">
            <Monitor className="w-4 h-4 text-amber-600" /> OS & Ekosistem Hardware
          </h3>
          <PlatformMarquee />
        </div>

        {/* ── Skill Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-4">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-stone-800 mb-4">Sistem & Manajemen</h3>
            <ul className="space-y-2.5">
              {PortofolioData.skills.management.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-stone-600">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-500 mb-4">
              <FileCode2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-stone-800 mb-4">Front-End & Web</h3>
            <ul className="space-y-2.5">
              {PortofolioData.skills.frontend.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-stone-600">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-500 mb-4">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-stone-800 mb-4">Tools & Workflow</h3>
            <ul className="space-y-2.5">
              {PortofolioData.skills.tools.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-stone-600">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ── Interests Box (IT & Non-IT) ── */}
        {PortofolioData.interest && (
          <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm">
            <h3 className="text-lg font-bold text-stone-800 mb-6 flex items-center gap-2">
              <Heart className="w-5 h-5 text-amber-600" /> Ketertarikan & Minat (Interests)
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="text-xs font-mono text-stone-400 mb-3 tracking-wider uppercase">Minat IT & Teknologi</div>
                <div className="flex flex-wrap gap-2">
                  {PortofolioData.interest.it.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-xl bg-amber-50 text-amber-800 border border-amber-200 text-xs font-medium"
                    >
                      💡 {item}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-xs font-mono text-stone-400 mb-3 tracking-wider uppercase">Minat Hobi & Personal</div>
                <div className="flex flex-wrap gap-2">
                  {PortofolioData.interest.non_it.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-xl bg-stone-100 text-stone-700 border border-stone-200 text-xs font-medium"
                    >
                      🎯 {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
