

## Plano: Página "Torre de Controle" + Post no Blog + SEO Limpo

### Resumo
Criar uma página dedicada `/torre-de-controle` para vender o serviço de Torre de Controle logística da GCF, um post no blog sobre o tema, e garantir SEO limpo (sem cloaking, sem conteúdo oculto, sem redirecionamentos suspeitos).

---

### 1. Nova página `/torre-de-controle`

Criar `src/pages/TorreDeControle.tsx` — página institucional/comercial com:

- **Hero**: Título forte ("Torre de Controle Logística"), subtítulo explicando o serviço, CTA "Solicite uma Proposta" (scroll para contato)
- **O que é**: Explicação clara do serviço — monitoramento em tempo real, gestão de ocorrências, visibilidade total da cadeia
- **Benefícios**: Cards com ícones — Redução de custos, Visibilidade 360°, Gestão proativa de ocorrências, Indicadores em tempo real, Integração com TMS/ERP
- **Para quem**: Seção explicando que atende tanto empresas que querem terceirizar quanto quem precisa de uma torre própria
- **CTA final**: Formulário de contato ou link para seção #contato
- **SEO**: Helmet com title, description, canonical, OG tags, JSON-LD (Service schema)

Usa Header e Footer existentes, mesma identidade visual.

### 2. Atualizar navegação

Em `src/components/Header.tsx`:
- Adicionar item "Torre de Controle" no menu, tipo `route`, href `/torre-de-controle`, posicionado antes de "Blog"

### 3. Adicionar rota

Em `src/App.tsx`:
- Importar e adicionar `<Route path="/torre-de-controle" element={<TorreDeControle />} />`

### 4. Novo post no blog

Em `src/data/blogPosts.ts`, adicionar post:
- **slug**: `torre-de-controle-logistica-o-que-e`
- **title**: "Torre de Controle Logística: O Que É, Como Funciona e Por Que Terceirizar"
- **content**: Conteúdo educativo (não comercial puro) — definição, como funciona, benefícios mensuráveis, quando terceirizar vs. internalizar, CTA natural para GCF
- **tags**: `["Torre de Controle", "Logística", "Gestão de Fretes"]`
- **date**: `2026-04-10`

### 5. Atualizar sitemap.xml

Adicionar:
- `/torre-de-controle` (priority 0.9)
- `/blog/torre-de-controle-logistica-o-que-e` (priority 0.6)

### 6. SEO limpo — sem cloaking

Princípios aplicados em toda a implementação:
- Conteúdo 100% visível e renderizado no DOM — nada oculto com `display:none` ou `visibility:hidden` para fins de SEO
- Mesma página servida para Googlebot e para usuários (SPA com react-helmet-async + JSON-LD)
- Canonical tags corretas apontando para URLs únicas
- Sem redirecionamentos enganosos
- Meta descriptions reais e coerentes com o conteúdo da página
- Links internos naturais entre blog post e página comercial (e vice-versa)
- JSON-LD com schema `Service` na página e `BlogPosting` no post

### Detalhes técnicos
- 3 arquivos novos: `src/pages/TorreDeControle.tsx`
- 4 arquivos editados: `Header.tsx` (menu), `App.tsx` (rota), `blogPosts.ts` (post), `sitemap.xml`
- Imagem do post: Unsplash (sala de controle/monitoramento logístico)

