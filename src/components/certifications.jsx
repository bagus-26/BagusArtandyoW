import { ArrowUpRight } from 'lucide-react';
import { PortofolioData } from '../data/PortofolioData';
import SectionHeading from './section-heading';

export default function Certifications() {
  const items = PortofolioData.certifications;

  return (
    <section id="certifications" className="shell mt-24 md:mt-[18vh]">
      <SectionHeading title="Sertifikasi" aside={`Kredensial — 0${items.length}`} />

      <div className="mt-10 grid gap-x-8 gap-y-12 md:grid-cols-2">
        {items.map((cert, idx) => (
          <article key={cert.id} data-reveal style={{ '--d': idx }}>
            <a
              href={cert.pdf}
              target="_blank"
              rel="noreferrer"
              aria-label={`Buka sertifikat ${cert.title} (PDF)`}
              className="group block overflow-hidden rounded-2xl border border-rule bg-cover"
            >
              <img
                src={cert.image}
                alt={`Pratinjau sertifikat ${cert.title}`}
                width={1600}
                height={1200}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.02]"
              />
            </a>

            <div className="mt-4 flex items-baseline justify-between gap-4 border-b border-rule pb-2">
              <span className="eyebrow">{cert.issuer}</span>
              <span className="eyebrow shrink-0">{cert.date}</span>
            </div>

            <h3 className="mt-2 text-xl font-medium tracking-[-0.03em] md:text-2xl">
              {cert.title}
            </h3>
            <p className="mt-2 text-[13px] leading-relaxed text-muted">{cert.desc}</p>
            <p className="mt-4 font-mono text-[10px] uppercase leading-relaxed tracking-[0.08em] text-muted">
              {cert.tags.join(' · ')}
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1">
              <a
                href={cert.pdf}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-1 text-[13px] font-medium transition-colors hover:text-muted"
              >
                Lihat sertifikat
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
              {cert.verifyUrl && (
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center gap-1 text-[13px] text-muted transition-colors hover:text-ink"
                >
                  Verifikasi keaslian
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              )}
              {cert.credential && <span className="eyebrow">ID · {cert.credential}</span>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
