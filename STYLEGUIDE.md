# MyWeek — Styleguide (Design System & Código)

Documentação oficial de design e padrões de código do projeto MyWeek. Use este arquivo como referência única para manter consistência visual e técnica.

---

## 1. Paleta de Cores Neon (Variáveis CSS)

### Cores oficiais (hexadecimais)

| Nome           | Hex       | Uso                          |
|----------------|-----------|------------------------------|
| **Rich Black** | `#050508` | Fundo principal (--bg-deep)  |
| **Rich Black (darker)** | `#020204` | Fundo mais escuro (--bg-deep-darker) |
| **Surface**    | `#0f0f13` | Fundo de superfícies (--bg-surface) |
| **Deep Purple** | `#7c3aed` | Primária / Roxo MyWeek (--primary) |
| **Electric Green** | `#10b981` | Secundária / Verde MyWeek (--secondary) |
| **Electric Cyan** | `#06b6d4` | Destaque hover, validação, CTA (links, botão pronto) |
| **Text High**  | `#ffffff` | Texto principal (--text-high) |
| **Text Low / Muted** | `#b8b8c4` | Texto secundário (--text-low, --text-muted) |

### Variações de opacidade (Glassmorphism)

- **Borda sutil:** `rgba(255, 255, 255, 0.05)` (--border-subtle)
- **Overlay escuro:** `rgba(5, 5, 8, 0.88)` (--overlay-dark), `0.94` (--overlay-darker)
- **Glass de fundo:** `rgba(15, 15, 19, 0.6)` (--glass-bg)
- **Brilho primário:** `rgba(124, 58, 237, 0.35)` (--glow-primary)
- **Brilho secundário:** `rgba(16, 185, 129, 0.25)` (--glow-secondary)
- **CTA neon (box-shadow):** `0 0 20px rgba(124, 58, 237, 0.4)` (--cta-neon)
- **Hover botão:** `0 0 25px rgba(124, 58, 237, 0.5)` (--btn-glow-hover)
- **Card inner glow:** `inset 0 1px 1px rgba(255, 255, 255, 0.1)` (--card-inner-glow)

As variáveis completas ficam em `src/css/variables.css`.

---

## 2. Tipografia e Hierarquia

### Famílias

- **Títulos (H1, H2) e logo:** `--font-family-heading` → **Outfit**, fallback para --font-family.
- **Corpo de texto:** `--font-family` → **Inter**, fallback para -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif.

### Tamanhos e pesos

| Elemento    | Tamanho              | Peso (font-weight) | Letter-spacing |
|------------|----------------------|--------------------|----------------|
| **H1**     | `clamp(2rem, 5vw, 4.5rem)` | 800 | -0.04em |
| **H2**     | `clamp(1.75rem, 4vw, 3rem)` | 800 | -0.04em |
| **Corpo (body)** | 16px (1rem) | 300 | 0.01em |
| **Line-height corpo** | 1.8 | — | — |
| **Line-height títulos** | 1.2 (--line-height-title) | — | — |

Títulos usam gradiente metálico e brilho:

- `--title-gradient`: `linear-gradient(180deg, #ffffff 0%, #e2e2ec 35%, #b8b8c8 100%)`
- `--title-glow`: `0 0 20px rgba(124, 58, 237, 0.3)` (text-shadow)

---

## 3. Componentes Padrão

### Botões

