import { privacyNote, selectedProjects } from "../data/portfolio";
import Reveal from "./Reveal";

export default function SelectedProjects() {
  return (
    <section id="selected" className="bg-[var(--bg-deep)] px-5 py-24 text-white sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.24em] text-[#5eead4] uppercase">More Projects</p>
          <h2 className="font-display mt-3 text-[clamp(2rem,5vw,3rem)] font-extrabold tracking-[-0.02em]">
            그 외 프로젝트
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10 overflow-hidden rounded-2xl border border-white/10">
            <div className="hidden grid-cols-12 gap-4 border-b border-white/10 bg-white/5 px-5 py-3 text-[11px] font-semibold tracking-wider text-white/45 uppercase md:grid">
              <div className="col-span-4">프로젝트</div>
              <div className="col-span-2">분야</div>
              <div className="col-span-2">기간</div>
              <div className="col-span-1">기여</div>
              <div className="col-span-3">역할</div>
            </div>
            <ul>
              {selectedProjects.map((project) => (
                <li
                  key={project.title}
                  className="grid gap-1 border-b border-white/5 px-5 py-4 last:border-0 hover:bg-white/[0.03] md:grid-cols-12 md:items-center md:gap-4"
                >
                  <div className="col-span-4 flex flex-wrap items-center gap-2">
                    <span className="font-semibold">{project.title}</span>
                    {project.isPrivate && (
                      <span className="rounded border border-white/20 px-1.5 py-0.5 text-[10px] text-white/55">내부</span>
                    )}
                  </div>
                  <div className="col-span-2 text-sm text-white/55">{project.field}</div>
                  <div className="col-span-2 text-sm text-white/55">{project.period}</div>
                  <div className="col-span-1 text-sm font-semibold text-[#5eead4]">{project.contribution ?? "—"}</div>
                  <div className="col-span-3 text-sm text-white/70">{project.role}</div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <p className="mt-4 text-sm text-white/40">* {privacyNote}</p>
      </div>
    </section>
  );
}
