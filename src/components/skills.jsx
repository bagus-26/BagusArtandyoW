'use client';

import { PortofolioData } from '../data/PortofolioData';
import SectionHeading from './section-heading';

export default function Skills() {
  const { skills, languages, platforms, interest } = PortofolioData;

  const groups = [
    { label: 'Sistem & manajemen', items: skills.management },
    { label: 'Front-end & web', items: skills.frontend },
    { label: 'Tools & workflow', items: skills.tools },
  ];

  return (
    <section id="skills" className="shell mt-24 md:mt-[18vh]">
      <SectionHeading title="Keahlian & ekosistem" aside="Stack — tools — minat" />

      <div className="mt-10 grid gap-x-8 gap-y-12 lg:grid-cols-12">
        <div className="grid gap-8 sm:grid-cols-3 lg:col-span-7">
          {groups.map((group, idx) => (
            <div key={group.label}>
              <div className="mb-1 flex items-baseline justify-between gap-3 border-b border-rule pb-2">
                <h3 className="eyebrow">{group.label}</h3>
                <span className="eyebrow" aria-hidden="true">
                  0{idx + 1}
                </span>
              </div>
              <ul>
                {group.items.map((item) => (
                  <li key={item} className="border-b border-rule py-2.5 text-[14px] leading-snug">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="lg:col-span-5">
          <div className="mb-1 flex items-baseline justify-between gap-3 border-b border-rule pb-2">
            <h3 className="eyebrow">Bahasa &amp; framework</h3>
            <span className="eyebrow" aria-hidden="true">
              {languages.length}
            </span>
          </div>
          <ul className="grid grid-cols-2 gap-x-6">
            {languages.map((lang) => (
              <li key={lang.name} className="border-b border-rule py-2">
                <div className="text-[14px] font-medium leading-snug">{lang.name}</div>
                <div className="eyebrow mt-0.5">{lang.category}</div>
              </li>
            ))}
          </ul>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="eyebrow border-b border-rule pb-2">Platform</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-muted">
                {platforms
                  .map((platform) => (platform.isMain ? `${platform.name} (utama)` : platform.name))
                  .join(' · ')}
              </p>
            </div>
            <div>
              <h3 className="eyebrow border-b border-rule pb-2">Minat</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-muted">
                <span className="text-ink">IT</span> — {interest.it.join(' · ')}
              </p>
              <p className="mt-1 text-[13px] leading-relaxed text-muted">
                <span className="text-ink">Personal</span> — {interest.non_it.join(' · ')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
