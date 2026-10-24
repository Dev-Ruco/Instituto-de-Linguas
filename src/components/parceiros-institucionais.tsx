/** Logótipos fornecidos para composição demonstrativa; parcerias sujeitas a confirmação. */
const entidades = [
  { nome: "Ministério da Educação e Cultura", imagem: "/images/instituto/mec-mocambique.webp" },
  { nome: "Cambridge English", imagem: "/images/instituto/cambridge-english.webp" },
];

export function ParceirosInstitucionais() {
  return (
    <section className="parceiros-seccao" aria-labelledby="parceiros-titulo">
      <div className="contentor">
        <div className="parceiros-cabecalho">
          <span className="sobretitulo">RELAÇÕES INSTITUCIONAIS</span>
          <h2 id="parceiros-titulo">Parceiros e instituições de referência</h2>
          <p>Entidades apresentadas neste protótipo para demonstração da área institucional.</p>
        </div>
        <div className="parceiros-grelha">
          {entidades.map(entidade => (
            <div className="parceiros-cartao" key={entidade.nome}>
              <img src={entidade.imagem} alt={entidade.nome} loading="lazy" />
            </div>
          ))}
        </div>
        <p className="parceiros-nota">A apresentação dos logótipos não constitui confirmação de parceria, acreditação ou vínculo institucional.</p>
      </div>
    </section>
  );
}
