const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-3 font-display text-lg font-bold text-foreground">🐝 Med & Sveče Zagorje</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Domači med in ročno izdelane sveče iz čebeljega voska. Naravno, lokalno, kakovostno.
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-xs font-semibold text-uppercase-spaced text-foreground">Navigacija</h4>
            <nav className="flex flex-col gap-2">
              {["Domov", "Trgovina", "Blog", "Naša zgodba", "Lokacija"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s/g, "-").replace("š", "s")}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
          <div>
            <h4 className="mb-3 text-xs font-semibold text-uppercase-spaced text-foreground">Kontakt</h4>
            <p className="text-sm text-muted-foreground">info@med-zagorje.si</p>
            <p className="mt-1 text-sm text-muted-foreground">+386 40 123 456</p>
            <p className="mt-1 text-sm text-muted-foreground">Zagorje ob Savi, Slovenija</p>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © 2026 Čebelarstvo Zagorje. Vse pravice pridržane.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
