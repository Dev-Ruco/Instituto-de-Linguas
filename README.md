# Instituto de Línguas — Portal Institucional

Protótipo de um portal institucional moderno para apresentar ao Instituto de Línguas de Moçambique, com arquitectura preparada para uma futura plataforma académica.

> **Aviso:** projecto independente e demonstrativo; não é o website oficial nem está aprovado pela instituição. As descrições dos cursos são ilustrativas. O logótipo apresentado é provisório. Confirmar conteúdos, identidade e contactos antes de publicar.

## Tecnologias

- Next.js (App Router), React e TypeScript
- CSS responsivo, sem dependência de biblioteca de componentes
- Lucide para ícones
- Estrutura modular, com conteúdos tipados

## Instalação

Requisitos: Node.js 20.9 ou superior e npm.

```bash
git clone https://github.com/Dev-Ruco/Instituto-de-Linguas.git
cd Instituto-de-Linguas
npm install
npm run dev
```

Abrir http://localhost:3000.

### Validação e produção

```bash
npm run lint
npm run build
npm start
```

Para configurar o endereço público, copiar `.env.example` para `.env.local` e ajustar o valor.

## Mapa do código

```text
src/
  app/
    page.tsx                  Página inicial
    layout.tsx                Estrutura partilhada e metadados
    globals.css               Sistema visual, componentes e responsividade
    instituto/page.tsx        Apresentação institucional
    cursos/page.tsx           Catálogo
    cursos/[slug]/page.tsx    Detalhes de cursos
    delegacoes/page.tsx       Localidades
    noticias/page.tsx         Notícias (sem conteúdos inventados)
    matriculas/page.tsx       Orientações de matrícula
    contactos/page.tsx        Contactos divulgados
    not-found.tsx             Erro 404
  components/
    cabecalho.tsx             Navegação responsiva
    rodape.tsx                Rodapé institucional
    cartao-curso.tsx          Cartão reutilizável
    lista-cursos.tsx          Pesquisa e filtros
    chamada.tsx              Chamada para matrículas
  lib/
    conteudos.ts              Dados tipados e conteúdo de demonstração
docs/
  ARQUITECTURA.md             Estrutura, rotas e evolução
  CONTEUDOS-E-FLUXOS.md       Manutenção, validação e fluxos
```

## Funcionalidades disponíveis

- Navegação por seis secções e chamada para matrículas.
- Catálogo com pesquisa e filtragem por categoria.
- Páginas de cursos geradas a partir de uma única lista.
- Delegações e informação de contacto.
- Interface adaptada a computadores, tablets e telemóveis.
- Mensagens explícitas para conteúdos ou funcionalidades ainda não disponíveis.

**Não existem** pagamentos, matrículas efectivas, formulários que gravem dados, contas de estudantes, notas ou pautas nesta versão.

## Próximos passos

1. Confirmar a identidade visual com a instituição e instalar o logótipo autorizado.
2. Substituir fotografias ilustrativas por fotografias autorizadas das instalações e actividades.
3. Validar catálogo, níveis, propinas, horários e delegações.
4. Implementar um CMS para actualização de conteúdos.
5. Levantar requisitos do futuro sistema académico e definir API, autenticação e tratamento de dados.

## Documentação

- [Arquitectura técnica](docs/ARQUITECTURA.md)
- [Conteúdos e fluxos de manutenção](docs/CONTEUDOS-E-FLUXOS.md)

## Convenções

Nomes de componentes e dados em português, código tipado, componentes com responsabilidade delimitada e interface acessível. Comentários reservados a decisões técnicas e regras de negócio, evitando comentários que apenas repitam o código.
