import { skills, strengths } from "../../data/portfolio";

export default function SkillsSection() {
  return (
    <section id="new-skills" data-skills-section className="bg-[#c8ff32] px-5 py-24 text-[#111116] sm:px-10 sm:py-32">
      <div className="mx-auto max-w-[1440px]">
        <h2 data-skill-title className="max-w-5xl text-[clamp(3rem,8vw,7.5rem)] font-black leading-[.92] tracking-[-.065em]">DETAILS MAKE<br />THE DIFFERENCE.</h2>
        <div className="mt-16 grid gap-px overflow-visible rounded-3xl bg-black/20 md:grid-cols-3">
          {skills.map((group, index) => (
            <div key={group.category} className="group/skill relative overflow-hidden bg-[#c8ff32] p-8 transition duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:z-10 hover:-translate-y-3 hover:rotate-[-1deg] hover:rounded-3xl hover:bg-black hover:text-[#c8ff32] hover:shadow-[0_24px_60px_rgba(0,0,0,.25)]">
              <span className="absolute -right-2 -top-6 font-mono text-8xl font-black opacity-[.07] transition-transform duration-700 group-hover/skill:rotate-12 group-hover/skill:scale-110">0{index + 1}</span>
              <p className="relative text-xs font-black tracking-[.15em]">{group.category.toUpperCase()}</p>
              <p className="relative mt-8 text-xl font-bold leading-9">{group.items.join(" · ")}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          {strengths.map((strength) => <span key={strength} className="rounded-full border-2 border-black px-5 py-3 text-sm font-black">{strength}</span>)}
        </div>
      </div>
    </section>
  );
}
