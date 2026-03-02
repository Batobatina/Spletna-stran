import { Leaf, Heart, Truck, ShieldCheck } from "lucide-react";

const reasons = [
  {
    icon: Leaf,
    title: "100 % naravno",
    desc: "Naši izdelki vsebujejo sestavine izključno naravnega porekla. Preprosto, pristno in vrhunskega okusa.",
  },
  {
    icon: Heart,
    title: "Izdelano s srcem",
    desc: "Vsak izdelek je rezultat predanosti in ljubezni do čebelarstva, ki jo gojimo že leta.",
  },
  {
    icon: Truck,
    title: "Hitra dostava",
    desc: "Naročila oddamo hitro, da vaš med in sveče čim prej prispejo na vašo mizo.",
  },
  {
    icon: ShieldCheck,
    title: "Vrhunska kakovost",
    desc: "Doma pridelani čebelji proizvodi s certificirano kakovostjo in polnim okusom.",
  },
];

const WhyUsSection = () => {
  return (
    <section className="border-y border-border bg-secondary py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-2 text-center text-xs font-semibold text-uppercase-spaced text-muted-foreground">
          Prepričajte se
        </p>
        <h2 className="mb-16 text-center font-display text-3xl font-bold text-foreground md:text-4xl">
          Zakaj izbrati nas?
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-card border border-border">
                <Icon size={26} className="text-foreground" />
              </div>
              <h3 className="mb-2 font-display text-base font-semibold text-foreground">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
