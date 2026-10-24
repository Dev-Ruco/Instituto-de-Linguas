# Conteúdos, fluxos e manutenção

## Origem e validação

A estrutura e os nomes gerais dos cursos foram retirados do cartaz fornecido pelo proponente. Os contactos e a lista de delegações precisam de confirmação institucional. As descrições de cursos são textos demonstrativos e não planos curriculares oficiais.

O elemento gráfico 'il.' é um **marcador visual provisório**, não o logótipo oficial. Substituir pela arte oficial autorizada antes de publicar.

## Adicionar um curso

1. Abrir `src/lib/conteudos.ts`.
2. Adicionar um objecto à lista `cursos`, com `slug` único.
3. Confirmar `titulo`, `resumo`, `descricao`, `etiqueta` e `areas`.
4. O curso aparece automaticamente no catálogo e a página de detalhe é gerada em `/cursos/[slug]`.
5. Validar os textos e executar `npm run build`.

## Actualizar uma delegação

Editar `delegacoes` em `src/lib/conteudos.ts`. Não publicar endereços ou coordenadas por inferência.

## Notícias

A secção encontra-se sem notícias de propósito. A publicação de notícias deverá exigir título, texto revisto, data, autor e aprovação editorial. Não usar textos artificiais simulando comunicados.

## Matrículas

O portal **não recolhe inscrições**. O visitante é encaminhado para os contactos da instituição. Na fase seguinte, será necessário definir: estados da candidatura, requisitos documentais, regras por delegação, autorização para tratamento de dados, notificações e auditoria.

## Evolução para sistema académico

Recomenda-se definir contratos de API e módulos independentes:
- Identidade e permissões: estudantes, docentes, secretarias e administradores.
- Oferta formativa: cursos, níveis, turmas, delegações e vagas.
- Matrículas e inscrições: validação, estados e histórico.
- Avaliações: registos, publicação de notas e pautas.
- Pagamentos: integração posterior com prestador autorizado.
- Relatórios: estatísticas por período e delegação.

A implementação destes módulos exige levantamento e validação de requisitos.
