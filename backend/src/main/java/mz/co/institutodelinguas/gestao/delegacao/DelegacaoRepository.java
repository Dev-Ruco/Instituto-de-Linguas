package mz.co.institutodelinguas.gestao.delegacao;
import org.springframework.data.jpa.repository.JpaRepository;
public interface DelegacaoRepository extends JpaRepository<Delegacao,Long> {
 boolean existsByNomeIgnoreCase(String nome);
 boolean existsByNomeIgnoreCaseAndIdNot(String nome,Long id);
}
