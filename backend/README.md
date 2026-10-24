# Backend académico — Instituto de Línguas

O mesmo repositório contém o website Next.js (na raiz) e a API Spring Boot nesta pasta `backend/`. São aplicações separadas, com execução e publicação independentes.

## Executar localmente
Requisitos: JDK 21, Maven e Docker com Compose.

```bash
cd backend
docker compose up -d
export ADMIN_USERNAME="administrador_local"
export ADMIN_PASSWORD="escolher_uma_frase_secreta_longa"
mvn spring-boot:run
```

A API estará em `http://localhost:8080/api/delegacoes`.

### Testar
```bash
curl -u "$ADMIN_USERNAME:$ADMIN_PASSWORD" http://localhost:8080/api/delegacoes
curl -u "$ADMIN_USERNAME:$ADMIN_PASSWORD" -X POST http://localhost:8080/api/delegacoes -H 'Content-Type: application/json' -d '{"nome":"Delegação Maputo","provincia":"Cidade de Maputo","cidade":"Maputo","endereco":"Por confirmar","telefone":""}'
```

A migração Flyway cria a tabela `delegacoes`. As variáveis `DB_URL`, `DB_USER`, `DB_PASSWORD` e `PORT` podem ser personalizadas.

**Segurança provisória:** todos os endpoints exigem HTTP Basic e uma conta de administração definida por variáveis de ambiente. A aplicação recusa iniciar sem uma palavra-passe com pelo menos 14 caracteres. Este mecanismo é apenas para desenvolvimento local. Não publique esta API sem HTTPS, gestão de utilizadores, autorização por delegação, rate limiting, auditoria e autenticação adequada a um portal web. O website Next.js continua desligado desta API; a página `/portal` é uma demonstração de interface.
