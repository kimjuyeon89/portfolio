import { useRef } from "react";
import { usePortfolioAnimations } from "../hooks/usePortfolioAnimations";
import MiniGame from "./MiniGame";
import Projects from "./Projects";
import ArchiveSection from "./portfolio/ArchiveSection";
import ContactSection from "./portfolio/ContactSection";
import ExperienceSection from "./portfolio/ExperienceSection";
import HeroSection from "./portfolio/HeroSection";
import PortfolioFooter from "./portfolio/PortfolioFooter";
import PortfolioHeader from "./portfolio/PortfolioHeader";
import SkillsSection from "./portfolio/SkillsSection";

export default function NewProjectPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  usePortfolioAnimations({ pageRef, cursorRef, progressRef });

  return (
    <div ref={pageRef} className="new-project-page min-h-screen overflow-x-clip bg-[#0b0b10] text-[#f5f3ef]">
      <div ref={progressRef} className="fixed inset-x-0 top-0 z-[70] h-1 origin-left scale-x-0 bg-[#c8ff32]" aria-hidden="true" />
      <div ref={cursorRef} className="pointer-events-none fixed left-0 top-0 z-0 hidden h-[360px] w-[360px] rounded-full bg-[#c8ff32]/10 blur-[80px] transition-transform duration-500 ease-out md:block" aria-hidden="true" />

      <PortfolioHeader />
      <main>
        <HeroSection />
        <Projects />
        <ArchiveSection />
        <ExperienceSection />
        <SkillsSection />
        <div id="new-play"><MiniGame /></div>
        <ContactSection />
      </main>
      <PortfolioFooter />
    </div>
  );
}
