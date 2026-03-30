import { useEffect } from "react";
import gsap from "gsap";

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;

            gsap.to(el, {
              y: 0,
              opacity: 1,
              duration: 0.75,
              ease: "power3.out",
              onComplete: () => {
                // Remove the .reveal class so CSS no longer forces opacity:0
                el.classList.remove("reveal");
                // Now safe to clear GSAP inline styles — element keeps its natural CSS
                gsap.set(el, { clearProps: "all" });
              },
            });

            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    // Small delay so DOM is fully painted before observing
    const timer = setTimeout(() => {
      document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);
}
