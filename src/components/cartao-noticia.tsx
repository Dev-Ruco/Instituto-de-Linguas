import Link from "next/link";
import { ArrowUpRight, ImageIcon } from "lucide-react";
import type { Noticia } from "@/lib/conteudos";
/** Cartão reutilizável nas listas e na página inicial. */
export function CartaoNoticia({noticia}:{noticia:Noticia}) {
 return <article className="cartao-noticia">
   <Link href={`/noticias/${noticia.slug}`} className="noticia-imagem-ligacao" aria-label={`Ler: ${noticia.titulo}`}>
     {noticia.imagem?<img src={noticia.imagem} alt={noticia.legendaImagem ?? noticia.titulo} loading="lazy" />:<span className="imagem-indisponivel"><ImageIcon size={27}/></span>}
   </Link>
   <div className="noticia-corpo"><span className="microtexto">{noticia.categoria}{noticia.data?` · ${new Intl.DateTimeFormat("pt-PT",{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"}).format(new Date(`${noticia.data}T12:00:00Z`))}`:""}</span>
     <h3><Link href={`/noticias/${noticia.slug}`}>{noticia.titulo}</Link></h3><p>{noticia.resumo}</p>
     <Link className="ligacao-texto" href={`/noticias/${noticia.slug}`}>Ler artigo <ArrowUpRight size={17}/></Link>
   </div>
 </article>;
}
