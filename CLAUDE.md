# Guy Catz Physical Therapy — Claude Code Guide

## What this project is

Static marketing website for Guy Catz, a Doctor of Physical Therapy in Los Angeles whose practice is built around holistic healing through movement. Single-page scroll. No backend, no router, no database. Builds to `dist/` and deploys to GitHub Pages via GitHub Actions.

Adapted from the `veli-bol-home` site — same stack, same section-component architecture, different palette and content.

> **Most copy on this site is placeholder.** See "What's placeholder" at the bottom before showing it to a client.

## Commands

```bash
npm run dev      # dev server at http://localhost:5173
npm run build    # production build → dist/
npm run preview  # serve dist/ locally
```

## Stack

- **React 18** — UI
- **Vite 5** — build tool, `base: '/'` in `vite.config.js`
- **vite-react-ssg** — prerenders the page to static HTML at build time (pinned to `0.9.1`; `0.9.2+` requires Vite 6)
- **Tailwind CSS 3** — styling via utility classes + component layer in `src/index.css`
- **No router** — single HTML page, anchor links (`#practice`, `#about`, etc.)

## Project layout

```
src/
  siteInfo.js        single source of truth for phone / email / address / hours
  components/
    Navbar.jsx       sticky nav, wordmark + anchor links + Book button
    Footer.jsx       practice summary / explore links / contact
    Photo.jsx        image slot — renders <img>, or a "photo coming soon" placeholder when src is falsy
  sections/          one file per visible scroll section, assembled in App.jsx
    Hero.jsx         full-screen; gradient background until a hero photo is added (dark)
    Practice.jsx     session info, rates, map (#practice) (dark)
    About.jsx        Guy's bio + contact buttons (light)
    Programs.jsx     1:1 / small-group / virtual, `tiers` array (#programs) (dark)
    Approach.jsx     philosophy + `principles` array + photo grid (light)
    Services.jsx     "reasons people come in" icon grid, `services` array (dark)
    Process.jsx      numbered four-step timeline, `steps` array (light)
    Gallery.jsx      2-col studio photo grid, `photos` array (dark)
    Reviews.jsx      testimonials, `reviews` array (light)
    FAQ.jsx          accordion, `faqs` array (uses useState per item) (dark)
    BookingCTA.jsx   closing call-to-action (#book) (light)
  App.jsx            imports and orders all sections
  main.jsx           ViteReactSSG entry
  index.css          @tailwind directives + .label, .section-heading, .btn-dark, .btn-clay, .info-card
public/
  images/            drop photos here — currently empty, so every slot renders a placeholder
  favicon.svg
  robots.txt
  sitemap.xml
.github/
  workflows/
    deploy.yml       push to main → npm ci → npm run build → GitHub Pages
```

## Design tokens (tailwind.config.js)

Earthy / healing palette — deep forest green, warm sand, terracotta.

| Token | Value | Used for |
|---|---|---|
| `sand` | `#F4EFE6` | page background |
| `sand-dark` | `#E7DFCF` | photo placeholders on light sections |
| `moss` | `#26332B` | dark-section backgrounds (Practice, Programs, Services, Gallery, FAQ) + Hero gradient |
| `moss-light` | `#2F3E33` | cards inside dark sections, dark photo placeholders |
| `moss-card` | `#3A4B3E` | spare raised surface on dark |
| `clay` | `#C1714A` | labels, icons, accents, primary CTA |
| `clay-light` | `#D28C67` | accents on dark backgrounds, CTA hover |
| `sage` | `#8FA189` | muted green accent (used in the hero gradient) |
| `bark` | `#241C14` | body text, footer background, `.btn-dark` |
| `stone` | `#DCD2C2` | borders, dividers |

Fonts: **Fraunces** (serif — headings, wordmark, italic) · **Inter** (sans — body, labels, UI). Loaded from Google Fonts in `index.html`.

## Reusable CSS classes (src/index.css)

- `.label` / `.label-light` — small clay spaced-caps section label
- `.section-heading` / `.section-heading-light` — Fraunces bold h2
- `.btn-dark` — bark filled pill button
- `.btn-clay` — terracotta filled pill button
- `.btn-outline-light` — white outlined pill (for use on dark/photo backgrounds)
- `.info-card` / `.info-card-label` / `.info-card-value` — white rounded card + typography
- `.cta-btn` / `.cta-btn-ring` — pulsing ring behind the primary CTA (disabled under `prefers-reduced-motion`)

## Section IDs (for anchor links)

`#home` · `#practice` · `#about` · `#programs` · `#approach` · `#services` · `#process` · `#gallery` · `#reviews` · `#faq` · `#book` · `#contact` (footer)

