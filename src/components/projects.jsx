'use client';

import { PortofolioData } from '../data/PortofolioData';
import { ExternalLink, Github, Users, Tag, Building2 } from 'lucide-react';

export default function Projects() {
  const project = PortofolioData.projects[0];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-800">Proyek</h2>
          <p className="text-stone-500 text-base">
            Pengalaman pengembangan sistem dan aplikasi selama perkuliahan.
          </p>
        </div>

        <div className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm group">

          <div className="relative w-full overflow-hidden bg-stone-50">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-contain group-hover:scale-[1.01] transition-transform duration-500"
            />
          </div>

          <div className="p-8 space-y-6">

            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-mono text-amber-700 bg-amber-50 border border-amber-200 mb-3">
                {project.category}
              </span>
              <h3 className="text-2xl font-bold text-stone-800 mb-1">{project.title}</h3>
              <p className="text-stone-500 text-sm font-medium">{project.subtitle}</p>
            </div>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-3xl">
              {project.desc}
            </p>

            <div className="flex items-start gap-3">
              <Users className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-xs text-stone-400 mb-1.5">Tim Pengembang</div>
                <div className="flex flex-wrap gap-2">
                  {project.team.map((member, idx) => (
                    <span
                      key={idx}
                      className={`px-2.5 py-1 rounded-md text-xs font-medium border ${
                        member.includes('Bagus')
                          ? 'bg-amber-50 border-amber-300 text-amber-700 font-semibold'
                          : 'bg-stone-50 border-stone-200 text-stone-500'
                      }`}
                    >
                      {member}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Building2 className="w-4 h-4 text-stone-400 mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-xs text-stone-400 mb-0.5">{project.program}</div>
                <div className="text-sm text-stone-600">{project.institution}</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md bg-stone-50 text-xs text-stone-500 border border-stone-200 font-mono flex items-center gap-1"
                >
                  <Tag className="w-3 h-3 text-amber-500" />
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-5 pt-2 border-t border-stone-100">
              <a href={project.liveUrl} className="flex items-center gap-1.5 text-sm font-medium text-amber-700 hover:text-amber-600 transition-colors">
                <ExternalLink className="w-4 h-4" /> Demo
              </a>
              <a href={project.githubUrl} className="flex items-center gap-1.5 text-sm font-medium text-stone-500 hover:text-stone-700 transition-colors">
                <Github className="w-4 h-4" /> Source Code
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
