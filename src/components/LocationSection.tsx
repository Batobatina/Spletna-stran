const LocationSection = () => {
  return (
    <section id="lokacija" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="mb-4 text-center font-display text-3xl font-bold text-foreground md:text-4xl">
        Kje nas najdete?
      </h2>
      <p className="mb-8 text-center text-muted-foreground">
        Nahajamo se na Srednji šoli Zagorje.
      </p>
      <div className="mx-auto max-w-4xl overflow-hidden rounded-lg border-4 border-primary">
        <iframe
          src="https://www.google.com/maps?q=46.133237025751356,14.995906848426664&hl=sl&z=17&output=embed"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Lokacija"
        />
      </div>
    </section>
  );
};

export default LocationSection;
