"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Repete a entrada do hero sempre que a página inicial é aberta ou
 * retomada no histórico, sem movimentos contínuos que distraiam.
 */
export function AnimacaoHero() {
  const caminho = usePathname();

  useEffect(() => {
    if (caminho !== "/") return;
    const hero = document.querySelector<HTMLElement>(".hero");
    if (!hero) return;

    const animar = () => {
      hero.classList.remove("hero-animar");
      // Reinicia as animações CSS em regressos à página inicial.
      void hero.offsetWidth;
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        hero.classList.add("hero-animar");
      }
    };

    animar();
    const aoRegressar = (evento: PageTransitionEvent) => {
      if (evento.persisted) animar();
    };
    window.addEventListener("pageshow", aoRegressar);
    return () => {
      window.removeEventListener("pageshow", aoRegressar);
      hero.classList.remove("hero-animar");
    };
  }, [caminho]);

  return null;
}
