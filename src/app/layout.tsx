import type { Metadata } from "next";
import { Cabecalho } from "@/components/cabecalho";
import { Rodape } from "@/components/rodape";
import "./globals.css";
export const metadata: Metadata = {
  title: { default:"Instituto de Línguas | Protótipo institucional", template:"%s | Instituto de Línguas" },
  description:"Protótipo independente de um portal institucional de formação em línguas em Moçambique.",
  robots: { index:false, follow:false }
};
export default function RootLayout({ children }: Readonly<{children:React.ReactNode}>) {
  return <html lang="pt"><body><Cabecalho/><main id="conteudo">{children}</main><Rodape/></body></html>;
}
