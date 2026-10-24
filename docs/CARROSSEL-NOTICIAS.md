# Carrossel de notícias

A página inicial mostra três cartões em computadores, dois em tablets e um em telemóveis.

O carrossel avança a cada 4,5 segundos, reinicia no início após chegar ao fim e pára quando o utilizador posiciona o cursor sobre a área, usa o teclado ou interage por toque. A rotação automática é desactivada quando o sistema operativo pede redução de movimento. Também existe navegação manual por botões e deslocamento táctil.

O componente reutilizável está em `src/components/carrossel-noticias.tsx`. Os dados continuam a vir de `src/lib/conteudos.ts`. A página `/noticias` mantém a lista completa de notícias e filtros.
