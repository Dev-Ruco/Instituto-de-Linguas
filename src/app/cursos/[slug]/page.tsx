import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { cursos } from "@/lib/conteudos";
const fundos: Record<string,string> = {
 ingles:"ingles-londres.jpg",
 frances:"frances-paris.jpg",
 portugues:"portugues-lisboa.jpg",
 chines:"chines-muralha.jpg",
 "linguas-mocambicanas":"mocambicanas-maputo.jpg"
};
export function generateStaticParams(){return cursos.map(c=>({slug:c.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
 const {slug}=await params; const curso=cursos.find(c=>c.slug===slug);
 return {title:curso?.titulo ?? "Curso"};
}
export default async function CursoDetalhe({params}:{params:Promise<{slug:string}>}) {
 const {slug}=await params;const curso=cursos.find(c=>c.slug===slug);if(!curso) notFound();
 return <><section className={fundos[slug] ? "pagina-hero curso-hero-fotografico" : "pagina-hero curso-hero-simples"} style={fundos[slug] ? { backgroundImage: `linear-gradient(90deg, rgba(7,29,70,.94) 0%, rgba(11,45,113,.82) 43%, rgba(11,45,113,.43) 100%), url("/images/instituto/${fundos[slug]}")` } : undefined}><div className="contentor"><Link className="voltar" href="/cursos"><ArrowLeft size={16}/> Todos os cursos</Link><span className="sobretitulo">{curso.etiqueta}</span><h1>{curso.titulo}</h1><p>{curso.resumo}</p></div></section>
 <section className="secao contentor detalhe-grid"><div className="detalhe-conteudo"><span className="sobretitulo">SOBRE A FORMAÇÃO</span><h2>Conheça o programa</h2><p>{curso.descricao}</p><h3>Áreas de aprendizagem</h3><div className="detalhe-areas">{curso.areas.map(a=><span key={a}><CheckCircle2 size={18}/>{a}</span>)}</div><h3>Informações importantes</h3><p>Os níveis, conteúdos programáticos, datas de início, duração, horários, propinas e requisitos de admissão são definidos pela instituição e deverão ser confirmados antes da matrícula.</p></div>
 <aside className="detalhe-lateral"><span className="icone-curso grande">{curso.icon}</span><h3>Interessado neste curso?</h3><p>Consulte as orientações e contacte a delegação pretendida para obter informações actualizadas.</p><Link className="botao botao-amarelo" href="/matriculas">Como matricular-me <ArrowUpRight size={18}/></Link><Link className="ligacao-texto" href="/delegacoes">Ver delegações <ArrowUpRight size={18}/></Link></aside></section></>;
}
