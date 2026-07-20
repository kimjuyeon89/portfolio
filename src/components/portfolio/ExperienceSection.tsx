import { experiences, profile } from "../../data/portfolio";

export default function ExperienceSection() {
  return (
    <section id="new-experience" className="new-career-section relative isolate overflow-x-clip bg-[#6d5dfc] px-5 py-24 sm:px-10 sm:py-32">
      <span data-career-bg className="pointer-events-none absolute -right-10 top-[12%] font-mono text-[32vw] font-black leading-none tracking-[-.12em] text-white/[.035]" aria-hidden="true">08</span>
      <div className="relative z-10 mx-auto grid max-w-[1440px] items-start gap-16 lg:grid-cols-[.7fr_1.3fr]">
        <div className="lg:sticky lg:top-28">
          <p className="text-xs font-bold tracking-[.18em] text-[#c8ff32]">CAREER HISTORY</p>
          <h2 className="mt-5 text-6xl font-black leading-[.9] tracking-[-.06em] sm:text-8xl">8+<br />YEARS</h2>
          <p className="mt-8 max-w-sm text-lg leading-8 text-white/70">{profile.intro}</p>
          <p className="mt-10 hidden items-center gap-3 text-[10px] font-bold tracking-[.18em] text-white/35 lg:flex"><span className="h-px w-10 bg-[#c8ff32]" />SCROLL THROUGH HISTORY</p>
        </div>
        <div data-career-track className="relative pl-6 sm:pl-10">
          <span data-career-line className="absolute bottom-0 left-0 top-0 w-px origin-top bg-[#c8ff32] shadow-[0_0_18px_#c8ff32]" aria-hidden="true" />
          <span data-career-marker className="absolute left-[-6px] top-0 z-10 h-3 w-3 rounded-full border-2 border-[#6d5dfc] bg-[#c8ff32] shadow-[0_0_22px_#c8ff32]" aria-hidden="true" />
          {experiences.map((experience) => (
            <article data-career-item key={experience.company} className="relative flex flex-col justify-center overflow-visible border-t border-white/25 py-10 lg:min-h-[38vh]">
              <span className="pointer-events-none absolute right-4 top-6 font-mono text-8xl font-black leading-none tracking-[-.06em] text-white/[.055]" aria-hidden="true">{experience.period.slice(0, 4)}</span>
              <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
                <div><h3 className="text-2xl font-black sm:text-4xl">{experience.company}</h3><p className="mt-2 text-white/65">{experience.role}</p></div>
                <time className="font-mono text-sm text-[#c8ff32]">{experience.period}</time>
              </div>
              <ul className="mt-6 grid gap-2 text-sm leading-6 text-white/70 sm:grid-cols-2">
                {experience.highlights.map((item) => <li key={item}>— {item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
