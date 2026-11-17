<img src="assets/icon.svg" width="64" height="64" alt="">

# Altera Company — Website

Site institucional da Altera Company: branding, conteúdo e tecnologia
segmentados por categoria de solução, com o portfólio de Elyan Sodré como
carro-chefe.

## Stack

Next.js (App Router) + TypeScript + Tailwind CSS.

## Rodando localmente

```
npm install
npm run dev
```

## Estrutura

- `src/app` — páginas (Home, `/servicos`, `/servicos/[slug]`, `/portfolio`, `/sobre`, `/contato`)
- `src/components` — Navbar, Footer, Logo, Button, ServiceCard
- `src/lib/services.ts` — conteúdo das categorias de serviço
- `src/lib/site.ts` — dados gerais da marca (descrição, redes sociais)

## Pendências conhecidas

- Portfólio usa placeholders — aguardando peças reais para substituir.
- Contato usa apenas Instagram — falta WhatsApp/e-mail oficial para wiring de CTA dedicado.
