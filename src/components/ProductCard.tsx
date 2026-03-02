interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
}

const ProductCard = ({ image, title, description, price }: ProductCardProps) => {
  return (
    <div className="group overflow-hidden rounded-lg border-2 border-secondary bg-card p-4 text-center transition-shadow hover:shadow-lg">
      <div className="mb-4 h-72 overflow-hidden rounded-md">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-400 group-hover:scale-105"
        />
      </div>
      <h3 className="font-display text-xl font-semibold text-card-foreground">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      <span className="mt-3 inline-block text-lg font-bold text-accent">{price}</span>
    </div>
  );
};

export default ProductCard;
