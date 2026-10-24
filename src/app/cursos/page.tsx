import type { Metadata } from "next";
import { ListaCursos } from "@/components/lista-cursos";
export const metadata: Metadata = {title:"Cursos e exames",description:"Explore a oferta formativa demonstrativa do Instituto de Línguas."};
export default function Cursos(){return <><section className="pagina-hero"><div className="contentor"><span className="sobretitulo">OFERTA FORMATIVA</span><h1>Encontre a língua que o leva mais longe.</h1><p>Explore as áreas de formação e os programas de preparação para exames.</p></div></section><section className="secao contentor"><ListaCursos/></section></>;}
