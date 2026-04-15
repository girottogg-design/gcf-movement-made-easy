

## Plano: Páginas de Serviços + Links nos Cards + Footer Profissional

### 1. Cards de serviço com links

Adicionar campo `href` a cada serviço no `ServicesSection.tsx`. Cards que têm página dedicada ganham um botão "Saiba Mais" linkando para a rota. Todos os cards terão link (páginas novas criadas abaixo).

### 2. Criar páginas dedicadas para cada serviço (sem menu)

Criar 4 novas páginas (Torre de Controle já existe):

- `/transporte-rodoviario` — `src/pages/TransporteRodoviario.tsx`
- `/armazenagem` — `src/pages/Armazenagem.tsx`
- `/fretes-urgentes` — `src/pages/FretesUrgentes.tsx`
- `/tms-vms` — `src/pages/TmsVms.tsx`

Cada página segue o mesmo padrão da Torre de Controle: Hero, seção explicativa, benefícios, CTA. Helmet com SEO (title, description, canonical, JSON-LD Service). Header e Footer reutilizados.

Registrar as 4 novas rotas em `App.tsx`. Adicionar ao `sitemap.xml`.

### 3. Footer profissional

Redesenhar `Footer.tsx` com layout em colunas:

- **Coluna 1**: Logo + descrição curta da empresa
- **Coluna 2**: Links de navegação (Home, Sobre, Serviços, Blog, Contato)
- **Coluna 3**: Contato (email, telefone, cidade)
- **Coluna 4**: Redes sociais com ícones (Instagram + LinkedIn)
  - Instagram: `https://www.instagram.com/gcf_transportes_/`
  - LinkedIn: `https://www.linkedin.com/company/gcf-transportes`
- **Rodapé inferior**: Copyright + CNPJ

### Arquivos

| Ação | Arquivo |
|------|---------|
| Criar | `src/pages/TransporteRodoviario.tsx` |
| Criar | `src/pages/Armazenagem.tsx` |
| Criar | `src/pages/FretesUrgentes.tsx` |
| Criar | `src/pages/TmsVms.tsx` |
| Editar | `src/components/ServicesSection.tsx` — links nos cards |
| Editar | `src/components/Footer.tsx` — redesign profissional |
| Editar | `src/App.tsx` — 4 novas rotas |
| Editar | `public/sitemap.xml` — 4 novas URLs |

