"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
/** Revela secções uma única vez, sem voltar a desvanecer conteúdo já lido. */
export function TransicoesDeScroll() {
 const caminho=usePathname();
 useEffect(()=>{
  if(caminho!=="/")return;
  const elementos=Array.from(document.querySelectorAll<HTMLElement>("[data-scroll-section]"));
  if(!("IntersectionObserver" in window)||window.matchMedia("(prefers-reduced-motion: reduce)").matches){
    elementos.forEach(e=>e.classList.add("scroll-em-foco"));return;
  }
  const observador=new IntersectionObserver(entradas=>{
    entradas.forEach(entrada=>{if(entrada.isIntersecting){entrada.target.classList.add("scroll-em-foco");observador.unobserve(entrada.target)}});
  },{threshold:0.05,rootMargin:"0px 0px 100px 0px"});
  elementos.forEach(e=>{if(e.getBoundingClientRect().top<window.innerHeight+100)e.classList.add("scroll-em-foco");else observador.observe(e)});
  document.documentElement.classList.add("scroll-transicoes-activas");
  return ()=>{observador.disconnect();document.documentElement.classList.remove("scroll-transicoes-activas")};
 },[caminho]);return null;
}