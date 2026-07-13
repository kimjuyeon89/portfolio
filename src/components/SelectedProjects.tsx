import { selectedProjects, privacyNote } from "../data/portfolio";
import Reveal from "./Reveal";

export default function SelectedProjects() {
  return (
    <section id="selected" className="px-6 pb-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Selected Projects
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            그 외 프로젝트
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 overflow-hidden rounded-2xl border border-white/10">
            {/* Header (desktop) */}
            <div className="hidden grid-cols-12 gap-4 border-b border-white/10 bg-white/[0.03] px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-zinc-500 sm:grid">
              <div className="col-span-5">프로젝트</div>
              <div className="col-span-3">분야</div>
              <div className="col-span-4">역할</div>
            </div>

            <ul>
              {selectedProjects.map((project) => (
                <li
                  key={project.title}
                  className="grid grid-cols-1 gap-1 border-b border-white/5 px-6 py-4 transition-colors last:border-b-0 hover:bg-white/[0.03] sm:grid-cols-12 sm:gap-4"
                >
                  <div className="col-span-5 flex flex-wrap items-center gap-2">
                    <span className="font-medium text-white">
                      {project.title}
                    </span>
                    {project.isPrivate && (
                      <span className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5 text-[10px] font-medium text-zinc-400">
                        내부 · 비공개
                      </span>
                    )}
                  </div>
                  <div className="col-span-3 text-sm text-zinc-400">
                    <span className="text-zinc-600 sm:hidden">분야 · </span>
                    {project.field}
                  </div>
                  <div className="col-span-4 text-sm text-zinc-400">
                    <span className="text-zinc-600 sm:hidden">역할 · </span>
                    {project.role}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <p className="mt-4 text-sm text-zinc-500">* {privacyNote}</p>
        </Reveal>
      </div>
    </section>
  );
}
