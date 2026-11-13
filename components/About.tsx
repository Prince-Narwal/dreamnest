import Photo from "./Photo";

export default function About() {
  return (
    <section id="about" className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 md:px-10 lg:grid-cols-2 lg:gap-20 lg:py-32">
      <div>
        <p className="mb-4 text-xs uppercase tracking-[0.28em] text-leaf">About DreamNest</p>
        <h2 className="font-serif text-4xl font-medium leading-tight text-navy md:text-6xl">More Than a Property. A Place to Belong.</h2>
        <p className="mt-7 text-lg">DreamNest is built around a simple belief: the right space should reflect who you are and who you hope to become.</p>
        <p className="mt-5 text-lg">We aim to help people discover properties that align with their lifestyle and aspirations, with care, clarity and respect for the natural settings that make a place feel like home.</p>
        <a href="#vision" className="mt-8 inline-block border-b border-navy pb-1 font-medium text-navy transition-colors hover:border-gold hover:text-leaf">Our vision →</a>
      </div>
      {/* Replace with a real photo: src="/images/about.jpg" */}
      <Photo alt="Architectural detail of stone and timber" tone="from-[#9db08a] via-[#d8c9a3] to-[#5f7a68]" className="aspect-[4/5] w-full" sizes="(min-width:1024px) 50vw, 100vw" />
    </section>
  );
}
