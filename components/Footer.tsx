import Logo from "./Logo";
import { navLinks, siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="bg-warm px-5 pb-8 pt-16 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-10">
        <div className="max-w-sm text-navy">
          <Logo />
          <p className="mt-3 text-sm text-ink/70">Discover spaces that inspire your lifestyle, reflect your aspirations, and feel like home.</p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-6 text-sm text-navy">
            {navLinks.map((l) => (<li key={l.href}><a className="hover:text-leaf" href={l.href}>{l.label}</a></li>))}
          </ul>
        </nav>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-wrap justify-between gap-3 border-t border-ink/15 pt-6 text-sm text-ink/70">
        <span>&copy; {new Date().getFullYear()} DreamNest. All rights reserved.</span>
        <span className="flex flex-wrap gap-4">
          {siteConfig.privacyPolicyHref ? <a className="hover:text-leaf" href={siteConfig.privacyPolicyHref}>Privacy Policy</a> : <span>Privacy Policy (coming soon)</span>}
          {siteConfig.social.map((s) => (<a key={s.href} className="hover:text-leaf" href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a>))}
        </span>
      </div>
    </footer>
  );
}
