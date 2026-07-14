import { experiences } from "../data/portfolio";
import Reveal from "./Reveal";

export default function Career() {
  return (
    <section id="career" className="border-y border-[var(--line)] bg-white/50 px-5 py-24 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.24em] text-[var(--accent)] uppercase">Career</p>
          <h2 className="font-display mt-3 text-[clamp(2rem,5vw,3.2rem)] font-extrabold tracking-[-0.02em] text-[var(--ink)]">
            경력
          </h2>
          <p className="mt-3 max-w-xl text-[var(--muted)]">
            디자인·퍼블리싱에서 React 운영 개발을 거쳐, 공공·공간정보 퍼블리싱까지 쌓아온 실무 흐름입니다.
          </p>
        </Reveal>

        <ol className="mt-14 space-y-0">
          {experiences.map((exp, index) => (
            <Reveal key={exp.company} delay={index * 60}>
              <li className="grid gap-6 border-t border-[var(--line)] py-10 md:grid-cols-[220px_1fr] lg:grid-cols-[260px_1fr]">
                <div>
                  <p className="text-xs font-semibold tracking-wider text-[var(--accent)] uppercase">{exp.period}</p>
                  <h3 className="font-display mt-2 text-2xl font-bold text-[var(--ink)]">{exp.company}</h3>
                  <p className="mt-1 text-sm font-semibold text-[var(--muted)]">{exp.role}</p>
                </div>
                <div>
                  <p className="text-base leading-relaxed text-[var(--ink)]">{exp.summary}</p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {exp.highlights.map((item) => (
                      <li key={item} className="flex gap-2 text-sm leading-snug text-[var(--muted)]">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
