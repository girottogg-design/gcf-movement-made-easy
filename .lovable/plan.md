

## Plano: Imagens únicas para cada post do blog

### Problema
Há 5 posts mas apenas 3 URLs de imagem distintas — várias se repetem:
- `photo-1601584115197` usada nos posts 1 (Seguro) e 3 (Otimizar Logística)
- `photo-1519003722824` usada nos posts 2 (Frete Mínimo) e 5 (Tecnologia Rastreamento)
- `photo-1586528116311` usada apenas no post 4 (Armazenagem)

### Correção

**`src/data/blogPosts.ts`** — Substituir as imageUrls para que cada post tenha uma imagem única e relevante ao tema:

| Post | Tema | Nova imagem Unsplash |
|------|-------|---------------------|
| 1. Seguro Obrigatório | Seguro/documentação | `photo-1601584115197-04ecc0da31d7` (manter — caminhão Scania) |
| 2. Frete Mínimo | Regulação/frete | `photo-1473445361085-b2a222186eb0` (caminhão em estrada) |
| 3. Otimizar Logística | Roteirização/gestão | `photo-1494412574643-ff11b0a5eb95` (frota de caminhões) |
| 4. Armazenagem | Armazém/estoque | `photo-1586528116311-ad8dd3c8310d` (manter — armazém) |
| 5. Tecnologia Rastreamento | GPS/tecnologia | `photo-1551288049-bebda4e38f71` (dashboard/dados) |

Alteração em 3 linhas (posts 2, 3 e 5).

