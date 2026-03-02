const testimonials = [
  {
    text: "Izredno zadovoljna s produkti in dostavo. Med je fantastičen, sveče pa dišijo prečudovito. Se vidi, da je vse izdelano s srcem!",
    author: "Maja K.",
  },
  {
    text: "Že tretje leto naročam pri njih in sem vsakič znova navdušena. Kakovost je vedno na najvišji ravni, komunikacija pa izjemno prijazna.",
    author: "Ana P.",
  },
  {
    text: "Najboljši med, kar sem ga kdaj poskusil. Gozdni med ima res poseben okus. Toplo priporočam vsem ljubiteljem naravnih dobrot!",
    author: "Marko S.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-card py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-2 text-center text-xs font-semibold text-uppercase-spaced text-muted-foreground">
          Zaupajo nam
        </p>
        <h2 className="mb-12 text-center font-display text-3xl font-bold text-foreground md:text-4xl">
          Mnenja naših strank
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map(({ text, author }) => (
            <blockquote key={author} className="border border-border p-8">
              <p className="mb-6 text-sm italic leading-relaxed text-muted-foreground">
                "{text}"
              </p>
              <footer className="text-sm font-semibold text-foreground">— {author}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
