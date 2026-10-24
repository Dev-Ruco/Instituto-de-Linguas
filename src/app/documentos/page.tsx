import type { Metadata } from "next";
import { BibliotecaDocumentos } from "@/components/biblioteca-documentos";
export const metadata:Metadata={title:"Documentos e publicações",description:"Biblioteca documental do Instituto de Línguas: editais, comunicados, calendários, formulários e regulamentos."};
export default function Documentos(){
 return <><section className="pagina-hero"><div className="contentor"><span className="sobretitulo">CENTRO DE DOCUMENTAÇÃO</span><h1>Documentos e publicações</h1><p>Um único espaço para consultar editais, comunicados, calendários, formulários e regulamentos do Instituto.</p></div></section>
 <section className="secao contentor documentos-pagina"><div className="documentos-introducao"><div><span className="sobretitulo">BIBLIOTECA DOCUMENTAL</span><h2>Encontre a informação que procura.</h2></div><p>Os exemplos abaixo mostram como será organizada a documentação. Os ficheiros oficiais serão disponibilizados após validação pela instituição.</p></div>
 <div className="documentos-aviso" role="note">Área demonstrativa: os documentos apresentados são modelos de categorias e ainda não estão disponíveis para descarregar. Não representam editais ou comunicados oficiais em vigor.</div>
 <BibliotecaDocumentos/></section></>;
}
