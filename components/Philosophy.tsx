import Photo from "./Photo";

export default function Philosophy() {
  return (
    <section id="vision" className="relative flex min-h-[80svh] items-center justify-center overflow-hidden px-5 py-28 text-center text-warm md:px-10">
      {/* Replace with a real photo: src="/images/philosophy.jpg" */}
      <Photo alt="Misty landscape at dawn" tone="from-[#4f6b57] via-[#c9b48a] to-[#2d4a62]" className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 bg-navy/70" aria-hidden="true" />
      <div className="relative max-w-3xl">
        <p className="mb-5 text-xs uppercase tracking-[0.28em] text-gold">Our Philosophy</p>
        <h2 className="font-serif text-5xl font-medium italic leading-tight md:text-7xl">Every Space Has a Story.</h2>
        <p className="mt-7 text-lg text-warm/90 md:text-xl">
          The right place is never only walls and land. It is where mornings begin, where people gather, and where aspirations quietly take root. We help you find the space that becomes part of your story.
        </p>
      </div>
    </section>
  );
}
