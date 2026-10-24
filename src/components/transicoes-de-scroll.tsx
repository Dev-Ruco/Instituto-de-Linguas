"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Realça a secção que entra no campo de visão e suaviza a que acaba de sair.
 * O conteúdo nunca é ocultado; as transições funcionam nos dois sentidos.
 */
export function TransicoesDeScroll() {
  const caminho = usePathname();

  useEffect(() => {
    if (caminho !== "/") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const seccoes = Array.from(document.querySelectorAll<HTMLElement>("[data-scroll-section]"));
    if (!seccoes.length) return;

    const observador = new IntersectionObserver(
      entradas => {
        entradas.forEach(entrada => {
          const elemento = entrada.target as HTMLElement;
          const posicao = entrada.boundingClientRect;
          elemento.classList.toggle("scroll-em-foco", entrada.isIntersecting);
          elemento.classList.toggle("scroll-acima", !entrada.isIntersecting && posicao.bottom <= window.innerHeight * .23);
          elemento.classList.toggle("scroll-abaixo", !entrada.isIntersecting && posicao.top >= window.innerHeight * .77);
        });
      },
      { rootMargin: "-23% 0px -23% 0px", threshold: 0 }
    );

    seccoes.forEach(elemento => observador.observe(elemento));
    document.documentElement.classList.add("scroll-transicoes-activas");

    return () => {
      observador.disconnect();
      document.documentElement.classList.remove("scroll-transicoes-activas");
      seccoes.forEach(elemento => elemento.classList.remove("scroll-em-foco", "scroll-acima", "scroll-abaixo"));
    };
  }, [caminho]);

  return null;
}
