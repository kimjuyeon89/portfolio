import { useLayoutEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type PortfolioRefs = {
  pageRef: RefObject<HTMLDivElement | null>;
  cursorRef: RefObject<HTMLDivElement | null>;
  progressRef: RefObject<HTMLDivElement | null>;
};

const addPointerEffect = (
  elements: NodeListOf<HTMLElement>,
  move: (element: HTMLElement, event: PointerEvent) => void,
  reset: (element: HTMLElement) => void,
) => {
  const cleanups: Array<() => void> = [];
  elements.forEach((element) => {
    const onMove = (event: PointerEvent) => move(element, event);
    const onLeave = () => reset(element);
    element.addEventListener("pointermove", onMove);
    element.addEventListener("pointerleave", onLeave);
    cleanups.push(() => {
      element.removeEventListener("pointermove", onMove);
      element.removeEventListener("pointerleave", onLeave);
    });
  });
  return () => cleanups.forEach((cleanup) => cleanup());
};

export function usePortfolioAnimations({ pageRef, cursorRef, progressRef }: PortfolioRefs) {
  useLayoutEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    const cleanups: Array<() => void> = [];
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    cleanups.push(() => window.removeEventListener("scroll", updateProgress));
    updateProgress();

    if (reducedMotion) return () => cleanups.forEach((cleanup) => cleanup());

    const moveCursor = (event: PointerEvent) => {
      if (cursorRef.current) cursorRef.current.style.transform = `translate3d(${event.clientX - 180}px, ${event.clientY - 180}px, 0)`;
    };
    window.addEventListener("pointermove", moveCursor, { passive: true });
    cleanups.push(() => window.removeEventListener("pointermove", moveCursor));

    cleanups.push(addPointerEffect(
      page.querySelectorAll<HTMLElement>("[data-tilt]"),
      (card, event) => {
        const rect = card.getBoundingClientRect();
        const rotateY = ((event.clientX - rect.left) / rect.width - 0.5) * 7;
        const rotateX = (0.5 - (event.clientY - rect.top) / rect.height) * 7;
        card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
      },
      (card) => { card.style.transform = "perspective(1200px) rotateX(0) rotateY(0) translateY(0)"; },
    ));

    cleanups.push(addPointerEffect(
      page.querySelectorAll<HTMLElement>("[data-magnetic]"),
      (button, event) => {
        const rect = button.getBoundingClientRect();
        gsap.to(button, { x: (event.clientX - rect.left - rect.width / 2) * 0.22, y: (event.clientY - rect.top - rect.height / 2) * 0.22, duration: 0.35, ease: "power2.out" });
      },
      (button) => { gsap.to(button, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, .35)" }); },
    ));

    const context = gsap.context(() => {
      gsap.from("[data-hero-line]", { yPercent: 120, rotate: 3, duration: 1.25, stagger: 0.12, ease: "power4.out" });
      gsap.from("[data-hero-deco]", { opacity: 0, scale: 0.7, y: 45, duration: 1.2, delay: 0.65, stagger: 0.12, ease: "back.out(1.5)" });
      gsap.from("[data-keyword-orbit]", { opacity: 0, scale: 0.72, rotate: -12, duration: 1.1, delay: 0.6, ease: "back.out(1.5)" });
      gsap.from("[data-orbit-chip]", { opacity: 0, duration: 0.65, delay: 0.9, stagger: 0.08, ease: "power2.out" });
      gsap.to("[data-orbit]", { rotation: 360, duration: 22, repeat: -1, ease: "none" });
      gsap.to("[data-parallax]", { yPercent: 28, ease: "none", scrollTrigger: { trigger: "[data-hero]", start: "top top", end: "bottom top", scrub: 1 } });

      gsap.utils.toArray<HTMLElement>("[data-archive-row]").forEach((row, index) => {
        gsap.from(row, { x: index % 2 === 0 ? -90 : 90, opacity: 0, ease: "power2.out", scrollTrigger: { trigger: row, start: "top 92%", end: "top 68%", scrub: 1 } });
      });

      gsap.fromTo("[data-career-line]", { scaleY: 0 }, { scaleY: 1, ease: "none", scrollTrigger: { trigger: "#new-experience", start: "top 65%", end: "bottom 70%", scrub: 1 } });
      gsap.utils.toArray<HTMLElement>("[data-career-item]").forEach((item) => {
        gsap.timeline({ scrollTrigger: { trigger: item, start: "top 88%", end: "bottom 18%", scrub: 1 } })
          .fromTo(item, { opacity: 0.2 }, { opacity: 1, duration: 0.42, ease: "none" })
          .to(item, { opacity: 1, duration: 0.3 })
          .to(item, { opacity: 0.28, duration: 0.28, ease: "none" });
      });

      const careerTrack = page.querySelector<HTMLElement>("[data-career-track]");
      if (careerTrack) {
        gsap.to("[data-career-marker]", { y: () => Math.max(0, careerTrack.offsetHeight - 14), ease: "none", scrollTrigger: { trigger: careerTrack, start: "top 55%", end: "bottom 55%", scrub: 0.5 } });
      }
      gsap.fromTo("[data-career-bg]", { yPercent: -12 }, { yPercent: 18, ease: "none", scrollTrigger: { trigger: "#new-experience", start: "top bottom", end: "bottom top", scrub: 1.2 } });
      gsap.fromTo("[data-skill-title]", { clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0% 0 0)", ease: "power3.inOut", scrollTrigger: { trigger: "[data-skills-section]", start: "top 75%", end: "top 30%", scrub: 1 } });
      gsap.fromTo("[data-contact-fill]", { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }, { clipPath: "polygon(0 0, 115% 0, 100% 100%, 0 100%)", stagger: 0.16, ease: "none", scrollTrigger: { trigger: "#new-contact", start: "top 88%", end: "top 34%", scrub: 1 } });
    }, page);

    cleanups.push(() => context.revert());
    return () => cleanups.forEach((cleanup) => cleanup());
  }, [cursorRef, pageRef, progressRef]);
}
