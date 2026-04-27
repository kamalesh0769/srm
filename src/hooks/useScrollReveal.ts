import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    const els = document.querySelectorAll(".sr, .sr-left, .sr-right, .sr-scale");
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
