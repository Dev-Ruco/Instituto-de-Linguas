import Link from "next/link";
import type { Curso } from "@/lib/conteudos";
/** Cartão fotográfico: a língua é identificada pelo título, sem bandeiras nem ícones de países. */
export function CartaoCurso({curso}:{curso:Curso;indice?:number}){
 return <Link className="cartao-curso cartao-curso-foto" href={`/cursos/${curso.slug}`}>
 <img className="curso-foto" src={curso.imagem} alt={`Fotografia ilustrativa: ${curso.titulo}`} loading="lazy"/>
 <span className="curso-foto-sombra" aria-hidden="true"/>
 <div className="curso-foto-conteudo">
 <h3>{curso.titulo}</h3><p>{curso.resumo}</p><span className="curso-foto-ligacao">Saber mais <span aria-hidden="true">→</span></span>
 </div></Link>;
}
