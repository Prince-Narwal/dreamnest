import { properties } from "@/data/properties";
import Photo from "./Photo";

export default function FeaturedProperties() {
  return (
    <section id="properties" className="bg-white px-5 py-24 md:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-xs uppercase tracking-[0.28em] text-leaf">Featured Properties</p>
        <h2 className="font-serif text-4xl font-medium leading-tight text-navy md:text-6xl">Spaces Worth Discovering.</h2>
        <p className="mb-14 mt-5 max-w-xl text-sm text-ink/70">
          Placeholder entries for design review only. Replace with real DreamNest properties before publishing.
        </p>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((p) => (
            <article key={p.id} className="group flex flex-col">
              <div className="overflow-hidden">
                <Photo src={p.image} alt={p.imageAlt} tone={p.tone} className="aspect-[4/5] w-full transition-transform duration-700 group-hover:scale-105" sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" />
              </div>
              <p className="mt-5 text-xs uppercase tracking-[0.2em] text-leaf">{p.category}</p>
              <h3 className="font-serif text-3xl font-medium text-navy">{p.name}</h3>
              <p className="mb-2 text-sm text-ink/70">{p.location}</p>
              <p className="mb-5">{p.description}</p>
              <a href="#contact" className="self-start border-b border-gold pb-1 font-medium text-navy transition-colors hover:text-leaf">Enquire</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
