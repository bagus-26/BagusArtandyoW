'use client';

import { ArrowUp } from 'lucide-react';
import { PortofolioData } from '../data/PortofolioData';

const socials = [
  { label: 'LinkedIn', href: PortofolioData.socials.linkedin },
  { label: 'GitHub', href: PortofolioData.socials.github },
  { label: 'Instagram', href: PortofolioData.socials.instagram },
  { label: 'Email', href: `mailto:${PortofolioData.socials.email}` },
];

export default function Footer() {
  return (
    <footer className="shell mt-24 pb-4 [container-type:inline-size] md:mt-[18vh]">
      <div className="flex flex-col gap-1 border-t border-rule py-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="eyebrow">© {new Date().getFullYear()} Bagus Artandyo Witjaksono</p>

        <div className="flex flex-wrap items-center gap-x-5">
          <nav aria-label="Tautan sosial" className="flex flex-wrap items-center gap-x-5">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                className="inline-flex min-h-11 items-center text-[13px] text-muted transition-colors hover:text-ink"
              >
                {social.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex min-h-11 items-center gap-1.5 text-[13px] text-muted transition-colors hover:text-ink"
          >
            Kembali ke atas
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        aria-hidden="true"
        data-reveal="clip"
        className="mt-10 select-none overflow-hidden whitespace-nowrap pb-[0.08em] text-[10cqw] font-medium leading-[0.9] tracking-[-0.06em] text-ink md:mt-16"
      >
        Bagus Artandyo
      </div>
    </footer>
  );
}
