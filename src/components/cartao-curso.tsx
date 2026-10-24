import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Curso } from "@/lib/conteudos";
export function CartaoCurso({ curso, indice = 0 }: { curso: Curso; indice?: number }) {
  return <Link className="cartao-curso" href={`/cursos/${curso.slug}`}>
    <div className="cartao-topo"><span className={`icone-curso icone-${indice % 3}`}>{curso.icon}</span><ArrowUpRight className="cartao-seta" size={21}/></div>
    <span className="microtexto">{curso.etiqueta}</span><h3>{curso.titulo}</h3><p>{curso.resumo}</p>
    <span className="cartao-acesso">Conhecer o curso <span>→</span></span>
  </Link>;
}
