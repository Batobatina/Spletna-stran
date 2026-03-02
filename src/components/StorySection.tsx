import { Users, Heart, Leaf, Award } from "lucide-react";

const StorySection = () => {
  return (
    <section id="nasa-zgodba" className="bg-card py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <div>
          <p className="mb-2 text-xs font-semibold text-uppercase-spaced text-muted-foreground">
            Naša zgodba
          </p>
          <h2 className="mb-6 font-display text-3xl font-bold text-foreground md:text-4xl">
            Naravnost iz panja
          </h2>
          <p className="mb-4 text-base leading-relaxed text-muted-foreground">
            Smo skupina štirih prijateljev, ki nas že od nekdaj povezuje ljubezen do narave
            in spoštovanje do čebel. Skupaj smo združili moči in ustvarili nekaj posebnega —
            podjetje, ki v vsak kozarec medu in vsako svečo vlije iskreno predanost ter
            skrb za okolje.
          </p>
          <p className="mb-8 text-base leading-relaxed text-muted-foreground">
            Zavedamo se, kaj pomeni zaupanje strank, zato pri kakovosti ni prostora za
            kompromise. V naših izdelkih združujemo skrbno pridelavo in natančno predelavo
            najboljših sestavin iz narave in jih s ponosom dostavimo na vašo mizo.
          </p>
          <a
            href="#lokacija"
            className="inline-block border-2 border-foreground px-6 py-3 text-xs font-bold text-uppercase-spaced text-foreground transition-all hover:bg-accent hover:text-accent-foreground"
          >
            Več o nas
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: Users, label: "Skupnost" },
            { icon: Heart, label: "Strast" },
            { icon: Leaf, label: "Narava" },
            { icon: Award, label: "Kakovost" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center gap-3 border border-border bg-secondary p-8"
            >
              <Icon size={28} className="text-foreground" />
              <span className="text-sm font-semibold text-uppercase-spaced text-foreground">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StorySection;
