import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MiniGame from "./MiniGame";
import {
  experiences,
  featuredProjects,
  keywords,
  privacyNote,
  profile,
  selectedProjects,
  skills,
  strengths,
} from "../data/portfolio";

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { href: "#new-home", label: "HOME" },
  { href: "#new-work", label: "WORK" },
  { href: "#new-archive", label: "ARCHIVE" },
  { href: "#new-experience", label: "EXPERIENCE" },
  { href: "#new-skills", label: "SKILLS" },
  { href: "#new-play", label: "PLAY" },
  { href: "#new-contact", label: "CONTACT" },
];

const keywordOrbitPositions = [
  "left-1/2 top-0 -translate-x-1/2",
  "right-0 top-[22%]",
  "bottom-[18%] right-0",
  "bottom-0 left-1/2 -translate-x-1/2",
  "bottom-[18%] left-0",
  "left-0 top-[22%]",
];

const keywordOrbitColors = [
  "border-[#c8ff32] bg-[#c8ff32] text-[#15151c]",
  "border-[#a99cff] bg-[#a99cff] text-[#15151c]",
  "border-[#ff9dca] bg-[#ff9dca] text-[#15151c]",
  "border-[#8edcff] bg-[#8edcff] text-[#15151c]",
  "border-[#ffe477] bg-[#ffe477] text-[#15151c]",
  "border-[#ff9b7b] bg-[#ff9b7b] text-[#15151c]",
];

