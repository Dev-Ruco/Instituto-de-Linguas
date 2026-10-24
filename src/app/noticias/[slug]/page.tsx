import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { noticias } from "@/lib/conteudos";
import { CartaoNoticia } from "@/components/cartao-noticia";
export function generateStaticParams(){return noticias.map(n=>({slug:n.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
 const {slug}=await params; const noticia=noticias.find(n=>n.slug===slug);
 return {title:noticia?.titulo ?? "Publicação",description:noticia?.resumo};
}
export default async function DetalheNoticia({params}:{params:Promise<{slug:string}>}) {
 const {slug}=await params;
 const noticia=noticias.find(n=>n.slug===slug);
 if (!noticia) notFound();
 const relacionadas=noticias.filter(n=>n.slug!==noticia.slug).slice(0,3);
 return <><section className="pagina-hero"><div className="contentor"><Link className="voltar" href="/noticias"><ArrowLeft size={17}/> Notícias e avisos</Link><span className="sobretitulo">{noticia.categoria}</span><h1>{noticia.titulo}</h1><p>{noticia.resumo}</p></div></section>
 <article className="contentor artigo-noticia">
   {noticia.imagem&&<figure className="artigo-figura"><img src={noticia.imagem} alt={noticia.legendaImagem??noticia.titulo}/>{noticia.legendaImagem&&<figcaption>{noticia.legendaImagem}</figcaption>}</figure>}
   <div className="artigo-texto">{noticia.conteudo.map((paragrafo,i)=><p key={i}>{paragrafo}</p>)}</div>
   <div className="artigo-navegacao"><Link href="/noticias" className="ligacao-texto"><ArrowLeft size={17}/> Voltar às notícias</Link></div>
 </article>
 {relacionadas.length>0&&<section className="secao suave"><div className="contentor"><div className="secao-cabecalho"><h2>Outras notícias</h2><Link className="ligacao-texto" href="/noticias">Ver todas <ArrowUpRight size={17}/></Link></div><div className="noticias-grid">{relacionadas.map(n=><CartaoNoticia key={n.slug} noticia={n}/>)}</div></div></section>}
 </>;
}
