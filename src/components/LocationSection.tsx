const LocationSection = () => {
  return (
    <section id="lokacija" className="border-t border-border bg-secondary py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-2 text-center text-xs font-semibold text-uppercase-spaced text-muted-foreground">
          Obiščite nas
        </p>
        <h2 className="mb-4 text-center font-display text-3xl font-bold text-foreground md:text-4xl">
          Kje nas najdete?
        </h2>
        <p className="mb-10 text-center text-sm text-muted-foreground">
          Nahajamo se na Srednji šoli Zagorje.
        </p>
        <div className="mx-auto max-w-4xl overflow-hidden border border-border">
          <iframe
            src="https://www.google.com/maps?q=46.133237025751356,14.995906848426664&hl=sl&z=17&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Lokacija"
          />
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
