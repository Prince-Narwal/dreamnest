"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { navLinks } from "@/lib/site-config";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const solid = scrolled || open;
  const link = "text-sm uppercase tracking-[0.08em] transition-colors hover:text-gold";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-navy text-warm shadow-lg" : "bg-transparent text-warm"
      }`}
    >
      <nav aria-label="Primary" className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
        <a href="#home" aria-label="DreamNest home"><Logo /></a>
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}><a href={l.href} className={link}>{l.label}</a></li>
          ))}
          <li>
            <a href="#contact" className="border border-gold px-6 py-3 text-sm uppercase tracking-[0.08em] transition-colors hover:bg-gold hover:text-navy">
              Get in Touch
            </a>
          </li>
        </ul>
        <button
          type="button"
          className="p-2 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>
      {open && (
        <ul id="mobile-menu" className="flex flex-col gap-1 border-t border-white/15 px-5 pb-6 pt-2 lg:hidden">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className={`${link} block py-3`}>{l.label}</a>
            </li>
          ))}
          <li className="pt-2">
            <a href="#contact" onClick={() => setOpen(false)} className="block bg-leaf px-6 py-3 text-center text-sm uppercase tracking-[0.08em] text-white">
              Get in Touch
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
