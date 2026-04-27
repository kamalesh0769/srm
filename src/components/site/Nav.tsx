import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Why us", href: "#why" },
  { label: "Contact", href: "#contact" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.4 }
    );
    ["services", "process", "why", "contact"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft border-b border-border/60"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-baseline gap-1 group">
          <span className="font-display text-2xl md:text-3xl font-black tracking-tight text-primary transition-opacity duration-300 group-hover:opacity-80">SRM</span>
          <span className="font-display italic text-xl text-accent transition-opacity duration-300 group-hover:opacity-80">Art</span>
          <span className="font-display text-2xl md:text-3xl font-black tracking-tight text-primary transition-opacity duration-300 group-hover:opacity-80">Prints</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative text-sm font-medium transition-colors duration-300 py-1 group ${
                activeSection === l.href.slice(1) ? "text-primary" : "text-foreground/70 hover:text-primary"
              }`}
            >
              {l.label}
              <span
                className={`absolute -bottom-0.5 left-0 h-px bg-primary transition-all duration-300 ${
                  activeSection === l.href.slice(1) ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+919094569498"
            className="inline-flex items-center gap-2 text-sm font-semibold bg-primary text-primary-foreground px-4 py-2.5 rounded-sm hover:bg-primary-glow transition-colors duration-300 relative overflow-hidden group shadow-soft"
          >
            <span className="absolute inset-0 bg-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400" />
            <Phone className="h-4 w-4 relative z-10" />
            <span className="hidden sm:inline relative z-10">+91 90945 69498</span>
            <span className="sm:hidden relative z-10">Call</span>
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-sm text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          mobileOpen ? "max-h-64 border-b border-border" : "max-h-0"
        } bg-background/98 backdrop-blur-md`}
      >
        <nav className="container py-4 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="py-3 text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200 border-b border-border/40 last:border-0"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};
