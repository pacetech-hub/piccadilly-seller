# Pace Seller (Piccadilly)

Portal B2B de vendas para representantes, lojistas e indústria (catálogo, carrinho, estoque, sell-out, marketing).

## Stack
React 18 + Vite 6 + TypeScript + Tailwind 4 + shadcn/ui (Radix).

## Como rodar
```bash
npm install
npm run dev
```

Scripts: `build`, `preview`, `typecheck`, `format`.

## Estrutura
- `src/app/` – App, páginas/componentes e dados mock (`data/`)
- `src/app/components/ui/` – componentes shadcn/ui
- `src/styles/` – tema, fontes e Tailwind
- `src/assets/` – logos e imagens
- `src/imports/` – briefing do produto

## Adaptando para outro cliente
Trocar marca em: `src/assets/brand-logo.png` (logo) e banners, `src/styles/theme.css` (cores), `src/app/data/` (dados) e textos de `LoginPage`, `Sidebar` e `index.html`.
