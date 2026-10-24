"use client";
import { useMemo, useState } from "react";
import { Search, FileText, CalendarDays } from "lucide-react";
import { noticias, type CategoriaPublicacao } from "@/lib/conteudos";
import { CartaoNoticia } from "@/components/cartao-noticia";
const categorias: Array<"Todas" | CategoriaPublicacao> = ["Todas", "Notícias", "Editais e Comunicados", "Avisos Académicos", "Eventos"];
export function ListaNoticias() {
  const [categoria, definirCategoria] = useState<(typeof categorias)[number]>("Todas");
  const [pesquisa, definirPesquisa] = useState("");
  const publicacoes = useMemo(() => noticias.filter(n =>
    (categoria === "Todas" || n.categoria === categoria) &&
    (n.titulo + " " + n.resumo).toLocaleLowerCase("pt").includes(pesquisa.toLocaleLowerCase("pt"))
  ), [categoria, pesquisa]);
  return <>
    <div className="filtros-cursos">
      <label className="campo-pesquisa"><Search size={19}/><input aria-label="Pesquisar publicações" placeholder="Pesquisar notícias e avisos..." value={pesquisa} onChange={e=>definirPesquisa(e.target.value)}/></label>
      <div className="filtros-botoes">{categorias.map(c=><button key={c} type="button" className={c===categoria?"filtro activo":"filtro"} aria-pressed={c===categoria} onClick={()=>definirCategoria(c)}>{c}</button>)}</div>
    </div>
    <p className="contador-resultados">{publicacoes.length} {publicacoes.length===1?"publicação encontrada":"publicações encontradas"}</p>
    {publicacoes.length>0?<div className="noticias-grid">{publicacoes.map(n=><CartaoNoticia key={n.slug} noticia={n}/>)}</div>:<div className="estado-vazio"><FileText size={32}/><h2>Sem publicações nesta categoria.</h2><p>Os editais, comunicados e avisos serão adicionados após validação institucional.</p></div>}
    <div className="aviso-conteudo"><CalendarDays size={16}/> As datas das actividades só serão apresentadas quando confirmadas. Não se publicam editais fictícios.</div>
  </>;
}
