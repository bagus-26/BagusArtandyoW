'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PortofolioData } from '../data/PortofolioData';

const navLinks = [
  { name: 'Tentang', href: '#about' },
  { name: 'Keahlian', href: '#skills' },
  { name: 'Proyek', href: '#projects' },
  { name: 'Kontak', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-paper via-paper/85 to-transparent" />

      <div className="shell relative flex items-center justify-between gap-2 pt-4">
        <div className="flex min-w-0 items-center gap-[3px] overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <a href="#about" className="pill pill-dark">
            Bagus Artandyo
          </a>
          <nav aria-label="Navigasi utama" className="hidden items-center gap-[3px] sm:flex">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="pill">
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-none items-center gap-[3px]">
          <a href={`mailto:${PortofolioData.socials.email}`} className="pill hidden md:inline-flex">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-700" aria-hidden="true" />
            Terbuka untuk kerja
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="pill sm:hidden"
          >
            {open ? <X className="h-4 w-4" aria-hidden="true" /> : <Menu className="h-4 w-4" aria-hidden="true" />}
            {open ? 'Tutup' : 'Menu'}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="shell relative mt-2 sm:hidden">
          <div className="rounded-2xl border border-rule bg-paper p-2 shadow-lg">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center justify-between rounded-xl px-4 text-sm font-medium text-ink transition-colors hover:bg-cover"
              >
                {link.name}
                <span className="eyebrow">0{idx + 1}</span>
              </a>
            ))}
            <a
              href={`mailto:${PortofolioData.socials.email}`}
              onClick={() => setOpen(false)}
              className="flex min-h-11 items-center justify-between rounded-xl px-4 text-sm font-medium text-ink transition-colors hover:bg-cover"
            >
              Email
              <span className="eyebrow">05</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
