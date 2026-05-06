## Plano: Vídeo do hero com cara de Brasil + logo GCF + caminhão saindo da pista na curva

### Problemas reportados
1. Cenário ainda não parece brasileiro o suficiente.
2. O caminhão precisa ter a logo da GCF na lateral do baú.
3. Na curva o caminhão "come a pista" (cruza a faixa) — precisa ficar dentro da própria mão.

### Estratégia em 2 etapas

**Etapa 1 — Gerar o frame inicial (imagem) com tudo certo**
Em vez de gerar vídeo do zero (a IA de vídeo é difícil de controlar para detalhes), vamos:

1. Gerar uma **imagem base** muito brasileira via `imagegen` (premium):
   - Prompt: caminhão semi-reboque branco moderno em rodovia brasileira reconhecível (BR-116/Régis Bittencourt ou Serra do Mar), placa de sinalização brasileira amarela com escrita "BR-101" ao lado da pista, vegetação típica de mata atlântica, montanhas com araucárias/serra brasileira ao fundo, faixa amarela contínua dupla no meio da pista (padrão DENATRAN brasileiro), acostamento com defensa metálica, hora dourada do fim de tarde tropical, vista 3/4 traseira-lateral mostrando a lateral do baú bem visível e plana, sem placa de identificação, sem motorista visível.

2. Aplicar a **logo da GCF** na lateral do baú via `imagegen edit_image` (mesclando a logo `public/lovable-uploads/bd01e038-b63c-4a52-b5da-67f949721274.png` na lateral do trailer).

3. Usar essa imagem como `starting_frame` do `videogen`, com prompt focado em:
   - "truck drives smoothly through the curve staying entirely within its own lane, never crossing the center line, camera follows from behind-side, road markings clearly painted, Brazilian landscape".
   - Câmera fixa, 10s, 1080p.

**Etapa 2 — Validar visualmente**
- Inspecionar o frame gerado e o vídeo final antes de entregar.
- Se a logo ficar deformada ou o caminhão sair da pista de novo, regenerar a imagem base com instruções mais explícitas e tentar novamente.

### Arquivos
| Ação | Arquivo |
|------|---------|
| Gerar | `src/assets/hero-frame.jpg` (imagem base brasileira) |
| Editar | `src/assets/hero-frame.jpg` (aplicar logo GCF na lateral do baú) |
| Regenerar | `src/assets/hero-video.mp4` (a partir do frame) |

Sem mudanças no código React — só troca de assets.
