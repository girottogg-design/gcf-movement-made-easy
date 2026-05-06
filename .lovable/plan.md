## Plano: Refazer movimento do Hero — sensação de "veículo vindo em direção ao espectador"

### O problema atual
As faixas horizontais passam de lado, o que dá a leitura de "câmera lateral em uma estrada". Mas a foto do hero mostra o caminhão **vindo de frente**, então o movimento precisa ser de **profundidade** (zoom/avanço), não lateral.

### Nova direção visual

**1. Remover** todas as faixas horizontais e streaks diagonais atuais.

**2. Movimento radial / profundidade (efeito "starfield" sutil)**
- Pequenas partículas/linhas finas que **nascem perto do centro** (ponto de fuga, onde o caminhão está) e se **expandem para fora** em direção às bordas, acelerando — como se o espectador estivesse parado e o mundo vindo na sua direção.
- Densidade baixa e opacidade discreta para não competir com a foto. Apenas reforçar a sensação de avanço.

**3. Ken Burns invertido — zoom-in lento contínuo**
- A imagem faz um zoom-in muito lento e infinito (loop suave, ida e volta), reforçando que o caminhão está se aproximando. Sem parallax horizontal.

**4. Vinheta pulsante sutil**
- Leve escurecimento das bordas que respira (pulse muito lento de 6s), criando profundidade e foco no centro.

**5. Manter o reveal de texto com blur** (essa parte ficou boa pelo seu silêncio sobre ela — mantém o estilo Turim).

**6. Indicador de scroll**
- Trocar a barrinha animada por seta dupla (chevron duplo) descendo com pulse vertical suave.

### Detalhes técnicos
- Substituir keyframes `road-lines` e `light-streak` por:
  - `particle-rush` — partícula com `transform: translate(x,y) scale(s)` partindo de `scale(0)` no centro até `scale(1)` afastada, com opacity fade-out
  - `slow-zoom` — zoom 1.0 → 1.08 → 1.0 em loop de 20s (substitui o ken-burns linear)
  - `vignette-pulse` — opacity 0.4 ↔ 0.6
- Gerar ~25 partículas com ângulos e delays distribuídos via `Array.from`, cada uma seguindo um vetor radial (calculado uma vez no JSX).
- Manter `prefers-reduced-motion` desativando tudo.

### Arquivos
| Ação | Arquivo |
|------|---------|
| Editar | `src/components/HeroSection.tsx` — remover faixas/streaks, adicionar partículas radiais e vinheta |
| Editar | `src/index.css` — substituir keyframes por `particle-rush`, `slow-zoom`, `vignette-pulse` |
