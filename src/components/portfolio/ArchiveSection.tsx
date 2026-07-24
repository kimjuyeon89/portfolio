import { privacyNote, selectedProjects } from "../../data/portfolio";

export default function ArchiveSection() {
  return (
    <section id="new-archive" className="px-5 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-[1440px]">
        <p className="mb-2 text-xs font-bold tracking-[.18em] text-[#c8ff32]">PROFESSIONAL PROJECT ARCHIVE</p>
        <h2 className="mb-8 text-3xl font-black sm:text-5xl">추가 실무 프로젝트</h2>
        {selectedProjects.map((project, index) => (
          <div
            data-archive-row
            key={project.title}
            className="group relative isolate grid gap-3 overflow-hidden border-t border-white/15 py-7 transition-colors duration-500 ease-out hover:text-[#c8ff32] sm:grid-cols-[70px_1fr_180px_160px] sm:items-center"
          >
            <span className="absolute inset-0 -z-10 origin-left scale-x-0 bg-gradient-to-r from-[#c8ff32]/10 via-[#c8ff32]/[.04] to-transparent transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-x-100" aria-hidden="true" />
            <span className="font-mono text-xs text-white/35 transition-transform duration-500 group-hover:translate-x-3">{String(index + 6).padStart(2, "0")}</span>
            <h3 className="text-xl font-bold transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-4 sm:text-3xl">{project.title}</h3>
            <span className="text-sm text-white/50 transition duration-500 group-hover:translate-x-2 group-hover:text-white/75">{project.field}</span>
            <span className="text-sm text-white/50 transition duration-500 group-hover:-translate-x-2 group-hover:text-[#c8ff32]/80 sm:text-right">{project.period}</span>
          </div>
        ))}
        <p className="border-t border-white/15 pt-6 text-sm text-white/35">{privacyNote}</p>
        <div className="mt-20 border-t border-white/15 pt-10">
          <p className="text-xs font-bold tracking-[.18em] text-[#c8ff32]">PERSONAL PROJECT</p>
          <div className="mt-5 grid gap-5 rounded-3xl border border-white/15 bg-white/[.04] p-7 sm:grid-cols-[1fr_auto] sm:items-end">
            <div><h3 className="text-2xl font-black">웹 퍼블리셔 포트폴리오</h3><p className="mt-3 max-w-2xl leading-7 text-white/55">React와 TypeScript로 직접 설계·구현한 개인 프로젝트입니다. 반응형 레이아웃, 컴포넌트 구조화, 모션 및 접근성 있는 인터랙션을 적용했습니다.</p></div>
            <div className="flex flex-wrap gap-2 text-xs font-bold"><span className="rounded-full border border-white/20 px-3 py-2">React</span><span className="rounded-full border border-white/20 px-3 py-2">TypeScript</span><span className="rounded-full border border-white/20 px-3 py-2">GSAP</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
