'use client';

import { PortofolioData } from '../data/PortofolioData';

const expertise = [
  'Manajemen proyek',
  'Analisis sistem',
  'Backend',
  'Mobile',
  'Machine learning',
  'UI/UX',
];

export default function Hero() {
  return (
    <section id="about" className="shell relative pt-32 md:pt-[21vh]">
      <h1
        aria-label={PortofolioData.name}
        className="rise text-[14vw] font-medium uppercase leading-[0.88] tracking-[-0.05em] md:text-[10vw]"
      >
        <span aria-hidden="true" className="block md:flex md:justify-between md:gap-[0.18em]">
          <span className="block">Bagus</span>
          <span className="block">Artandyo</span>
        </span>
        <span aria-hidden="true" className="block md:text-right">
          Witjaksono
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <a
          href={`mailto:${PortofolioData.socials.email}`}
          className="group inline-flex w-fit items-baseline text-sm text-muted transition-colors hover:text-ink md:text-base"
        >
          <span className="border-b border-transparent pb-0.5 transition-colors group-hover:border-ink">
            {PortofolioData.socials.email}
          </span>
        </a>
        <p className="eyebrow max-w-[44ch] text-balance leading-relaxed sm:text-right">
          Project manager &amp; system analyst — membangun sistem dari kebutuhan sampai rilis
        </p>
      </div>

      <div className="mt-20 grid gap-10 md:mt-[13vh] lg:grid-cols-12 lg:items-end">
        <p className="text-[clamp(26px,3.3vw,46px)] leading-[1.16] tracking-[-0.03em] text-muted lg:col-span-6">
          <span className="text-ink">Bagus Artandyo</span> adalah project manager dan system
          analyst dengan ketertarikan pada sistem yang rumit — dari menggali kebutuhan sampai
          membangun produk yang benar-benar dipakai.
        </p>

        <div className="lg:col-span-2">
          <img
            src={PortofolioData.avatar}
            alt={`Potret ${PortofolioData.name}`}
            className="aspect-[4/5] w-40 rounded-2xl object-cover object-top md:w-48 lg:w-full"
          />
          <span className="eyebrow mt-2 block">Malang, ID — 2026</span>
        </div>

        <div className="lg:col-span-4">
          <span className="eyebrow block border-b border-rule pb-2">Keahlian</span>
          <ul className="grid grid-cols-2 gap-x-6">
            {expertise.map((item) => (
              <li key={item} className="border-b border-rule py-2 text-[14px] font-medium">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
