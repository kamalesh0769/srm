const steps = [
  { n: "01", title: "Share your idea", desc: "Walk in, call or send us your file. Tell us what you need.", icon: "💬" },
  { n: "02", title: "Design & proof", desc: "Our designers polish your artwork and send a digital proof.", icon: "✏️" },
  { n: "03", title: "Print with care", desc: "We use premium stock and calibrated machines for true colour.", icon: "🖨️" },
  { n: "04", title: "Pack & deliver", desc: "Crisp finishing, ready to pick up or delivered to your door.", icon: "📦" },
];

export const Process = () => (
  <section id="process" className="py-24 md:py-32 bg-card text-foreground grain relative overflow-hidden clip-diagonal border-y border-border">
    {/* Decorative circles */}
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-foreground/5" />
      <div className="absolute -right-48 top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-foreground/5" />
      <div className="absolute -left-20 bottom-0 w-64 h-64 bg-primary/10 blur-3xl rounded-full" />
    </div>

    <div className="container relative pt-8 pb-12">
      <div className="max-w-3xl mb-16 sr sr-left">
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">— How it works</div>
        <h2 className="text-4xl md:text-6xl font-black leading-[1.05] text-balance">
          From sketch to{" "}
          <em className="italic font-medium text-primary">shelf</em> in four steps.
        </h2>
      </div>

      {/* Steps grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-sm overflow-hidden shadow-soft">
        {steps.map((s, i) => (
          <div
            key={s.n}
            className="sr bg-background p-8 md:p-10 group hover:bg-primary transition-colors duration-500 relative overflow-hidden"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            {/* Hover fill from bottom */}
            <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-smooth" />

            <div className="relative z-10">
              <div className="font-display text-7xl font-black text-primary/30 group-hover:text-primary-foreground/20 transition-colors duration-500 leading-none mb-6 select-none">
                {s.n}
              </div>
              <div className="text-3xl mb-4 transition-transform duration-300 group-hover:scale-110 inline-block">{s.icon}</div>
              <h3 className="text-xl font-display font-bold group-hover:text-primary-foreground transition-colors duration-300">{s.title}</h3>
              <p className="mt-3 text-muted-foreground group-hover:text-primary-foreground/80 transition-colors duration-500 text-sm leading-relaxed">{s.desc}</p>
            </div>

            {/* Step connector arrow (not on last) */}
            {i < 3 && (
              <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 w-6 h-px bg-foreground/15 group-hover:bg-primary-foreground/30 transition-colors duration-300" />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);