- **Estilo principal (Neon / CTA):** gradiente `135deg` de Deep Purple (#7c3aed) para Electric Green (#10b981). Texto branco, `text-shadow` sutil, `box-shadow` com glow roxo (--cta-neon e --glow-primary).
- **Estados de hover:**
  - `transform: translateY(-2px)`
  - Box-shadow reforçada: `0 8px 32px var(--glow-primary)`, borda `0 0 0 1px var(--primary-vibrant)` e --btn-glow-hover.
- **Botão “pronto” (validação):** gradiente para Electric Cyan (#06b6d4) e animação de pulso (contact-submit-pulse).
- Transição: `0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)` para transform e box-shadow.

### Cards

- **Backdrop:** `backdrop-filter: blur(15px)` e `-webkit-backdrop-filter: blur(15px)` para painéis principais (ex.: header scrolled, bloco comercial).
- **Cards de conteúdo:** `blur(12px)` com fundo `var(--glass-bg)` e borda `var(--border-definition)` (1px solid rgba(255, 255, 255, 0.05)).
- **Brilho interno:** `--card-inner-glow` (inset 0 1px 1px rgba(255, 255, 255, 0.1)).
- Bordas semitransparentes e, no hover, borda `var(--primary-vibrant)` e sombra com --glow-primary.
- **Cards de canal (`.channel-card`):** glass (`blur(12px)`, `--glass-bg`), eyebrow em uppercase, CTA `btn--primary`. Grid 1 col / 3 cols a partir de 768px.
- **Verticais de parceiro (`.partner-verticals__item`):** chips em grid 2×4 (4 cols no desktop) com o mesmo glass e hover neon dos cards.
- **Chips do Concierge (`.concierge-chips__item`):** mesma pele glass dos chips de vertical; fileira de copy sem screen (`.showcase-row--copy`).
- **Card Canal 3 (`.canal3-card`):** um card centralizado (máx. 40rem), mesmo tratamento glass dos canais; sem tela, sem lista de features.
- **Card B2B em planos (`.pricing-b2b`):** abaixo da matriz Basic/Premium; modelo (mensal / por evento / proposta) sem valores; chips + CTA.
- **Passos do ciclo (`.loop__step`):** grid 1 col / 3 cols a partir de 768px; número em chip roxo, título Outfit, texto Inter. Só na home.
- **Lista de espera (`.waitlist__card`):** card glass centralizado (máx. 42rem) com badge, formulário de 2 campos e os botões de loja abaixo de um divisor. Só na home.
- **Transparência (`.transparency__item`):** três colunas com borda-guia roxa à esquerda; carrega as ressalvas que antes abriam os textos comerciais.
- **CTA de fim de seção (`.section-cta`):** `btn--primary` para o formulário (com `?canal=`) mais link de WhatsApp. Fecha cada perfil em `/negocios`.
- **Ponte para negócios (`.biz-teaser`):** faixa no fim da home que leva para `/negocios`.

### Inputs

- **Borda inferior (float label):** linha `1px` em `rgba(255, 255, 255, 0.1)`; em **focus/validação** sobe para `2px`, cor **#7c3aed** (roxo) e `box-shadow: 0 4px 12px rgba(124, 58, 237, 0.2)`.
- **Transição de validação (Roxo → Ciano):** quando o formulário está válido, o botão de envio usa gradiente até **#06b6d4** (Electric Cyan) e animação `contact-submit-pulse` com sombra em roxo e ciano.
- Inputs genéricos em foco: `border-color: #7c3aed` e `box-shadow: 0 4px 12px rgba(124, 58, 237, 0.2)`.
- Transição dos inputs: `all 0.4s ease` (form float) e `0.2s ease` (border/box-shadow).

---

## 3.1 Estrutura de páginas

O site tem duas portas, uma marca:

- **`index.html` (`/`)** — público (B2C): hero, como funciona, o app, lista de espera, planos Basic/Premium, sobre e a ponte para negócios.
- **`negocios.html` (`/negocios`)** — comercial (B2B): hero próprio, os três perfis (organizador, comércio, bilheteria), transparência, modelo de cobrança e formulário.

Cada página carrega só o JS que usa. `negocios.html` declara
`data-title-key="pageTitleBusiness"` no `<html>` para o i18n trocar o `<title>` certo.
Estilos das seções da reestruturação ficam em `src/css/restructure.css`.

---

## 4. Regras de Código (Frontend)

### Nomenclatura CSS

- **Obrigatório:** uso de **BEM** (Block Element Modifier).
  - **Block:** componente (ex.: `testimonials`, `commercial`).
  - **Element:** `block__element` (ex.: `testimonials__title`, `commercial__form`).
  - **Modifier:** `block__element--modifier` ou `block--modifier` (ex.: `btn--primary`, `form-group--float`).
- Evitar classes genéricas sem contexto; manter consistência com os blocos existentes no projeto.

### Animações

- **Reveal / FadeIn:** duração padrão **0.8s**, `ease-out`, `forwards`. Variável: `--reveal-transition: 0.8s ease-out`.
- **Logo (logo-life):** loop de **15s**, `ease-in-out`, `infinite`. Keyframes em `header.css`.
- **Countdown (número):** 0.35s ease (countdownFade).
- Sempre preferir `transform` e `opacity` para animações performáticas.

---

## 5. Diretrizes de Imagem e Vídeo

### Vídeos de fundo

- **Filtros obrigatórios** para contraste com texto e leitura:
  - `filter: brightness(0.4) saturate(0.8);`
- Uso: `object-fit: cover`, posicionamento absoluto atrás do conteúdo, `z-index` negativo.
- Overlay escuro sobre o vídeo quando necessário: `linear-gradient(to bottom, rgba(5, 5, 8, 0.5), #050508)`.

### Imagens

- Uso de `max-width: 100%`, `height: auto`, `display: block` quando aplicável.
- Assets em `assets/images/`, `assets/videos/`, `assets/svgs/`.
- **Caminhos root-relative obrigatórios** (`/assets/images/…`, `/src/css/…`): o site tem mais de uma
  página (`/` e `/negocios`) e caminho relativo quebra fora da raiz.

---

## 6. Instrução para o Cursor (IA)

**Sempre que for pedido criar uma nova seção, componente ou trecho de UI no projeto MyWeek, leia este arquivo (`STYLEGUIDE.md`) primeiro.** O novo código deve:

- Usar as variáveis e cores deste styleguide (Rich Black, Deep Purple, Electric Cyan, opacidades de glassmorphism).
- Respeitar tipografia (Outfit para títulos, Inter para corpo), tamanhos e letter-spacing descritos.
- Seguir os padrões de botões, cards e inputs (neon border, blur, transição roxo → ciano na validação).
- Usar nomenclatura BEM e duração de animações (0.8s FadeIn, 15s loop da logo).
- Aplicar `brightness(0.4)` e `saturate(0.8)` em vídeos de fundo.

O objetivo é manter o novo código **visual e tecnicamente idêntico** ao padrão já estabelecido no site.
