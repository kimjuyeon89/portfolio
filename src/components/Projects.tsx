import { featuredProjects } from "../data/portfolio";
import type { FeaturedProject } from "../data/portfolio";
import Reveal from "./Reveal";

const shotLabels = ["메인 화면", "검색 · 레이어", "상세 · 모바일"];

function ProjectPreview({ project }: { project: FeaturedProject }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-600/15 via-zinc-900/40 to-fuchsia-600/15 p-5">
      <div className="flex h-40 items-center justify-center rounded-xl border border-white/10 bg-zinc-950/50">
        <span className="text-6xl opacity-90">{project.emoji}</span>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3">
        {shotLabels.map((label) => (
          <div
            key={label}
            className="flex h-16 items-center justify-center rounded-lg border border-dashed border-white/15 bg-white/[0.03] px-1 text-center text-[10px] leading-tight text-zinc-500"
          >
            {label}
          </div>
        ))}
      </div>
      <p className="mt-3 text-center text-[11px] text-zinc-600">
        스크린샷 3장 권장 (이미지 교체)
      </p>
    </div>
  );
}

function ProjectContent({ project }: { project: FeaturedProject }) {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
        {project.ongoing && (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-green-400/30 bg-green-400/10 px-2.5 py-1 text-xs font-semibold text-green-300">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
            Ongoing
          </span>
        )}
      </div>

      <p className="mt-1.5 text-sm font-medium text-indigo-300">
        {project.subtitle}
      </p>

      <dl className="mt-5 space-y-2 text-sm">
        <div className="flex gap-3">
          <dt className="w-12 flex-shrink-0 text-zinc-500">기간</dt>
          <dd className="text-zinc-300">{project.period}</dd>
        </div>
        <div className="flex gap-3">
          <dt className="w-12 flex-shrink-0 text-zinc-500">역할</dt>
          <dd className="text-zinc-300">{project.role}</dd>
        </div>
        <div className="flex gap-3">
          <dt className="w-12 flex-shrink-0 text-zinc-500">기술</dt>
          <dd className="text-zinc-300">{project.tech.join(" · ")}</dd>
        </div>
      </dl>

      <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-zinc-500">
        주요 작업
      </p>
      <ul className="mt-2.5 space-y-2">
        {project.tasks.map((task) => (
          <li key={task} className="flex items-start gap-2.5 text-sm text-zinc-300">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
            {task}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-indigo-500/10 px-2.5 py-1 text-xs font-medium text-indigo-300"
          >
            {tag}
          </span>
        ))}
      </div>

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-colors hover:text-indigo-400"
        >
          Live Site
          <span aria-hidden>↗</span>
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Featured Projects
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            대표 프로젝트
          </h2>
          <p className="mt-3 max-w-2xl text-zinc-400">
            공공·공간정보 GIS 서비스와 운영 시스템을 중심으로 진행한 대표 작업입니다.
          </p>
        </Reveal>

        <div className="mt-16 space-y-20">
          {featuredProjects.map((project, i) => (
            <Reveal key={project.title}>
              <article className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <ProjectPreview project={project} />
                </div>
                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  <ProjectContent project={project} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
