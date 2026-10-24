"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
const itens = [
  { titulo:"Início", href:"/" }, { titulo:"O Instituto", href:"/instituto" },
  { titulo:"Cursos", href:"/cursos" }, { titulo:"Delegações", href:"/delegacoes" },
  { titulo:"Notícias", href:"/noticias" }, { titulo:"Contactos", href:"/contactos" }
];
export function Cabecalho() {
  const [aberto, definirAberto] = useState(false);
  const [compacto, definirCompacto] = useState(false);
  const caminho = usePathname();
  useEffect(() => definirAberto(false), [caminho]);
  useEffect(()=>{const verificar=()=>definirCompacto(window.scrollY>64);verificar();window.addEventListener("scroll",verificar,{passive:true});return ()=>window.removeEventListener("scroll",verificar)},[]);
  return <header className={compacto ? "cabecalho compacto" : "cabecalho"}>
    <div className="barra-superior"><div className="contentor barra-interna"><span>Instituto de Línguas · Moçambique</span><span>Aprenda connosco a comunicar com o mundo</span></div></div>
    <div className="contentor cabecalho-interior">
      <Link className="marca" href="/" aria-label="Instituto de Línguas — página inicial">
        <span className="marca-simbolo" aria-hidden="true">il<span className="marca-ponto">.</span></span>
        <span className="marca-texto"><strong>INSTITUTO DE LÍNGUAS</strong><small>MOÇAMBIQUE</small></span>
      </Link>
      <nav className={aberto ? "navegacao aberta" : "navegacao"} aria-label="Navegação principal" id="menu-principal">
        {itens.map(item => <Link key={item.href} className={caminho === item.href ? "nav-ligacao activa" : "nav-ligacao"} href={item.href}>{item.titulo}</Link>)}
        <Link className="botao botao-primario nav-accao" href="/matriculas">Matrículas <ArrowUpRight size={17}/></Link>
      </nav>
      <button className="menu-movel" type="button" aria-expanded={aberto} aria-controls="menu-principal" aria-label={aberto ? "Fechar menu" : "Abrir menu"} onClick={() => definirAberto(!aberto)}>{aberto ? <X/> : <Menu/>}</button>
    </div>
  </header>;
}
