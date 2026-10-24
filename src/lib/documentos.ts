export type CategoriaDocumento = "Editais" | "Comunicados" | "Calendários" | "Formulários" | "Regulamentos";
export type Documento = {
  id: string;
  titulo: string;
  categoria: CategoriaDocumento;
  descricao: string;
  /** URL de PDF validado e autorizado; ausente nos exemplos demonstrativos. */
  ficheiro?: string;
  data?: string;
  tamanho?: string;
  demonstrativo: boolean;
};

/** Exemplos de organização, não anúncios nem documentos oficiais publicados. */
export const documentos: Documento[] = [
  {id:"edital-matriculas",titulo:"Edital de matrículas",categoria:"Editais",descricao:"Espaço reservado ao edital de abertura de matrículas e respectivas condições.",demonstrativo:true},
  {id:"calendario-academico",titulo:"Calendário académico",categoria:"Calendários",descricao:"Datas de início das aulas, períodos lectivos e outras actividades.",demonstrativo:true},
  {id:"comunicado-institucional",titulo:"Comunicado institucional",categoria:"Comunicados",descricao:"Informações e orientações oficiais dirigidas à comunidade académica.",demonstrativo:true},
  {id:"formulario-inscricao",titulo:"Formulário de inscrição",categoria:"Formulários",descricao:"Modelo de ficha de inscrição a disponibilizar após validação.",demonstrativo:true},
  {id:"regulamento-avaliacao",titulo:"Regulamento de avaliação",categoria:"Regulamentos",descricao:"Normas de avaliação, progressão e funcionamento académico.",demonstrativo:true},
  {id:"edital-exames",titulo:"Edital de exames",categoria:"Editais",descricao:"Informações oficiais sobre inscrições e condições de realização de exames.",demonstrativo:true}
];
