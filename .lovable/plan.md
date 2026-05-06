## Plano: Hero com vídeo de fundo (caminhão real em movimento)

### Conceito
Substituir a foto estática por um **vídeo cinematográfico em loop** mostrando um caminhão na estrada (ponto de vista frontal, vindo em direção à câmera, ou pegada lateral em alta velocidade). Isso resolve dois problemas de uma vez: a falta de "wow" e a foto não ser boa o suficiente. Movimento real é sempre mais convincente que efeitos artificiais.

### Plano de execução

**1. Gerar o vídeo via IA**
- Usar `videogen--generate_video` com prompt cinematográfico:
  - Caminhão semi-reboque branco/azul descendo uma rodovia ao amanhecer/pôr do sol, câmera fixa em ângulo baixo, vindo em direção ao espectador, atmosfera profissional de logística, cores quentes e azul profundo, 4K cinematográfico, sem texto, sem marca visível.
- Duração: 10s, resolução 1080p, aspect ratio 16:9.
- Salvar em `src/assets/hero-video.mp4`.

**2. Limpar o Hero**
- Remover: zoom da imagem, partículas radiais, vinheta. O vídeo já entrega todo o movimento — qualquer efeito extra polui.
- Manter: reveal do título com blur (estilo Turim) e a seta dupla de scroll.

**3. Estrutura do vídeo**
- `<video autoplay muted loop playsinline>` cobrindo todo o hero (`object-cover`, `inset-0 absolute`).
- Overlay azul escuro semi-transparente (`bg-primary/55`) por cima para garantir legibilidade do texto branco.
- `poster` com a imagem atual do caminhão para evitar tela preta enquanto o vídeo carrega.
- `preload="metadata"` para não impactar tanto o LCP.

**4. Fallback de performance**
- Em conexões lentas / `prefers-reduced-motion: reduce`, mostrar apenas o poster (foto) sem reproduzir o vídeo.
- Detectar via JS: se `matchMedia('(prefers-reduced-motion: reduce)')` ou se for mobile com data saver, não montar o `<video>`.

### Arquivos
| Ação | Arquivo |
|------|---------|
| Gerar | `src/assets/hero-video.mp4` (via videogen) |
| Editar | `src/components/HeroSection.tsx` — substituir background por `<video>`, remover partículas/vinheta/zoom |
| Editar | `src/index.css` — remover keyframes não usados (`slow-zoom`, `particle-rush`, `vignette-pulse`, `chevron-down` permanece) |

### Observação
Se o vídeo gerado pela IA não ficar bom (caminhão estranho, deformado), podemos:
- Regenerar com prompt ajustado.
- Ou você me envia um vídeo de banco (Pexels/Pixabay) que eu integro.
