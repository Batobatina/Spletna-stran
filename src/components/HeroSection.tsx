import heroImg from "@/assets/hero-candles.jpg";

const HeroSection = () => {
  return (
    <section id="domov" className="relative bg-secondary">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 py-12 md:grid-cols-2 md:py-0">
        <div className="relative z-10 py-12 md:py-24">
          <p className="mb-3 text-xs font-semibold text-uppercase-spaced text-muted-foreground">
            Čebelarstvo Zagorje
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            Zlati darovi narave
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
            Domači med in ročno izdelane sveče iz osrčja Zagorja. Naravno, pristno in z ljubeznijo pripravljeno.
          </p>
          <a
            href="#trgovina"
            className="mt-8 inline-block rounded-none border-2 border-foreground bg-accent px-8 py-3 text-sm font-bold text-uppercase-spaced text-accent-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:border-primary"
          >
            Preveri ponudbo
          </a>
        </div>
        <div className="relative h-72 md:h-[500px]">
          <img
            src={heroImg}
            alt="Sveče iz čebeljega voska"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
