import { MapPin, Award, TreePine } from "lucide-react";

const points = [
  {
    num: "01",
    icon: Award,
    title: "Garancija porekla",
    desc: "Pridelujemo med z zaščiteno kakovostjo, ki jo prepoznate po naši edinstveni embalaži.",
  },
  {
    num: "02",
    icon: MapPin,
    title: "Lokalna pridelava",
    desc: "Vse izdelke pridelujemo in predelujemo na območju Zagorja ob Savi.",
  },
  {
    num: "03",
    icon: TreePine,
    title: "Naravno okolje",
    desc: "Naše čebele nabirajo nektar v neokrnjenem okolju zagorskih gozdov in travnikov.",
  },
];

const QualitySection = () => {
  return (
    <section className="border-b border-border bg-card py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-2 text-center text-xs font-semibold text-uppercase-spaced text-muted-foreground">
          Privoščite si
        </p>
        <h2 className="mb-16 text-center font-display text-3xl font-bold text-foreground md:text-4xl">
          Slovenski med višje kakovosti
        </h2>
        <div className="grid gap-12 md:grid-cols-3">
          {points.map(({ num, icon: Icon, title, desc }) => (
            <div key={num} className="text-center">
              <span className="mb-4 block font-display text-4xl font-light text-muted-foreground/30">
                {num}
              </span>
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-border">
                <Icon size={22} className="text-foreground" />
              </div>
              <h3 className="mb-2 font-display text-lg font-semibold text-foreground">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
