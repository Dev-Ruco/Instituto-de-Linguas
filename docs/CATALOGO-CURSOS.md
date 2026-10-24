# Nova apresentação de cursos

A página inicial deixou de apresentar uma grelha de seis cartões e utiliza `ExploradorLinguas`, com seis opções e um painel único, que mostra o título, a descrição, as competências e a ligação do curso seleccionado.

A página `/cursos` mantém pesquisa e filtros, mas apresenta os cursos em linhas de catálogo académico. A navegação para os detalhes `/cursos/[slug]` mantém-se.

A fonte única de dados permanece `src/lib/conteudos.ts`. As bandeiras são identificadores visuais convencionais, sem carácter exclusivo. Dados de níveis, preços e horários continuam sujeitos a confirmação da instituição.

A apresentação é responsiva, funciona com teclado e respeita a preferência por movimento reduzido.
