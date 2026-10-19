/**
 * IntersectionObserver implementation to watch for elements with classes
 * 'reveal-init' or 'reveal-fade-init', adding 'is-revealed' when they enter the viewport.
 */
export function initReveal(options?: IntersectionObserverInit): () => void {
  if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
    // Fallback: immediately reveal all elements if IntersectionObserver is unavailable
    if (typeof document !== "undefined") {
      const elements = document.querySelectorAll<HTMLElement>(".reveal-init, .reveal-fade-init");
      elements.forEach((el) => el.classList.add("is-revealed"));
    }
    return () => {};
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      rootMargin: "0px 0px -40px 0px",
      threshold: 0.08,
      ...options,
    },
  );

  const elements = document.querySelectorAll<HTMLElement>(".reveal-init, .reveal-fade-init");
  elements.forEach((el) => observer.observe(el));

  return () => {
    observer.disconnect();
  };
}
