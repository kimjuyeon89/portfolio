import { featuredProjects, privacyNote } from "../data/portfolio";
import Reveal from "./Reveal";

const projectOrder = [
  "인천광역시 디지털트윈 및 지도 서비스 통합 구축",
  "일사편리 부동산 통합 열람 시스템",
  "ESS 에너지 관리 시스템",
  "바른땅",
  "KMI 한국의학연구소",
];

export default function Projects({ sectionId = "new-work" }: { sectionId?: string }) {
  const orderedProjects = [...featuredProjects].sort(
    (a, b) => projectOrder.indexOf(a.title) - projectOrder.indexOf(b.title),
  );

  return (
    <section id={sectionId} className="new-projects-theme border-y border-[var(--line)] bg-[#f1eee8] px-5 py-24 text-[var(--ink)] sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs font-bold tracking-[.2em] text-[var(--accent)]">PROFESSIONAL PROJECTS</p>
          <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="text-[clamp(2.3rem,5vw,4rem)] font-extrabold tracking-[-.04em]">대표 프로젝트</h2>
            <p className="max-w-xl text-[var(--muted)]">화면 결과뿐 아니라 담당 역할, 기여 범위와 실제로 해결한 문제를 함께 정리했습니다.</p>
          </div>
        </Reveal>
        <div className="mt-12 space-y-8">
          {orderedProjects.map((project, index) => {
            const images = project.thumbnailGallery?.slice(0, 2) ?? [project.thumbnailDesktop, project.thumbnailSecondary ?? project.thumbnailMobile].filter(Boolean) as string[];
            return (
              <Reveal key={project.title}>
                <article className="overflow-hidden rounded-3xl border border-[var(--line)] bg-white shadow-sm">
                  <div className="grid lg:grid-cols-[.9fr_1.1fr]">
                    <div className="relative h-80 overflow-hidden bg-slate-200 lg:h-auto lg:min-h-0">
                      {images[0] ? <img src={images[0]} alt={`${project.title} 대표 화면`} className={`absolute inset-0 h-full w-full object-cover object-center ${project.isPrivate ? "scale-[1.01] blur-[1.5px] brightness-75 saturate-75" : ""}`} /> : <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${project.accent}, #171717)` }} />}
                      {project.isPrivate && <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/15 via-black/25 to-black/50" aria-hidden="true" />}
                      <span className="absolute left-5 top-5 rounded-full bg-black/80 px-3 py-1.5 text-xs font-bold text-white">{String(index + 1).padStart(2, "0")} · {project.contribution}</span>
                      {project.isPrivate && <p className="absolute inset-x-5 bottom-5 rounded-xl bg-black/80 p-4 text-sm leading-6 text-white">내부 업무 시스템으로 보안상 전체 화면과 소스 코드는 공개하지 않았습니다.</p>}
                    </div>
                    <div className="p-6 sm:p-9">
                      <p className="text-xs font-bold tracking-[.12em] text-[var(--accent)]">{project.subtitle}</p>
                      <h3 className="mt-2 text-2xl font-extrabold leading-tight sm:text-3xl">{project.title}</h3>
                      <dl className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
                        <div><dt className="text-[var(--muted)]">기간</dt><dd className="mt-1 font-semibold">{project.period}</dd></div>
                        <div><dt className="text-[var(--muted)]">역할·기여도</dt><dd className="mt-1 font-semibold">{project.contribution}</dd></div>
                        <div className="sm:col-span-2"><dt className="text-[var(--muted)]">담당 범위</dt><dd className="mt-1 font-semibold">{project.role}</dd></div>
                      </dl>
                      <div className="mt-6 grid gap-6 border-t border-[var(--line)] pt-6 xl:grid-cols-2">
                        <div><h4 className="text-xs font-extrabold text-[var(--accent)]">주요 업무</h4><ul className="mt-3 space-y-2">{project.tasks.map(task => <li key={task} className="flex gap-2 text-sm leading-6 text-[var(--muted)]"><span aria-hidden="true">•</span>{task}</li>)}</ul><div className="mt-5 flex flex-wrap gap-2">{project.tech.map(tech => <span key={tech} className="rounded-md bg-[#c8ff32]/45 px-2.5 py-1.5 text-xs font-semibold">{tech}</span>)}</div></div>
                        <div><h4 className="text-xs font-extrabold text-[var(--accent)]">{project.challengeLabel ? "핵심 경험" : "문제 해결"}</h4><p className="mt-3 text-sm leading-6 text-[var(--muted)]"><strong className="text-[var(--ink)]">{project.challengeLabel ?? "문제"}.</strong> {project.challenge}</p><p className="mt-2 text-sm leading-6 text-[var(--muted)]"><strong className="text-[var(--ink)]">{project.solutionLabel ?? "해결"}.</strong> {project.solution}</p>{project.achievement && <p className="mt-4 rounded-xl bg-[#c8ff32]/25 p-4 text-sm leading-6 text-[var(--muted)]"><strong className="text-[var(--ink)]">성과.</strong> {project.achievement}</p>}</div>
                      </div>
                      {project.link && <div className="mt-6 flex justify-end"><a href={project.link} target="_blank" rel="noreferrer" className="text-sm font-bold underline underline-offset-4">실제 사이트 보기 ↗</a></div>}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
        <p className="mt-8 text-sm text-[var(--muted)]">{privacyNote}</p>
      </div>
    </section>
  );
}
