"use client";
import Link from "next/link";
import { ArrowUpRight, GraduationCap } from "lucide-react";
import { useState } from "react";
import { cursos } from "@/lib/conteudos";

/** Explorador compacto: um único painel, sem grelha de cartões. */
export function ExploradorLinguas() {
 const [activo, definirActivo] = useState(cursos[0].slug);
 const curso = cursos.find(c => c.slug === activo) ?? cursos[0];
 return <div className="explorador-linguas">
  <div className="explorador-opcoes" role="group" aria-label="Escolher língua ou formação">
   {cursos.map(c=><button key={c.slug} type="button" aria-pressed={c.slug===activo} className={c.slug===activo?"explorador-opcao seleccionada":"explorador-opcao"} onClick={()=>definirActivo(c.slug)}>
    <span className="explorador-simbolo" aria-hidden="true">{c.bandeira ?? <GraduationCap size={24}/>}</span>
    <span>{c.titulo}</span>
   </button>)}
  </div>
  <div className="explorador-painel" aria-live="polite" key={curso.slug}>
    <div className="explorador-painel-texto">
     <span className="sobretitulo">{curso.etiqueta}</span>
     <h3>{curso.titulo}</h3>
     <p>{curso.descricao}</p>
     <div className="explorador-competencias">{curso.areas.map(area=><span key={area}>{area}</span>)}</div>
     <Link href={`/cursos/${curso.slug}`} className="botao botao-azul">Conhecer o curso <ArrowUpRight size={18}/></Link>
    </div>
    <div className="explorador-marca" aria-hidden="true">{curso.bandeira ?? <GraduationCap size={100} strokeWidth={1.1}/>}</div>
  </div>
 </div>;
}
