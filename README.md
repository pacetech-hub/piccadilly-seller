# Pace Seller (Piccadilly)

Portal B2B de vendas para representantes, lojistas e indústria (catálogo, carrinho, estoque, sell-out, marketing).

## Stack
React 18 + Vite 6 + TypeScript + Tailwind 4 + shadcn/ui (Radix).

## Pré-requisitos
- Node.js 20+ (`.nvmrc`) e npm

## Como rodar
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera dist/
npm run preview  # serve o build localmente
```

Não há variáveis de ambiente nem backend: os dados são mock (`src/app/data/`).

Scripts: `build`, `preview`, `typecheck`, `format`.

## Estrutura
- `src/app/` – App, páginas/componentes e dados mock (`data/`)
- `src/app/components/ui/` – componentes shadcn/ui
- `src/styles/` – tema, fontes e Tailwind
- `src/assets/` – logos e imagens
- `src/assets/produtos/<produto>/NN.webp` – fotos oficiais (4 ângulos por produto) e `produtos.json` com nome, SKU e preço
- `src/imports/` – briefing do produto

## Adaptando para outro cliente
Trocar marca em: `src/assets/brand-logo.png` (logo) e banners, `src/styles/theme.css` (cores), `src/app/data/` (dados) e textos de `LoginPage`, `Sidebar` e `index.html`.
