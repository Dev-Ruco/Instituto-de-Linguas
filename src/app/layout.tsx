import type { Metadata } from "next";
import { EstruturaPublica } from "@/components/estrutura-publica";
import "./globals.css";
import "./editorial.css";
export const metadata: Metadata = {
 title: { default:"Instituto de Línguas | Protótipo institucional", template:"%s | Instituto de Línguas" },
 description:"Protótipo independente de um portal institucional de formação em línguas em Moçambique.",
 robots:{index:false,follow:false}
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){
 return <html lang="pt"><body><EstruturaPublica>{children}</EstruturaPublica></body></html>;
}
