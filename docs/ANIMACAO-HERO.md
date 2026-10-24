# Animações de entrada do hero

A área principal da página inicial reproduz uma sequência de entrada sempre que o visitante abre a home. Também reinicia quando regressa através do histórico do navegador.

Ordem aproximada: etiqueta, título, descrição, botões, bloco de apoio, fotografia, cartão sobreposto e selo. As durações são moderadas e os elementos ficam estáticos depois da entrada.

O componente `src/components/animacao-hero.tsx` acrescenta temporariamente a classe `hero-animar` à secção principal. As animações estão em `src/app/globals.css`, não exigem dependências adicionais e são desactivadas com `prefers-reduced-motion: reduce`.

A fotografia mantém o caminho `/images/instituto/hero-instituto-linguas.jpg`.
