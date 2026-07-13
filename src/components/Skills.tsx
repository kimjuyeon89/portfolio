import { skills } from "../data/portfolio";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Skills
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            사용하는 기술
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 100}>
              <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors hover:border-indigo-400/40 hover:bg-white/[0.05]">
                <h3 className="text-lg font-semibold text-white">
                  {group.category}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-white/10 bg-zinc-900/60 px-3 py-1.5 text-sm text-zinc-300 transition-colors group-hover:border-white/20"
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
