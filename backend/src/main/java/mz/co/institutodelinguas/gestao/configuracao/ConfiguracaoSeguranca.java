package mz.co.institutodelinguas.gestao.configuracao;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class ConfiguracaoSeguranca {
 @Bean
 PasswordEncoder codificador(){return new BCryptPasswordEncoder();}
 @Bean
 UserDetailsService utilizadores(@Value("${admin.username}") String nome,@Value("${admin.password}") String palavraPasse,PasswordEncoder codificador){
  if(nome.isBlank()||palavraPasse.length()<14){
   throw new IllegalStateException("Defina ADMIN_USERNAME e ADMIN_PASSWORD (mínimo de 14 caracteres) nas variáveis de ambiente.");
  }
  return new InMemoryUserDetailsManager(User.withUsername(nome).password(codificador.encode(palavraPasse)).roles("ADMIN").build());
 }
 @Bean
 SecurityFilterChain seguranca(HttpSecurity http) throws Exception{
  return http
    .csrf(csrf->csrf.disable()) // API stateless e Basic; não usar para login web com cookies.
    .sessionManagement(s->s.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
    .authorizeHttpRequests(auth->auth
      .requestMatchers(HttpMethod.OPTIONS,"/**").denyAll()
      .anyRequest().hasRole("ADMIN"))
    .httpBasic(Customizer.withDefaults())
    .formLogin(form->form.disable())
    .build();
 }
}
