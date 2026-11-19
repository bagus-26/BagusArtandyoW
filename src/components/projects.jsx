'use client';

import { PortofolioData } from '../data/PortofolioData';
import SectionHeading from './section-heading';

export default function Projects() {
  const [featured, ...rest] = PortofolioData.projects;
  const totalProjects = String(PortofolioData.projects.length).padStart(2, '0');

  return (
    <section id="projects" className="shell mt-24 md:mt-[18vh]">
      <SectionHeading title="Proyek" aside={`Karya terpilih — 01 / ${totalProjects}`} />

      <div className="mt-10 grid gap-x-8 gap-y-10 lg:grid-cols-12">
        <article className="lg:col-span-6">
          <div className="mb-3 flex items-end justify-between gap-6">
            <h3 className="text-[clamp(26px,2.4vw,36px)] font-normal leading-none tracking-[-0.035em]">
              {featured.title}
            </h3>
            <span className="eyebrow text-right">{featured.category}</span>
          </div>
          <div
            data-reveal="clip"
            className="group aspect-[4/5] overflow-hidden rounded-2xl bg-cover"
          >
            <img
              src={featured.image}
              alt={`Poster ${featured.title}`}
              className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.03]"
            />
          </div>
          <div className="mt-3 flex items-baseline justify-between gap-4">
            <span className="eyebrow">{featured.subtitle}</span>
            <span className="eyebrow shrink-0 whitespace-nowrap" aria-hidden="true">
              01 / {totalProjects}
            </span>
          </div>
        </article>

        <div data-reveal style={{ '--d': 1 }} className="lg:col-span-6 lg:pt-[9vh]">
          <p className="text-[clamp(20px,2vw,28px)] leading-[1.3] tracking-[-0.02em]">
            {featured.desc}
          </p>

          <dl className="mt-10 grid gap-x-6 gap-y-5 border-t border-rule pt-5 sm:grid-cols-2">
            {featured.team?.length > 0 && (
              <div className="sm:col-span-2">
                <dt className="eyebrow">Tim</dt>
                <dd className="mt-1 text-[13px] leading-relaxed text-muted">
                  {featured.team.join(', ')}
                </dd>
              </div>
            )}
            {featured.institution && (
              <div>
                <dt className="eyebrow">Institusi</dt>
                <dd className="mt-1 text-[13px] leading-relaxed text-muted">
                  {featured.institution}
                </dd>
              </div>
            )}
            {featured.program && (
              <div>
                <dt className="eyebrow">Program</dt>
                <dd className="mt-1 text-[13px] leading-relaxed text-muted">
                  {featured.program}
                </dd>
              </div>
            )}
          </dl>

          <p className="mt-6 font-mono text-[10px] uppercase leading-relaxed tracking-[0.08em] text-muted">
            {featured.tags.join(' · ')}
          </p>
        </div>
      </div>

      <ul className="mt-20 border-t border-rule">
        {rest.map((project, idx) => (
          <li key={project.id}>
            <div
              data-reveal
              style={{ '--d': idx }}
              className="grid grid-cols-[32px_1fr_auto] items-baseline gap-4 border-b border-rule py-6 md:grid-cols-[60px_120px_1.1fr_1fr_auto] md:gap-6"
            >
              <span className="font-mono text-[11px] text-muted" aria-hidden="true">
                {String(idx + 2).padStart(2, '0')}
              </span>
              {project.image ? (
                <img
                  src={project.image}
                  alt=""
                  loading="lazy"
                  className="hidden aspect-[3/2] w-[120px] self-start rounded-lg border border-rule object-cover md:block"
                />
              ) : (
                <span className="hidden md:block" aria-hidden="true" />
              )}
              <div>
                <div className="flex items-center gap-3">
                  {project.image && (
                    <img
                      src={project.image}
                      alt=""
                      loading="lazy"
                      className="h-11 w-11 flex-none rounded-lg border border-rule object-cover md:hidden"
                    />
                  )}
                  <h3 className="text-xl font-medium tracking-[-0.03em] md:text-2xl">
                    {project.title}
                  </h3>
                </div>
                <p className="mt-1 text-[13px] text-muted md:hidden">{project.subtitle}</p>
                <p className="mt-1 font-mono text-[10px] uppercase leading-relaxed tracking-[0.08em] text-muted">
                  {project.tags.join(' · ')}
                </p>
              </div>
              <p className="hidden text-[13px] leading-relaxed text-muted md:block">
                {project.desc}
              </p>
              <span className="eyebrow text-right">{project.category}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
