import { privacyNote, selectedProjects } from "../../data/portfolio";

export default function ArchiveSection() {
  return (
    <section id="new-archive" className="px-5 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-[1440px]">
        <p className="mb-8 text-xs font-bold tracking-[.18em] text-[#c8ff32]">MORE PROJECT ARCHIVE</p>
        {selectedProjects.map((project, index) => (
          <div
            data-archive-row
            key={project.title}
            className="group relative isolate grid gap-3 overflow-hidden border-t border-white/15 py-7 transition-colors duration-500 ease-out hover:text-[#c8ff32] sm:grid-cols-[70px_1fr_180px_160px] sm:items-center"
          >
            <span className="absolute inset-0 -z-10 origin-left scale-x-0 bg-gradient-to-r from-[#c8ff32]/10 via-[#c8ff32]/[.04] to-transparent transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-x-100" aria-hidden="true" />
            <span className="font-mono text-xs text-white/35 transition-transform duration-500 group-hover:translate-x-3">{String(index + 6).padStart(2, "0")}</span>
            <h3 className="text-xl font-bold transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-4 sm:text-3xl">{project.title}</h3>
            <span className="text-sm text-white/50 transition duration-500 group-hover:translate-x-2 group-hover:text-white/75">{project.field}</span>
            <span className="text-sm text-white/50 transition duration-500 group-hover:-translate-x-2 group-hover:text-[#c8ff32]/80 sm:text-right">{project.period}</span>
          </div>
        ))}
        <p className="border-t border-white/15 pt-6 text-sm text-white/35">{privacyNote}</p>
      </div>
    </section>
  );
}
