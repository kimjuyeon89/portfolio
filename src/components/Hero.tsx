import { keywords, profile, stats } from "../data/portfolio";

export default function Hero() {
  return (
    <section id="home" className="border-b border-[var(--line)] bg-white px-5 pb-20 pt-36 sm:px-8 sm:pb-24 sm:pt-44">
      <div className="mx-auto max-w-7xl">
        <p className="mb-6 text-sm font-bold tracking-[0.16em] text-[var(--accent)]">WEB PUBLISHER · KIM JUYEON</p>
        <h1 className="max-w-6xl text-[clamp(2.25rem,4.6vw,4.5rem)] font-extrabold leading-[1.16] tracking-[-0.04em] text-[var(--ink)]">
          <span className="block">보이는 화면부터</span>
          <span className="mt-1 block">보이지 않는 구조까지 설계합니다.</span>
        </h1>
        <p className="mt-8 max-w-3xl break-keep text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">공통 구조와 컴포넌트를 설계하고, 반응형·접근성·유지보수까지 고려해 안정적인 화면을 구현합니다.</p>
        <div className="mt-8 flex flex-wrap gap-2" aria-label="핵심 기술">{keywords.map(item => <span key={item} className="rounded-full border border-[var(--line)] bg-[var(--bg)] px-4 py-2 text-sm font-semibold">{item}</span>)}</div>
        <div className="mt-10 flex flex-wrap gap-3"><a href="#projects" className="rounded-lg bg-[var(--accent)] px-6 py-3.5 text-sm font-bold text-white hover:bg-[var(--accent-dark)]">프로젝트 보기</a><a href={profile.resumeUrl} download className="rounded-lg border border-[var(--line-strong)] bg-white px-6 py-3.5 text-sm font-bold hover:bg-[var(--bg)]">경력기술서 다운로드</a></div>
        <dl className="mt-16 grid border-y border-[var(--line)] sm:grid-cols-3">{stats.map(stat => <div key={stat.label} className="border-b border-[var(--line)] py-6 last:border-0 sm:border-b-0 sm:border-r sm:px-7 sm:first:pl-0 sm:last:border-0"><dt className="text-sm text-[var(--muted)]">{stat.label}</dt><dd className="mt-1 text-2xl font-extrabold">{stat.value} <span className="text-sm font-medium text-[var(--muted)]">{stat.suffix}</span></dd></div>)}</dl>
      </div>
    </section>
  );
}
