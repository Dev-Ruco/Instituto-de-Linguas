/**
 * Fonte única de conteúdos demonstrativos do portal.
 * Campos desconhecidos permanecem por confirmar; nunca inventar propinas ou vagas.
 * Substituir por consultas à API/CMS quando os conteúdos forem oficialmente validados.
 */
export type Curso = {
  slug: string;
  titulo: string;
  resumo: string;
  descricao: string;
  icon: string;
  etiqueta: string;
  areas: string[];
};
export type Delegacao = { cidade: string; provincia: string };
export type Noticia = { slug: string; categoria: string; titulo: string; resumo: string; data: string };

export const cursos: Curso[] = [
  { slug: "ingles", titulo: "Inglês", resumo: "Abra portas à comunicação internacional.", descricao: "Um percurso de aprendizagem orientado para a comunicação em contextos pessoais, académicos e profissionais.", icon: "EN", etiqueta: "Línguas internacionais", areas: ["Comunicação", "Compreensão", "Expressão"] },
  { slug: "frances", titulo: "Francês", resumo: "Amplie o seu horizonte linguístico.", descricao: "Desenvolva competências de compreensão e expressão em francês, com diferentes objectivos de aprendizagem.", icon: "FR", etiqueta: "Línguas internacionais", areas: ["Comunicação", "Compreensão", "Expressão"] },
  { slug: "portugues", titulo: "Português", resumo: "Comunique com clareza e confiança.", descricao: "Formação dedicada ao aperfeiçoamento da língua portuguesa e das capacidades de comunicação.", icon: "PT", etiqueta: "Línguas internacionais", areas: ["Leitura", "Escrita", "Comunicação"] },
  { slug: "linguas-mocambicanas", titulo: "Línguas Moçambicanas", resumo: "Valorize a riqueza linguística nacional.", descricao: "Conheça a diversidade linguística de Moçambique através de programas sujeitos a disponibilidade por delegação.", icon: "MZ", etiqueta: "Línguas nacionais", areas: ["Cultura", "Comunicação", "Identidade"] },
  { slug: "chines", titulo: "Língua e Cultura Chinesa", resumo: "Descubra uma língua e uma cultura globais.", descricao: "Introdução à língua e cultura chinesa, segundo os programas e níveis disponíveis.", icon: "ZH", etiqueta: "Línguas internacionais", areas: ["Língua", "Cultura", "Comunicação"] },
  { slug: "preparacao-exames", titulo: "Preparação para Exames", resumo: "Prepare-se para certificações internacionais.", descricao: "Programas de preparação para exames de proficiência, incluindo referências a FCE, DELF e DALF. A oferta efectiva requer confirmação.", icon: "EX", etiqueta: "Certificação", areas: ["Preparação", "Avaliação", "Certificação"] }
];

export const delegacoes: Delegacao[] = [
  {cidade:"Maputo",provincia:"Cidade de Maputo"},
  {cidade:"Matola",provincia:"Maputo"},
  {cidade:"Xai-Xai",provincia:"Gaza"},
  {cidade:"Inhambane",provincia:"Inhambane"},
  {cidade:"Beira",provincia:"Sofala"},
  {cidade:"Chimoio",provincia:"Manica"},
  {cidade:"Tete",provincia:"Tete"},
  {cidade:"Quelimane",provincia:"Zambézia"},
  {cidade:"Nampula",provincia:"Nampula"},
  {cidade:"Pemba",provincia:"Cabo Delgado"},
  {cidade:"Lichinga",provincia:"Niassa"}
];
export const noticias: Noticia[] = [];
export const contactosPublicos = {
  endereco: "Av. Ahmed Sekou Touré, n.º 1260, Maputo",
  telefone: "+258 21 325684",
  telemovel: "+258 84 795 0137",
  email: "departdemarketing.il@gmail.com",
  website: "https://www.il.ac.mz"
};
