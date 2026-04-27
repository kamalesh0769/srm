import { ArrowRight, Star } from "lucide-react";
import hero from "@/assets/hero-print.jpg";

export const Hero = () => (
  <section className="relative overflow-hidden">
    {/* Animated background blobs */}
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="blob absolute -top-40 -left-40 w-[600px] h-[600px] opacity-[0.07]"
        style={{ background: "hsl(var(--primary))" }}
      />
      <div
        className="blob absolute -bottom-20 right-0 w-[400px] h-[400px] opacity-[0.06]"
        style={{ background: "hsl(var(--accent))", animationDelay: "-4s" }}
      />
      {/* Dot grid */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dots" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="hsl(var(--foreground))" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
      {/* Diagonal ink line */}
      <svg className="absolute right-0 top-0 w-1/2 h-full opacity-5" viewBox="0 0 400 800" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M400 0 L0 800" stroke="hsl(var(--primary))" strokeWidth="1" className="draw-path" />
        <path d="M380 0 L-20 800" stroke="hsl(var(--foreground))" strokeWidth="0.5" className="draw-path" style={{ animationDelay: "0.8s" }} />
      </svg>
    </div>

    <div className="container pt-14 md:pt-24 pb-16 md:pb-28 relative">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
        {/* Left copy */}
        <div className="lg:col-span-7 reveal">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary mb-6">
            <span className="h-px w-8 bg-primary grow-line" />
            Designers &amp; Printers · Est. Chennai
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] font-black text-balance">
            Print that{" "}
            <em className="italic font-medium text-primary relative inline-block">
              speaks
              {/* Underline SVG */}
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 6 Q50 1 100 5 Q150 9 198 3" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round" className="draw-path" />
              </svg>
            </em>{" "}
            before you do.
          </h1>

          <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed" style={{ animationDelay: "0.2s" }}>
            From crisp visiting cards to large-format flex banners — SRM Art Prints crafts every piece with precision, premium stock and a sharp eye for detail.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4" style={{ animationDelay: "0.35s" }}>
            <a
              href="#services"
              className="group relative inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-4 text-sm font-semibold uppercase tracking-wider rounded-sm overflow-hidden hover:bg-primary-glow transition-colors duration-300 shadow-elevated"
            >
              {/* Ripple layer */}
              <span className="absolute inset-0 bg-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 rounded-sm" />
              <span className="relative z-10 flex items-center gap-3">
                Explore Services
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-foreground hover:text-primary transition-colors duration-300 underline underline-offset-8 decoration-primary/40 decoration-2"
            >
              Get a quote
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6 text-sm" style={{ animationDelay: "0.5s" }}>
            <div className="flex items-center gap-1 text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-current"
                  style={{ animationDelay: `${i * 0.08}s` }}
                />
              ))}
            </div>
            <span className="text-muted-foreground">
              <strong className="text-foreground">1,200+</strong> happy clients across Chennai
            </span>
          </div>
        </div>

        {/* Right image */}
        <div className="lg:col-span-5 reveal" style={{ animationDelay: "0.18s" }}>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-3xl rounded-full blob" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-elevated group">
              <img
                src={hero}
                alt="Premium printed stationery flat-lay by SRM Art Prints"
                width={1536}
                height={1280}
                className="w-full h-full object-cover transition-transform ease-smooth group-hover:scale-105"
                style={{ transitionDuration: "1.4s", transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Floating badge */}
            <div className="float-badge absolute -bottom-6 -left-6 bg-card/95 backdrop-blur-md border border-border shadow-soft px-5 py-4 rounded-sm max-w-[220px]">
              <div className="text-3xl font-display font-black text-primary leading-none">24h</div>
              <div className="mt-1 text-xs text-muted-foreground uppercase tracking-wider">Express turnaround on most orders</div>
            </div>

            {/* Secondary floating pill */}
            <div className="float-badge absolute -top-4 -right-4 bg-primary text-primary-foreground shadow-elevated px-4 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider" style={{ animationDelay: "-2.5s" }}>
              Chennai's finest ✦
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Double marquee */}
    <div className="border-y border-border bg-card text-foreground overflow-hidden py-4 shadow-soft">
      <div className="flex marquee-track gap-12 whitespace-nowrap">
        {[...ITEMS, ...ITEMS].map((t, i) => (
          <span key={i} className="font-display italic text-2xl md:text-3xl">
            {t} <span className="text-primary mx-5">✦</span>
          </span>
        ))}
      </div>
    </div>
    <div className="border-b border-border bg-background overflow-hidden py-3">
      <div className="flex marquee-track-rev gap-10 whitespace-nowrap">
        {[...ITEMS2, ...ITEMS2].map((t, i) => (
          <span key={i} className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            {t} <span className="text-primary/50 mx-4">·</span>
          </span>
        ))}
      </div>
    </div>
  </section>
);

const ITEMS = ["Visiting Cards", "Flex Prints", "Stickers", "Binding", "Lamination", "Stationery", "Plan Copies", "Brochures"];
const ITEMS2 = ["Premium Stock", "Colour-managed Press", "24h Express", "In-house Design", "Honest Pricing", "1,200+ Clients", "12+ Years", "Chennai Based"];
