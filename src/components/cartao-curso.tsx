import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Curso } from "@/lib/conteudos";

/**
 * Apresenta um curso com fotografia superior e informações em fundo branco.
 * Não apresenta preços, horários ou níveis sem confirmação institucional.
 */
export function CartaoCurso({ curso }: { curso: Curso; indice?: number }) {
  return (
    <Link className="cartao-curso cartao-curso-editorial" href={`/cursos/${curso.slug}`}>
      <div className="curso-editorial-imagem">
        <img
          src={curso.imagem}
          alt={`Imagem ilustrativa do curso de ${curso.titulo}`}
          loading="lazy"
        />
      </div>
      <div className="curso-editorial-conteudo">
        <span className="curso-editorial-categoria">{curso.etiqueta}</span>
        <h3>{curso.titulo}</h3>
        <p>{curso.resumo}</p>
        <span className="curso-editorial-rodape">
          <span>Conhecer o curso</span>
          <ArrowUpRight size={19} aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
