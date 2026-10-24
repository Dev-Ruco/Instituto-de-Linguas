import type { Metadata } from "next";
import { Cabecalho } from "@/components/cabecalho";
import { Rodape } from "@/components/rodape";
import { ParceirosInstitucionais } from "@/components/parceiros-institucionais";
import { AnimacoesDeEntrada } from "@/components/animacoes-de-entrada";
import "./globals.css";
export const metadata: Metadata = {
  title: { default:"Instituto de Línguas | Protótipo institucional", template:"%s | Instituto de Línguas" },
  description:"Protótipo independente de um portal institucional de formação em línguas em Moçambique.",
  robots: { index:false, follow:false }
};
export default function RootLayout({ children }: Readonly<{children:React.ReactNode}>) {
  return <html lang="pt"><body><AnimacoesDeEntrada/><Cabecalho/><main id="conteudo">{children}</main><ParceirosInstitucionais/><Rodape/></body></html>;
}
