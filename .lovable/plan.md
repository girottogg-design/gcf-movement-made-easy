## Plano: ajustes finais no vídeo do hero

### Problemas restantes
1. **Placa "BR-101"** no acostamento não faz sentido no contexto.
2. **Final do vídeo**: caminhão sai da pista e bate.

### Solução em 2 passos

**Passo 1 — Editar o frame base (`src/assets/hero-frame.jpg`)**
- Usar `imagegen edit_image` para **remover a placa BR-101** do acostamento, substituindo por vegetação/defensa metálica limpa (ou uma placa genérica de curva/atenção, sem texto identificável).
- Manter todo o resto: caminhão branco com logo GCF, faixa amarela dupla, mata atlântica, hora dourada.

**Passo 2 — Regenerar `src/assets/hero-video.mp4`**
- Usar o frame editado como `starting_frame`.
- Prompt reforçado para estabilidade até o último frame:
  - "truck drives smoothly and stays perfectly centered in its own lane for the entire 10 seconds, never drifting, never crashing, never leaving the road, gentle curve, steady cinematic camera following from behind-side, loop-friendly ending".
- `camera_fixed: true`, 10s, 1080p.
- Validar visualmente o último segundo antes de entregar; se ainda sair da pista, regenerar com prompt ainda mais conservador (curva mais suave / reta).

### Arquivos
| Ação | Arquivo |
|------|---------|
| Editar | `src/assets/hero-frame.jpg` (remover placa BR-101) |
| Regenerar | `src/assets/hero-video.mp4` |

Sem mudanças no código React.
