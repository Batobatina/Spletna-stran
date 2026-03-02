import heroImg from "@/assets/hero-candles.jpg";

const HeroSection = () => {
  return (
    <section
      id="domov"
      className="relative flex min-h-[60vh] items-center justify-center overflow-hidden"
    >
      <img
        src={heroImg}
        alt="Sveče iz čebeljega voska"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-background/50" />
      <div className="relative z-10 px-6 text-center animate-fade-in-up">
        <h1 className="font-display text-4xl font-bold text-foreground md:text-6xl">
          Zlati darovi narave
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-lg text-muted-foreground">
          Domači med in ročno izdelane sveče iz osrčja Zagorja.
        </p>
        <a
          href="#ponudba"
          className="mt-6 inline-block rounded-full bg-accent px-8 py-3 font-bold text-accent-foreground transition-transform hover:scale-105"
        >
          Preveri ponudbo
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
