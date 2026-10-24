import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { perfisDireccao } from "@/lib/direccao";

export function SecaoDireccao({ resumo = false }: { resumo?: boolean }) {
  return (
    <section id="direccao" data-reveal className={resumo ? "secao direccao-moderna direccao-home" : "secao direccao-moderna"} aria-labelledby="titulo-direccao">
      <div className="contentor">
        <div className="secao-cabecalho direccao-cabecalho">
          <div>
            <span className="sobretitulo">PESSOAS E LIDERANÇA</span>
            <h2 id="titulo-direccao">Quem está à frente do Instituto</h2>
            <p className="secao-intro">Um espaço dedicado à apresentação da equipa de direcção.</p>
          </div>
          {resumo && <Link href="/instituto#direccao" className="ligacao-texto">Conhecer a estrutura <ArrowUpRight size={18}/></Link>}
        </div>
        <div className="direccao-galeria">
          {perfisDireccao.map((perfil, i) => (
            <article className="dir-perfil" data-reveal key={perfil.id} style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}>
              <div className="dir-fotografia">
                <img src={perfil.imagem} alt="Fotografia de banco de imagens; não representa o titular deste cargo" loading="lazy" />
                <span className="dir-etiqueta-foto">Imagem ilustrativa</span>
              </div>
              <div className="dir-info">
                <span className="dir-area">{perfil.area}</span>
                <h3>{perfil.cargo}</h3>
                <p>Responsável a confirmar</p>
              </div>
            </article>
          ))}
        </div>
        <p className="direccao-nota" role="note">Secção demonstrativa: os cargos e as fotografias são exemplos de apresentação, não correspondendo necessariamente à estrutura ou aos titulares oficiais da instituição.</p>
      </div>
    </section>
  );
}
