

## Plano: SEO Avançado, Otimização Mobile e Blog

### 1. SEO Avançado

**index.html**:
- Mudar `lang="en"` para `lang="pt-BR"`
- Adicionar dados estruturados JSON-LD (Organization schema com nome, endereço, telefone, logo)
- Adicionar `og:url`, `og:locale` e canonical link
- Substituir imagem OG genérica do Lovable por uma da GCF (ou manter até ter uma própria)

**Componentes**:
- Converter tags `<section>` em landmarks semânticos onde apropriado
- Adicionar `aria-label` nas seções principais
- Garantir que headings seguem hierarquia correta (h1 > h2 > h3)
- Adicionar `alt` descritivos em todas as imagens

**robots.txt**: Adicionar `Sitemap: https://gcf-movement-made-easy.lovable.app/sitemap.xml`

**Sitemap**: Criar `public/sitemap.xml` com as páginas (home, blog, posts)

### 2. Otimização Mobile

- Revisar todas as seções para responsividade (padding, font-sizes, gaps)
- Garantir que o menu mobile funciona bem com o novo item "Blog"
- Adicionar `meta theme-color` no index.html
- Verificar touch targets (mínimo 44x44px nos botões)

### 3. Blog

**Estrutura**:
- Criar `src/pages/Blog.tsx` - página de listagem de posts
- Criar `src/pages/BlogPost.tsx` - página individual de post
- Criar `src/data/blogPosts.ts` - dados estáticos dos posts (título, resumo, conteúdo, data, imagem, slug, tags)
- Adicionar 3 posts de exemplo sobre transporte/logística

**Menu**: Adicionar "Blog" no Header.tsx e Footer.tsx entre "Destaques" e "Contato", apontando para `/blog` (usando navigate do react-router ao invés de scroll)

**Rotas**: Adicionar no App.tsx:
- `/blog` -> Blog.tsx
- `/blog/:slug` -> BlogPost.tsx

**Layout do Blog**:
- Grid de cards com imagem, título, resumo, data e tags
- Página de post com layout de artigo (heading, imagem, conteúdo em markdown/HTML)
- Header e Footer compartilhados
- Botão "Voltar ao blog"
- SEO: title e meta description dinâmicos por post via react-helmet-async

**Dependência**: Instalar `react-helmet-async` para meta tags dinâmicas

### Detalhes Técnicos

- Header.tsx: O item "Blog" usará `useNavigate()` do react-router para navegar para `/blog`, diferente dos outros items que fazem scroll
- Os posts do blog serão dados estáticos em TypeScript (sem backend necessário por agora)
- O blog terá design consistente com o restante do site (mesmas cores, tipografia, componentes)

