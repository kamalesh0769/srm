import { Quote } from "lucide-react";

const items = [
  {
    quote: "Our entire office stationery was redone by SRM. The paper quality and finish are noticeably premium. New default printer for us.",
    name: "Aarthi Ravi",
    role: "Founder, Lumen Studio",
    initial: "A",
    color: "hsl(var(--primary))",
  },
  {
    quote: "Needed 500 visiting cards in 24 hours. They delivered the next morning, beautifully finished. Lifesavers.",
    name: "Karthik N.",
    role: "Architect",
    initial: "K",
    color: "hsl(var(--accent))",
  },
  {
    quote: "From flex banners to wedding invites, the colour accuracy is top class. You see the print, you trust the price.",
    name: "Suresh M.",
    role: "Event Manager",
    initial: "S",
    color: "hsl(330 60% 55%)",
  },
];

export const Testimonials = () => (
  <section className="py-24 md:py-32 bg-secondary relative overflow-hidden">
    {/* Background decoration */}
    <div className="pointer-events-none absolute inset-0">
      <svg className="absolute right-0 top-0 w-1/3 h-full opacity-[0.04]" viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="-20" y="200" fontSize="320" fontFamily="serif" fontStyle="italic" fill="hsl(var(--foreground))">"</text>
      </svg>
    </div>

    <div className="container relative">
      <div className="max-w-2xl mb-16 sr sr-left">
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">— Kind words</div>
        <h2 className="text-4xl md:text-6xl font-black leading-[1.05] text-balance">
          Trusted by people who{" "}
          <em className="italic font-medium text-primary">notice details.</em>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 stagger">
        {items.map((t, i) => (
          <figure
            key={i}
            className="sr sr-scale bg-background p-8 rounded-sm shadow-soft border border-border flex flex-col gap-6 group hover:shadow-elevated hover:-translate-y-1.5 transition-all duration-500 relative overflow-hidden"
          >
            {/* Color accent line */}
            <div
              className="absolute top-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
              style={{ background: t.color }}
            />

            <div className="flex items-start justify-between">
              <Quote className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <svg key={j} className="h-3.5 w-3.5 fill-primary" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                ))}
              </div>
            </div>

            <blockquote className="font-display text-xl leading-snug text-balance flex-1">
              "{t.quote}"
            </blockquote>

            <figcaption className="mt-auto pt-4 border-t border-border flex items-center gap-3">
              <div
                className="h-9 w-9 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                style={{ background: t.color }}
              >
                {t.initial}
              </div>
              <div>
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);
