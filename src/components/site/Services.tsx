import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import visiting from "@/assets/cat-visiting.jpg";
import flex from "@/assets/cat-flex.jpg";
import stickers from "@/assets/cat-stickers.jpg";
import binding from "@/assets/cat-binding.jpg";
import stationery from "@/assets/cat-stationery.jpg";
import office from "@/assets/cat-office.jpg";
import lamination from "@/assets/cat-lamination.jpg";
import plan from "@/assets/cat-plan.jpg";

const services = [
  { title: "Visiting Cards", desc: "Matte, gloss, spot UV & embossed finishes.", img: visiting, count: "11 styles", slug: "standard-visiting-cards" },
  { title: "Flex Prints", desc: "Large-format banners, hoardings & signage.", img: flex, count: "Up to 10ft", slug: "flex-banners" },
  { title: "Stickers", desc: "Die-cut, vinyl, transparent & weatherproof.", img: stickers, count: "7 finishes", slug: "stickers" },
  { title: "Binding", desc: "Spiral, hard, soft & thermal binding.", img: binding, count: "6 types", slug: "catalogues" },
  { title: "Custom Stationery", desc: "Letterheads, envelopes, bill books.", img: stationery, count: "10 items", slug: "letter-head" },
  { title: "Office Supplies", desc: "Folders, ID cards, certificates & more.", img: office, count: "11 items", slug: "identity-cards" },
  { title: "Lamination", desc: "Glossy & matte, document protection.", img: lamination, count: "All sizes", slug: "laminated-visiting-cards" },
  { title: "Plan Copies", desc: "Architectural & engineering drawings.", img: plan, count: "A0 – A4", slug: "plan-copy" },
];

export const Services = () => (
  <section id="services" className="py-24 md:py-32 relative overflow-hidden">
    {/* Background decoration */}
    <div className="pointer-events-none absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-border to-transparent" />
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute top-20 right-20 w-72 h-72 rounded-full opacity-[0.04]" style={{ background: "hsl(var(--primary))", filter: "blur(80px)" }} />
    </div>

    <div className="container">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
        <div className="max-w-2xl sr sr-left">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">— What we print</div>
          <h2 className="text-4xl md:text-6xl font-black leading-[1.05] text-balance">
            Eight crafts.{" "}
            <em className="italic font-medium text-primary">One studio.</em>
          </h2>
        </div>
        <p className="md:max-w-sm text-muted-foreground sr sr-right">
          Whether it's a single visiting card or a thousand-piece corporate run, every job gets the same obsessive attention.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger">
        {services.map((s, i) => (
          <Link
            key={s.title}
            to={`/product/${s.slug}`}
            className="sr sr-scale group relative bg-card border border-border rounded-sm overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-2"
          >
            {/* Image */}
            <div className="aspect-[4/5] overflow-hidden bg-muted relative">
              <img
                src={s.img}
                alt={s.title}
                loading="lazy"
                width={800}
                height={800}
                className="w-full h-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-108"
                style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
              />
              {/* Color overlay on hover */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/15 transition-colors duration-500" />
              {/* Count chip */}
              <div className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-wider text-primary border border-border/50 translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
                {s.count}
              </div>
            </div>
            {/* Text */}
            <div className="p-5">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-display text-xl font-bold leading-tight group-hover:text-primary transition-colors duration-300">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-foreground/30 group-hover:text-primary group-hover:rotate-12 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300" />
              </div>
              {/* Animated underline */}
              <div className="mt-4 pt-4 border-t border-border">
                <div className="relative overflow-hidden">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground group-hover:text-primary transition-colors duration-300 font-semibold">
                    {s.count}
                  </span>
                  <div className="absolute bottom-0 left-0 h-px w-0 bg-primary group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);
