# Backend académico — Instituto de Línguas

O mesmo repositório contém o website Next.js (na raiz) e a API Spring Boot nesta pasta `backend/`. São aplicações separadas, com execução e publicação independentes.

## Executar localmente
Requisitos: JDK 21, Maven e Docker com Compose.

```bash
cd backend
docker compose up -d
mvn spring-boot:run
```

A API estará em `http://localhost:8080/api/delegacoes`.

### Testar
```bash
curl http://localhost:8080/api/delegacoes
curl -X POST http://localhost:8080/api/delegacoes -H 'Content-Type: application/json' -d '{"nome":"Delegação Maputo","provincia":"Cidade de Maputo","cidade":"Maputo","endereco":"Por confirmar","telefone":""}'
```

A migração Flyway cria a tabela `delegacoes`. As variáveis `DB_URL`, `DB_USER`, `DB_PASSWORD` e `PORT` podem ser personalizadas.

**Atenção:** a API ainda não tem autenticação/autorização. É um módulo inicial para desenvolvimento local e **não deve ser exposto publicamente**, nem operar com dados pessoais reais. Não está automaticamente ligado ao site Next.js; essa integração será feita quando existirem segurança e endpoints adequados.
