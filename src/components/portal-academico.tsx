"use client";
import Link from "next/link";
import {useMemo,useState} from "react";
import {ArrowRight,BookOpen,Building2,CalendarDays,ChevronRight,ClipboardList,GraduationCap,LayoutDashboard,LockKeyhole,Menu,School,Search,ShieldCheck,Users,Wallet,X,CheckCircle2,RotateCcw,Plus} from "lucide-react";
type Modulo="visao"|"delegacoes"|"estudantes"|"cursos"|"turmas"|"matriculas"|"financeiro";
type Pedido={id:number;nome:string;curso:string;delegacao:string;turma:string;estado:"Pendente"|"Confirmada"};
const iniciais:Pedido[]=[
{id:101,nome:"Estudante Exemplo A",curso:"Inglês A1",delegacao:"Maputo",turma:"ING-A1-M01",estado:"Confirmada"},
{id:102,nome:"Estudante Exemplo B",curso:"Francês A1",delegacao:"Beira",turma:"FRA-A1-B01",estado:"Pendente"},
{id:103,nome:"Estudante Exemplo C",curso:"Inglês A1",delegacao:"Maputo",turma:"ING-A1-M01",estado:"Pendente"}
];
const items:{id:Modulo;nome:string;icone:typeof LayoutDashboard}[]=[
{id:"visao",nome:"Visão geral",icone:LayoutDashboard},{id:"delegacoes",nome:"Delegações",icone:Building2},
{id:"estudantes",nome:"Estudantes",icone:Users},{id:"cursos",nome:"Cursos e níveis",icone:BookOpen},
{id:"turmas",nome:"Turmas e horários",icone:CalendarDays},{id:"matriculas",nome:"Matrículas",icone:ClipboardList},
{id:"financeiro",nome:"Gestão financeira",icone:Wallet}];
const cursos=[{nome:"Inglês A1",turma:"ING-A1-M01",delegacao:"Maputo",vagas:20},{nome:"Francês A1",turma:"FRA-A1-B01",delegacao:"Beira",vagas:15},{nome:"Português B1",turma:"POR-B1-M02",delegacao:"Maputo",vagas:18}];
export default function PortalAcademico(){
const [pagina,definirPagina]=useState<Modulo>("visao");
const [aberto,definirAberto]=useState(false);
const [pedidos,definirPedidos]=useState<Pedido[]>(iniciais);
const [pesquisa,definirPesquisa]=useState("");
const [nome,definirNome]=useState("");
const [curso,definirCurso]=useState("Inglês A1");
const [aviso,definirAviso]=useState("");
const escolhido=cursos.find(c=>c.nome===curso)!;
const totalConfirmadas=pedidos.filter(p=>p.estado==="Confirmada").length;
const filtrados=useMemo(()=>pedidos.filter(p=>[p.nome,p.curso,p.delegacao,p.estado,String(p.id)].join(" ").toLocaleLowerCase("pt-PT").includes(pesquisa.toLocaleLowerCase("pt-PT"))),[pedidos,pesquisa]);
const seleccionar=(id:Modulo)=>{definirPagina(id);definirAberto(false);definirPesquisa("");definirAviso("")};
const criar=(e:React.FormEvent<HTMLFormElement>)=>{e.preventDefault();const valor=nome.trim();if(valor.length<3)return;const numero=Math.max(100,...pedidos.map(p=>p.id))+1;definirPedidos(p=>[...p,{id:numero,nome:valor,curso:escolhido.nome,delegacao:escolhido.delegacao,turma:escolhido.turma,estado:"Pendente"}]);definirNome("");definirAviso("Candidatura demonstrativa #"+numero+" registada. Pode confirmá-la na lista abaixo.");definirPagina("matriculas")};
const confirmar=(id:number)=>{const p=pedidos.find(x=>x.id===id);if(!p)return;const turma=cursos.find(c=>c.turma===p.turma);if(turma&&pedidos.filter(x=>x.turma===p.turma&&x.estado==="Confirmada").length>=turma.vagas){definirAviso("A turma atingiu o número máximo de vagas.");return;}definirPedidos(a=>a.map(x=>x.id===id?{...x,estado:"Confirmada"}:x));definirAviso("Matrícula demonstrativa #"+id+" confirmada.")};
const titulo=items.find(i=>i.id===pagina)!.nome;
return <div className="portal-shell">
<aside className={aberto?"portal-sidebar aberto":"portal-sidebar"} aria-label="Módulos de gestão">
<div className="portal-identidade"><div className="portal-logo"><GraduationCap size={25}/></div><div><strong>IL Gestão</strong><small>Portal Académico</small></div><button className="portal-fechar" aria-label="Fechar menu" onClick={()=>definirAberto(false)}><X size={18}/></button></div>
<span className="portal-menu-titulo">GESTÃO · AMBIENTE DEMONSTRATIVO</span>
<nav className="portal-menu">{items.map(item=><button type="button" key={item.id} onClick={()=>seleccionar(item.id)} className={pagina===item.id?"portal-menu-item activo":"portal-menu-item"} aria-current={pagina===item.id?"page":undefined}><item.icone size={18}/><span>{item.nome}</span>{item.id!=="visao"&&<ChevronRight size={14}/>}</button>)}</nav>
<div className="portal-sidebar-fundo"><ShieldCheck size={19}/><span>Dados fictícios, sem gravação no servidor. Recarregar a página repõe a demonstração.</span></div>
</aside>
<div className="portal-conteudo">
<header className="portal-topo"><div className="portal-topo-inicio"><button className="portal-menu-movel" type="button" onClick={()=>definirAberto(true)} aria-label="Abrir módulos"><Menu size={21}/></button><span>Gestão académica</span><ChevronRight size={14}/><strong>{titulo}</strong></div><Link href="/" className="portal-regresso">Voltar ao website <ArrowRight size={16}/></Link></header>
<div className="portal-pagina">
<div className="portal-aviso"><LockKeyhole size={19}/><div><strong>Protótipo independente — demonstração com dados fictícios</strong><span>Não corresponde a um sistema oficial. Não introduza nomes verdadeiros nem dados pessoais. Os registos existem apenas nesta sessão do navegador; o backend Spring Boot ainda não está ligado a esta interface.</span></div></div>
<div className="portal-pagina-cabecalho"><div><span className="portal-sobretitulo">SISTEMA INTEGRADO · PROVA DE CONCEITO</span><h1>{pagina==="visao"?"Painel de gestão":titulo}</h1><p>{pagina==="visao"?"Acompanhe um percurso académico demonstrativo, desde a candidatura até à confirmação.":"Explore o funcionamento previsto do módulo "+titulo.toLowerCase()+"."}</p></div><span className="portal-estado">Simulação interactiva</span></div>
{aviso&&<div className="portal-feedback" role="status"><CheckCircle2 size={19}/>{aviso}</div>}
{pagina==="visao"&&<>
<div className="portal-metricas">{[{t:"Delegações simuladas",v:"2",d:"Maputo e Beira",icon:Building2},{t:"Candidaturas",v:String(pedidos.length),d:"Total nesta sessão",icon:Users},{t:"Turmas disponíveis",v:String(cursos.length),d:"Catálogo demonstrativo",icon:School},{t:"Matrículas confirmadas",v:String(totalConfirmadas),d:"Actualização imediata",icon:ClipboardList}].map(d=><div className="portal-metrica" key={d.t}><div className="portal-metrica-topo"><span>{d.t}</span><d.icon size={21}/></div><strong>{d.v}</strong><small>{d.d}</small></div>)}</div>
<div className="portal-blocos"><section className="portal-painel"><h2>Experimente uma matrícula</h2><p>Registe um estudante fictício, atribua-lhe um curso e confirme a inscrição. O painel actualiza os indicadores automaticamente.</p><div className="portal-etapas">{["01 · Registar candidatura","02 · Associar a curso e turma","03 · Confirmar matrícula","04 · Consultar indicadores"].map(s=><div key={s}>{s}</div>)}</div><button type="button" className="portal-accao" onClick={()=>seleccionar("matriculas")}>Iniciar demonstração <ArrowRight size={17}/></button></section><section className="portal-painel portal-painel-azul"><ShieldCheck size={32}/><h2>Da ideia à implementação</h2><p>A demonstração ilustra o processo. A versão real exigirá autenticação, API Spring Boot, PostgreSQL, autorização por perfil e auditoria.</p><span>Java · Spring Boot · Next.js</span></section></div>
</>}
{pagina==="matriculas"&&<div className="portal-demo-layout">
<section className="portal-painel"><h2><Plus size={19}/> Nova candidatura fictícia</h2><p>Utilize apenas nomes inventados. Nenhuma informação é enviada ao servidor.</p>
<form className="portal-form" onSubmit={criar}><label>Identificação fictícia<input value={nome} onChange={e=>definirNome(e.target.value)} placeholder="Ex.: Estudante Exemplo D" required minLength={3} maxLength={75}/></label>
<label>Curso e nível<select value={curso} onChange={e=>definirCurso(e.target.value)}>{cursos.map(c=><option key={c.nome} value={c.nome}>{c.nome}</option>)}</select></label>
<div className="portal-resumo-turma"><strong>Turma {escolhido.turma}</strong><span>Delegação: {escolhido.delegacao} · Capacidade: {escolhido.vagas} vagas</span></div>
<button className="portal-accao" type="submit">Registar candidatura <ArrowRight size={17}/></button></form>
</section>
<section className="portal-painel"><div className="portal-demonstracao-topo"><div><h2>Candidaturas registadas</h2><p>{pedidos.length} candidaturas, {totalConfirmadas} confirmadas.</p></div><button type="button" className="portal-repor" onClick={()=>{definirPedidos(iniciais);definirAviso("Demonstração reposta ao estado inicial.");definirPesquisa("")}}><RotateCcw size={15}/> Repor</button></div>
<label className="portal-pesquisa"><Search size={16}/><input value={pesquisa} onChange={e=>definirPesquisa(e.target.value)} placeholder="Pesquisar candidaturas" aria-label="Pesquisar candidaturas"/></label>
<div className="portal-registos">{filtrados.map(p=><article className="portal-registo" key={p.id}><div><small>REF. #{p.id} · {p.delegacao}</small><strong>{p.nome}</strong><span>{p.curso} · {p.turma}</span></div><div className="portal-registo-accoes"><span className={p.estado==="Confirmada"?"portal-status confirmado":"portal-status"}>{p.estado}</span>{p.estado==="Pendente"&&<button type="button" onClick={()=>confirmar(p.id)}>Confirmar</button>}</div></article>)}{filtrados.length===0&&<p>Nenhuma candidatura encontrada.</p>}</div>
</section></div>}
{pagina==="estudantes"&&<section className="portal-painel"><h2>Estudantes da demonstração</h2><p>Acompanhe as candidaturas fictícias registadas no módulo Matrículas.</p><div className="portal-registos">{pedidos.map(p=><article className="portal-registo" key={p.id}><div><small>ESTUDANTE #{p.id}</small><strong>{p.nome}</strong><span>{p.curso} · {p.delegacao}</span></div><span className={p.estado==="Confirmada"?"portal-status confirmado":"portal-status"}>{p.estado}</span></article>)}</div><button className="portal-accao" type="button" onClick={()=>seleccionar("matriculas")}>Gerir matrículas <ArrowRight size={16}/></button></section>}
{pagina==="cursos"&&<section className="portal-painel"><h2>Cursos e níveis — dados fictícios</h2><div className="portal-registos">{cursos.map(c=><article className="portal-registo" key={c.turma}><div><small>{c.turma}</small><strong>{c.nome}</strong><span>{c.delegacao}</span></div><span className="portal-status confirmado">{c.vagas} vagas</span></article>)}</div></section>}
{pagina==="delegacoes"&&<section className="portal-painel"><h2>Delegações de demonstração</h2><p>O backend possui um módulo inicial de delegações, mas esta vista não está ligada à API.</p><div className="portal-registos">{["Maputo","Beira"].map(c=><article className="portal-registo" key={c}><div><small>DELEGAÇÃO FICTÍCIA NO CENÁRIO</small><strong>{c}</strong><span>{cursos.filter(x=>x.delegacao===c).length} turmas de exemplo</span></div></article>)}</div></section>}
{pagina==="turmas"&&<section className="portal-painel"><h2>Turmas de demonstração</h2><p>A ocupação é calculada a partir das matrículas confirmadas nesta sessão.</p><div className="portal-registos">{cursos.map(c=><article className="portal-registo" key={c.turma}><div><small>{c.delegacao}</small><strong>{c.turma}</strong><span>{c.nome}</span></div><span className="portal-status confirmado">{pedidos.filter(p=>p.turma===c.turma&&p.estado==="Confirmada").length}/{c.vagas} ocupadas</span></article>)}</div></section>}
{pagina==="financeiro"&&<section className="portal-painel"><h2>Gestão financeira</h2><p>Este módulo está previsto para uma fase posterior. Não há propinas, receitas, cobranças ou dados financeiros reais nesta demonstração.</p><div className="portal-resumo-turma">Próxima fase: regras de cobrança, pagamentos, recibos e relatórios, a validar com a instituição.</div></section>}
</div></div></div>;
}
