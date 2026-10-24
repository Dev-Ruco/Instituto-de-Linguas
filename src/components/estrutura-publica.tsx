"use client";
import { usePathname } from "next/navigation";
import { Cabecalho } from "@/components/cabecalho";
import { Rodape } from "@/components/rodape";
import { ParceirosInstitucionais } from "@/components/parceiros-institucionais";
import { AnimacoesDeEntrada } from "@/components/animacoes-de-entrada";
export function EstruturaPublica({children}:{children:React.ReactNode}){
 const caminho=usePathname();
 if(caminho==="/portal"||caminho.startsWith("/portal/"))return <main id="conteudo" className="portal-main">{children}</main>;
 return <><AnimacoesDeEntrada/><Cabecalho/><main id="conteudo">{children}</main><ParceirosInstitucionais/><Rodape/></>;
}
