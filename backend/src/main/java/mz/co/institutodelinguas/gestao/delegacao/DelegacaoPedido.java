package mz.co.institutodelinguas.gestao.delegacao;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
public record DelegacaoPedido(
 @NotBlank @Size(max=120) String nome,
 @NotBlank @Size(max=100) String provincia,
 @NotBlank @Size(max=100) String cidade,
 @Size(max=250) String endereco,
 @Size(max=40) String telefone
){}
