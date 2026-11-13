import { ArrowDown } from "lucide-react";
import Photo from "./Photo";

// Set `src` to a real photo, e.g. "/images/hero.jpg" (landscape, ~2400px wide).
const heroImage = { src: undefined as string | undefined, alt: "Luxury farmhouse at golden hour" };

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-end overflow-hidden text-warm">
      <Photo src={heroImage.src} alt={heroImage.alt} priority tone="from-[#3a5a4a] via-[#9aa57e] to-[#2d4a62]" className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-black/25 to-black/70" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-40 md:px-10 md:pb-28">
        <p className="rise mb-5 text-xs uppercase tracking-[0.28em] text-gold">Premium Real Estate</p>
        <h1 className="rise rise-2 max-w-4xl font-serif text-5xl font-medium leading-[1.03] sm:text-7xl lg:text-8xl">
          Find Your Place in the World.
        </h1>
        <p className="rise rise-3 mt-6 max-w-xl text-lg text-warm/90 md:text-xl">
          Discover spaces that inspire your lifestyle, reflect your aspirations, and feel like home.
        </p>
        <div className="rise rise-3 mt-10 flex flex-wrap gap-4">
          <a href="#properties" className="bg-leaf px-8 py-4 text-sm font-medium tracking-wide text-white transition-colors hover:bg-[#1c6e2b]">Explore DreamNest</a>
          <a href="#contact" className="border border-warm px-8 py-4 text-sm font-medium tracking-wide transition-colors hover:bg-warm hover:text-navy">Get in Touch</a>
        </div>
        <a href="#about" aria-label="Scroll to About" className="mt-14 inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-warm/80 hover:text-gold">
          Scroll <ArrowDown size={14} />
        </a>
      </div>
    </section>
  );
}
