# Centro de documentação

Página: `/documentos`. Acesso pelo menu principal.

## Funcionalidades
Pesquisa instantânea, filtros (Editais, Comunicados, Calendários, Formulários, Regulamentos), cartões responsivos, contagem de resultados e estado vazio. Cada registo tem título, descrição, categoria e, opcionalmente, data, tamanho e URL do PDF.

## Informação oficial
Os seis registos iniciais são apenas demonstrativos, sem ficheiros PDF ou links de descarregamento fictícios. O botão «Descarregar PDF» só aparece quando existe um ficheiro validado.

Para disponibilizar um PDF, carregar o ficheiro em `public/documentos/` e preencher `ficheiro: "/documentos/nome-do-ficheiro.pdf"` no registo correspondente em `src/lib/documentos.ts`. Validar o documento e a autorização institucional antes da publicação; actualizar também a marca `demonstrativo` para `false`.

A página não requer nova dependência e respeita a versão móvel e as preferências de redução de movimento.
