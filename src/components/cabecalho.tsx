"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const itens = [
 { titulo:"Início", href:"/" },
 { titulo:"O Instituto", href:"/instituto", submenu:[{titulo:"Conhecer o Instituto",href:"/instituto"},{titulo:"Direcção institucional",href:"/instituto#direccao"}] },
 { titulo:"Cursos", href:"/cursos", submenu:[{titulo:"Todos os cursos",href:"/cursos"},{titulo:"Inglês",href:"/cursos/ingles"},{titulo:"Francês",href:"/cursos/frances"},{titulo:"Português",href:"/cursos/portugues"},{titulo:"Língua e Cultura Chinesa",href:"/cursos/chines"},{titulo:"Línguas Moçambicanas",href:"/cursos/linguas-mocambicanas"},{titulo:"Preparação para Exames",href:"/cursos/preparacao-exames"}] },
 { titulo:"Delegações", href:"/delegacoes" },
 { titulo:"Notícias", href:"/noticias" },
 { titulo:"Documentos", href:"/documentos" },
 { titulo:"Contactos", href:"/contactos" },
 { titulo:"Portal Académico", href:"/portal" }
];
export function Cabecalho() {
 const [aberto,definirAberto]=useState(false);
 const [submenuAberto,definirSubmenuAberto]=useState<string|null>(null);
 const [compacto,definirCompacto]=useState(false);
 const caminho=usePathname();
 useEffect(()=>{definirAberto(false);definirSubmenuAberto(null)},[caminho]);
 useEffect(()=>{const verificar=()=>definirCompacto(window.scrollY>64);verificar();window.addEventListener("scroll",verificar,{passive:true});return()=>window.removeEventListener("scroll",verificar)},[]);
 return <header className={compacto?"cabecalho compacto":"cabecalho"}>
  <div className="barra-superior"><div className="contentor barra-interna"><span>Instituto de Línguas · Moçambique</span><span>Aprenda connosco a comunicar com o mundo</span></div></div>
  <div className="contentor cabecalho-interior">
   <Link className="marca" href="/" aria-label="Instituto de Línguas — página inicial"><img className="marca-imagem" src="/images/instituto/logo-instituto-linguas.webp" alt="Instituto de Línguas — Moçambique" width="170" height="75"/></Link>
   <nav className={aberto?"navegacao aberta":"navegacao"} aria-label="Navegação principal" id="menu-principal">
    {itens.map(item=>{
      const activo=caminho===item.href||(item.href!=="/"&&caminho.startsWith(item.href+"/"));
      return item.submenu ? <div className={submenuAberto===item.href?"nav-grupo expandido":"nav-grupo"} key={item.href}>
       <Link href={item.href} aria-current={activo?"page":undefined} className={activo?"nav-ligacao activa":"nav-ligacao"}>{item.titulo}</Link>
       <button type="button" className="nav-submenu-botao" aria-label={`Mostrar opções de ${item.titulo}`} aria-expanded={submenuAberto===item.href} onClick={()=>definirSubmenuAberto(submenuAberto===item.href?null:item.href)}><ChevronDown size={14}/></button>
       <div className="nav-submenu">{item.submenu.map(sub=><Link key={sub.href} href={sub.href} onClick={()=>{definirAberto(false);definirSubmenuAberto(null)}} className={caminho===sub.href?"nav-submenu-ligacao seleccionada":"nav-submenu-ligacao"}>{sub.titulo}</Link>)}</div>
      </div> : <Link key={item.href} href={item.href} target={item.href==="/portal"?"_blank":undefined} rel={item.href==="/portal"?"noopener noreferrer":undefined} aria-current={activo?"page":undefined} className={activo?"nav-ligacao activa":"nav-ligacao"}>{item.titulo}</Link>;
    })}
    <Link className="botao botao-primario nav-accao" aria-current={caminho==="/matriculas"?"page":undefined} href="/matriculas">Matrículas <ArrowUpRight size={17}/></Link>
   </nav>
   <button className="menu-movel" type="button" aria-expanded={aberto} aria-controls="menu-principal" aria-label={aberto?"Fechar menu":"Abrir menu"} onClick={()=>definirAberto(!aberto)}>{aberto?<X/>:<Menu/>}</button>
  </div>
 </header>;
}
