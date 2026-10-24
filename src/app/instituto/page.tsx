import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Globe2, Users } from "lucide-react";
export const metadata: Metadata = {title:"O Instituto"};
export default function Instituto() {
return <><section className="pagina-hero"><div className="contentor"><span className="sobretitulo">CONHEÇA A INSTITUIÇÃO</span><h1>O Instituto de Línguas</h1><p>Educação, comunicação e aproximação entre culturas.</p></div></section>
<section className="secao contentor conteudo-instituto"><div><span className="sobretitulo">A NOSSA APRESENTAÇÃO</span><h2>Aprender uma língua é alargar horizontes.</h2></div><div><p>O Instituto de Línguas desenvolve actividades de formação linguística em Moçambique. Este portal demonstrativo pretende tornar a informação sobre cursos, delegações e serviços mais acessível.</p><p>Os textos relativos à história, missão formal, estatutos e órgãos de direcção deverão ser fornecidos e aprovados pela instituição antes da publicação oficial.</p><Link className="ligacao-texto" href="/cursos">Conheça as áreas de formação <ArrowUpRight size={18}/></Link></div></section>
<section className="secao suave"><div className="contentor"><div className="secao-cabecalho"><div><span className="sobretitulo">ÁREAS DE ACTIVIDADE</span><h2>Conhecimento que cria ligações.</h2></div></div><div className="tres-colunas">{[{i:<BookOpen/>,t:"Formação",d:"Programas de aprendizagem de línguas para diferentes públicos."},{i:<Globe2/>,t:"Comunicação intercultural",d:"Aproximação entre pessoas através da diversidade linguística."},{i:<Users/>,t:"Comunidade",d:"Informações acessíveis para estudantes, famílias e candidatos."}].map(x=><article className="painel-simples" key={x.t}><span className="icone-painel">{x.i}</span><h3>{x.t}</h3><p>{x.d}</p></article>)}</div></div></section>
<section id="direccao" data-reveal className="secao contentor direccao-institucional" aria-labelledby="titulo-direccao">
  <div className="secao-cabecalho">
    <div>
      <span className="sobretitulo">ESTRUTURA INSTITUCIONAL</span>
      <h2 id="titulo-direccao">Direcção e organização</h2>
      <p className="secao-intro">Conheça o espaço reservado à apresentação dos responsáveis pela instituição.</p>
    </div>
  </div>
  <div className="direccao-aviso" role="note">
    Apresentação demonstrativa. Os cargos abaixo são exemplos de organização e não representam a estrutura oficialmente confirmada do Instituto de Línguas. As fotografias são meramente ilustrativas.
  </div>
  <div className="direccao-organograma" aria-label="Exemplo de organograma institucional">
    <div className="direccao-nivel direccao-nivel-principal">
      <article className="direccao-cartao direccao-cartao-principal">
        <div className="direccao-retrato">
          <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=650&q=80" alt="Retrato genérico ilustrativo, não corresponde ao titular do cargo" loading="lazy"/>
        </div>
        <div className="direccao-dados">
          <span className="direccao-categoria">COORDENAÇÃO GERAL · EXEMPLO</span>
          <h3>Direcção-Geral</h3>
          <p>Nome a confirmar</p>
          <small>Fotografia ilustrativa</small>
        </div>
      </article>
    </div>
    <div className="direccao-ligacao-organograma" aria-hidden="true"/>
    <div className="direccao-nivel direccao-nivel-secundario">
      <article className="direccao-cartao">
        <div className="direccao-retrato">
          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=650&q=80" alt="Retrato genérico ilustrativo, não corresponde ao titular do cargo" loading="lazy"/>
        </div>
        <div className="direccao-dados">
          <span className="direccao-categoria">ÁREA ACADÉMICA · EXEMPLO</span>
          <h3>Direcção Pedagógica</h3>
          <p>Nome a confirmar</p>
          <small>Fotografia ilustrativa</small>
        </div>
      </article>
      <article className="direccao-cartao">
        <div className="direccao-retrato">
          <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=650&q=80" alt="Retrato genérico ilustrativo, não corresponde ao titular do cargo" loading="lazy"/>
        </div>
        <div className="direccao-dados">
          <span className="direccao-categoria">GESTÃO INSTITUCIONAL · EXEMPLO</span>
          <h3>Direcção Administrativa</h3>
          <p>Nome a confirmar</p>
          <small>Fotografia ilustrativa</small>
        </div>
      </article>
    </div>
  </div>
</section>
</>;
}
