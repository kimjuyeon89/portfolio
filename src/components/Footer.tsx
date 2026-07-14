import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-2 text-sm text-[var(--muted)] sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. Portfolio for Web Publisher.
        </p>
        <p>React · TypeScript · Tailwind · GSAP</p>
      </div>
    </footer>
  );
}
