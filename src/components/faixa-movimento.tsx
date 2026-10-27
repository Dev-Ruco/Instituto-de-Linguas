export function FaixaMovimento() {
  const frases = ["Aprender", "Comunicar", "Descobrir", "Criar oportunidades", "Ligar culturas"];
  return <div className="faixa-movimento" aria-label="Aprender, comunicar, descobrir, criar oportunidades e ligar culturas">
    <div className="faixa-movimento-trilho" aria-hidden="true">
      {[0, 1].map(indice => <div className="faixa-movimento-grupo" key={indice}>
        {frases.map(frase => <span key={frase}>{frase} <b>✦</b></span>)}
      </div>)}
    </div>
  </div>;
}
