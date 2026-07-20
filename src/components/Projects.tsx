import { featuredProjects } from "../data/portfolio";
import Reveal from "./Reveal";

export default function Projects({ sectionId = "new-work" }: { sectionId?: string }) {
  const openProject = (project: (typeof featuredProjects)[number]) => {
    if (!project.link) return;
    window.open(project.link, "_blank", "noopener,noreferrer");
  };

  return (
    <section id={sectionId} className="new-projects-theme border-y border-[var(--line)] bg-[#f1eee8] px-5 py-24 text-[var(--ink)] sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs font-bold tracking-[.2em] text-[var(--accent)]">SELECTED WORK</p>
          <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="text-[clamp(2rem,5vw,3.2rem)] font-extrabold tracking-[-.03em]">대표 프로젝트</h2>
            <p className="max-w-xl text-[var(--muted)]">프로젝트의 목적보다 먼저 제 역할과 구현 범위가 보이도록 정리했습니다.</p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.title} delay={(index % 2) * 60}>
              <article
                className={`group relative flex h-full flex-col overflow-hidden rounded-xl border border-[var(--line)] bg-white transition hover:-translate-y-1 hover:border-[var(--line-strong)] ${project.link ? "cursor-pointer" : ""}`}
                role={project.link ? "link" : undefined}
                tabIndex={project.link ? 0 : undefined}
                onClick={() => openProject(project)}
                onKeyDown={(event) => {
                  if (project.link && (event.key === "Enter" || event.key === " ")) {
                    event.preventDefault();
                    openProject(project);
                  }
                }}
              >
                {project.isPrivate && <span className="absolute left-3 top-3 z-50 rounded-full bg-black/75 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur-sm">내부</span>}
                <div className="relative">
                {project.thumbnailGallery ? (
                  <div className="relative block aspect-[16/8] overflow-hidden bg-slate-200">
                    {project.thumbnailGallery.map((image, imageIndex) => (
                      <img
                        key={image}
                        src={image}
                        alt={`${project.title} 화면 ${imageIndex + 1}`}
                        className="project-gallery-image absolute h-[72%] w-[64%] rounded-md object-cover object-top shadow-xl"
                        style={{ animationDelay: `${-imageIndex}s` }}
                      />
                    ))}
                    <div className="absolute inset-x-0 bottom-0 z-40 bg-gradient-to-t from-black/90 via-black/70 to-transparent px-6 pb-5 pt-14 text-white">
                      <p className="text-[11px] font-bold tracking-[.12em] text-white/70">{project.subtitle}</p>
                      <h3 className="mt-1 text-xl font-extrabold leading-tight sm:text-2xl">{project.title}</h3>
                    </div>
                  </div>
                ) : project.thumbnailSecondary && project.thumbnailDesktop ? (
                  <div className="relative aspect-[16/8] overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300">
                    <div className="absolute left-[7%] top-[10%] z-10 h-[72%] w-[72%] overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-500 ease-out group-hover:left-[21%] group-hover:top-[20%] group-hover:z-20">
                      <img src={project.thumbnailSecondary} alt={`${project.title} 보조 화면`} className={`h-full w-full object-cover object-top ${project.thumbnailSecondaryBlur ? "scale-[1.02] blur-[2px]" : ""}`} />
                    </div>
                    <div className="absolute left-[21%] top-[20%] z-20 h-[72%] w-[72%] overflow-hidden rounded-lg bg-white shadow-2xl transition-all duration-500 ease-out group-hover:left-[7%] group-hover:top-[10%] group-hover:z-10">
                      <img src={project.thumbnailDesktop} alt={`${project.title} 사이트 관제 화면`} className="h-full w-full object-cover object-top" />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 z-40 bg-gradient-to-t from-black/90 via-black/70 to-transparent px-6 pb-5 pt-14 text-white">
                      <p className="text-[11px] font-bold tracking-[.12em] text-white/70">{project.subtitle}</p>
                      <h3 className="mt-1 text-xl font-extrabold leading-tight sm:text-2xl">{project.title}</h3>
                    </div>
                  </div>
                ) : project.thumbnailComposite ? (
                  <div className="relative block aspect-[16/8] overflow-hidden bg-[#f5f5f5]">
                    <img src={project.thumbnailComposite} alt={`${project.title} PC·모바일 화면`} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]" />
                    <div className="absolute inset-x-0 bottom-0 z-40 bg-gradient-to-t from-black/90 via-black/70 to-transparent px-6 pb-5 pt-14 text-white">
                      <p className="text-[11px] font-bold tracking-[.12em] text-white/70">{project.subtitle}</p>
                      <h3 className="mt-1 text-xl font-extrabold leading-tight sm:text-2xl">{project.title}</h3>
                    </div>
                  </div>
                ) : project.thumbnailDesktop ? (
                  <div className="relative block aspect-[16/8] overflow-hidden bg-slate-100 p-5">
                    <div className="flex h-full items-start justify-center gap-[12%] overflow-hidden">
                      {project.dualDeviceScroll && project.thumbnailMobile ? (
                        <div className="relative h-full w-full">
                          <div className="absolute bottom-[8%] right-[2%] h-[82%] w-[78%] overflow-hidden rounded-lg border-[6px] border-neutral-900 bg-white shadow-xl">
                            <img src={project.thumbnailDesktop} alt={`${project.title} PC 화면`} className="device-page-scroll-pc h-auto w-full" />
                            <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex h-6 items-center gap-1 bg-neutral-900 px-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-red-400" /><span className="h-1.5 w-1.5 rounded-full bg-amber-400" /><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            </div>
                          </div>
                          <div className="absolute bottom-[3%] left-[2%] z-20 h-[74%] w-[22%] overflow-hidden rounded-[18px] border-[6px] border-neutral-900 bg-white shadow-2xl">
                            <img src={project.thumbnailMobile} alt={`${project.title} 모바일 화면`} className="device-page-scroll-mobile h-auto w-full" />
                            <span className="pointer-events-none absolute left-1/2 top-0 z-10 h-3 w-[44%] -translate-x-1/2 rounded-b-lg bg-neutral-900" />
                          </div>
                        </div>
                      ) : project.responsiveMorph && project.thumbnailMobile ? (
                        <div className="relative h-full w-full overflow-hidden rounded-lg border-[5px] border-slate-800 shadow-xl transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:w-[25%] group-hover:rounded-[22px] group-hover:border-neutral-900">
                          <img src={project.thumbnailDesktop} alt={`${project.title} PC 화면`} className="absolute inset-0 h-full w-full object-cover object-top opacity-100 transition-opacity duration-500 group-hover:opacity-0" />
                          <img src={project.thumbnailMobile} alt={`${project.title} 모바일 화면`} className="responsive-mobile-page absolute inset-x-0 top-0 h-auto w-full opacity-0 transition-opacity delay-200 duration-500 group-hover:opacity-100" />
                          <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex h-7 items-center gap-1.5 bg-slate-800 px-3 transition-opacity duration-300 group-hover:opacity-0">
                            <span className="h-2 w-2 rounded-full bg-red-400" />
                            <span className="h-2 w-2 rounded-full bg-amber-400" />
                            <span className="h-2 w-2 rounded-full bg-emerald-400" />
                            <span className="ml-3 h-3 flex-1 rounded-full bg-white/15" />
                          </div>
                          <span className="absolute left-1/2 top-0 z-10 hidden h-3 w-[42%] -translate-x-1/2 rounded-b-lg bg-neutral-900 group-hover:block" />
                        </div>
                      ) : (
                        <>
                          <img src={project.thumbnailDesktop} alt={`${project.title} PC 화면`} className="h-[125%] w-[52%] object-cover object-top shadow-md transition duration-500 group-hover:-translate-y-1" />
                          {project.thumbnailMobile && <img src={project.thumbnailMobile} alt={`${project.title} 모바일 화면`} className="h-[125%] w-[18%] object-cover object-top shadow-md transition duration-500 group-hover:-translate-y-1" />}
                        </>
                      )}
                    </div>
                    <span className="absolute right-4 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold shadow-sm">PC · MOBILE</span>
                    <div className="absolute inset-x-0 bottom-0 z-40 bg-gradient-to-t from-black/90 via-black/70 to-transparent px-6 pb-5 pt-14 text-white">
                      <p className="text-[11px] font-bold tracking-[.12em] text-white/70">{project.subtitle}</p>
                      <h3 className="mt-1 text-xl font-extrabold leading-tight sm:text-2xl">{project.title}</h3>
                    </div>
                  </div>
                ) : (
                  <div className="relative flex aspect-[16/8] items-end overflow-hidden p-6" style={{ background: `linear-gradient(135deg, ${project.accent}18, #f7f8fa)` }}>
                    <span className="absolute right-5 top-4 text-5xl font-black text-black/[.05]">{String(index + 1).padStart(2, "0")}</span>
                    <div><p className="text-xs font-bold tracking-[.12em]" style={{ color: project.accent }}>{project.subtitle}</p><h3 className="mt-2 max-w-md text-2xl font-extrabold leading-tight">{project.title}</h3></div>
                  </div>
                )}
                  {project.link && (
                    <span className="pointer-events-none absolute bottom-5 right-5 z-50 flex items-center text-[#c8ff32] transition">
                      <span className="mr-3 text-xs font-semibold tracking-wide">사이트 보기</span>
                      <span className="h-px w-10 bg-current transition-all duration-300 group-hover:w-14" />
                      <span className="-ml-px flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-base backdrop-blur-sm transition duration-300 group-hover:translate-x-1 group-hover:bg-white group-hover:text-black">→</span>
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <dl className="grid gap-3 text-sm">
                    <div className="grid grid-cols-[80px_1fr]"><dt className="text-[var(--muted)]">서비스 유형</dt><dd className="font-semibold">{project.serviceType}</dd></div>
                    <div className="grid grid-cols-[64px_1fr]"><dt className="text-[var(--muted)]">담당</dt><dd className="font-semibold">{project.role}</dd></div>
                    <div className="grid grid-cols-[64px_1fr]"><dt className="text-[var(--muted)]">기여도</dt><dd className="font-semibold">{project.contribution}</dd></div>
                    <div className="grid grid-cols-[64px_1fr]"><dt className="text-[var(--muted)]">기간</dt><dd>{project.period}</dd></div>
                    <div className="grid grid-cols-[64px_1fr]"><dt className="text-[var(--muted)]">기술</dt><dd>{project.tech.join(" · ")}</dd></div>
                  </dl>
                  <div className="mt-6 border-t border-[var(--line)] pt-5">
                    <p className="text-xs font-bold text-[var(--accent)]">주요 구현</p>
                    <ul className="mt-3 space-y-2">{project.tasks.map(task => <li key={task} className="flex gap-2 text-sm leading-6 text-[var(--muted)]"><span aria-hidden className="text-[var(--accent)]">—</span>{task}</li>)}</ul>
                  </div>
                  <div className="mt-auto flex flex-wrap gap-2 pt-6">{project.tags.map(tag => <span key={tag} className="rounded-md bg-[#c8ff32]/45 px-2.5 py-1.5 text-xs font-semibold text-black/70">{tag}</span>)}</div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
