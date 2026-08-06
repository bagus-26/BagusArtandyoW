'use client';

import { PortofolioData } from '../data/PortofolioData';
import { ArrowRight, Quote, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle Warm Glow */}
      <div className="ambient-glow top-20 left-1/4 w-96 h-96 bg-amber-400/20" />
      <div className="ambient-glow top-40 right-10 w-80 h-80 bg-orange-300/15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">

            <div>
              <h2 className="text-stone-400 text-base md:text-lg font-medium mb-2">
                Halo, saya
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                <span className="gradient-text">{PortofolioData.name}</span>
              </h1>
            </div>

            {/* Roles */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1">
              {PortofolioData.roles.map((role, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-lg bg-white text-xs sm:text-sm font-medium text-stone-600 border border-stone-200 shadow-sm"
                >
                  {role}
                </span>
              ))}
            </div>

            {/* Tagline */}
            <p className="text-stone-500 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
              {PortofolioData.tagline}
            </p>

            {/* Quote */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-stone-200 shadow-sm relative">
              <Quote className="w-6 h-6 text-amber-400/60 absolute -top-2 -left-2" />
              <p className="text-stone-500 italic text-sm sm:text-base pl-2">
                "{PortofolioData.bio}"
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-stone-800 text-white font-semibold text-sm shadow-md hover:bg-stone-700 hover:scale-[1.02] transition-all"
              >
                Lihat Proyek
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PortofolioData.socials.email}`}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-stone-600 font-semibold text-sm border border-stone-200 shadow-sm hover:bg-stone-50 transition-all"
              >
                <Mail className="w-4 h-4 text-amber-600" />
                Hubungi Saya
              </a>
            </div>
          </div>

          {/* Right Column: Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-88 lg:h-88">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-amber-300 via-orange-200 to-stone-200 opacity-50 blur-xl" />
              <div className="relative w-full h-full rounded-3xl bg-white p-3 border border-stone-200 shadow-lg overflow-hidden">
                <img
                  src={PortofolioData.avatar}
                  alt={PortofolioData.name}
                  className="w-full h-full object-cover object-top rounded-2xl"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
