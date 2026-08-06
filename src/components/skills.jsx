'use client';

import { useState } from 'react';
import { PortofolioData } from '../data/PortofolioData';
import { CheckCircle2, Layers, FileCode2, Cpu } from 'lucide-react';

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

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative bg-[#f5f3ee]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-800">
            Keahlian & Teknologi
          </h2>
          <p className="text-stone-500 text-base">
            Bahasa pemrograman dan tools yang saya gunakan dalam pengembangan sistem dan aplikasi.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-sm font-mono text-stone-400 mb-5 tracking-widest uppercase text-center">
            Bahasa Pemrograman & Framework
          </h3>
          <LanguageMarquee />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

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
      </div>
    </section>
  );
}
