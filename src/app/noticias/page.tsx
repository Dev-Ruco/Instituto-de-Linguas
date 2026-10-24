import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Bell } from "lucide-react";
export const metadata:Metadata={title:"Notícias e avisos"};
export default function Noticias(){return <><section className="pagina-hero"><div className="contentor"><span className="sobretitulo">ACTUALIDADE INSTITUCIONAL</span><h1>Notícias e avisos.</h1><p>Um espaço para acompanhar comunicados, matrículas e actividades do Instituto.</p></div></section><section className="secao contentor"><div className="estado-vazio"><span><Bell size={32}/></span><h2>As novidades serão publicadas aqui.</h2><p>Esta secção aguarda conteúdos oficiais validados. Não apresentamos notícias ou avisos fictícios como se fossem actuais.</p><Link href="/contactos" className="ligacao-texto">Consultar contactos <ArrowUpRight size={18}/></Link></div></section></>;}
