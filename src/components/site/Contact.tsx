import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";

export const Contact = () => (
  <section id="contact" className="py-24 md:py-32">
    <div className="container">
      <div className="relative bg-card text-foreground rounded-sm overflow-hidden grain border border-border shadow-elevated">
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="blob absolute -top-32 -right-32 w-96 h-96 bg-primary/20 blur-3xl" />
          <div className="blob absolute -bottom-20 -left-20 w-64 h-64 bg-accent/10 blur-2xl" style={{ animationDelay: "-3s" }} />
          {/* Grid lines */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative grid lg:grid-cols-2 gap-12 p-10 md:p-16 lg:p-20">
          {/* Left */}
          <div className="sr sr-left">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">— Let's print</div>
            <h2 className="font-display text-4xl md:text-6xl font-black leading-[1.05] text-balance">
              Got a project?{" "}
              <em className="italic font-medium text-primary">Let's make it real.</em>
            </h2>
            <p className="mt-6 text-muted-foreground max-w-md text-lg">
              Call, WhatsApp, or drop by the studio. We'll quote you in minutes and have your job in the press today.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="tel:+919841709111"
                className="group relative inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-4 text-sm font-semibold uppercase tracking-wider rounded-sm overflow-hidden hover:bg-primary-glow transition-colors duration-300"
              >
                <span className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400" />
                <Phone className="h-4 w-4 relative z-10 transition-transform duration-300 group-hover:rotate-12" />
                <span className="relative z-10">Call now</span>
              </a>
              <a
                href="https://wa.me/919094569498"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 border border-foreground/20 px-6 py-4 text-sm font-semibold uppercase tracking-wider rounded-sm hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                <MessageCircle className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Right info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 self-end sr sr-right stagger">
            <Info icon={Phone} label="Phone" lines={["+91 98417 09111", "+91 90945 69498"]} />
            <Info icon={MapPin} label="Studio" lines={["Chennai, Tamil Nadu", "India"]} />
            <Info icon={Clock} label="Hours" lines={["Mon – Sat", "9:30am – 8:30pm"]} />
            <Info icon={MessageCircle} label="Email" lines={["hello@srmartprints.in"]} />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Info = ({ icon: Icon, label, lines }: { icon: any; label: string; lines: string[] }) => (
  <div className="border-t border-foreground/15 pt-5 group hover:border-primary/50 transition-colors duration-300">
    <div className="flex items-center gap-2 text-primary text-xs font-semibold uppercase tracking-wider mb-2">
      <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" /> {label}
    </div>
    <div className="space-y-0.5">
      {lines.map((l) => (
        <div key={l} className="text-foreground font-medium text-sm">{l}</div>
      ))}
    </div>
  </div>
);
