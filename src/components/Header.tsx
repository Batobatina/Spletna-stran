import { useState } from "react";
import { Menu, X, ShoppingCart, Search } from "lucide-react";

const navItems = ["Domov", "Trgovina", "Blog", "Naša zgodba"];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#domov" className="font-display text-xl font-bold text-foreground">
          🐝 Med & Sveče Zagorje
        </a>

        <nav className="hidden gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s/g, "-").replace("š", "s")}`}
              className="text-sm font-semibold text-uppercase-spaced text-muted-foreground transition-colors hover:text-foreground"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="text-muted-foreground transition-colors hover:text-foreground">
            <Search size={20} />
          </button>
          <button className="relative text-muted-foreground transition-colors hover:text-foreground">
            <ShoppingCart size={20} />
            <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
              0
            </span>
          </button>
          <button className="text-muted-foreground md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-3 border-t border-border bg-card px-6 py-4 md:hidden">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s/g, "-").replace("š", "s")}`}
              onClick={() => setOpen(false)}
              className="text-sm font-semibold text-uppercase-spaced text-muted-foreground transition-colors hover:text-foreground"
            >
              {item}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
