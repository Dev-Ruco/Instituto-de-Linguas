"use client";
import { useEffect, useRef, useState } from "react";
import { CalendarDays, GraduationCap, MapPinned } from "lucide-react";
const dados = [
  { valor: 1995, inicial: 1995, sufixo: "", descricao: "Ano de fundação", contexto: "Três décadas dedicadas ao ensino de línguas", Icone: CalendarDays },
  { valor: 30000, inicial: 0, sufixo: "+", descricao: "Formandos", contexto: "Mais de 30 mil pessoas formadas", Icone: GraduationCap },
  { valor: 8, inicial: 0, sufixo: "", descricao: "Províncias", contexto: "Presença em oito províncias de Moçambique", Icone: MapPinned },
];
export function NumerosInstitucionais() {
 const area=useRef<HTMLDivElement>(null);
 const [contagem, definirContagem]=useState([1995,0,0]);
 useEffect(()=>{
   const elemento=area.current;
   if(!elemento)return;
   let raf=0;
   let iniciou=false;
   const animar=()=>{
     if(iniciou)return; iniciou=true;
     if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){definirContagem(dados.map(d=>d.valor));return;}
     const inicio=performance.now();
     const passo=(agora:number)=>{
       const progresso=Math.min(1,(agora-inicio)/1700);
       const suavizado=1-Math.pow(1-progresso,3);
       definirContagem(dados.map(d=>Math.round(d.inicial+(d.valor-d.inicial)*suavizado)));
       if(progresso<1)raf=requestAnimationFrame(passo);
     };
     raf=requestAnimationFrame(passo);
   };
   if(!("IntersectionObserver" in window)){animar();return;}
   const observador=new IntersectionObserver(([entrada])=>{if(entrada.isIntersecting){animar();observador.disconnect();}},{threshold:.25});
   observador.observe(elemento);
   return ()=>{observador.disconnect();cancelAnimationFrame(raf)};
 },[]);
 return <div className="contentor numeros-institucionais" ref={area} aria-label="Instituto de Línguas em números">
  {dados.map((d,i)=><div className="numero-institucional" key={d.descricao}>
    <span className="numero-institucional-icone"><d.Icone size={22} strokeWidth={1.8}/></span>
    <div><strong className="numero-institucional-valor">{contagem[i].toLocaleString("pt-PT")}{d.sufixo}</strong><span className="numero-institucional-titulo">{d.descricao}</span><small>{d.contexto}</small></div>
  </div>)}
 </div>;
}
