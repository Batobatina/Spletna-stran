const blogs = [
  {
    date: "15. 02. 2026",
    title: "Kako prepoznati pravi slovenski med?",
    excerpt:
      "Na trgu najdemo veliko medu, a kako ločiti pristnega od ponaredkov? V tem prispevku razkrivamo znake kakovostnega slovenskega medu...",
    image: "src/assets/med3.jpg",
  },
  {
    date: "28. 01. 2026",
    title: "Čebelji vosek — od panja do sveče",
    excerpt:
      "Ročna izdelava sveč iz čebeljega voska je umetnost, ki zahteva potrpežljivost in znanje. Spoznajte naš postopek korak za korakom...",
    image: "https://images.unsplash.com/photo-1602833280958-1657662ccc58?auto=format&fit=crop&w=600&q=80",
  },
  {
    date: "10. 01. 2026",
    title: "5 receptov z medom za zimske dni",
    excerpt:
      "Med ni le sladilo — je tudi zdravilo. Pripravili smo pet preprostih receptov, ki vas bodo ogreli v hladnih zimskih mesecih...",
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=600&q=80",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="border-t border-border bg-secondary py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-2 text-center text-xs font-semibold text-uppercase-spaced text-muted-foreground">
          Najnovejše
        </p>
        <h2 className="mb-12 text-center font-display text-3xl font-bold text-foreground md:text-4xl">
          Na našem blogu
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
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
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                  {blog.excerpt}
                </p>
                <button className="mt-4 text-xs font-semibold text-uppercase-spaced text-foreground underline underline-offset-4 transition-colors hover:text-muted-foreground">
                  Preberi več
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
