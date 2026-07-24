import { useState } from "react";
import { portfolioNavLinks } from "../../data/navigation";
import { useActiveSection } from "../../hooks/useActiveSection";

export default function PortfolioHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { activeSection, setActiveSection } = useActiveSection();
  const selectSection = (href: string) => { setActiveSection(href); setMenuOpen(false); };
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b0b10]/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 sm:px-10" aria-label="포트폴리오 메뉴">
        <a href="#new-home" className="text-sm font-black">KIM JUYEON</a>
        <ul className="hidden items-center gap-5 xl:flex">{portfolioNavLinks.map(link => <li key={link.href}><a href={link.href} onClick={() => selectSection(link.href)} aria-current={activeSection === link.href ? "page" : undefined} className={activeSection === link.href ? "text-[11px] font-bold tracking-widest text-[#c8ff32]" : "text-[11px] font-bold tracking-widest text-white/60 hover:text-white"}>{link.label}</a></li>)}</ul>
        <button type="button" aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"} aria-expanded={menuOpen} aria-controls="portfolio-mobile-menu" onClick={() => setMenuOpen(open => !open)} className="grid h-9 w-9 place-items-center rounded-full border border-white/20 xl:hidden">{menuOpen ? "×" : "☰"}</button>
      </nav>
      {menuOpen && <div id="portfolio-mobile-menu" className="border-t border-white/10 px-5 py-3"><ul className="grid grid-cols-2 gap-1">{portfolioNavLinks.map(link => <li key={link.href}><a href={link.href} onClick={() => selectSection(link.href)} className="block rounded-lg px-3 py-2 text-xs font-bold text-white/70">{link.label}</a></li>)}</ul></div>}
    </header>
  );
}
