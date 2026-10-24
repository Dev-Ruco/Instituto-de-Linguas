package mz.co.institutodelinguas.gestao.delegacao;
public record DelegacaoResposta(Long id,String nome,String provincia,String cidade,String endereco,String telefone,boolean activa){
 public static DelegacaoResposta de(Delegacao d){return new DelegacaoResposta(d.getId(),d.getNome(),d.getProvincia(),d.getCidade(),d.getEndereco(),d.getTelefone(),d.isActiva());}
}
