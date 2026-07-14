import { profile, strengths } from "../data/portfolio";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="relative px-5 py-24 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.24em] text-[var(--accent)] uppercase">About</p>
          <h2 className="font-display mt-4 max-w-5xl break-keep text-[clamp(2rem,4vw,3.4rem)] font-extrabold leading-[1.2] tracking-[-0.03em] text-[var(--ink)]">
            <span className="block">퍼블리싱 리드부터 QA·감리 대응까지</span>
            <span className="mt-1 block">프로젝트 전반을 경험했습니다.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <p className="break-keep text-base leading-8 text-[var(--muted)] sm:text-lg sm:leading-8">{profile.intro}</p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[var(--muted)]">
              <span>
                <span className="text-[var(--ink)]/40">역할</span> · {profile.role}
              </span>
              <span>
                <span className="text-[var(--ink)]/40">위치</span> · {profile.location}
              </span>
              <span>
                <span className="text-[var(--ink)]/40">메일</span> · {profile.email}
              </span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <ul className="space-y-4 border-l border-[var(--line)] pl-5">
              {strengths.map((item) => (
                <li key={item} className="break-keep text-sm font-medium leading-6 text-[var(--ink)]">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
