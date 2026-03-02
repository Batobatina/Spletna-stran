import cvetlicniMed from "@/assets/cvetlicnimed.png";
import ProductCard from "./ProductCard";

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
    <section id="ponudba" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="mb-12 text-center font-display text-3xl font-bold text-foreground md:text-4xl">
        Naša sladka ponudba
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
