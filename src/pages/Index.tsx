import { useEffect } from "react";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { Why } from "@/components/site/Why";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";

// Scroll reveal observer
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
    );
    const els = document.querySelectorAll(".sr, .sr-left, .sr-right, .sr-scale");
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const Index = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Services />
        <Process />
        <Why />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Index;
