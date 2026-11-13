const values = [
  { title: "Thoughtful Discovery", text: "A considered approach to finding spaces that suit how you want to live." },
  { title: "Trust and Transparency", text: "Clear, honest communication at every step of the journey." },
  { title: "Attention to Detail", text: "A focus on quality, craft and the finer points that make a place feel right." },
  { title: "Spaces for Every Aspiration", text: "From quiet retreats to family estates, a place for many ways of living." },
];

export default function WhyDreamNest() {
  return (
    <section id="why" className="mx-auto max-w-7xl px-5 py-24 md:px-10 lg:py-32">
      <p className="mb-4 text-xs uppercase tracking-[0.28em] text-leaf">Why DreamNest</p>
      <h2 className="mb-16 max-w-2xl font-serif text-4xl font-medium leading-tight text-navy md:text-6xl">Guided by what matters.</h2>
      <ol className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((v, i) => (
          <li key={v.title} className="border-t border-gold pt-6">
            <span className="font-serif text-sm text-navy">0{i + 1}</span>
            <h3 className="mb-3 mt-2 font-serif text-2xl font-semibold text-navy">{v.title}</h3>
            <p className="text-[0.95rem]">{v.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
