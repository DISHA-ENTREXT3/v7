import { useEffect } from "react";
import { initReveal } from "@/lib/reveal";

/**
 * Hook to trigger subtle editorial fade-in and slide-up animations
 * on section headers and content cards as they enter the viewport.
 */
export function useScrollReveal() {
  useEffect(() => {
    const cleanup = initReveal();
    return cleanup;
  }, []);
}
