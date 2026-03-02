import Layout from "@/components/Layout";
import { Users, Heart, Leaf, Award } from "lucide-react";
import heroImg from "@/assets/hero-candles.jpg";

const values = [
  { icon: Users, label: "Skupnost", desc: "Smo ekipa, ki dela skupaj — v panju in zunaj njega." },
  { icon: Heart, label: "Strast", desc: "Čebelarstvo ni le poklic, temveč način življenja." },
  { icon: Leaf, label: "Narava", desc: "Spoštujemo okolje in delamo v sožitju z naravo." },
  { icon: Award, label: "Kakovost", desc: "Kompromisov pri kakovosti ne poznamo." },
];

const NasaZgodba = () => {
  return (
    <Layout>
      {/* Page header */}
      <section className="border-b border-border bg-secondary py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="mb-2 text-xs font-semibold text-uppercase-spaced text-muted-foreground">
            O nas
          </p>
          <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            Naša zgodba
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="bg-card py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
          <div>
            <p className="mb-2 text-xs font-semibold text-uppercase-spaced text-muted-foreground">
              Naravnost iz panja
            </p>
            <h2 className="mb-6 font-display text-3xl font-bold text-foreground">
              Štirje prijatelji, ena strast
            </h2>
            <p className="mb-4 text-base leading-relaxed text-muted-foreground">
              Smo skupina štirih prijateljev, ki nas že od nekdaj povezuje ljubezen do narave
              in spoštovanje do čebel. Skupaj smo združili moči in ustvarili nekaj posebnega —
              podjetje, ki v vsak kozarec medu in vsako svečo vlije iskreno predanost ter
              skrb za okolje.
            </p>
            <p className="mb-4 text-base leading-relaxed text-muted-foreground">
              Naša pot se je začela kot skupna strast — dolgi pogovori ob sončnih zahodih,
              prvi poskusi z lastnim panjem in navdušenje ob prvem točenju. Danes je to zgodba,
              ki jo z veseljem delimo z vami in z vsako stranko, ki ji predamo kozarec medu.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Zavedamo se, kaj pomeni zaupanje strank, zato pri kakovosti ni prostora za
              kompromise. V naših izdelkih združujemo skrbno pridelavo in natančno predelavo
              najboljših sestavin iz narave in jih s ponosom dostavimo na vašo mizo.
            </p>
          </div>
          <div className="overflow-hidden">
            <img
              src={heroImg}
              alt="Naše sveče"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-border bg-secondary py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-16 text-center font-display text-3xl font-bold text-foreground">
            Naše vrednote
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-border bg-card">
                  <Icon size={26} className="text-foreground" />
                </div>
                <h3 className="mb-2 font-display text-base font-semibold text-foreground">{label}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="bg-card py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-2 text-center text-xs font-semibold text-uppercase-spaced text-muted-foreground">
            Obiščite nas
          </p>
          <h2 className="mb-4 text-center font-display text-3xl font-bold text-foreground">
            Kje nas najdete?
          </h2>
          <p className="mb-10 text-center text-sm text-muted-foreground">
            Nahajamo se na Srednji šoli Zagorje.
          </p>
          <div className="mx-auto max-w-4xl overflow-hidden border border-border">
            <iframe
              src="https://www.google.com/maps?q=46.133237025751356,14.995906848426664&hl=sl&z=17&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Lokacija"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NasaZgodba;
