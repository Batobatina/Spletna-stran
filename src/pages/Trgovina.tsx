import Layout from "@/components/Layout";
import cvetlicniMed from "@/assets/cvetlicnimed.png";

const products = [
  {
    image: cvetlicniMed,
    title: "Cvetlični med",
    description: "Nabran na okoliških travnikih, polnih zdravilnih rastlin.",
    price: "9,00 €",
    weight: "450 g",
  },
  {
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=600&q=80",
    title: "Gozdni med",
    description: "Temen, bogat z minerali in aromatičnega okusa.",
    price: "11,00 €",
    weight: "450 g",
  },
  {
    image: "https://images.unsplash.com/photo-1602833280958-1657662ccc58?auto=format&fit=crop&w=600&q=80",
    title: "Voskane sveče",
    description: "Ročno zvite sveče iz 100% naravnega čebeljega voska.",
    price: "3,50 €",
    weight: "1 kos",
  },
  {
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80",
    title: "Lipov med",
    description: "Nežen, svetel med z značilnim cvetličnim okusom lipe.",
    price: "10,00 €",
    weight: "450 g",
  },
  {
    image: "https://images.unsplash.com/photo-1471943311424-646960669fbc?auto=format&fit=crop&w=600&q=80",
    title: "Cvetni prah",
    description: "Bogat vir beljakovin, vitaminov in mineralov za vsak dan.",
    price: "8,00 €",
    weight: "250 g",
  },
  {
    image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=600&q=80",
    title: "Propolis kapljice",
    description: "Naravna pomoč za imunski sistem v praktični obliki.",
    price: "12,00 €",
    weight: "30 ml",
  },
];

const Trgovina = () => {
  return (
    <Layout>
      {/* Page header */}
      <section className="border-b border-border bg-secondary py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="mb-2 text-xs font-semibold text-uppercase-spaced text-muted-foreground">
            Naši izdelki
          </p>
          <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            Trgovina
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-base text-muted-foreground">
            Izberite med naravnimi čebeljimi izdelki — vsak pridelан z ljubeznijo in skrbjo.
          </p>
        </div>
      </section>

      {/* Products grid */}
      <section className="bg-card py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <div key={p.title} className="group">
                <div className="mb-4 aspect-square overflow-hidden bg-secondary">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">{p.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.description}</p>
                    <span className="mt-1 block text-xs text-muted-foreground">{p.weight}</span>
                  </div>
                  <span className="whitespace-nowrap pt-1 text-base font-bold text-foreground">{p.price}</span>
                </div>
                <button className="mt-3 w-full border border-foreground py-2.5 text-xs font-semibold text-uppercase-spaced text-foreground transition-all hover:bg-accent hover:text-accent-foreground">
                  V košarico
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Trgovina;
