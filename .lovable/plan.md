## Plano: Hero com movimento cinematográfico

### Conceito
Inspirado em **Turim** (texto que se monta com blur/desfoque, atmosfera densa) e **Zepelim** (composição limpa, movimento sutil contínuo, tipografia grande), aplicado ao universo de **transporte rodoviário**: dar a sensação de que o caminhão está em movimento mesmo na imagem estática.

### O que vai mudar — `HeroSection.tsx`

**1. Camada de movimento sobre a imagem do caminhão**
- **Linhas de estrada passando** na horizontal (faixas brancas/amarelas se deslocando da direita para a esquerda em loop infinito), simulando velocidade.
- **Streaks de luz** (light trails) finos e diagonais cruzando a tela em loop, dando sensação de velocidade/movimento.
- **Partículas sutis** (poeira/névoa) flutuando lentamente para profundidade atmosférica.
- Tudo em camadas com `mix-blend-mode` para integrar à foto sem poluir.

**2. Parallax suave no background**
- A imagem do caminhão se move levemente conforme o scroll (efeito parallax) e tem um zoom-in muito lento e contínuo (Ken Burns), dando vida mesmo parado.

**3. Reveal de texto estilo Turim**
- O título "Somos o movimento que **transforma o Brasil**" entra **palavra por palavra** com blur que se dissipa (de `blur(20px)` para `blur(0)` + fade-in escalonado).
- A linha "transforma o Brasil" em vermelho ganha um sublinhado animado que se desenha da esquerda para a direita.

**4. Indicador de scroll redesenhado**
- Substituir o "mousinho" atual por uma seta minimalista com pulse + texto "role para descobrir" estilo Zepelim.

### Detalhes técnicos

- **CSS puro + Tailwind** — sem bibliotecas externas (Framer Motion não é necessário aqui; usaremos `@keyframes` no `index.css` + classes utilitárias).
- **Novos keyframes em `index.css`**:
  - `road-lines` — translateX infinito para as faixas
  - `light-streak` — diagonal sweep
  - `ken-burns` — zoom-in lento de 20s
  - `blur-in` — blur(20px) → blur(0) com opacity
  - `draw-underline` — scaleX 0 → 1
- **Performance**: `will-change: transform`, `transform: translateZ(0)` para usar GPU; respeitar `prefers-reduced-motion` (usuários com acessibilidade ativada veem versão estática).
- **Mobile**: Reduzir intensidade das animações em telas pequenas (menos partículas, streaks mais sutis) para não pesar.

### Arquivos

| Ação | Arquivo |
|------|---------|
| Editar | `src/components/HeroSection.tsx` — camadas de movimento, parallax, reveal de texto |
| Editar | `src/index.css` — novos keyframes e utilitários de animação |

### Fora do escopo
- Não vou mexer em outras seções nesta etapa (foco no Hero, que é o "wow" inicial).
- Se quiser, depois aplicamos o mesmo blur-reveal nos títulos das seções `About`, `Services` e `TechHighlights` para coerência visual em todo o site — me avise se quer já incluir.
