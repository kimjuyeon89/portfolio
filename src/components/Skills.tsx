import { skills } from "../data/portfolio";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="px-5 py-24 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.24em] text-[var(--accent)] uppercase">Skills</p>
          <h2 className="font-display mt-3 text-[clamp(2rem,5vw,3.2rem)] font-extrabold tracking-[-0.02em] text-[var(--ink)]">
            기술보다 수행 경험으로 증명합니다
          </h2>
          <p className="mt-3 max-w-xl text-[var(--muted)]">
            마크업부터 공통 UI, 접근성 검수와 협업까지 프로젝트 전 과정을 경험했습니다.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {skills.map((group, index) => (
            <Reveal key={group.category} delay={index * 80}>
              <div className="h-full rounded-xl border border-[var(--line)] bg-white p-7">
                <p className="text-xs font-bold tracking-wider text-[var(--accent)]">0{index + 1}</p>
                <h3 className="font-display mt-3 text-xl font-bold text-[var(--ink)]">{group.category}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[var(--line)] bg-[var(--bg)] px-3 py-1.5 text-xs font-semibold text-[var(--ink)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
