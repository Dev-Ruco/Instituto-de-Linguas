package mz.co.institutodelinguas.gestao.delegacao;
import jakarta.persistence.*;
@Entity
@Table(name="delegacoes")
public class Delegacao {
 @Id @GeneratedValue(strategy=GenerationType.IDENTITY) private Long id;
 @Column(nullable=false,length=120) private String nome;
 @Column(nullable=false,length=100) private String provincia;
 @Column(nullable=false,length=100) private String cidade;
 @Column(length=250) private String endereco;
 @Column(length=40) private String telefone;
 @Column(nullable=false) private boolean activa=true;
 protected Delegacao(){}
 public Delegacao(String nome,String provincia,String cidade,String endereco,String telefone){actualizar(nome,provincia,cidade,endereco,telefone);}
 public void actualizar(String nome,String provincia,String cidade,String endereco,String telefone){this.nome=nome;this.provincia=provincia;this.cidade=cidade;this.endereco=endereco;this.telefone=telefone;}
 public void desactivar(){this.activa=false;}
 public Long getId(){return id;} public String getNome(){return nome;} public String getProvincia(){return provincia;}
 public String getCidade(){return cidade;} public String getEndereco(){return endereco;}
 public String getTelefone(){return telefone;} public boolean isActiva(){return activa;}
}
