"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, BookOpen, Building2, CalendarDays, ChevronRight, ClipboardList, GraduationCap, LayoutDashboard, LockKeyhole, Menu, School, Search, ShieldCheck, Users, Wallet, X } from "lucide-react";
type Modulo = "visao"|"delegacoes"|"estudantes"|"cursos"|"turmas"|"matriculas"|"financeiro";
const items: {id:Modulo;nome:string;icone:typeof LayoutDashboard;fase:string}[]=[
 {id:"visao",nome:"Visão geral",icone:LayoutDashboard,fase:"Interface"},
 {id:"delegacoes",nome:"Delegações",icone:Building2,fase:"API inicial"},
 {id:"estudantes",nome:"Estudantes",icone:Users,fase:"Planeado"},
 {id:"cursos",nome:"Cursos e níveis",icone:BookOpen,fase:"Planeado"},
 {id:"turmas",nome:"Turmas e horários",icone:CalendarDays,fase:"Planeado"},
 {id:"matriculas",nome:"Matrículas",icone:ClipboardList,fase:"Planeado"},
 {id:"financeiro",nome:"Gestão financeira",icone:Wallet,fase:"Planeado"}
];
const demonstracao=[{t:"Delegações",v:"—",d:"Cadastro e gestão das unidades",icon:Building2},{t:"Estudantes",v:"—",d:"Registos académicos",icon:Users},{t:"Turmas",v:"—",d:"Formação por nível",icon:School},{t:"Matrículas",v:"—",d:"Inscrições e admissões",icon:ClipboardList}];
export default function PortalAcademico(){
 const [pagina,definirPagina]=useState<Modulo>("visao");
 const [aberto,definirAberto]=useState(false);
 const [pesquisa,definirPesquisa]=useState("");
 const seleccionado=items.find(i=>i.id===pagina)!;
 const conteudo=pagina==="visao"?demonstracao:demonstracao.filter(i=>i.t.toLowerCase().includes(pagina.slice(0,-1)));
 return <div className="portal-shell">
  <aside className={aberto?"portal-sidebar aberto":"portal-sidebar"} aria-label="Módulos de gestão">
   <div className="portal-identidade"><div className="portal-logo"><GraduationCap size={25}/></div><div><strong>IL Gestão</strong><small>Portal Académico</small></div><button className="portal-fechar" aria-label="Fechar menu" onClick={()=>definirAberto(false)}><X size={18}/></button></div>
   <span className="portal-menu-titulo">ÁREA DE GESTÃO</span>
   <nav className="portal-menu">{items.map(item=><button key={item.id} onClick={()=>{definirPagina(item.id);definirAberto(false);definirPesquisa("")}} className={pagina===item.id?"portal-menu-item activo":"portal-menu-item"} aria-current={pagina===item.id?"page":undefined}><item.icone size={18}/><span>{item.nome}</span>{item.id!=="visao"&&<ChevronRight size={14}/>}</button>)}</nav>
   <div className="portal-sidebar-fundo"><ShieldCheck size={19}/><span>Acesso operacional disponível após implementação de autenticação.</span></div>
  </aside>
  <div className="portal-conteudo">
   <header className="portal-topo"><div className="portal-topo-inicio"><button className="portal-menu-movel" onClick={()=>definirAberto(true)} aria-label="Abrir módulos"><Menu size={21}/></button><span>Gestão académica</span><ChevronRight size={14}/><strong>{seleccionado.nome}</strong></div><Link href="/" className="portal-regresso">Voltar ao website <ArrowRight size={16}/></Link></header>
   <div className="portal-pagina">
    <div className="portal-aviso"><LockKeyhole size={19}/><div><strong>Pré-visualização do sistema académico</strong><span>Esta é a interface demonstrativa. Os indicadores não representam dados reais e as operações administrativas permanecem indisponíveis até à activação segura do backend.</span></div></div>
    <div className="portal-pagina-cabecalho"><div><span className="portal-sobretitulo">INSTITUTO DE LÍNGUAS · MOÇAMBIQUE</span><h1>{pagina==="visao"?"Painel de gestão":seleccionado.nome}</h1><p>{pagina==="visao"?"Uma visão centralizada das actividades académicas e administrativas.":"Área reservada à gestão de "+seleccionado.nome.toLowerCase()+", preparada para integração com a API Spring Boot."}</p></div><span className="portal-estado">{seleccionado.fase}</span></div>
    {pagina==="visao"?<>
      <div className="portal-metricas">{demonstracao.map(d=><div className="portal-metrica" key={d.t}><div className="portal-metrica-topo"><span>{d.t}</span><d.icon size={21}/></div><strong>{d.v}</strong><small>{d.d}</small></div>)}</div>
      <div className="portal-blocos"><section className="portal-painel"><h2>Estrutura do sistema</h2><p>O desenvolvimento seguirá uma arquitectura modular, com informação centralizada e permissões específicas por delegação.</p><div className="portal-etapas">{["Delegações — API REST inicial","Estudantes, cursos e docentes — próxima fase","Turmas, horários e matrículas — fase seguinte","Financeiro e relatórios — fase posterior"].map((e,i)=><div key={e}><span>{String(i+1).padStart(2,"0")}</span>{e}</div>)}</div></section><section className="portal-painel portal-painel-azul"><ShieldCheck size={32}/><h2>Gestão com segurança</h2><p>O acesso a dados de estudantes, docentes e finanças exigirá autenticação, perfis autorizados e registo de alterações.</p><span>Spring Boot + PostgreSQL</span></section></div>
    </>:<section className="portal-painel portal-modulo"><div className="portal-modulo-topo"><div><h2>Área de {seleccionado.nome.toLowerCase()}</h2><p>Funcionalidades previstas para este módulo.</p></div><div className="portal-pesquisa"><Search size={16}/><input value={pesquisa} onChange={e=>definirPesquisa(e.target.value)} placeholder="Pesquisar funcionalidades" aria-label="Pesquisar funcionalidades"/></div></div><div className="portal-tabela"><div className="portal-tabela-cabecalho"><span>Funcionalidade</span><span>Estado</span></div>{([pagina==="delegacoes"?"Registar e consultar delegações":"Registar "+seleccionado.nome.toLowerCase(),"Consultar informações","Actualizar registos","Gerir permissões e auditoria"].filter(item=>item.toLocaleLowerCase("pt-PT").includes(pesquisa.toLocaleLowerCase("pt-PT")))).map((nome,i)=><div className="portal-tabela-linha" key={nome}><span>{nome}</span><span className="portal-etiqueta">{pagina==="delegacoes"&&i<3?"API local":"Planeado"}</span></div>)}{pesquisa&&![pagina==="delegacoes"?"Registar e consultar delegações":"Registar "+seleccionado.nome.toLowerCase(),"Consultar informações","Actualizar registos","Gerir permissões e auditoria"].some(item=>item.toLocaleLowerCase("pt-PT").includes(pesquisa.toLocaleLowerCase("pt-PT")))&&<p>Sem resultados para esta pesquisa.</p>}</div></section>}
   </div>
  </div>
 </div>;
}
