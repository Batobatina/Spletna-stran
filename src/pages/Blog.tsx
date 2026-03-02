import Layout from "@/components/Layout";

const blogs = [
  {
    date: "15. 02. 2026",
    title: "Kako prepoznati pravi slovenski med?",
    excerpt:
      "Na trgu najdemo veliko medu, a kako ločiti pristnega od ponaredkov? V tem prispevku razkrivamo znake kakovostnega slovenskega medu in vam pomagamo izbrati najboljše.",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80",
    content:
      "Slovenski med je prepoznaven po svoji kakovosti in edinstvenih okusih, ki jih določa bogata slovenska narava. Pravi med ima naraven vonj, ki ustreza vrsti — cvetlični diši po travnikih, gozdni pa po smoli in iglavcih. Tekstura pravega medu se s časom spreminja — kristalizacija je naraven pojav in znak kakovosti, ne napake. Pri nakupu bodite pozorni na oznake porekla, certifikate in pridelovalca. Najboljši med kupite neposredno pri čebelarju, kjer lahko preverite pogoje pridelave. Izogibajte se medu brez jasne označbe izvora ali s sumljivo nizko ceno.",
  },
  {
    date: "28. 01. 2026",
    title: "Čebelji vosek — od panja do sveče",
    excerpt:
      "Ročna izdelava sveč iz čebeljega voska je umetnost, ki zahteva potrpežljivost in znanje. Spoznajte naš postopek korak za korakom.",
    image: "https://images.unsplash.com/photo-1602833280958-1657662ccc58?auto=format&fit=crop&w=600&q=80",
    content:
      "Čebelji vosek je naraven material, ki ga čebele proizvajajo za gradnjo satja. Ko satje ni več uporabno za med, ga predelamo v čisti vosek. Postopek vključuje taljenje, filtriranje in oblikovanje. Naše sveče zvijamo ročno iz voskanih plošč — vsaka je unikat. Čebelji vosek pri gorenju sprošča negativne ione, ki čistijo zrak, in prijetno diši po medu. Za razliko od parafinskih sveč ne sprošča škodljivih snovi.",
  },
  {
    date: "10. 01. 2026",
    title: "5 receptov z medom za zimske dni",
    excerpt:
      "Med ni le sladilo — je tudi zdravilo. Pripravili smo pet preprostih receptov, ki vas bodo ogreli v hladnih zimskih mesecih.",
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=600&q=80",
    content:
      "1. Medeni čaj z ingverjem in limono — odlično za prehlad. 2. Topla medena limonada s cimetom — sladko in aromatično. 3. Ovsena kaša z medom in orehi — hranljiv zajtrk. 4. Pečene hruške z medom — preprost sladki desert. 5. Medeni sirup za kašelj — zmešajte med s čebulnim sokom in pustite čez noč. Vsi recepti uporabljajo naraven med, ki ohrani svoje zdravilne lastnosti, če ga ne segrevamo nad 40°C.",
  },
  {
    date: "20. 12. 2025",
    title: "Zimska skrb za čebele",
    excerpt:
      "Čebele pozimi ne spijo — se pa zberejo v klube in grejejo. Kako jim pomagamo preživeti mrzle mesece?",
    image: "https://images.unsplash.com/photo-1471943311424-646960669fbc?auto=format&fit=crop&w=600&q=80",
    content:
      "Zimska priprava čebel se začne že jeseni. Poskrbimo, da imajo dovolj zalog medu za prezimovanje, preverimo zdravstveno stanje družine in jih po potrebi dokrmimo s sladkorno raztopino. Panj zaščitimo pred vetrom in vlago, a pustimo dovolj ventilacije. Čebele se pozimi zberejo v zimski klubi, kjer s tresenjem mišic vzdržujejo temperaturo okoli 35°C. V najhladnejših dneh jih ne motimo — vsak odprt panj pomeni izgubo dragocene toplote.",
  },
];

const Blog = () => {
  return (
    <Layout>
      {/* Page header */}
      <section className="border-b border-border bg-secondary py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="mb-2 text-xs font-semibold text-uppercase-spaced text-muted-foreground">
            Naši zapisi
          </p>
          <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            Blog
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-base text-muted-foreground">
            Novice, recepti in zanimivosti iz sveta čebelarstva.
          </p>
        </div>
      </section>

      {/* Blog grid */}
      <section className="bg-card py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            {blogs.map((blog) => (
              <article key={blog.title} className="group border border-border">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs text-muted-foreground">{blog.date}</span>
                  <h2 className="mt-2 font-display text-xl font-semibold leading-snug text-foreground">
                    {blog.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {blog.excerpt}
                  </p>
                  <details className="mt-4">
                    <summary className="cursor-pointer text-xs font-semibold text-uppercase-spaced text-foreground underline underline-offset-4 transition-colors hover:text-muted-foreground">
                      Preberi več
                    </summary>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {blog.content}
                    </p>
                  </details>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
