import Link from "next/link";
import {ArrowUpRight,ImageIcon} from "lucide-react";
import type {Noticia} from "@/lib/conteudos";
export function CartaoNoticia({noticia}:{noticia:Noticia}){
 return <article className="cartao-noticia"><Link href={`/noticias/${noticia.slug}`} className="noticia-imagem-ligacao" aria-label={`Ler: ${noticia.titulo}`}>
 {noticia.imagem?<img src={noticia.imagem} alt={noticia.legendaImagem??noticia.titulo} loading="lazy"/>:<span className="imagem-indisponivel"><ImageIcon size={27}/></span>}</Link>
 <div className="noticia-corpo"><div className="noticia-metadados">{noticia.data && <time className="noticia-data" dateTime={noticia.data}>{noticia.data}</time>}<span className="noticia-categoria">{noticia.categoria}</span>{noticia.demonstrativo&&<span className="noticia-exemplo">Exemplo</span>}</div>
 <h3><Link href={`/noticias/${noticia.slug}`}>{noticia.titulo}</Link></h3><p>{noticia.resumo}</p>
 <Link className="ligacao-texto" href={`/noticias/${noticia.slug}`}>Ler artigo <ArrowUpRight size={17}/></Link></div></article>;
}