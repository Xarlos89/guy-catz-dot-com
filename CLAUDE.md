# Healing Path Rehabilitation — Claude Code Guide

## What this project is

Static marketing website for **Healing Path Rehabilitation** — the practice of Guy H. Catz, PT, DPT, in Los Angeles. One-on-one physical therapy delivered three ways: in the patient's home, at the West Los Angeles office, or by telehealth. Single-page scroll. No backend, no router, no database. Builds to `dist/` and deploys to GitHub Pages via GitHub Actions.

The domain is `guy-catz.com`; the practice name is Healing Path Rehabilitation. The wordmark reads "Healing Path" — don't "correct" it to the doctor's name.

The stack is borrowed from the `veli-bol-home` site; the design language is not. Where that site is a photo-led travel page built from hard-edged alternating slabs, this one is a calm, mostly-light field with curved seams. See "Bands and seams" below before adding anything.

> **The words are the client's; the contact details and prices are not.** Bio, approach, services and testimonials are real copy supplied by the practice — keep testimonials verbatim. See "What's placeholder" at the bottom for what still needs replacing.

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
  palette.js         band colours as hex — <Divider> needs real colour strings
  components/
    Navbar.jsx       floating translucent pill, appears after 120px of scroll
    Footer.jsx       practice summary / explore links / contact
    Divider.jsx      the curved seam between two colour bands
    Reveal.jsx       scroll-triggered fade-and-rise wrapper
    Photo.jsx        image slot — <img>, or a "photo coming soon" placeholder when src is falsy
  sections/          one file per visible scroll section, assembled in App.jsx
    Hero.jsx         light dawn gradient, two breathing washes, no photo needed
    Practice.jsx     hairline fact row, what a session holds, rates (#practice)
    About.jsx        "Meet our doctor" — bio + portrait + `facts` credentials grid
    Programs.jsx     the three care settings — `tiers` array (#programs)
    Approach.jsx     the Healing Path approach, `principles`, closing mission quote
    Services.jsx     `experience` (8 rehab specialties) + `provided` (what a plan involves)
    Process.jsx      four-step timeline — `steps` array
    Gallery.jsx      masonry grid of the practice — `photos` array
    Reviews.jsx      real patient testimonials — `featured` + `reviews`
    FAQ.jsx          accordion — `faqs` array (uses useState per item)
    BookingCTA.jsx   closing call-to-action + map (#book)
  App.jsx            orders the sections and places the dividers between bands
  main.jsx           ViteReactSSG entry; App adds `.reveal-ready` on mount
  index.css          @font-face, base layer, component classes
public/
  fonts/             self-hosted Fraunces + DM Sans (latin subset, woff2)
  images/            drop photos here — currently empty, so every slot renders a placeholder
  favicon.svg
  robots.txt
  sitemap.xml
.github/
  workflows/
    deploy.yml       push to main → npm ci → npm run build → GitHub Pages
```

## Bands and seams

**This is the part that makes the page feel calm — don't undo it by accident.**

The page is not eleven alternating light/dark slabs. It is **six colour bands**, each holding one or two sections, joined by **curved dividers**. Sections inside a band share a background and simply continue into each other with no rule, no border, and no colour change.

| Band | Sections | Background |
|---|---|---|
| A | Hero, Practice | dawn gradient `mist → linen`, then `linen` |
| B | About, Programs | `oat` |
| C | Approach, Services | `fern` — the one grounded, dark moment |
| D | Process, Gallery | `linen`, warming into `clay` |
| E | Reviews, FAQ | `oat` |
| F | BookingCTA | gradient `oat → blush` |
| — | Footer | `fern-deep` |

The seams are placed in `App.jsx`:

```jsx
<Divider from="linen" to="oat" shape="dune" />
```

`from` **must** match the background of the section above and `to` the section below — the SVG paints `to` over a `from` background, so a mismatch shows as a hard line. Four shapes exist in `Divider.jsx` (`dune`, `bowl`, `crest`, `ripple`), deliberately gentle; steep waves read as energetic, which is the opposite of the brief. **Reordering or inserting a section means re-pairing every divider below it.**

Rules of thumb for anything new:

- No `border-t` between sections, and no full-width horizontal rules except the deliberate hairline inside Practice
- Cards are borderless: `.soft-card` (warm shadow, no outline), never a 1px box
- Section padding is generous — `py-24 sm:py-32`, or `pt-8 pb-24 sm:pb-32` for the second section in a band
- Wrap each block in `<Reveal>` so it rises into view

## Design tokens (tailwind.config.js)

Earthy and healthy — warm neutrals carry the page, green grounds it, terracotta is the only saturated colour.

| Token | Value | Used for |
|---|---|---|
| `linen` | `#FBF7F1` | the lightest field; band A and D |
| `oat` | `#F4EDE3` | band B and E; light photo placeholders |
| `clay` | `#EADFD1` | the warm end of band D (Gallery) |
| `blush` | `#F3E0CB` | the warm end of band F (Booking) |
| `mist` | `#E4EADF` | green-tinted top of the hero gradient |
| `sage` | `#A9B8A4` | quiet accent, selection colour |
| `sage-deep` | `#7C917B` | list bullets, timeline dots |
| `fern` | `#46584A` | band C background; serif accent colour on light |
| `fern-light` | `#53664F` | dark photo placeholders |
| `fern-deep` | `#3A4A3E` | footer |
| `terracotta` | `#C08262` | primary buttons, small dots |
| `terracotta-deep` | `#A8623F` | label text on light (contrast-safe), button hover |
| `ochre` | `#DCA97B` | label text and icons on `fern` (contrast-safe) |
| `umber` | `#4A4139` | body text |
| `umber-soft` | `#6B6055` | secondary text |
| `stone` | `#E6DBCD` | hairlines, ghost-button borders |

Contrast note: `terracotta` and `ochre` are too light for text on their own backgrounds — that is what `terracotta-deep` (on light) and `ochre` (on `fern` only) are for. Don't set small text in plain `terracotta`.

### Type

- **Fraunces** — headings, wordmark, prices, pull-quotes. Used at weight 400, never bold. Its `SOFT` axis is turned up (`SOFT 100`) and the optical size is kept *low* (`opsz` 24–34): high `opsz` makes Fraunces a high-contrast Didone, which reads editorial rather than calm. `WONK 1` on display headings turns on the organic alternates (the italic swashes in the hero).
- **DM Sans** — body and UI, weights 300–500.

Both are **self-hosted** from `public/fonts/` (latin subset, variable woff2) with `@font-face` at the top of `src/index.css`, and the two upright faces are preloaded in `index.html`. No Google Fonts request at runtime. To add a subset or axis, refetch from the Google Fonts CSS API and drop the woff2 alongside the others.

## Reusable CSS classes (src/index.css)

- `.label` / `.label-light` — spaced-caps section label (terracotta on light, ochre on fern)
- `.section-heading` / `.section-heading-light` — Fraunces h2 with the soft/wonk variation settings
- `.lede` / `.lede-light` — the relaxed 1.85 line-height intro paragraph
- `.btn-primary` — terracotta pill; `.btn-ghost` — outlined pill on light; `.btn-ghost-light` — outlined pill on fern
- `.soft-card` / `.soft-card-dark` — borderless rounded surface with a warm shadow
- `.reveal` — hidden-then-risen state, scoped to `.reveal-ready` so prerendered HTML stays visible without JS

Motion: `animate-breathe` (11s) and `animate-drift` (16s) on the hero washes, and the reveal transition. All of it is switched off under `prefers-reduced-motion`. There is no pulsing or bouncing anywhere — the whole point is that nothing on this page demands attention.

Texture: a fine SVG grain sits on `body::after` as one fixed, page-wide layer. It was originally per-section, which left a visible seam wherever two bands met — keep it at the page level.

## Section IDs (for anchor links)

`#home` · `#practice` · `#about` · `#programs` · `#approach` · `#services` · `#process` · `#gallery` · `#reviews` · `#faq` · `#book` · `#contact` (footer)

The Navbar links to `#practice`, `#about`, `#programs`, `#approach`, `#reviews` (the `navLinks` array), plus the wordmark (`#home`) and the Book button (`#book`). The rest exist for the footer and deep linking.

## Where the content lives

- **Practice name, doctor, credentials, contact details** — `src/siteInfo.js`, imported everywhere. `index.html` keeps its own copy for `<meta>` tags and JSON-LD — **update both.**
- **Rates** — `src/sections/Practice.jsx` — the `rates` array
- **Session info** — `src/sections/Practice.jsx` — the `infoCards` and `included` arrays
- **Care settings** (home / office / telehealth) — `src/sections/Programs.jsx` — the `tiers` array
- **Specialties and treatments** — `src/sections/Services.jsx` — the `experience` and `provided` arrays
- **Bio and credentials** — `src/sections/About.jsx` — the prose plus the `facts` array
- **Intake steps** — `src/sections/Process.jsx` — the `steps` array
- **FAQ** — `src/sections/FAQ.jsx` — the `faqs` array (mirrored in the `FAQPage` JSON-LD in `index.html`)
- **Testimonials** — `src/sections/Reviews.jsx` — the `reviews` array
- **Map** — `src/sections/BookingCTA.jsx`

## Adding photos

1. Drop the image into `public/images/` (JPG or WebP, keep under 400 KB)
2. Set the `src` on the relevant slot:
   - Hero background — the `heroImage` const at the top of `src/sections/Hero.jsx`. Note the hero is *designed* to work without one; a photo there changes the section's character, so check the contrast of the headline over it
   - Portrait — the `<Photo>` in `src/sections/About.jsx`
   - Approach feature — the `<Photo>` in `src/sections/Approach.jsx` (use `tone="dark"`, it sits on fern)
   - Studio grid — the `photos` array in `src/sections/Gallery.jsx`; `tall: true` gives a slot a portrait crop, which is what keeps the masonry from marching in step
3. Any slot with a falsy `src` renders the labelled "photo coming soon" placeholder via `src/components/Photo.jsx`, so partial photography is fine
4. Push to `main` — Actions builds and deploys automatically

## Deployment

- **GitHub Pages**: push to `main` triggers `.github/workflows/deploy.yml`
  - Actions pinned to exact versions: `checkout@v6.0.3`, `setup-node@v6.4.0`, `configure-pages@v6.0.0`, `upload-pages-artifact@v5.0.0`, `deploy-pages@v5.0.0`
  - Node 26, `npm ci`, `npm run build`, artifact from `dist/`
  - Enable at: Settings → Pages → Source → GitHub Actions
  - **`base` is `/`**, which assumes a custom domain. Serving from `https://xarlos89.github.io/guy-catz-dot-com/` instead requires `base: '/guy-catz-dot-com/'` in `vite.config.js` — and the font paths in `@font-face` are absolute, so they need the prefix too
  - No `public/CNAME` yet — add one containing `guy-catz.com` once DNS points at Pages (adding it before then breaks the default `*.github.io` URL)
- **Self-hosted**: see `Caddyfile` — drop `dist/` at `/var/www/guy-catz/`, Caddy handles HTTPS

## What's placeholder / not yet real

Real, supplied by the practice: the practice name and doctor, his bio and credentials, the approach copy, the specialty and treatment lists, the three care settings, and all three testimonials.

Still invented and needing replacement before launch:

- **All contact details** — `src/siteInfo.js`: the phone number is in the reserved `555-01xx` fictional range, and the email and street address are made up. The office is in West Los Angeles; the exact address is not known
- **Hours** — `Mon–Fri 8am–6pm, Saturday mornings by request` is assumed
- **All prices** — the Practice rates ($225 / $175 / $960), including the superbill / HSA / FSA claims that sit under them. The out-of-network model itself is real (it comes from the client's copy); the numbers are not
- **FAQ answers** — written from the client's copy and plausible, but the insurance, cancellation and direct-access policies must be confirmed
- **All photography** — `public/images/` is empty; every slot renders a placeholder
- **Google Maps embed** — `BookingCTA.jsx` points at a generic West Los Angeles search; swap for a real place embed once the address is known
- **OG image** — `public/og-image.jpg` does not exist, so the `og:image` meta tags are commented out in `index.html` until it does
- **Social links** — `siteInfo.js` Instagram/Google links point at those sites' homepages

One thing to raise with the client rather than fix in code: **patient testimonials in healthcare marketing usually need written, signed permission**, and two of the three describe care given at a rehab hospital. Worth confirming the release before launch.
