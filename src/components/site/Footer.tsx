import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { catalog } from "@/data/catalog";

export const Footer = () => (
  <footer className="bg-card text-foreground grain border-t border-border">
    <div className="container py-20 md:py-28">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {catalog.map((group) => (
          <div key={group.slug}>
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-6 text-foreground">
              {group.title}
            </h3>
            <ul className="space-y-3">
              {group.products.map((p) => (
                <li key={p.slug}>
                  <Link
                    to={`/product/${p.slug}`}
                    className="group inline-flex items-start gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    <ChevronRight className="h-4 w-4 mt-1 shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-0.5" />
                    <span className="text-[0.95rem] leading-snug">{p.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="border-t border-border">
      <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
        <div className="flex items-baseline gap-1">
          <span className="font-display font-black text-primary text-lg">SRM</span>
          <span className="font-display italic text-accent">Art</span>
          <span className="font-display font-black text-primary text-lg">Prints</span>
        </div>
        <div className="text-muted-foreground uppercase tracking-[0.2em] text-xs">
          Copyright © {new Date().getFullYear()} SRM Art Prints
        </div>
      </div>
    </div>
  </footer>
);
