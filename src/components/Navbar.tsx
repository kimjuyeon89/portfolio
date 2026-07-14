import { useState } from "react";
import { profile } from "../data/portfolio";

const links = [{ href: "#home", label: "HOME" }, { href: "#projects", label: "WORK" }, { href: "#career", label: "EXPERIENCE" }, { href: "#about", label: "ABOUT" }, { href: "#contact", label: "CONTACT" }];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="fixed inset-x-0 top-0 z-40 border-b border-[var(--line)] bg-white/90 backdrop-blur"><nav aria-label="주요 메뉴" className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8"><a href="#home" className="text-sm font-extrabold">{profile.name} <span className="font-medium text-[var(--muted)]">· Publisher</span></a><ul className="hidden items-center gap-8 md:flex">{links.map(link => <li key={link.href}><a href={link.href} className="text-xs font-bold tracking-[.12em] text-[var(--muted)] hover:text-[var(--ink)]">{link.label}</a></li>)}</ul><button type="button" aria-label={open ? "메뉴 닫기" : "메뉴 열기"} aria-expanded={open} className="rounded-md border border-[var(--line)] px-3 py-2 text-sm font-bold md:hidden" onClick={() => setOpen(v => !v)}>메뉴</button></nav>{open && <div className="border-t border-[var(--line)] bg-white px-5 py-2 md:hidden">{links.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="block py-3 text-sm font-bold">{link.label}</a>)}</div>}</header>;
}
