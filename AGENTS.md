<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Altera Company — guia do repositório

## O que é este projeto

Site institucional da **Altera Company**. A marca é voltada à direção criativa
de Elyan Sodré (CEO) — hoje segue como carro-chefe — e está em expansão para
incluir uma frente de engenharia de software (categoria "Soluções em
Tecnologia"). Não há menção nominal a outros membros do time de engenharia no
conteúdo do site; trate isso como institucional, não pessoal.

## Stack

- Next.js 16 (App Router, Turbopack) + TypeScript
- Tailwind CSS v4 (config CSS-first em `src/app/globals.css`, sem `tailwind.config.js`)
- Deploy alvo: Vercel

## Comandos

```
npm run dev      # servidor de desenvolvimento
npm run build    # build de produção (também roda checagem de tipos)
npm run lint     # ESLint
```

Rode `npm run build` e `npm run lint` antes de considerar qualquer mudança
pronta — o build já é usado como gate de qualidade (não há suíte de testes).

## Estrutura

```
src/app/                    páginas (App Router)
  page.tsx                  Home
  servicos/page.tsx          overview das categorias
  servicos/[slug]/page.tsx   página dinâmica por categoria (generateStaticParams)
  portfolio/page.tsx
  sobre/page.tsx
  contato/page.tsx
src/components/             Navbar, Footer, Logo, Button, ServiceCard
src/lib/services.ts          conteúdo/dados das 5 categorias de serviço
src/lib/site.ts              dados gerais da marca (descrição, Instagram)
```

## Convenções e decisões de conteúdo

- **Sem preços no site.** Toda chamada de ação leva a "solicitar orçamento",
  nunca exibe valores (decisão explícita do cliente).
- **5 categorias de serviço fixas** em `src/lib/services.ts`: Branding e
  Identidade Visual (`flagship: true`), Social Media e Conteúdo, Produção
  Audiovisual, Performance Digital, Tecnologia. Ao adicionar/editar serviços,
  mexa só nesse arquivo — as páginas são geradas a partir dele.
- **Identidade visual** é monocromática (preto/branco/cinza), sem cor de
  destaque — isso é intencional, não um placeholder a corrigir. Fontes:
  `Anton` (display, títulos grandes), `Jost` (heading, subtítulos), `Inter`
  (sans, corpo de texto) — ver `src/app/layout.tsx`.
- Cards usam cantos assimétricos via classes utilitárias `.blob-card` /
  `.blob-card-alt` (definidas em `globals.css`), alternando para dar ritmo
  visual — não trocar por `rounded-xl` padrão sem necessidade.

## Pendências conhecidas (não "corrigir" sem contexto novo do cliente)

- `/portfolio` usa placeholders (sem fotos reais) — aguardando peças do
  portfólio real de Elyan Sodré.
- `/contato` só linka Instagram (`@alteracompany` / `@elyansodre`) — não há
  WhatsApp/e-mail oficial da empresa ainda. Não inventar número de telefone
  ou e-mail de contato.
