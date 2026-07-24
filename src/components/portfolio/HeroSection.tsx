import { keywordOrbitStyles } from "../../data/navigation";
import { keywords, profile } from "../../data/portfolio";

export default function HeroSection() {
  return (
    <>
      <section id="new-home" data-hero className="relative flex min-h-screen items-end px-5 pb-16 pt-32 sm:px-10 sm:pb-24">
        <div className="new-hero-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="absolute -right-32 top-20 h-[28rem] w-[28rem] rounded-full bg-[#c8ff32]/20 blur-[120px]" />
        <div data-parallax className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-[#6d5dfc]/25 blur-[120px]" />
        <div className="relative mx-auto w-full max-w-[1440px]">
          <p className="mb-7 flex items-center gap-3 text-xs font-bold tracking-[.18em] text-[#c8ff32]"><span className="h-2 w-2 rounded-full bg-[#c8ff32]" /> WEB PUBLISHER · KIM JUYEON</p>
          <p className="mb-4 text-lg font-semibold text-white/65 sm:text-2xl">공공·공간정보·관제 시스템 구축 경험을 보유한</p>
          <div className="grid items-end gap-8 lg:grid-cols-[1fr_300px]">
            <h1 className="text-[clamp(3.8rem,10vw,9rem)] font-black leading-[.84] tracking-[-.075em]">
              <span data-hero-line className="new-hero-word block">WEB</span>
              <span data-hero-line className="new-hero-word new-hero-word-accent block">PUBLISHER.</span>
            </h1>
            <div data-keyword-orbit className="relative mx-auto hidden h-64 w-64 lg:block" aria-label="핵심 역량">
              <span className="new-keyword-orbit-ring absolute inset-9 rounded-full border border-dashed border-white/20" aria-hidden="true" />
              <span className="absolute inset-[4.75rem] grid place-items-center rounded-full border border-white/10 bg-white/[.035] text-center text-[10px] font-black tracking-[.14em] text-[#c8ff32]">WEB<br />UI</span>
              {keywords.map((keyword, index) => {
                const style = keywordOrbitStyles[index % keywordOrbitStyles.length];
                return <span key={keyword} className={`new-keyword-orbit-chip absolute ${style.position} ${style.color} whitespace-nowrap rounded-full border-2 border-black/60 px-3 py-1.5 text-[9px] font-black`}>{keyword}</span>;
              })}
            </div>
          </div>
          <p className="mt-12 max-w-3xl border-t border-white/15 pt-8 text-xl leading-relaxed text-white/75 sm:text-2xl">{profile.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#new-work" className="rounded-full bg-[#c8ff32] px-7 py-4 text-sm font-black text-black transition hover:bg-white">대표 프로젝트 보기</a>
            <a href={profile.resumeUrl} download className="rounded-full border border-white/30 px-7 py-4 text-sm font-black text-white transition hover:bg-white hover:text-black">경력기술서 다운로드</a>
          </div>
        </div>
      </section>
      <div className="new-marquee border-y border-white/10 bg-[#c8ff32] py-4 text-black" aria-hidden="true"><div className="new-marquee-track text-xl font-black tracking-[.12em]">WEB ACCESSIBILITY · RESPONSIVE UI · COMMON COMPONENTS · PUBLIC SERVICE · WEB ACCESSIBILITY · RESPONSIVE UI · COMMON COMPONENTS · PUBLIC SERVICE ·</div></div>
    </>
  );
}
