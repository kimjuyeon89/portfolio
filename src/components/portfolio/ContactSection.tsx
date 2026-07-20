import { profile } from "../../data/portfolio";

export default function ContactSection() {
  return (
    <section id="new-contact" className="relative px-5 py-28 text-center sm:px-10 sm:py-40">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 shadow-[0_0_100px_rgba(200,255,50,.08)] sm:h-[32rem] sm:w-[32rem]" aria-hidden="true" />
      <p className="relative z-10 text-xs font-bold tracking-[.2em] text-white/40">LET&apos;S BUILD SOMETHING MEANINGFUL</p>
      <h2 className="relative z-10 mx-auto mt-6 max-w-5xl text-[clamp(3.4rem,9vw,8rem)] font-black leading-[.9] tracking-[-.065em]">
        <span className="new-contact-line block"><span className="new-contact-outline">READY TO</span><span data-contact-fill className="new-contact-fill" aria-hidden="true">READY TO</span></span>
        <span className="new-contact-line block"><span className="new-contact-outline">WORK TOGETHER?</span><span data-contact-fill className="new-contact-fill new-contact-fill-accent" aria-hidden="true">WORK TOGETHER?</span></span>
      </h2>
      <div className="relative z-10 mt-12 flex flex-wrap justify-center gap-3">
        <a data-magnetic href={`mailto:${profile.email}`} className="relative rounded-full bg-white px-7 py-4 font-black text-black transition-colors hover:bg-[#c8ff32]">{profile.email}</a>
        <a data-magnetic href={profile.resumeUrl} download className="relative rounded-full border border-white/30 px-7 py-4 font-black transition-colors hover:bg-white hover:text-black">경력기술서 다운로드</a>
      </div>
    </section>
  );
}
