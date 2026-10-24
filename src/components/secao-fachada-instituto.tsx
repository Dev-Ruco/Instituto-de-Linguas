import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

type FachadaProps = { resumo?: boolean };

/**
 * Fachada institucional: fotografia fornecida para demonstração.
 * O fundo azul mantém a composição caso o ficheiro ainda não esteja publicado.
 */
export function SecaoFachadaInstituto({ resumo = false }: FachadaProps) {
  return (
    <section data-reveal className={resumo ? "fachada-instituto fachada-home" : "fachada-instituto fachada-detalhe"} aria-labelledby={resumo ? "fachada-home-titulo" : "fachada-instituto-titulo"}>
      <div className="contentor">
        <div className="fachada-painel">
          <div className="fachada-fotografia" role="img" aria-label="Fotografia da fachada do Instituto de Línguas, fornecida como referência para o protótipo" />
          <div className="fachada-gradiente" aria-hidden="true" />
          <div className="fachada-texto">
            <span className="fachada-sobretitulo"><MapPin size={15} aria-hidden="true" /> O INSTITUTO DE LÍNGUAS</span>
            <h2 id={resumo ? "fachada-home-titulo" : "fachada-instituto-titulo"}>{resumo ? "Conheça o espaço do Instituto." : "Uma instituição com identidade e presença."}</h2>
            <p>{resumo ? "A formação em línguas tem um lugar próprio na vida académica e cultural de Moçambique." : "Uma imagem de referência das instalações do Instituto de Línguas, integrada nesta apresentação demonstrativa."}</p>
            {resumo && <Link className="botao botao-amarelo" href="/instituto#instalacoes">Descobrir o Instituto <ArrowUpRight size={18} /></Link>}
          </div>
          <span className="fachada-marcacao">Imagem de referência · Protótipo</span>
        </div>
      </div>
    </section>
  );
}
