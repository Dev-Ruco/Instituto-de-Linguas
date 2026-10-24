"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRight, GraduationCap, Search } from "lucide-react";
import { cursos } from "@/lib/conteudos";

export function ListaCursos(){
 const [pesquisa, definirPesquisa]=useState("");
 const [filtro, definirFiltro]=useState("Todos");
 const categorias=["Todos","Línguas internacionais","Línguas nacionais","Certificação"];
 const resultados=useMemo(()=>cursos.filter(c=>(filtro==="Todos"||c.etiqueta===filtro)&&[c.titulo,c.resumo,c.descricao,c.etiqueta].join(" ").toLocaleLowerCase("pt-PT").includes(pesquisa.trim().toLocaleLowerCase("pt-PT"))),[pesquisa,filtro]);
 return <>
  <div className="filtros-cursos">
   <label className="campo-pesquisa"><Search size={19} aria-hidden="true"/><input value={pesquisa} onChange={e=>definirPesquisa(e.target.value)} placeholder="Pesquisar uma língua..." aria-label="Pesquisar cursos" type="search"/></label>
   <div className="filtros-botoes" aria-label="Categorias de cursos">{categorias.map(c=><button type="button" key={c} className={filtro===c?"filtro activo":"filtro"} onClick={()=>definirFiltro(c)} aria-pressed={filtro===c}>{c}</button>)}</div>
  </div>
  <p className="contador-resultados">{resultados.length} {resultados.length===1?"curso encontrado":"cursos encontrados"}</p>
  {resultados.length ? <div className="catalogo-cursos">{resultados.map(c=><Link href={`/cursos/${c.slug}`} className="catalogo-linha" key={c.slug}>
   <span className="catalogo-identidade" aria-hidden="true">{c.bandeira??<GraduationCap size={25}/>}</span>
   <span className="catalogo-corpo"><span className="catalogo-categoria">{c.etiqueta}</span><strong>{c.titulo}</strong><span className="catalogo-resumo">{c.resumo}</span></span>
   <span className="catalogo-acao">Ver programa <ArrowUpRight size={18}/></span>
  </Link>)}</div> : <div className="vazio">Não foram encontrados cursos. Experimente outro termo ou categoria.</div>}
  <p className="aviso-conteudo">A disponibilidade, os níveis e os horários de cada programa devem ser confirmados junto da instituição.</p>
 </>;
}
