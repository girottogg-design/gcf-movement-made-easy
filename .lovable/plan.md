

## Plano: Scroll to Top + Responsividade

### Problema 1 — Página abre no footer
Quando o React Router navega para uma nova rota, o scroll da página anterior é mantido. Como os cards de serviço ficam embaixo na home, ao clicar "Saiba Mais" a página de destino abre já rolada até o footer.

**Solução**: Criar um componente `ScrollToTop` que escuta mudanças de rota e executa `window.scrollTo(0, 0)`. Adicioná-lo dentro do `BrowserRouter` no `App.tsx`.

### Problema 2 — Responsividade geral
Revisar e ajustar os seguintes pontos em todas as páginas de serviço e componentes:

- **Hero sections**: Ajustar padding/font-size para mobile (`text-3xl` em mobile, `text-5xl` em desktop)
- **Grids de benefícios**: Garantir `grid-cols-1` em mobile, `md:grid-cols-2`, `lg:grid-cols-3`
- **Botões CTA**: Garantir `w-full sm:w-auto` para ficarem full-width em mobile
- **Footer**: Verificar que as 4 colunas colapsam em `grid-cols-1` no mobile
- **ServicesSection**: Grid `grid-cols-1 md:grid-cols-2` (já está ok, confirmar)
- **Header mobile**: Já tem menu hamburger (ok), verificar espaçamentos

### Arquivos

| Ação | Arquivo |
|------|---------|
| Criar | `src/components/ScrollToTop.tsx` — componente que faz `scrollTo(0,0)` em cada mudança de rota |
| Editar | `src/App.tsx` — adicionar `<ScrollToTop />` dentro do `BrowserRouter` |
| Revisar | Todas as 5 páginas de serviço — ajustes de responsividade se necessário |
| Revisar | `Footer.tsx`, `Header.tsx` — garantir responsividade |

