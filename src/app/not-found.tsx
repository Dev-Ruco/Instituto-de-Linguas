import Link from "next/link";
export default function NaoEncontrada(){return <div className="contentor pagina-404"><span className="sobretitulo">ERRO 404</span><h1>Página não encontrada.</h1><p>O endereço procurado não existe ou foi alterado.</p><Link href="/" className="botao botao-azul">Voltar ao início</Link></div>;}
