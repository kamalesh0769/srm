import { Phone, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

export const FloatingActions = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex flex-col gap-3 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <a
        href="tel:+919841709111"
        aria-label="Call SRM Art Prints"
        className="relative h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-elevated flex items-center justify-center hover:bg-primary-glow transition-all duration-300 hover:scale-110 group"
      >
        <Phone className="h-5 w-5 fill-current transition-transform duration-300 group-hover:rotate-12" strokeWidth={0} />
        {/* Tooltip */}
        <span className="absolute right-16 bg-card text-foreground text-xs px-2.5 py-1.5 rounded-sm whitespace-nowrap font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-soft border border-border">
          Call us
        </span>
      </a>

      <a
        href="https://wa.me/919094569498"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp SRM Art Prints"
        className="relative h-14 w-14 rounded-full bg-whatsapp text-whatsapp-foreground shadow-elevated flex items-center justify-center hover:scale-110 transition-all duration-300 group pulse-ring"
        style={{ position: "relative" }}
      >
        <MessageCircle className="h-5 w-5 fill-current" strokeWidth={0} />
        <span className="absolute right-16 bg-card text-foreground text-xs px-2.5 py-1.5 rounded-sm whitespace-nowrap font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-soft border border-border">
          WhatsApp
        </span>
      </a>
    </div>
  );
};
