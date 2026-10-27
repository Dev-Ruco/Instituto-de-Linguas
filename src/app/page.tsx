import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookOpen, Globe2, GraduationCap, MapPinned, MoveUpRight } from "lucide-react";
import { ExploradorLinguas } from "@/components/explorador-linguas";
import { Chamada } from "@/components/chamada";
import { CarrosselNoticias } from "@/components/carrossel-noticias";
import { FaixaMovimento } from "@/components/faixa-movimento";
import { AnimacaoHero } from "@/components/animacao-hero";
import { TransicoesDeScroll } from "@/components/transicoes-de-scroll";
import { SecaoDireccao } from "@/components/secao-direccao";
import { noticias } from "@/lib/conteudos";
export default function Inicio() {
  return <>
    <AnimacaoHero />
    <TransicoesDeScroll />
    <section className="hero"><div className="contentor hero-grid">
      <div className="hero-texto"><div className="etiqueta-hero"><span className="ponto-amarelo"/> EDUCAÇÃO QUE APROXIMA PESSOAS E CULTURAS</div>
        <h1>Uma nova língua.<br/><em>Um mundo</em> de possibilidades.</h1>
        <p>Construa novas oportunidades através do conhecimento. Explore os nossos programas de línguas e dê o próximo passo na sua aprendizagem.</p>
        <div className="hero-accoes"><Link className="botao botao-amarelo" href="/cursos">Explorar cursos <ArrowUpRight size={19}/></Link><Link className="ligacao-hero" href="/instituto">Conheça o Instituto <ArrowRight size={18}/></Link></div>
        </div>
      <div className="hero-visual"><div className="hero-foto" role="img" aria-label="Fotografia ilustrativa de estudantes numa actividade de aprendizagem"/><div className="hero-ornamento">IL<span>.</span></div></div>
    </div></section>
    <FaixaMovimento />
    <section data-scroll-section className="secao contentor"><div className="secao-cabecalho"><div><span className="sobretitulo">FORMAÇÃO PARA O SEU FUTURO</span><h2>Descubra uma língua.<br/><span>Descubra mais oportunidades.</span></h2></div><Link href="/cursos" className="ligacao-texto">Ver todos os cursos <ArrowUpRight size={18}/></Link></div><ExploradorLinguas/></section>
    <section data-scroll-section className="seccao-destaque"><div className="contentor destaque-grid"><div className="imagem-destaque" role="img" aria-label="Estudantes em ambiente de formação"/><div className="destaque-texto"><span className="sobretitulo">SOBRE O INSTITUTO</span><h2>Uma instituição dedicada à aprendizagem de línguas.</h2><p>Promover o conhecimento linguístico é criar pontes entre comunidades, culturas e oportunidades. Descubra a missão e a actividade do Instituto de Línguas.</p><div className="destaque-linha"><span><BookOpen size={20}/></span><div><strong>Aprendizagem de línguas</strong><p>Programas dirigidos a diferentes públicos.</p></div></div><div className="destaque-linha"><span><Globe2 size={20}/></span><div><strong>Perspectiva intercultural</strong><p>Comunicação e aproximação entre culturas.</p></div></div><Link className="botao botao-azul" href="/instituto">Conhecer o Instituto <MoveUpRight size={18}/></Link></div></div></section>
    <section data-scroll-section className="secao contentor percurso"><div className="secao-cabecalho central"><span className="sobretitulo">COMO COMEÇAR</span><h2>O seu percurso começa com uma escolha.</h2><p>Três passos para encontrar a formação que procura.</p></div><div className="passos-grid">{[{n:"01",titulo:"Escolha o curso",texto:"Explore as línguas e as opções de formação."},{n:"02",titulo:"Encontre a delegação",texto:"Consulte as unidades próximas de si."},{n:"03",titulo:"Informe-se sobre matrículas",texto:"Confirme prazos, requisitos e disponibilidade."}].map(p=><div className="passo" key={p.n}><span>{p.n}</span><h3>{p.titulo}</h3><p>{p.texto}</p></div>)}</div></section>
    <section data-scroll-section className="secao contentor noticias-editoriais"><div className="secao-cabecalho"><div><span className="sobretitulo">ACONTECE NO INSTITUTO</span><h2>Últimas notícias</h2><p className="secao-intro">Conheça as actividades, os comunicados e os avisos do Instituto.</p></div><Link href="/noticias" className="ligacao-texto">Ver todas as notícias <ArrowUpRight size={18}/></Link></div><CarrosselNoticias noticias={noticias.filter(n=>n.destaque)}/><div className="recursos-noticias"><div><span className="microtexto">EDITAIS E COMUNICADOS</span><h3>Informação oficial num só lugar.</h3><p>Consulte convocatórias, documentos e comunicações institucionais quando estiverem disponíveis.</p></div><Link href="/noticias" className="botao botao-azul">Consultar publicações <ArrowUpRight size={17}/></Link></div></section>
    <Chamada/>
    <section className="secao contentor"><div className="aviso-importante"><h2>Proposta independente para apresentação institucional</h2><p>Este website é um protótipo de demonstração, ainda não aprovado pelo Instituto. Conteúdos académicos, delegações e parcerias carecem de confirmação antes da utilização oficial.</p><Link href="/portal" target="_blank" rel="noopener noreferrer" className="ligacao-texto">Explorar demonstração do sistema académico <ArrowUpRight size={17}/></Link></div></section>
  </>;
}
