

## Plano: Adicionar post "Lei do Frete Mínimo" ao blog

### Alterações

**`src/data/blogPosts.ts`**: Adicionar novo objeto ao array `blogPosts` com:
- slug: `lei-do-frete-minimo-transporte-rodoviario`
- title: título SEO fornecido
- summary: meta description fornecida
- content: texto do artigo formatado em HTML (h2, p), incluindo CTA final com link para contato
- date: `2026-03-20` (hoje)
- author: `Equipe GCF`
- tags: `["Frete", "Regulação", "Transporte"]`
- imageUrl: imagem Unsplash relevante (caminhão/estrada)

**`public/sitemap.xml`**: Adicionar URL do novo post.

Nenhuma outra alteração necessária — o blog já renderiza dinamicamente a partir do array.

