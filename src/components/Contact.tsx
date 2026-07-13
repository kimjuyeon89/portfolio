import { profile } from "../data/portfolio";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600/20 via-zinc-900/40 to-fuchsia-600/20 p-10 text-center sm:p-16">
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[100px]" />
            </div>

            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-300">
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              함께 멋진 것을 만들어요
            </h2>
            <p className="mx-auto mt-4 max-w-md text-zinc-300">
              새로운 기회나 협업 제안은 언제나 환영합니다. 편하게 연락 주세요.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-zinc-900 transition-transform hover:scale-105"
            >
              이메일 보내기
              <span aria-hidden>→</span>
            </a>

            <div className="mt-8 flex items-center justify-center gap-6 text-sm">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-300 transition-colors hover:text-white"
              >
                GitHub
              </a>
              <span className="text-zinc-600">·</span>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-300 transition-colors hover:text-white"
              >
                LinkedIn
              </a>
              <span className="text-zinc-600">·</span>
              <a
                href={`mailto:${profile.email}`}
                className="text-zinc-300 transition-colors hover:text-white"
              >
                Email
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
