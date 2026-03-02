import { Users, Heart, Leaf, Award } from "lucide-react";

const values = [
  { icon: Users, label: "Skupnost" },
  { icon: Heart, label: "Strast" },
  { icon: Leaf, label: "Narava" },
  { icon: Award, label: "Kakovost" },
];

const StorySection = () => {
  return (
    <section id="naša-zgodba" className="bg-secondary py-16">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="mb-8 font-display text-3xl font-bold text-foreground md:text-4xl">
          Naša zgodba
        </h2>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Smo skupina štirih prijateljev, ki nas že od nekdaj povezuje ljubezen do narave
          in spoštovanje do čebel. Skupaj smo združili moči in ustvarili nekaj posebnega —
          podjetje, ki v vsak kozarec medu in vsako svečo vlije iskreno predanost ter
          skrb za okolje. Naša pot se je začela kot skupna strast, danes pa je to zgodba,
          ki jo z veseljem delimo z vami.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          {values.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary">
                <Icon size={24} className="text-primary-foreground" />
              </div>
              <span className="font-semibold text-foreground">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StorySection;
