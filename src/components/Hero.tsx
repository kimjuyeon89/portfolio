import { profile, stats, keywords } from "../data/portfolio";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-600/30 blur-[120px] animate-floaty" />
        <div className="absolute right-1/4 top-1/2 h-96 w-96 translate-x-1/2 rounded-full bg-fuchsia-600/20 blur-[120px] animate-floaty" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#09090b_75%)]" />
      </div>

      <div className="mx-auto w-full max-w-6xl">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-zinc-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            새로운 프로젝트를 찾고 있어요
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl">
            안녕하세요,
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              {profile.name}
            </span>
            입니다.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            {profile.tagline}
          </p>

          <ul className="mt-7 flex flex-wrap gap-2">
            {keywords.map((keyword) => (
              <li
                key={keyword}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-zinc-300"
              >
                {keyword}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-zinc-900 transition-transform hover:scale-105"
            >
              프로젝트 보기
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/15 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5"
            >
              연락하기
            </a>
          </div>

          <dl className="mt-16 flex flex-wrap gap-10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-3xl font-bold text-white">{stat.value}</dt>
                <dd className="mt-1 text-sm text-zinc-500">
                  {stat.label} · {stat.suffix}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-600 transition-colors hover:text-zinc-300"
        aria-label="아래로 스크롤"
      >
        <svg
          className="h-6 w-6 animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </a>
    </section>
  );
}
