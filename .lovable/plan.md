## Plano: Eliminar a "tontura" do hero

### Diagnóstico
O efeito de tontura vem do **zoom que vai e volta** (1.02 → 1.12 → 1.02 em loop). Quando a câmera "respira" assim, o cérebro lê como movimento conflitante (avança e recua). Para sensação de "veículo vindo", o movimento precisa ser **unidirecional, lento e contínuo** — nunca voltar.

### Ajustes

**1. Zoom unidirecional com reset invisível**
- Trocar `slow-zoom` (ida e volta) por um zoom que vai **só de 1.0 → 1.15 em ~30s** e reseta. Para evitar o "salto" do reset, usamos duas camadas com a mesma imagem em crossfade: enquanto uma faz o zoom, a outra começa do zero com opacity 0 e assume o lugar antes da primeira terminar. Resultado: zoom infinito sem tontura e sem corte visível.
- Alternativa mais simples: zoom de 1.0 → 1.08 em 40s e mantém parado (uma única passada longa). Como o usuário só fica alguns segundos no hero antes de rolar, isso é suficiente.

**2. Reduzir intensidade da vinheta pulsante**
- Trocar pulse (0.45 ↔ 0.65) por **vinheta estática** com opacity fixa em 0.5. Pulsos lentos também contribuem para a sensação de "respiração" desconfortável.

**3. Partículas mais lentas e mais sutis**
- Reduzir de 28 → 16 partículas.
- Aumentar duração média de 4s → 7s (movimento mais suave).
- Reduzir opacidade máxima (0.4 → 0.25).
- Resultado: presença atmosférica, não distrai.

**4. Manter** o reveal de texto com blur e a seta dupla (essas estão ok).

### Recomendação
Vou pela **alternativa simples** (zoom único de 40s + vinheta estática + partículas suaves). É o que dá sensação de "está acontecendo algo, o caminhão vem vindo" sem nenhum movimento que volte ou pulse.

### Arquivos
| Ação | Arquivo |
|------|---------|
| Editar | `src/index.css` — `slow-zoom` unidirecional, remover `vignette-pulse` |
| Editar | `src/components/HeroSection.tsx` — vinheta estática, menos partículas e mais lentas |
