import type { Metadata } from "next";
import { ListaNoticias } from "@/components/lista-noticias";
export const metadata: Metadata = {title:"Notícias e avisos", description:"Notícias, comunicados, editais e avisos académicos do Instituto de Línguas."};
export default function Noticias() {
 return <><section className="pagina-hero"><div className="contentor"><span className="sobretitulo">VIDA ACADÉMICA E INSTITUCIONAL</span><h1>Notícias e Actualidade</h1><p>Acompanhe acontecimentos, actividades e informações de interesse para a comunidade académica.</p></div></section><section className="secao contentor"><ListaNoticias/></section></>;
}
