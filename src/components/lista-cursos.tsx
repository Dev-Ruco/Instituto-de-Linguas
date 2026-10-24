"use client";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { cursos } from "@/lib/conteudos";
import { CartaoCurso } from "@/components/cartao-curso";
export function ListaCursos(){
 const [pesquisa, definirPesquisa] = useState("");
 const [filtro, definirFiltro] = useState("Todos");
 const categorias = ["Todos", "Línguas internacionais", "Línguas nacionais", "Certificação"];
 const resultados = useMemo(()=>cursos.filter(c=>(filtro==="Todos" || c.etiqueta===filtro) && (c.titulo+" "+c.resumo).toLocaleLowerCase("pt").includes(pesquisa.toLocaleLowerCase("pt"))),[pesquisa,filtro]);
 return <><div className="filtros-cursos"><label className="campo-pesquisa"><Search size={20}/><input value={pesquisa} onChange={e=>definirPesquisa(e.target.value)} placeholder="Pesquisar uma língua..." aria-label="Pesquisar cursos"/></label><div className="filtros-botoes" aria-label="Categorias de cursos">{categorias.map(c=><button type="button" className={filtro===c?"filtro activo":"filtro"} onClick={()=>definirFiltro(c)} key={c} aria-pressed={filtro===c}>{c}</button>)}</div></div><p className="contador-resultados">{resultados.length} {resultados.length===1?"curso encontrado":"cursos encontrados"}</p>{resultados.length?<div className="cursos-grid">{resultados.map((c,i)=><CartaoCurso key={c.slug} curso={c} indice={i}/>)}</div>:<div className="vazio">Não foram encontrados cursos para esta pesquisa. Experimente outro termo.</div>}<p className="aviso-conteudo">A disponibilidade, os níveis e os horários de cada programa devem ser confirmados junto da instituição.</p></>;
}
