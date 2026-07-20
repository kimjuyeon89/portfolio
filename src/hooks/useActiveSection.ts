import { useEffect, useState } from "react";
import { portfolioNavLinks } from "../data/navigation";

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("#new-home");

  useEffect(() => {
    const sections = portfolioNavLinks
      .map(({ href }) => document.querySelector<HTMLElement>(href))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver((entries) => {
      const current = entries
        .filter(({ isIntersecting }) => isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (current) setActiveSection(`#${current.target.id}`);
    }, { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] });

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return { activeSection, setActiveSection };
}
