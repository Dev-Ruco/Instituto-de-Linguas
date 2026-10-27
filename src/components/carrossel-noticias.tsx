"use client";

import { useCallback, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CartaoNoticia } from "@/components/cartao-noticia";
import type { Noticia } from "@/lib/conteudos";



/**
 * Carrossel acessível. Mostra três cartões em ecrãs largos, dois no
 * tablet e um no telemóvel. A navegação é manual para permitir leitura tranquila.
 */
export function CarrosselNoticias({ noticias }: { noticias: Noticia[] }) {
  const lista = useRef<HTMLDivElement>(null);
  const [pausado, definirPausa] = useState(false);


  const deslocar = useCallback((sentido: 1 | -1) => {
    const elemento = lista.current;
    if (!elemento) return;

    const largura = elemento.firstElementChild?.getBoundingClientRect().width ?? 0;
    const intervalo = parseFloat(getComputedStyle(elemento).columnGap) || 24;
    const passo = largura + intervalo;
    const limite = elemento.scrollWidth - elemento.clientWidth;

    if (limite < 2 || passo <= 0) return;

    const destino = sentido === 1
      ? (elemento.scrollLeft + passo > limite + 4 ? 0 : elemento.scrollLeft + passo)
      : (elemento.scrollLeft < passo - 4 ? limite : elemento.scrollLeft - passo);

    elemento.scrollTo({ left: destino, behavior: "smooth" });
  }, []);


  return (
    <div className={pausado ? "carrossel-noticias em-pausa" : "carrossel-noticias"}
      onMouseEnter={() => definirPausa(true)}
      onMouseLeave={() => definirPausa(false)}
      onFocusCapture={() => definirPausa(true)}
      onBlurCapture={evento => {
        if (!evento.currentTarget.contains(evento.relatedTarget as Node | null)) definirPausa(false);
      }}
      onTouchStart={() => definirPausa(true)}
      onTouchEnd={() => definirPausa(false)}
      aria-roledescription="carrossel"
      aria-label="Notícias e actualizações em destaque">
      <div className="carrossel-trilho" ref={lista}
        aria-live="off">
        {noticias.map(noticia => <div className="carrossel-item" key={noticia.slug}>
          <CartaoNoticia noticia={noticia}/>
        </div>)}
      </div>
      <div className="carrossel-progresso" aria-hidden="true"><span/></div>
      <div className="carrossel-controlos">
        <span className="carrossel-indicacao">Deslize para explorar mais notícias</span>
        <div className="carrossel-botoes">
          <button type="button" aria-label="Ver notícias anteriores" onClick={() => deslocar(-1)} disabled={noticias.length < 2}><ChevronLeft size={20}/></button>
          <button type="button" aria-label="Ver notícias seguintes" onClick={() => deslocar(1)} disabled={noticias.length < 2}><ChevronRight size={20}/></button>
        </div>
      </div>
    </div>
  );
}
