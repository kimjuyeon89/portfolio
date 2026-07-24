import { skills, strengths } from "../../data/portfolio";

export default function SkillsSection() {
  return (
    <section id="new-skills" data-skills-section className="bg-[#c8ff32] px-5 py-24 text-[#111116] sm:px-10 sm:py-28">
      <div className="mx-auto max-w-[1440px]">
        <p className="text-xs font-black tracking-[.18em]">SKILLS IN PRACTICE</p>
        <h2 data-skill-title className="mt-4 max-w-5xl text-[clamp(2.5rem,5.5vw,5.25rem)] font-black leading-[1.02] tracking-[-.055em]">
          기술을 넘어<br />실무 역량으로.
        </h2>
        <p className="mt-6 max-w-3xl text-base font-semibold leading-7 text-black/65 sm:text-lg">
          마크업부터 인터랙션, 접근성, 협업까지 실제 프로젝트에서 활용한 역량을 정리했습니다.
        </p>

        <div className="mt-12 grid overflow-hidden border-y-2 border-black/35 md:grid-cols-3">
          {skills.map((group) => (
            <article key={group.category} className="border-b border-black/30 px-1 py-8 last:border-b-0 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
              <h3 className="text-sm font-black tracking-[.13em]">{group.category.toUpperCase()}</h3>
              <dl className="mt-7 space-y-6">
                {group.items.map((item) => (
                  <div key={item.name}>
                    <dt className="text-base font-black tracking-[-.01em]">{item.name}</dt>
                    <dd className="mt-1.5 text-sm font-semibold leading-6 text-black/60">{item.description}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-2.5">
          {strengths.map((strength) => <span key={strength} className="rounded-full border border-black/45 px-4 py-2 text-sm font-bold">{strength}</span>)}
        </div>
      </div>
    </section>
  );
}
