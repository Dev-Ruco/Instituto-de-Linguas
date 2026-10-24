"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Revela cada elemento apenas na primeira entrada no campo de visão. */
export function AnimacoesDeEntrada(){
 const caminho=usePathname();
 useEffect(()=>{
   const elementos=Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
   const prefereReducao=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
   if(prefereReducao||!("IntersectionObserver" in window)){
     elementos.forEach(el=>el.classList.add("is-visible"));
     return;
   }
   const observador=new IntersectionObserver(entradas=>{
     entradas.forEach(entrada=>{
       if(entrada.isIntersecting){
         entrada.target.classList.add("is-visible");
         observador.unobserve(entrada.target);
       }
     });
   },{threshold:0.07,rootMargin:"0px 0px 45px 0px"});
   elementos.forEach(el=>{if(el.getBoundingClientRect().top < window.innerHeight+45){el.classList.add("is-visible")}else{observador.observe(el)}});
   document.documentElement.classList.add("motion-ready");
   return ()=>observador.disconnect();
 },[caminho]);
 return null;
}
