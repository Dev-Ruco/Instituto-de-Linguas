# Transições entre secções durante o scroll

A página inicial realça suavemente a secção que entra na zona central do ecrã, atenuando a secção anterior à medida que sai. A animação funciona ao descer e ao subir.

O componente `src/components/transicoes-de-scroll.tsx` utiliza `IntersectionObserver` para acompanhar os elementos marcados com `data-scroll-section`. O conteúdo nunca desaparece completamente nem é removido do fluxo da página. O efeito mantém-se discreto: opacidade entre 82% e 100% e deslocação até 12 píxeis.

É desactivado quando existe preferência por redução de movimento. A animação de entrada do hero e o carrossel de notícias permanecem independentes.

Verificar em navegador real, nomeadamente durante deslocação rápida, com teclado e em telemóveis.
