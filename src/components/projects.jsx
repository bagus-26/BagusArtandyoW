'use client';

import { PortofolioData } from '../data/PortofolioData';
import { ExternalLink, Github, Users, Tag, Building2 } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-800">Proyek</h2>
          <p className="text-stone-500 text-base">
            Pengalaman pengembangan sistem dan aplikasi selama perkuliahan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PortofolioData.projects.map((project) => {
            const hasDemo = project.liveUrl && project.liveUrl !== '#';
            const hasRepo = project.githubUrl && project.githubUrl !== '#';

            return (
              <article
                key={project.id}
                className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm group flex flex-col"
              >
                <div className="relative w-full h-56 overflow-hidden bg-stone-50">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-contain group-hover:scale-[1.01] transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col justify-between p-6 bg-gradient-to-br from-amber-50 via-stone-50 to-stone-100">
                      <span className="text-[10px] font-mono tracking-[0.2em] text-amber-700 uppercase">Project</span>
                      <span className="text-3xl font-extrabold text-stone-800 leading-tight">{project.title}</span>
                    </div>
                  )}
                </div>

                <div className="p-6 sm:p-7 space-y-5 flex flex-col flex-1">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-mono text-amber-700 bg-amber-50 border border-amber-200 mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-stone-800 mb-1">{project.title}</h3>
                    <p className="text-stone-500 text-sm font-medium">{project.subtitle}</p>
                  </div>

                  <p className="text-stone-600 text-sm leading-relaxed">{project.desc}</p>

                  {project.team?.length > 0 && (
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
                  )}

                  {(project.program || project.institution) && (
                    <div className="flex items-start gap-3">
                      <Building2 className="w-4 h-4 text-stone-400 mt-0.5 flex-shrink-0" />
                      <div>
                        {project.program && <div className="text-xs text-stone-400 mb-0.5">{project.program}</div>}
                        {project.institution && <div className="text-sm text-stone-600">{project.institution}</div>}
                      </div>
                    </div>
                  )}

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

                  {(hasDemo || hasRepo) && (
                    <div className="flex items-center gap-5 pt-4 mt-auto border-t border-stone-100">
                      {hasDemo && (
                        <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm font-medium text-amber-700 hover:text-amber-600 transition-colors">
                          <ExternalLink className="w-4 h-4" /> Demo
                        </a>
                      )}
                      {hasRepo && (
                        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm font-medium text-stone-500 hover:text-stone-700 transition-colors">
                          <Github className="w-4 h-4" /> Source Code
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
