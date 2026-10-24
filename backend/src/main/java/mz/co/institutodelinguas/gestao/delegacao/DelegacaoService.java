package mz.co.institutodelinguas.gestao.delegacao;
import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;
import static org.springframework.http.HttpStatus.*;
@Service
public class DelegacaoService {
 private final DelegacaoRepository repo;
 public DelegacaoService(DelegacaoRepository repo){this.repo=repo;}
 private String limpar(String s){return s==null?null:s.trim();}
 private Delegacao procurar(Long id){return repo.findById(id).orElseThrow(()->new ResponseStatusException(NOT_FOUND,"Delegação não encontrada"));}
 @Transactional public DelegacaoResposta criar(DelegacaoPedido p){
  String nome=limpar(p.nome());
  if(repo.existsByNomeIgnoreCase(nome))throw new ResponseStatusException(CONFLICT,"Já existe uma delegação com este nome");
  return DelegacaoResposta.de(repo.save(new Delegacao(nome,limpar(p.provincia()),limpar(p.cidade()),limpar(p.endereco()),limpar(p.telefone()))));
 }
 @Transactional(readOnly=true) public List<DelegacaoResposta> listar(){return repo.findAll().stream().map(DelegacaoResposta::de).toList();}
 @Transactional(readOnly=true) public DelegacaoResposta consultar(Long id){return DelegacaoResposta.de(procurar(id));}
 @Transactional public DelegacaoResposta actualizar(Long id,DelegacaoPedido p){
  Delegacao d=procurar(id);String nome=limpar(p.nome());
  if(repo.existsByNomeIgnoreCaseAndIdNot(nome,id))throw new ResponseStatusException(CONFLICT,"Já existe uma delegação com este nome");
  d.actualizar(nome,limpar(p.provincia()),limpar(p.cidade()),limpar(p.endereco()),limpar(p.telefone()));
  return DelegacaoResposta.de(d);
 }
 @Transactional public DelegacaoResposta desactivar(Long id){Delegacao d=procurar(id);d.desactivar();return DelegacaoResposta.de(d);}
}
