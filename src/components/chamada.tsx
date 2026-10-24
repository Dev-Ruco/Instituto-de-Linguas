import Link from "next/link";
import { ArrowUpRight, GraduationCap } from "lucide-react";
export function Chamada() {
  return <section data-scroll-section className="contentor chamada-bloco"><div className="chamada-conteudo">
    <span className="sobretitulo claro">A SUA PRÓXIMA ETAPA COMEÇA AQUI</span>
    <h2>O mundo abre-se a quem sabe comunicar.</h2>
    <p>Descubra os programas de formação e conheça as condições de matrícula da sua delegação.</p>
    <Link href="/matriculas" className="botao botao-amarelo">Informações sobre matrículas <ArrowUpRight size={18}/></Link>
  </div><div className="chamada-ilustracao" aria-hidden="true"><GraduationCap size={154} strokeWidth={1.1}/><span>Learn. Connect. Grow.</span></div></section>;
}
