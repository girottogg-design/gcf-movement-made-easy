## Plano: Regenerar vídeo do hero — sem placa, sem motorista visível, contexto Brasil

### Problema
- Placa do caminhão saiu deformada/falsa.
- Aparece um "boneco de pano" no lugar do motorista (artefato comum de geração de IA).
- Cenário não remete claramente ao Brasil.

### Solução
Regenerar o vídeo com prompt mais restritivo e câmera afastada do motorista/placa:

**Prompt novo:**
- Caminhão semi-reboque branco moderno em rodovia brasileira (BR-101 / serra), **sem placa de identificação**, **vidros escuros sem motorista visível**, vegetação tropical típica do Brasil (mata atlântica/cerrado) ao fundo, hora dourada, câmera baixa em ângulo levemente lateral (3/4 frontal) para não focar no para-brisa nem na placa, leve poeira da estrada, atmosfera profissional, 4K cinematográfico, câmera fixa e estável.

**Parâmetros:**
- 10s, 1080p, 16:9, `camera_fixed: true`.
- Salvar em `src/assets/hero-video.mp4` (sobrescreve o atual).

### Plano B
Se mesmo assim a IA gerar artefatos (placa estranha, motorista deformado), regenerar mais uma vez com ângulo **traseiro** do caminhão (vendo o baú indo embora pela rodovia) — elimina completamente o risco de placa frontal e motorista.

### Arquivos
| Ação | Arquivo |
|------|---------|
| Regenerar | `src/assets/hero-video.mp4` |

Sem mudanças de código — só troca do asset.
