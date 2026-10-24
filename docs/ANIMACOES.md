# Sistema de animações

## Princípios

Animações curtas e discretas, adequadas a um portal institucional. O objectivo é orientar a atenção, não distrair o visitante.

## Funcionalidades

- Banner: título, texto, acções e fotografia entram por etapas.
- Componentes marcados com `data-reveal`: entram suavemente ao aproximarem-se do ecrã. Um `IntersectionObserver` elimina trabalho repetido e desconecta ao mudar de página.
- Cartões: pequeno atraso progressivo por coluna, movimento de poucos píxeis em hover.
- Cabeçalho: fica fixo, reduz a altura ao avançar na página e mantém navegação acessível.
- Carrossel: movimento automático a cada 4,5 segundos, pausa em hover/foco/toque, barra discreta de progresso e botões manuais.
- A preferência `prefers-reduced-motion` desactiva efeitos de entrada e rotação automática do carrossel.

## Manutenção

O componente `src/components/animacoes-de-entrada.tsx` observa elementos marcados com `data-reveal`. As regras de CSS ficam no fim de `src/app/globals.css`. O conteúdo permanece disponível caso o JavaScript esteja indisponível: o estado escondido apenas é activado depois da inicialização no cliente.

## Verificação

Testar em dispositivos móveis, com teclado e com redução de movimento. Executar `npm install`, `npm run lint` e `npm run build` antes da publicação.
