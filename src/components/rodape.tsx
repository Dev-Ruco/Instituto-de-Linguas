import Link from "next/link";
import { ArrowUpRight, MapPin, Mail, Phone } from "lucide-react";
import { contactosPublicos } from "@/lib/conteudos";
export function Rodape() {
  return <footer className="rodape">
    <div className="contentor rodape-grid">
      <div className="rodape-identidade"><div className="rodape-logo">il<span>.</span> <strong>Instituto de Línguas</strong></div><p>Aprenda connosco a comunicar com o mundo.</p><p className="nota-rodape">Proposta demonstrativa independente, não constituindo website oficial da instituição.</p></div>
      <div><h3>Explorar</h3><Link href="/instituto">O Instituto</Link><Link href="/cursos">Cursos e exames</Link><Link href="/delegacoes">Delegações</Link><Link href="/noticias">Notícias e avisos</Link></div>
      <div><h3>Informações</h3><Link href="/matriculas">Matrículas</Link><Link href="/contactos">Contactos</Link><a href={contactosPublicos.website} target="_blank" rel="noopener noreferrer">Domínio institucional <ArrowUpRight size={13}/></a></div>
      <div><h3>Contactos públicos</h3><p><MapPin size={16}/>{contactosPublicos.endereco}</p><p><Phone size={16}/>{contactosPublicos.telefone}</p><p><Mail size={16}/>{contactosPublicos.email}</p></div>
    </div>
    <div className="contentor rodape-base"><span>© {new Date().getFullYear()} · Protótipo do Instituto de Línguas</span><span>Desenvolvido para demonstração institucional</span></div>
  </footer>;
}
