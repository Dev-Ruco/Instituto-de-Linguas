import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Globe2, Users } from "lucide-react";
import { SecaoDireccao } from "@/components/secao-direccao";
import { SecaoFachadaInstituto } from "@/components/secao-fachada-instituto";
export const metadata: Metadata = {title:"O Instituto"};
export default function Instituto() {
return <><section className="pagina-hero"><div className="contentor"><span className="sobretitulo">CONHEÇA A INSTITUIÇÃO</span><h1>O Instituto de Línguas</h1><p>Educação, comunicação e aproximação entre culturas.</p></div></section>
<section className="secao contentor conteudo-instituto"><div><span className="sobretitulo">A NOSSA APRESENTAÇÃO</span><h2>Aprender uma língua é alargar horizontes.</h2></div><div><p>O Instituto de Línguas desenvolve actividades de formação linguística em Moçambique. Este portal demonstrativo pretende tornar a informação sobre cursos, delegações e serviços mais acessível.</p><p>Os textos relativos à história, missão formal, estatutos e órgãos de direcção deverão ser fornecidos e aprovados pela instituição antes da publicação oficial.</p><Link className="ligacao-texto" href="/cursos">Conheça as áreas de formação <ArrowUpRight size={18}/></Link></div></section>
<div id="instalacoes"><SecaoFachadaInstituto /></div>
<section className="secao suave"><div className="contentor"><div className="secao-cabecalho"><div><span className="sobretitulo">ÁREAS DE ACTIVIDADE</span><h2>Conhecimento que cria ligações.</h2></div></div><div className="tres-colunas">{[{i:<BookOpen/>,t:"Formação",d:"Programas de aprendizagem de línguas para diferentes públicos."},{i:<Globe2/>,t:"Comunicação intercultural",d:"Aproximação entre pessoas através da diversidade linguística."},{i:<Users/>,t:"Comunidade",d:"Informações acessíveis para estudantes, famílias e candidatos."}].map(x=><article className="painel-simples" key={x.t}><span className="icone-painel">{x.i}</span><h3>{x.t}</h3><p>{x.d}</p></article>)}</div></div></section>
<SecaoDireccao />
</>;
}
