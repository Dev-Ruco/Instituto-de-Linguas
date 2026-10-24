package mz.co.institutodelinguas.gestao.delegacao;
import java.net.URI;
import java.util.List;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/api/delegacoes")
public class DelegacaoController {
 private final DelegacaoService service;
 public DelegacaoController(DelegacaoService service){this.service=service;}
 @PostMapping public ResponseEntity<DelegacaoResposta> criar(@Valid @RequestBody DelegacaoPedido pedido){DelegacaoResposta r=service.criar(pedido);return ResponseEntity.created(URI.create("/api/delegacoes/"+r.id())).body(r);}
 @GetMapping public List<DelegacaoResposta> listar(){return service.listar();}
 @GetMapping("/{id}") public DelegacaoResposta consultar(@PathVariable Long id){return service.consultar(id);}
 @PutMapping("/{id}") public DelegacaoResposta actualizar(@PathVariable Long id,@Valid @RequestBody DelegacaoPedido pedido){return service.actualizar(id,pedido);}
 @PatchMapping("/{id}/desactivar") public DelegacaoResposta desactivar(@PathVariable Long id){return service.desactivar(id);}
}
