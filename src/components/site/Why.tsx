import { useEffect, useRef, useState } from "react";

const stats = [
  { target: 12, suffix: "+", label: "Years in the print trade" },
  { target: 1200, suffix: "+", label: "Businesses served" },
  { target: 50, suffix: "+", label: "Print finishes mastered" },
  { target: 24, suffix: "h", label: "Express turnaround" },
];

function CountStat({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1600;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          setVal(Math.round(ease * target));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="bg-card p-8 md:p-10 group hover:bg-primary transition-colors duration-500 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10">
        <div className="font-display text-5xl md:text-6xl font-black text-primary group-hover:text-primary-foreground transition-colors duration-400 leading-none tabular-nums">
          {val}{suffix}
        </div>
        <div className="mt-3 text-sm text-muted-foreground group-hover:text-primary-foreground/80 uppercase tracking-wider transition-colors duration-400">{label}</div>
      </div>
    </div>
  );
}

export const Why = () => (
  <section id="why" className="py-24 md:py-32 relative overflow-hidden">
    {/* Subtle background */}
    <div className="pointer-events-none absolute left-0 top-1/4 w-96 h-96 rounded-full opacity-[0.06]" style={{ background: "hsl(var(--accent))", filter: "blur(100px)" }} />

    <div className="container">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left text */}
        <div className="sr sr-left">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">— Why SRM</div>
          <h2 className="text-4xl md:text-6xl font-black leading-[1.05] text-balance">
            We treat{" "}
            <em className="italic font-medium text-primary">small jobs</em> like flagship campaigns.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            For over a decade, SRM Art Prints has helped Chennai's businesses, students and creators put their best image forward — with finishing that punches well above its price.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              "Calibrated colour-managed presses",
              "Premium imported stock & finishes",
              "In-house designers for last-minute tweaks",
              "Honest pricing, no surprise add-ons",
            ].map((t, i) => (
              <li
                key={t}
                className="flex items-start gap-4 group"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="mt-1 h-5 w-5 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary group-hover:bg-background transition-colors duration-300" />
                </span>
                <span className="text-foreground group-hover:text-primary transition-colors duration-300">{t}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right stats */}
        <div className="sr sr-right">
          <div className="grid grid-cols-2 gap-px bg-border rounded-sm overflow-hidden shadow-soft">
            {stats.map((s) => (
              <CountStat key={s.label} {...s} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
