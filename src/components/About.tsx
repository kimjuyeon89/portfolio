import { profile, experiences, strengths } from "../data/portfolio";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
            About
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            저에 대해 소개합니다
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 md:grid-cols-5">
          <Reveal className="md:col-span-3">
            <p className="text-lg leading-relaxed text-zinc-300">
              {profile.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-zinc-400">
              <span>
                <span className="text-zinc-500">위치 ·</span> {profile.location}
              </span>
              <span>
                <span className="text-zinc-500">역할 ·</span> {profile.role}
              </span>
              <span>
                <span className="text-zinc-500">이메일 ·</span> {profile.email}
              </span>
            </div>

            <ul className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {strengths.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-zinc-300"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="md:col-span-2" delay={120}>
            <ol className="relative space-y-8 border-l border-white/10 pl-6">
              {experiences.map((exp) => (
                <li key={exp.company} className="relative">
                  <span className="absolute -left-[1.65rem] top-1.5 h-3 w-3 rounded-full border-2 border-indigo-400 bg-zinc-950" />
                  <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                    {exp.period}
                  </p>
                  <h3 className="mt-1 font-semibold text-white">
                    {exp.role}{" "}
                    <span className="text-zinc-500">· {exp.company}</span>
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
                    {exp.description}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