The Navbar links to `#practice`, `#about`, `#programs`, `#approach`, `#services`, `#reviews` (the `navLinks` array), plus the wordmark (`#home`) and the Book button (`#book`). The rest exist for the footer and deep linking.

**Section colour rhythm:** sections strictly alternate dark (`bg-moss`) ↔ light (`bg-sand`) down the page. Order: Hero(dark) · Practice(dark) · About(light) · Programs(dark) · Approach(light) · Services(dark) · Process(light) · Gallery(dark) · Reviews(light) · FAQ(dark) · Booking(light). The dark Hero flows straight into the dark Practice (intentional — the hero dissolves into the first section); strict alternation runs from Practice down. Inserting or reordering a section flips this parity — expect to recolour everything below it. Dark sections use `section-heading-light`, `text-white/40–60`, `bg-moss-light` cards; light sections use `section-heading`, `text-gray-400–600`, `bg-white` cards + `border-t border-stone`.

## Where the content lives

- **Contact details** (phone, email, address, hours, socials) — `src/siteInfo.js`, imported everywhere. `index.html` keeps its own copy for `<meta>` tags and JSON-LD — **update both.**
- **Rates** — `src/sections/Practice.jsx` — the three-column price block
- **Session info** — `src/sections/Practice.jsx` — the `infoCards` and `included` arrays
- **Program tiers and prices** — `src/sections/Programs.jsx` — the `tiers` array
- **Conditions treated** — `src/sections/Services.jsx` — the `services` array
- **Intake steps** — `src/sections/Process.jsx` — the `steps` array
- **FAQ** — `src/sections/FAQ.jsx` — the `faqs` array (mirrored in the `FAQPage` JSON-LD in `index.html`)
- **Testimonials** — `src/sections/Reviews.jsx` — the `reviews` array

## Adding photos

1. Drop the image into `public/images/` (JPG or WebP, keep under 400 KB)
2. Set the `src` on the relevant slot:
   - Hero background — the `heroImage` const at the top of `src/sections/Hero.jsx`
   - Portrait — the `<Photo>` in `src/sections/About.jsx`
   - Approach feature + grid — the `photos` array in `src/sections/Approach.jsx`
   - Studio grid — the `photos` array in `src/sections/Gallery.jsx`
3. Any slot with a falsy `src` renders the labelled "photo coming soon" placeholder via `src/components/Photo.jsx`, so partial photography is fine
4. Push to `main` — Actions builds and deploys automatically

## Deployment

- **GitHub Pages**: push to `main` triggers `.github/workflows/deploy.yml`
  - Actions pinned to exact versions: `checkout@v6.0.3`, `setup-node@v6.4.0`, `configure-pages@v6.0.0`, `upload-pages-artifact@v5.0.0`, `deploy-pages@v5.0.0`
  - Node 26, `npm ci`, `npm run build`, artifact from `dist/`
  - Enable at: Settings → Pages → Source → GitHub Actions
  - **`base` is `/`**, which assumes a custom domain. Serving from `https://xarlos89.github.io/guy-catz-dot-com/` instead requires `base: '/guy-catz-dot-com/'` in `vite.config.js`
  - No `public/CNAME` yet — add one containing `guy-catz.com` once DNS points at Pages (adding it before then breaks the default `*.github.io` URL)
- **Self-hosted**: see `Caddyfile` — drop `dist/` at `/var/www/guy-catz/`, Caddy handles HTTPS

## What's placeholder / not yet real

Everything below is invented and needs replacing with real details before launch:

- **All contact details** — `src/siteInfo.js`: the phone number is in the reserved `555-01xx` fictional range, the email and street address are made up
- **All prices** — Practice rates ($225 / $175 / $960) and Programs tiers ($175 / $45 / $120)
- **Guy's bio and credentials** — `About.jsx`, including "DPT, OCS" and "practising since 2011"
- **Testimonials** — `Reviews.jsx` is entirely placeholder text and renders a visible "awaiting real client reviews" badge. Replace with real, permissioned reviews and delete the `PlaceholderNote` component
- **FAQ answers** — plausible but unverified; the insurance, cancellation and direct-access policies must be confirmed
- **All photography** — `public/images/` is empty; every slot renders a placeholder
- **Google Maps embed** — `Practice.jsx` points at a generic Silver Lake search; swap for a real place embed
- **OG image** — `public/og-image.jpg` does not exist, so the `og:image` meta tags are commented out in `index.html` until it does
- **Social links** — `siteInfo.js` Instagram/Google links point at those sites' homepages
