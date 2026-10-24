"use client";
import { useEffect, useRef, useState } from "react";

/** Logótipos usados na demonstração; a presença não confirma credenciamento. */
const entidades = [
  { nome: "Ministério da Educação e Cultura", imagem: "/images/instituto/mec-mocambique.webp" },
  { nome: "Cambridge English", imagem: "/images/instituto/cambridge-english.webp" },
  { nome: "DELF/DALF — Centro Autorizado de Exames da Língua Francesa", imagem: "/images/instituto/delf-dalf-centro-exames.webp", largo: true },
];

export function ParceirosInstitucionais() {
  const referencia = useRef<HTMLElement>(null);
  const [visivel, definirVisivel] = useState(false);
  useEffect(() => {
    const elemento = referencia.current;
    if (!elemento) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      definirVisivel(true);
      return;
    }
    const observador = new IntersectionObserver(([entrada]) => {
      if (entrada.isIntersecting) {
        definirVisivel(true);
        observador.disconnect();
      }
    }, { threshold: 0.15 });
    observador.observe(elemento);
    return () => observador.disconnect();
  }, []);
  return (
    <section ref={referencia} className={visivel ? "parceiros-seccao parceiros-visiveis" : "parceiros-seccao"} aria-labelledby="parceiros-titulo">
      <div className="contentor">
        <div className="parceiros-cabecalho">
          <span className="sobretitulo">RELAÇÕES INSTITUCIONAIS</span>
          <h2 id="parceiros-titulo">Parceiros e instituições de referência</h2>
          <p>Entidades apresentadas neste protótipo para demonstração da área institucional.</p>
        </div>
        <div className="parceiros-faixa">
          {entidades.map((entidade, indice) => (
            <div className={entidade.largo ? "parceiro-item parceiro-item-largo" : "parceiro-item"} key={entidade.nome} style={{ "--parceiro-indice": indice } as React.CSSProperties}>
              <img src={entidade.imagem} alt={entidade.nome} loading="lazy" />
            </div>
          ))}
        </div>
        <p className="parceiros-nota">A apresentação dos logótipos não constitui confirmação de parceria, acreditação ou vínculo institucional.</p>
      </div>
    </section>
  );
}
