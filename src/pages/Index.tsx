import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-candles.jpg";
import cvetlicniMed from "@/assets/cvetlicnimed.png";
import Layout from "@/components/Layout";
import QualitySection from "@/components/QualitySection";
import WhyUsSection from "@/components/WhyUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { ArrowRight } from "lucide-react";

const featuredProducts = [
  {
    image: cvetlicniMed,
    title: "Cvetlični med",
    price: "9,00 €",
  },
  {
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=600&q=80",
    title: "Gozdni med",
    price: "11,00 €",
  },
  {
    image: "https://images.unsplash.com/photo-1602833280958-1657662ccc58?auto=format&fit=crop&w=600&q=80",
    title: "Voskane sveče",
    price: "3,50 €",
  },
];

const latestBlogs = [
  {
    date: "15. 02. 2026",
    title: "Kako prepoznati pravi slovenski med?",
    excerpt: "Na trgu najdemo veliko medu, a kako ločiti pristnega od ponaredkov?",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80",
  },
  {
    date: "28. 01. 2026",
    title: "Čebelji vosek — od panja do sveče",
    excerpt: "Ročna izdelava sveč iz čebeljega voska je umetnost, ki zahteva potrpežljivost.",
    image: "https://images.unsplash.com/photo-1602833280958-1657662ccc58?auto=format&fit=crop&w=600&q=80",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-secondary">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 py-12 md:grid-cols-2 md:py-0">
          <div className="relative z-10 py-12 md:py-24">
            <p className="mb-3 text-xs font-semibold text-uppercase-spaced text-muted-foreground">
              Čebelarstvo Zagorje
            </p>
            <h1 className="font-display text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              Zlati darovi narave
            </h1>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
              Domači med in ročno izdelane sveče iz osrčja Zagorja. Naravno, pristno in z ljubeznijo pripravljeno.
            </p>
            <Link
              to="/trgovina"
              className="mt-8 inline-flex items-center gap-2 border-2 border-foreground bg-accent px-8 py-3 text-sm font-bold text-uppercase-spaced text-accent-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:border-primary"
            >
              Preveri ponudbo
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="relative h-72 md:h-[500px]">
            <img
              src={heroImg}
              alt="Sveče iz čebeljega voska"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Quality */}
      <QualitySection />

      {/* Featured Products */}
      <section className="bg-card py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-2 text-center text-xs font-semibold text-uppercase-spaced text-muted-foreground">
            Priporočamo
          </p>
          <h2 className="mb-12 text-center font-display text-3xl font-bold text-foreground md:text-4xl">
            Iz naše trgovine
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((p) => (
              <div key={p.title} className="group bg-card">
                <div className="mb-4 aspect-square overflow-hidden bg-secondary">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">{p.title}</h3>
                <span className="mt-1 block text-base font-bold text-foreground">{p.price}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/trgovina"
              className="inline-flex items-center gap-2 border-2 border-foreground px-6 py-3 text-xs font-bold text-uppercase-spaced text-foreground transition-all hover:bg-accent hover:text-accent-foreground"
            >
              Vsi izdelki
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <WhyUsSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Story teaser */}
      <section className="bg-card py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-2 text-xs font-semibold text-uppercase-spaced text-muted-foreground">
            Spoznajte nas
          </p>
          <h2 className="mb-6 font-display text-3xl font-bold text-foreground md:text-4xl">
            Naravnost iz panja
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground">
            Smo skupina štirih prijateljev, ki nas že od nekdaj povezuje ljubezen do narave
            in spoštovanje do čebel. Skupaj smo ustvarili podjetje, ki v vsak kozarec medu vlije iskreno predanost.
          </p>
          <Link
            to="/nasa-zgodba"
            className="mt-8 inline-flex items-center gap-2 border-2 border-foreground px-6 py-3 text-xs font-bold text-uppercase-spaced text-foreground transition-all hover:bg-accent hover:text-accent-foreground"
          >
            Več o nas
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Blog teaser */}
      <section className="border-t border-border bg-secondary py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-2 text-center text-xs font-semibold text-uppercase-spaced text-muted-foreground">
            Najnovejše
          </p>
          <h2 className="mb-12 text-center font-display text-3xl font-bold text-foreground md:text-4xl">
            Na našem blogu
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {latestBlogs.map((blog) => (
              <article key={blog.title} className="group bg-card">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs text-muted-foreground">{blog.date}</span>
                  <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-foreground">
                    {blog.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{blog.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 border-2 border-foreground px-6 py-3 text-xs font-bold text-uppercase-spaced text-foreground transition-all hover:bg-accent hover:text-accent-foreground"
            >
              Vsi članki
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-card py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-2 text-center text-xs font-semibold text-uppercase-spaced text-muted-foreground">
            Obiščite nas
          </p>
          <h2 className="mb-4 text-center font-display text-3xl font-bold text-foreground md:text-4xl">
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

export default Index;
