import Link from "next/link";
import { ArrowUpRight, GraduationCap } from "lucide-react";
import type { Curso } from "@/lib/conteudos";

/**
 * Cartão académico com representação visual da língua através de uma bandeira.
 * As bandeiras constituem referências visuais e não indicam exclusividade nacional.
 */
export function CartaoCurso({ curso }: { curso: Curso; indice?: number }) {
  return (
    <Link className="cartao-curso cartao-curso-editorial" href={`/cursos/${curso.slug}`}>
      <div className="curso-editorial-imagem curso-bandeira-fundo">
        {curso.bandeira ? (
          <span className="curso-bandeira" role="img" aria-label={`Bandeira de referência para ${curso.titulo}`}>
            {curso.bandeira}
          </span>
        ) : (
          <span className="curso-exame-simbolo" aria-hidden="true">
            <GraduationCap size={72} strokeWidth={1.3} />
          </span>
        )}
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
