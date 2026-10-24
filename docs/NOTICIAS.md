# Publicações do Instituto

O conteúdo está em `src/lib/conteudos.ts`, na lista `noticias`.

## Criar uma notícia

Acrescentar um objecto com `slug` único, título, resumo, categoria e parágrafos de conteúdo. `data` é opcional: não inventar datas. A categoria é uma das quatro opções tipadas.

## Fotografia

A fotografia original da cerimónia de Russo deve ser copiada para `public/images/noticias/curso-russo-certificados.jpg`. O ficheiro não está actualmente no repositório; sem ele, a imagem não aparece no portal. Não substituir por fotografias de outros eventos.

## Fluxo

O cartão na página inicial aponta para `/noticias/[slug]`. O arquivo `/noticias` oferece filtros e pesquisa. Só são renderizadas notícias que existem efectivamente em `noticias`. A secção de editais tem uma indicação de disponibilidade futura e não apresenta documentos fictícios.

## Regras editoriais

Validar data, local, texto, imagem, consentimento de publicação, categoria e fonte antes de publicar oficialmente. Não apresentar exemplos como factos. A futura área administrativa deverá ter rascunho, revisão e publicação controlada por permissões.
