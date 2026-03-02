import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#domov" className="font-display text-xl font-bold text-primary-foreground">
          🐝 Med & Sveče Zagorje
        </a>

        {/* Desktop nav */}
        <nav className="hidden gap-6 md:flex">
          {["Domov", "Ponudba", "Naša zgodba", "Lokacija"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
              className="font-semibold text-primary-foreground/80 transition-colors hover:text-primary-foreground"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button className="text-primary-foreground md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-3 bg-primary px-6 pb-4 md:hidden">
          {["Domov", "Ponudba", "Naša zgodba", "Lokacija"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
              onClick={() => setOpen(false)}
              className="font-semibold text-primary-foreground/80 transition-colors hover:text-primary-foreground"
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