export default function NewProjectPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#new-home");
  const pageRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector<HTMLElement>(link.href))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveSection(`#${visible.target.id}`);
    }, { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cursor = cursorRef.current;
    const progress = progressRef.current;
    const cleanups: Array<() => void> = [];

    const updateProgress = () => {
      if (!progress) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    };
    window.addEventListener("scroll", updateProgress, { passive: true });
    cleanups.push(() => window.removeEventListener("scroll", updateProgress));

    if (!reducedMotion) {
      const moveCursor = (event: PointerEvent) => {
        if (!cursor) return;
        cursor.style.transform = `translate3d(${event.clientX - 180}px, ${event.clientY - 180}px, 0)`;
      };
      window.addEventListener("pointermove", moveCursor, { passive: true });
      cleanups.push(() => window.removeEventListener("pointermove", moveCursor));

      page.querySelectorAll<HTMLElement>("[data-tilt]").forEach((card) => {
        const move = (event: PointerEvent) => {
          const rect = card.getBoundingClientRect();
          const rotateY = ((event.clientX - rect.left) / rect.width - 0.5) * 7;
          const rotateX = (0.5 - (event.clientY - rect.top) / rect.height) * 7;
          card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
        };
        const reset = () => { card.style.transform = "perspective(1200px) rotateX(0) rotateY(0) translateY(0)"; };
        card.addEventListener("pointermove", move);
        card.addEventListener("pointerleave", reset);
        cleanups.push(() => { card.removeEventListener("pointermove", move); card.removeEventListener("pointerleave", reset); });
      });

      page.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((button) => {
        const move = (event: PointerEvent) => {
          const rect = button.getBoundingClientRect();
          gsap.to(button, {
            x: (event.clientX - rect.left - rect.width / 2) * 0.22,
            y: (event.clientY - rect.top - rect.height / 2) * 0.22,
            duration: 0.35,
            ease: "power2.out",
          });
        };
        const reset = () => gsap.to(button, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, .35)" });
        button.addEventListener("pointermove", move);
        button.addEventListener("pointerleave", reset);
        cleanups.push(() => { button.removeEventListener("pointermove", move); button.removeEventListener("pointerleave", reset); });
      });

      const context = gsap.context(() => {
        gsap.from("[data-hero-line]", { yPercent: 120, rotate: 3, duration: 1.25, stagger: 0.12, ease: "power4.out" });
        gsap.from("[data-hero-deco]", { opacity: 0, scale: 0.7, y: 45, duration: 1.2, delay: 0.65, stagger: 0.12, ease: "back.out(1.5)" });
        gsap.from("[data-keyword-orbit]", { opacity: 0, scale: 0.72, rotate: -12, duration: 1.1, delay: 0.6, ease: "back.out(1.5)" });
        gsap.from("[data-orbit-chip]", { opacity: 0, duration: 0.65, delay: 0.9, stagger: 0.08, ease: "power2.out" });
        gsap.to("[data-orbit]", { rotation: 360, duration: 22, repeat: -1, ease: "none" });
        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
          gsap.from(element, { opacity: 0, y: 70, duration: 1, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 88%", once: true } });
        });
        gsap.to("[data-parallax]", { yPercent: 28, ease: "none", scrollTrigger: { trigger: "[data-hero]", start: "top top", end: "bottom top", scrub: 1 } });

        gsap.fromTo("[data-work-title]", { xPercent: -12 }, {
          xPercent: 8,
          ease: "none",
          scrollTrigger: { trigger: "#new-work", start: "top bottom", end: "top 5%", scrub: 1.2 },
        });

        gsap.utils.toArray<HTMLElement>("[data-project-media]").forEach((media) => {
          const image = media.querySelector("img");
          if (!image) return;
          gsap.fromTo(image, { yPercent: -3 }, {
            yPercent: 3,
            ease: "none",
            scrollTrigger: { trigger: media, start: "top bottom", end: "bottom top", scrub: 1.4 },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-archive-row]").forEach((row, index) => {
          gsap.from(row, {
            x: index % 2 === 0 ? -90 : 90,
            opacity: 0,
            ease: "power2.out",
            scrollTrigger: { trigger: row, start: "top 92%", end: "top 68%", scrub: 1 },
          });
        });

        gsap.fromTo("[data-career-line]", { scaleY: 0 }, {
          scaleY: 1,
          ease: "none",
          scrollTrigger: { trigger: "#new-experience", start: "top 65%", end: "bottom 70%", scrub: 1 },
        });
        gsap.utils.toArray<HTMLElement>("[data-career-item]").forEach((item) => {
          const timeline = gsap.timeline({ scrollTrigger: { trigger: item, start: "top 88%", end: "bottom 18%", scrub: 1 } });
          timeline
            .fromTo(item, { opacity: 0.2, x: 55 }, { opacity: 1, x: 0, duration: 0.42, ease: "none" })
            .to(item, { opacity: 1, x: 0, duration: 0.3 })
            .to(item, { opacity: 0.28, x: -12, duration: 0.28, ease: "none" });
        });
        const careerTrack = page.querySelector<HTMLElement>("[data-career-track]");
        if (careerTrack) {
          gsap.to("[data-career-marker]", {
            y: () => Math.max(0, careerTrack.offsetHeight - 14),
            ease: "none",
            scrollTrigger: { trigger: careerTrack, start: "top 55%", end: "bottom 55%", scrub: 0.5 },
          });
        }
        gsap.fromTo("[data-career-bg]", { yPercent: -12 }, {
          yPercent: 18,
          ease: "none",
          scrollTrigger: { trigger: "#new-experience", start: "top bottom", end: "bottom top", scrub: 1.2 },
        });

        gsap.fromTo("[data-skill-title]", { clipPath: "inset(0 100% 0 0)" }, {
          clipPath: "inset(0 0% 0 0)",
          ease: "power3.inOut",
          scrollTrigger: { trigger: "[data-skills-section]", start: "top 75%", end: "top 30%", scrub: 1 },
        });

        gsap.fromTo("[data-contact-fill]", {
          clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
        }, {
          clipPath: "polygon(0 0, 115% 0, 100% 100%, 0 100%)",
          stagger: 0.16,
          ease: "none",
          scrollTrigger: { trigger: "#new-contact", start: "top 88%", end: "top 34%", scrub: 1 },
        });

      }, page);
      cleanups.push(() => context.revert());
    }

    updateProgress();
    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  return (
    <div ref={pageRef} className="new-project-page min-h-screen overflow-x-clip bg-[#0b0b10] text-[#f5f3ef]">
      <div ref={progressRef} className="fixed inset-x-0 top-0 z-[70] h-1 origin-left scale-x-0 bg-[#c8ff32]" aria-hidden="true" />
      <div ref={cursorRef} className="pointer-events-none fixed left-0 top-0 z-0 hidden h-[360px] w-[360px] rounded-full bg-[#c8ff32]/10 blur-[80px] transition-transform duration-500 ease-out md:block" aria-hidden="true" />
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b0b10]/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 sm:px-10" aria-label="새 포트폴리오 메뉴">
          <a href="#new-home" className="shrink-0 text-sm font-black tracking-tight">KIM JUYEON®</a>
          <ul className="hidden items-center gap-5 xl:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setActiveSection(link.href)} aria-current={activeSection === link.href ? "page" : undefined} className={`relative text-[11px] font-bold tracking-[.12em] transition-colors after:absolute after:-bottom-2 after:left-1/2 after:h-1 after:w-1 after:-translate-x-1/2 after:rounded-full after:bg-[#c8ff32] after:transition-all ${activeSection === link.href ? "text-[#c8ff32] after:scale-100 after:opacity-100" : "text-white/60 after:scale-0 after:opacity-0 hover:text-white"}`}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <a href="/" className="rounded-full border border-white/20 px-4 py-2 text-xs font-bold hover:bg-white hover:text-black">ORIGINAL ↙</a>
            <button type="button" aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"} aria-expanded={menuOpen} aria-controls="new-project-mobile-menu" onClick={() => setMenuOpen((open) => !open)} className="grid h-9 w-9 place-items-center rounded-full border border-white/20 text-sm font-black xl:hidden">
              {menuOpen ? "×" : "≡"}
            </button>
          </div>
        </nav>
        {menuOpen && (
          <div id="new-project-mobile-menu" className="border-t border-white/10 px-5 py-3 sm:px-10 xl:hidden">
            <ul className="mx-auto grid max-w-[1440px] grid-cols-2 gap-1 sm:grid-cols-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={() => { setActiveSection(link.href); setMenuOpen(false); }} aria-current={activeSection === link.href ? "page" : undefined} className={`block rounded-lg px-3 py-2.5 text-xs font-bold tracking-[.12em] transition-colors ${activeSection === link.href ? "bg-[#c8ff32] text-black" : "text-white/60 hover:bg-white/5 hover:text-[#c8ff32]"}`}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      <main>
        <section id="new-home" data-hero className="relative flex min-h-screen items-end px-5 pb-16 pt-32 sm:px-10 sm:pb-24">
          <div className="new-hero-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
          <div className="pointer-events-none absolute right-[-2vw] top-[14%] hidden font-mono text-[19vw] font-black leading-none tracking-[-.1em] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,.055)] xl:block" aria-hidden="true">2026</div>
          <div className="absolute -right-32 top-20 h-[28rem] w-[28rem] rounded-full bg-[#c8ff32]/20 blur-[120px]" />
          <div data-parallax className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-[#6d5dfc]/25 blur-[120px]" />
          <div data-orbit className="absolute right-[8%] top-[20%] hidden h-40 w-40 rounded-full border border-dashed border-white/25 lg:block"><span className="absolute -top-2 left-1/2 h-4 w-4 rounded-full bg-[#c8ff32] shadow-[0_0_30px_#c8ff32]" /></div>
          <div data-hero-deco className="absolute right-[31%] top-[31%] hidden text-[#c8ff32] lg:block" aria-hidden="true"><span className="block text-4xl">✦</span><span className="absolute left-8 top-10 block text-xs text-white/30">✦</span></div>
          <div className="relative mx-auto w-full max-w-[1440px]">
            <div className="mb-10 flex items-center gap-3 text-xs font-bold tracking-[.18em] text-[#c8ff32]">
              <span className="h-2 w-2 rounded-full bg-[#c8ff32]" /> AVAILABLE FOR NEW OPPORTUNITIES
            </div>
            <p className="mb-5 text-lg text-white/55 sm:text-2xl">ACCESSIBLE · RESPONSIVE · INTERACTIVE</p>
            <div className="grid items-end gap-10 lg:grid-cols-[max-content_1fr] lg:gap-0">
              <h1 className="overflow-visible text-[clamp(4rem,11vw,10rem)] font-black leading-[.82] tracking-[-.075em]">
                <span data-hero-line className="new-hero-word block w-max pr-[.1em]">WEB</span>
                <span data-hero-line className="new-hero-word new-hero-word-accent block w-max pr-[.1em]">PUBLISHER.</span>
              </h1>
              <div data-keyword-orbit className="relative z-20 mx-auto h-64 w-64 lg:ml-2 lg:mr-0 lg:h-72 lg:w-72" aria-label="핵심 역량">
                <span className="new-keyword-orbit-ring absolute inset-9 rounded-full border border-dashed border-white/20" aria-hidden="true" />
                <span className="absolute inset-[4.75rem] rounded-full border border-white/10 bg-white/[.035] shadow-[0_0_45px_rgba(200,255,50,.08)]" aria-hidden="true" />
                <span className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[#c8ff32]/35 bg-[#101016] text-center text-[10px] font-black leading-4 tracking-[.14em] text-[#c8ff32] shadow-[0_0_30px_rgba(200,255,50,.1)]">WEB<br />UI</span>
                {keywords.map((keyword, index) => (
                  <span data-orbit-chip key={keyword} style={{ animationDelay: `${index * -0.55}s` }} className={`new-keyword-orbit-chip absolute ${keywordOrbitPositions[index % keywordOrbitPositions.length]} ${keywordOrbitColors[index % keywordOrbitColors.length]} inline-flex min-h-9 whitespace-nowrap items-center rounded-full border-2 border-black/60 px-3 py-1.5 text-[9px] font-black shadow-[0_4px_0_rgba(0,0,0,.35)] sm:text-[10px]`}>
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-12 border-t border-white/15 pt-8">
              <p className="max-w-2xl whitespace-pre-line text-xl leading-relaxed text-white/70 sm:text-2xl">{profile.tagline}</p>
            </div>
            <div className="mt-14 flex items-center gap-4 text-[10px] font-bold tracking-[.2em] text-white/35" aria-hidden="true">
              <span className="relative h-12 w-7 rounded-full border border-white/25"><span className="new-scroll-dot absolute left-1/2 top-2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#c8ff32]" /></span>
              SCROLL TO EXPLORE
            </div>
          </div>
        </section>

        <div className="new-marquee border-y border-white/10 bg-[#c8ff32] py-4 text-black" aria-hidden="true"><div className="new-marquee-track text-xl font-black tracking-[.12em]">WEB ACCESSIBILITY ✦ INTERACTIVE UI ✦ RESPONSIVE DESIGN ✦ PUBLIC SERVICE ✦ WEB ACCESSIBILITY ✦ INTERACTIVE UI ✦ RESPONSIVE DESIGN ✦ PUBLIC SERVICE ✦</div></div>

        <section id="new-work" className="bg-[#f1eee8] px-5 py-24 text-[#111116] sm:px-10 sm:py-32">
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-16 flex items-end justify-between border-b border-black/20 pb-6">
              <h2 data-work-title className="text-[clamp(3rem,8vw,7rem)] font-black leading-none tracking-[-.06em]">FEATURED<br />PROJECTS</h2>
              <span className="mb-2 font-mono text-sm">01—{String(featuredProjects.length).padStart(2, "0")}</span>
            </div>
            <div className="space-y-8">
              {featuredProjects.map((project, index) => (
                <article data-reveal data-tilt key={project.title} className="group grid min-h-[400px] overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_65px_rgba(0,0,0,.08)] transition-transform duration-300 lg:grid-cols-[1.1fr_.9fr]">
                  <div data-project-media className="relative min-h-[280px] overflow-hidden bg-[#d9d6d0] sm:min-h-[360px] lg:min-h-[400px]">
                    {project.thumbnailDesktop || project.thumbnailGallery?.[0] ? <img src={project.thumbnailDesktop ?? project.thumbnailGallery?.[0]} alt={`${project.title} 대표 화면`} className="absolute -top-[4%] left-0 h-[108%] w-full object-cover object-top" /> : <div className="absolute inset-0 grid place-items-center bg-[#17171d] text-7xl font-black text-white/10">{String(index + 1).padStart(2, "0")}</div>}
                    <span className="absolute left-5 top-5 rounded-full bg-[#c8ff32] px-4 py-2 text-xs font-black">{project.period}</span>
                  </div>
                  <div className="flex flex-col justify-between p-7 sm:p-9 lg:p-10">
                    <div>
                      <div className="mb-4 flex items-center justify-between">
                        <p className="text-xs font-black tracking-[.16em] text-[#6d5dfc]">PROJECT {String(index + 1).padStart(2, "0")}</p>
                        <span className="font-mono text-xl font-medium text-black/20">{String(index + 1).padStart(2, "0")}</span>
                      </div>
                      <h3 className="break-keep text-2xl font-black leading-[1.18] tracking-[-.035em] sm:text-3xl lg:text-[2rem]">{project.title}</h3>
                      <p className="mt-4 text-sm leading-6 text-black/60 sm:text-base">{project.role}</p>
                      <ul className="mt-6 space-y-2 border-t border-black/10 pt-5 text-sm leading-6 text-black/65">
                        {project.tasks.map((task) => <li key={task}>↳ {task}</li>)}
                      </ul>
                    </div>
                    <div className="mt-7 flex flex-wrap items-center gap-2">
                      {project.tech.map((item) => <span key={item} className="rounded-full bg-black px-3 py-1.5 text-[10px] font-bold text-white">{item}</span>)}
                      {project.link && <a data-magnetic href={project.link} target="_blank" rel="noreferrer" className="ml-auto inline-flex items-center gap-2 rounded-full bg-[#c8ff32] px-5 py-3 text-xs font-black text-black transition-colors hover:bg-[#6d5dfc] hover:text-white">화면 바로가기 <span aria-hidden="true">↗</span></a>}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="new-archive" className="px-5 py-24 sm:px-10 sm:py-32">
          <div className="mx-auto max-w-[1440px]">
            <p className="mb-8 text-xs font-bold tracking-[.18em] text-[#c8ff32]">MORE PROJECT ARCHIVE</p>
            {selectedProjects.map((project, index) => (
              <div data-archive-row key={project.title} className="group relative isolate grid gap-3 overflow-hidden border-t border-white/15 py-7 transition-colors duration-500 ease-out hover:text-[#c8ff32] sm:grid-cols-[70px_1fr_180px_160px] sm:items-center">
                <span className="absolute inset-0 -z-10 origin-left scale-x-0 bg-gradient-to-r from-[#c8ff32]/10 via-[#c8ff32]/[.04] to-transparent transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-x-100" aria-hidden="true" />
                <span className="font-mono text-xs text-white/35 transition-transform duration-500 ease-out group-hover:translate-x-3">{String(index + 6).padStart(2, "0")}</span>
                <h3 className="text-xl font-bold transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-4 sm:text-3xl">{project.title}</h3>
                <span className="text-sm text-white/50 transition duration-500 group-hover:translate-x-2 group-hover:text-white/75">{project.field}</span>
                <span className="text-sm text-white/50 transition duration-500 group-hover:-translate-x-2 group-hover:text-[#c8ff32]/80 sm:text-right">{project.period}</span>
              </div>
            ))}
            <p className="border-t border-white/15 pt-6 text-sm text-white/35">{privacyNote}</p>
          </div>
        </section>

        <section id="new-experience" className="relative overflow-x-clip bg-[#6d5dfc] px-5 py-24 sm:px-10 sm:py-32">
          <span data-career-bg className="pointer-events-none absolute -right-10 top-[12%] font-mono text-[32vw] font-black leading-none tracking-[-.12em] text-white/[.035]" aria-hidden="true">08</span>
          <div className="relative z-10 mx-auto grid max-w-[1440px] items-start gap-16 lg:grid-cols-[.7fr_1.3fr]">
            <div className="lg:sticky lg:top-28">
              <p className="text-xs font-bold tracking-[.18em] text-[#c8ff32]">CAREER HISTORY</p>
              <h2 className="mt-5 text-6xl font-black leading-[.9] tracking-[-.06em] sm:text-8xl">8+<br />YEARS</h2>
              <p className="mt-8 max-w-sm text-lg leading-8 text-white/70">{profile.intro}</p>
              <p className="mt-10 hidden items-center gap-3 text-[10px] font-bold tracking-[.18em] text-white/35 lg:flex"><span className="h-px w-10 bg-[#c8ff32]" /> SCROLL THROUGH HISTORY</p>
            </div>
            <div data-career-track className="relative pl-6 sm:pl-10">
              <span data-career-line className="absolute bottom-0 left-0 top-0 w-px origin-top bg-[#c8ff32] shadow-[0_0_18px_#c8ff32]" aria-hidden="true" />
              <span data-career-marker className="absolute left-[-6px] top-0 z-10 h-3 w-3 rounded-full border-2 border-[#6d5dfc] bg-[#c8ff32] shadow-[0_0_22px_#c8ff32]" aria-hidden="true" />
              {experiences.map((experience) => (
                <article data-career-item key={experience.company} className="relative flex flex-col justify-center overflow-hidden border-t border-white/25 py-10 lg:min-h-[38vh]">
                  <span className="pointer-events-none absolute -right-2 top-5 font-mono text-8xl font-black tracking-[-.08em] text-white/[.055]" aria-hidden="true">{experience.period.slice(0, 4)}</span>
                  <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
                    <div><h3 className="text-2xl font-black sm:text-4xl">{experience.company}</h3><p className="mt-2 text-white/65">{experience.role}</p></div>
                    <time className="font-mono text-sm text-[#c8ff32]">{experience.period}</time>
                  </div>
                  <ul className="mt-6 grid gap-2 text-sm leading-6 text-white/70 sm:grid-cols-2">{experience.highlights.map((item) => <li key={item}>— {item}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="new-skills" data-skills-section className="bg-[#c8ff32] px-5 py-24 text-[#111116] sm:px-10 sm:py-32">
          <div className="mx-auto max-w-[1440px]">
            <h2 data-skill-title className="max-w-5xl text-[clamp(3rem,8vw,7.5rem)] font-black leading-[.92] tracking-[-.065em]">DETAILS MAKE<br />THE DIFFERENCE.</h2>
            <div className="mt-16 grid gap-px overflow-visible rounded-3xl bg-black/20 md:grid-cols-3">
              {skills.map((group, index) => <div key={group.category} className="group/skill relative overflow-hidden bg-[#c8ff32] p-8 transition duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:z-10 hover:-translate-y-3 hover:rotate-[-1deg] hover:rounded-3xl hover:bg-black hover:text-[#c8ff32] hover:shadow-[0_24px_60px_rgba(0,0,0,.25)]"><span className="absolute -right-2 -top-6 font-mono text-8xl font-black opacity-[.07] transition-transform duration-700 group-hover/skill:rotate-12 group-hover/skill:scale-110">0{index + 1}</span><p className="relative text-xs font-black tracking-[.15em]">{group.category.toUpperCase()}</p><p className="relative mt-8 text-xl font-bold leading-9">{group.items.join(" · ")}</p></div>)}
            </div>
            <div className="mt-12 flex flex-wrap gap-3">{strengths.map((strength) => <span key={strength} className="rounded-full border-2 border-black px-5 py-3 text-sm font-black">{strength}</span>)}</div>
          </div>
        </section>

        <div id="new-play"><MiniGame /></div>

        <section id="new-contact" className="relative px-5 py-28 text-center sm:px-10 sm:py-40">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 shadow-[0_0_100px_rgba(200,255,50,.08)] sm:h-[32rem] sm:w-[32rem]" aria-hidden="true" />
          <p className="relative z-10 text-xs font-bold tracking-[.2em] text-white/40">LET'S BUILD SOMETHING MEANINGFUL</p>
          <h2 className="relative z-10 mx-auto mt-6 max-w-5xl text-[clamp(3.4rem,9vw,8rem)] font-black leading-[.9] tracking-[-.065em]">
            <span className="new-contact-line block"><span className="new-contact-outline">READY TO</span><span data-contact-fill className="new-contact-fill" aria-hidden="true">READY TO</span></span>
            <span className="new-contact-line block"><span className="new-contact-outline">WORK TOGETHER?</span><span data-contact-fill className="new-contact-fill new-contact-fill-accent" aria-hidden="true">WORK TOGETHER?</span></span>
          </h2>
          <div className="relative z-10 mt-12 flex flex-wrap justify-center gap-3">
            <a data-magnetic href={`mailto:${profile.email}`} className="relative rounded-full bg-white px-7 py-4 font-black text-black transition-colors hover:bg-[#c8ff32]">{profile.email}</a>
            <a data-magnetic href={profile.resumeUrl} download className="relative rounded-full border border-white/30 px-7 py-4 font-black transition-colors hover:bg-white hover:text-black">경력기술서 다운로드</a>
          </div>
        </section>
      </main>
      <footer className="flex flex-wrap justify-between gap-4 border-t border-white/10 px-5 py-8 text-xs text-white/35 sm:px-10"><span>© 2026 KIM JUYEON</span><a href="/">BACK TO ORIGINAL ↑</a></footer>
    </div>
  );
}
