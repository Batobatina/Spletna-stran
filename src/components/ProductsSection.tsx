import cvetlicniMed from "@/assets/cvetlicnimed.png";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
}

const ProductCard = ({ image, title, description, price }: ProductCardProps) => (
  <div className="group bg-card">
    <div className="mb-4 aspect-square overflow-hidden bg-secondary">
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <h3 className="font-display text-lg font-semibold text-foreground">{title}</h3>
    <p className="mt-1 text-sm text-muted-foreground">{description}</p>
    <div className="mt-3 flex items-center justify-between">
      <span className="text-base font-bold text-foreground">{price}</span>
      <button className="border border-foreground px-4 py-2 text-xs font-semibold text-uppercase-spaced text-foreground transition-all hover:bg-accent hover:text-accent-foreground">
        V košarico
      </button>
    </div>
  </div>
);

const products = [
  {
    image: cvetlicniMed,
    title: "Cvetlični med",
    description: "Nabran na okoliških travnikih, polnih zdravilnih rastlin.",
    price: "9,00 €",
  },
  {
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=600&q=80",
    title: "Gozdni med",
    description: "Temen, bogat z minerali in aromatičnega okusa.",
    price: "11,00 €",
  },
  {
    image: "https://images.unsplash.com/photo-1602833280958-1657662ccc58?auto=format&fit=crop&w=600&q=80",
    title: "Voskane sveče",
    description: "Ročno zvite sveče iz 100% naravnega čebeljega voska.",
    price: "3,50 €",
  },
];

const ProductsSection = () => {
  return (
    <section id="trgovina" className="bg-card py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-2 text-center text-xs font-semibold text-uppercase-spaced text-muted-foreground">
          Priporočamo
        </p>
        <h2 className="mb-12 text-center font-display text-3xl font-bold text-foreground md:text-4xl">
          Iz naše trgovine
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
