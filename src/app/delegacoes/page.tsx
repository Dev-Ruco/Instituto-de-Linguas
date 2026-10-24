import type { Metadata } from "next";
import { MapPin, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { delegacoes } from "@/lib/conteudos";
export const metadata: Metadata={title:"Delegações"};
export default function Delegacoes(){return <><section className="pagina-hero"><div className="contentor"><span className="sobretitulo">PRESENÇA NO TERRITÓRIO</span><h1>Mais perto de si.</h1><p>Explore as localidades indicadas na comunicação pública da instituição.</p></div></section><section className="secao contentor"><div className="secao-cabecalho"><div><span className="sobretitulo">ENCONTRE UMA DELEGAÇÃO</span><h2>Escolha a sua cidade.</h2></div></div><div className="delegacoes-grid">{delegacoes.map(d=><article className="delegacao" key={d.cidade}><span className="pin-delegacao"><MapPin size={20}/></span><div><h3>{d.cidade}</h3><p>{d.provincia}</p></div><Link href="/contactos" aria-label={`Pedir informação sobre ${d.cidade}`}><ArrowUpRight size={20}/></Link></article>)}</div><p className="aviso-conteudo">A lista de delegações baseia-se no material promocional fornecido e carece de confirmação quanto a endereços, contactos e funcionamento.</p></section></>;}
