import { useState, type MouseEvent } from "react";
import { personalProjects, privacyNote, selectedProjects, type SelectedProject } from "../../data/portfolio";

export default function ArchiveSection() {
  const [hoverPreview, setHoverPreview] = useState<{ src: string; x: number; y: number } | null>(null);

  const movePreview = (event: MouseEvent<HTMLDivElement>, src?: string) => {
    if (!src) return;
    const previewWidth = 320;
    const previewHeight = 220;
    const gap = 24;
    setHoverPreview({
      src,
      x: Math.min(event.clientX + gap, window.innerWidth - previewWidth - gap),
      y: Math.min(event.clientY + gap, window.innerHeight - previewHeight - gap),
    });
  };

  const renderProjectRows = (projects: SelectedProject[], getNumber: (index: number) => string, showDescription = false) =>
    projects.map((project, index) => (
      <div
        data-archive-row
        key={project.title}
        onMouseEnter={(event) => movePreview(event, project.thumbnail)}
        onMouseMove={(event) => movePreview(event, project.thumbnail)}
        onMouseLeave={() => setHoverPreview(null)}
        className="group relative isolate grid gap-3 border-t border-white/15 py-7 transition-colors duration-500 ease-out hover:text-[#c8ff32] sm:grid-cols-[70px_1fr_180px_160px] sm:items-center"
      >
        <span className="absolute inset-0 -z-10 origin-left scale-x-0 bg-gradient-to-r from-[#c8ff32]/10 via-[#c8ff32]/[.04] to-transparent transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-x-100" aria-hidden="true" />
        <span className="font-mono text-xs text-white/35 transition-transform duration-500 group-hover:translate-x-3">{getNumber(index)}</span>
        <div className="transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-4">
          <h3 className="text-xl font-bold sm:text-3xl">
            {project.link ? (
              <a href={project.link} target="_blank" rel="noreferrer" className="relative z-10 underline-offset-4 hover:underline">
                {project.title} <span aria-hidden="true">↗</span>
              </a>
            ) : project.title}
          </h3>
          {showDescription && <p className="mt-3 max-w-2xl text-sm font-normal leading-6 text-white/50 group-hover:text-white/70">{project.role}</p>}
        </div>
        <span className="text-sm text-white/50 transition duration-500 group-hover:translate-x-2 group-hover:text-white/75">{project.field}</span>
        <span className="text-sm text-white/50 transition duration-500 group-hover:-translate-x-2 group-hover:text-[#c8ff32]/80 sm:text-right">{project.period}</span>
      </div>
    ));

  return (
    <section id="new-archive" className="px-5 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-[1440px]">
        <p className="mb-2 text-xs font-bold tracking-[.18em] text-[#c8ff32]">PROFESSIONAL PROJECT ARCHIVE</p>
        <h2 className="mb-8 text-3xl font-black sm:text-5xl">추가 실무 프로젝트</h2>
        {renderProjectRows(selectedProjects, index => String(index + 6).padStart(2, "0"))}
        <p className="border-t border-white/15 pt-6 text-sm text-white/35">{privacyNote}</p>
        <div className="mt-20">
          <p className="mb-2 text-xs font-bold tracking-[.18em] text-[#c8ff32]">PERSONAL PROJECTS</p>
          <h2 className="mb-8 text-3xl font-black sm:text-5xl">개인 프로젝트</h2>
          {renderProjectRows(personalProjects, index => `P${String(index + 1).padStart(2, "0")}`, true)}
          <div className="border-t border-white/15" />
        </div>
      </div>
      {hoverPreview && (
        <figure
          className="archive-project-thumbnail pointer-events-none fixed left-0 top-0 z-50 hidden w-80 rounded-[1.4rem] border border-black/10 bg-[#ebe8e2] p-3 shadow-2xl md:block"
          style={{ transform: `translate3d(${hoverPreview.x}px, ${hoverPreview.y}px, 0)` }}
          aria-hidden="true"
        >
          <div className="overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm">
            <div className="flex h-6 items-center gap-1.5 border-b border-black/5 bg-[#f5f3ef] px-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff7d72]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#f5c451]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#63c174]" />
            </div>
            <img src={hoverPreview.src} alt="" className="aspect-video w-full object-cover object-top" />
          </div>
        </figure>
      )}
    </section>
  );
}
