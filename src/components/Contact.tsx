import { profile } from "../data/portfolio";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="px-5 pb-24 sm:px-8 lg:pb-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--bg-deep)] px-8 py-14 text-white sm:px-12">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[var(--accent)]/20 blur-3xl" />
            <p className="relative text-xs font-semibold tracking-[0.24em] text-[#5eead4] uppercase">Contact</p>
            <h2 className="font-display relative mt-4 max-w-2xl text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
              완성도 높은 UI를
              <br />
              함께 만들어가고 싶습니다.
            </h2>
            <p className="relative mt-4 max-w-lg text-white/60">
              웹 표준과 접근성을 바탕으로 안정적이고 유지보수하기 좋은 화면을 구현하겠습니다.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="relative mt-8 inline-flex rounded-full bg-[var(--accent)] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0a5f56]"
            >
              {profile.email}
            </a>
            <div className="relative mt-8 flex gap-5 text-sm font-semibold text-white/50">
              <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-white">
                GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">
                LinkedIn
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
