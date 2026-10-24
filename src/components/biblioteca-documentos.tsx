"use client";
import { useMemo, useState } from "react";
import { ArrowDownToLine, CalendarDays, FileText, Search, SlidersHorizontal } from "lucide-react";
import { documentos, type CategoriaDocumento } from "@/lib/documentos";
const categorias: ("Todos" | CategoriaDocumento)[] = ["Todos","Editais","Comunicados","Calendários","Formulários","Regulamentos"];
export function BibliotecaDocumentos(){
  const [pesquisa, definirPesquisa]=useState("");
  const [categoria, definirCategoria]=useState<"Todos" | CategoriaDocumento>("Todos");
  const resultados=useMemo(()=>documentos.filter(d=>{
    const corresponde=categoria==="Todos"||d.categoria===categoria;
    const termo=pesquisa.trim().toLocaleLowerCase("pt-PT");
    return corresponde&&(!termo||[d.titulo,d.descricao,d.categoria].join(" ").toLocaleLowerCase("pt-PT").includes(termo));
  }),[pesquisa,categoria]);
  return <div className="biblioteca-documentos">
    <div className="documentos-barra">
      <label className="documentos-pesquisa"><Search size={19} aria-hidden="true"/><span className="sr-only">Pesquisar documentos</span><input value={pesquisa} onChange={e=>definirPesquisa(e.target.value)} placeholder="Pesquisar editais, calendários, regulamentos..." type="search"/></label>
      <span className="documentos-contagem"><SlidersHorizontal size={16}/> {resultados.length} {resultados.length===1?"documento":"documentos"}</span>
    </div>
    <div className="documentos-categorias" role="group" aria-label="Filtrar por categoria">
      {categorias.map(c=><button key={c} type="button" className={categoria===c?"documentos-filtro activo":"documentos-filtro"} aria-pressed={categoria===c} onClick={()=>definirCategoria(c)}>{c}</button>)}
    </div>
    {resultados.length ? <div className="documentos-grelha">{resultados.map(d=><article className="documento-cartao" key={d.id}>
      <div className="documento-topo"><span className="documento-icone"><FileText size={26} strokeWidth={1.7}/></span><span className="documento-formato">PDF</span></div>
      <span className="documento-categoria">{d.categoria}</span>
      <h2>{d.titulo}</h2><p>{d.descricao}</p>
      <div className="documento-rodape">
        {d.ficheiro ? <a href={d.ficheiro} className="documento-descarregar" target="_blank" rel="noopener noreferrer" download><ArrowDownToLine size={17}/> Descarregar PDF</a> : <span className="documento-pendente">Disponível brevemente</span>}
        {d.data&&<span className="documento-data"><CalendarDays size={14}/>{d.data}</span>}
      </div>
    </article>)}</div> : <div className="documentos-vazio"><FileText size={28}/><h2>Nenhum documento encontrado</h2><p>Experimente outra palavra ou categoria.</p><button type="button" onClick={()=>{definirPesquisa("");definirCategoria("Todos")}}>Limpar filtros</button></div>}
  </div>;
}
