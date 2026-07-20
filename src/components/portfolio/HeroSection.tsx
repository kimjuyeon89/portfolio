import { keywordOrbitStyles } from "../../data/navigation";
import { keywords, profile } from "../../data/portfolio";

export default function HeroSection() {
  return (
    <>
      <section id="new-home" data-hero className="relative flex min-h-screen items-end px-5 pb-16 pt-32 sm:px-10 sm:pb-24">
        <div className="new-hero-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="pointer-events-none absolute right-[-2vw] top-[14%] hidden font-mono text-[19vw] font-black leading-none tracking-[-.1em] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,.055)] xl:block" aria-hidden="true">2026</div>
        <div className="absolute -right-32 top-20 h-[28rem] w-[28rem] rounded-full bg-[#c8ff32]/20 blur-[120px]" />
        <div data-parallax className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-[#6d5dfc]/25 blur-[120px]" />
        <div data-orbit className="absolute right-[8%] top-[20%] hidden h-40 w-40 rounded-full border border-dashed border-white/25 lg:block"><span className="absolute -top-2 left-1/2 h-4 w-4 rounded-full bg-[#c8ff32] shadow-[0_0_30px_#c8ff32]" /></div>
        <div data-hero-deco className="absolute right-[31%] top-[31%] hidden text-[#c8ff32] lg:block" aria-hidden="true"><span className="block text-4xl">✦</span><span className="absolute left-8 top-10 block text-xs text-white/30">✦</span></div>
        <div className="relative mx-auto w-full max-w-[1440px]">
          <p className="mb-10 flex items-center gap-3 text-xs font-bold tracking-[.18em] text-[#c8ff32]"><span className="h-2 w-2 rounded-full bg-[#c8ff32]" /> AVAILABLE FOR NEW OPPORTUNITIES</p>
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
              {keywords.map((keyword, index) => {
                const style = keywordOrbitStyles[index % keywordOrbitStyles.length];
                return <span data-orbit-chip key={keyword} style={{ animationDelay: `${index * -0.55}s` }} className={`new-keyword-orbit-chip absolute ${style.position} ${style.color} inline-flex min-h-9 whitespace-nowrap items-center rounded-full border-2 border-black/60 px-3 py-1.5 text-[9px] font-black shadow-[0_4px_0_rgba(0,0,0,.35)] sm:text-[10px]`}>{keyword}</span>;
              })}
            </div>
          </div>
          <div className="mt-12 border-t border-white/15 pt-8"><p className="max-w-2xl whitespace-pre-line text-xl leading-relaxed text-white/70 sm:text-2xl">{profile.tagline}</p></div>
          <div className="mt-14 flex items-center gap-4 text-[10px] font-bold tracking-[.2em] text-white/35" aria-hidden="true"><span className="relative h-12 w-7 rounded-full border border-white/25"><span className="new-scroll-dot absolute left-1/2 top-2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#c8ff32]" /></span>SCROLL TO EXPLORE</div>
        </div>
      </section>
      <div className="new-marquee border-y border-white/10 bg-[#c8ff32] py-4 text-black" aria-hidden="true"><div className="new-marquee-track text-xl font-black tracking-[.12em]">WEB ACCESSIBILITY ✦ INTERACTIVE UI ✦ RESPONSIVE DESIGN ✦ PUBLIC SERVICE ✦ WEB ACCESSIBILITY ✦ INTERACTIVE UI ✦ RESPONSIVE DESIGN ✦ PUBLIC SERVICE ✦</div></div>
    </>
  );
}
