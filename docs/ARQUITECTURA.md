# Arquitectura técnica

## Princípios

- **Separação de responsabilidades:** rotas em `src/app`; componentes reutilizáveis em `src/components`; conteúdos em `src/lib`.
- **Fonte única de informação:** os cursos, as delegações e os contactos demonstrativos são mantidos em `src/lib/conteudos.ts`.
- **Sem dados académicos sensíveis:** esta versão não tem autenticação, armazenamento de dados pessoais nem pagamentos.
- **Acessibilidade:** navegação por teclado, elementos semânticos, títulos hierarquizados, estados de foco e menu responsivo.
- **Português:** interface e documentação em português europeu, com grafia anterior ao Acordo Ortográfico de 1990.

## Fluxo público

1. O visitante entra na página inicial.
2. Selecciona **Cursos**, pesquisa e filtra o catálogo.
3. Abre a página de um curso através do identificador `slug`.
4. Consulta **Delegações** e **Matrículas**.
5. Recorre aos contactos públicos para solicitar informação à instituição.

## Rotas

| Rota | Função |
| --- | --- |
| `/` | Apresentação inicial e destaques |
| `/instituto` | Apresentação institucional |
| `/cursos` | Catálogo pesquisável |
| `/cursos/[slug]` | Detalhe de cada formação |
| `/delegacoes` | Listagem de localidades |
| `/noticias` | Área reservada a informação oficial |
| `/matriculas` | Orientações gerais |
| `/contactos` | Contactos publicados |

## Evolução prevista

O sistema académico deverá constituir um domínio funcional próprio, idealmente com API REST Java/Spring Boot, PostgreSQL e autenticação com controlo de permissões. Um painel administrativo poderá gerir o catálogo institucional através de uma API/CMS. **Não ligar formulários de inscrição a bases de dados sem aprovação, consentimento e requisitos de segurança e protecção de dados.**

## Regra de qualidade

Não publicar propinas, vagas, calendários, notícias, reconhecimento de certificados ou nomes de responsáveis sem fonte validada. Separar dados demonstrativos dos conteúdos oficialmente aprovados.
