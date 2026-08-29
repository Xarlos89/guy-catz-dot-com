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
- **Vite 5** — build tool, `base: './'` in `vite.config.js` (relative, so the build runs from any mount point)
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
    Hero.jsx         light dawn gradient, two breathing washes, no photo needed;
                     laid out mobile-first — see "Mobile" below
    Practice.jsx     hairline fact row + rates (#practice)
    About.jsx        "Meet Our Doctor" — portrait + his bio, verbatim (`paragraphs`)
    Approach.jsx     the Healing Path Approach, verbatim (`paragraphs`)
    Services.jsx     `experience` (8 rehab specialties) + `provided` (what a plan involves)
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
| B | About | `oat` |
| C | Approach | `linen` |
| D | Services | `fern` — the one grounded, dark moment |
| E | Gallery | `linen`, warming into `clay` |
| F | Reviews, FAQ, BookingCTA | `oat`, ending on a gradient into `blush` |
| — | Footer | `fern-deep` |

Approach and About are long-form reading, so both sit on light bands: seven
paragraphs of light-on-dark body text is a real readability cost, and that is
why the dark band holds Services alone rather than Approach too.

The seams are placed in `App.jsx`:

```jsx
<Divider from="linen" to="oat" shape="dune" />
```

`from` **must** match the background of the section above and `to` the section below — the SVG paints `to` over a `from` background, so a mismatch shows as a hard line. Four shapes exist in `Divider.jsx` (`dune`, `bowl`, `crest`, `ripple`), deliberately gentle; steep waves read as energetic, which is the opposite of the brief. **Reordering or inserting a section means re-pairing every divider below it.**

### The client's own copy — do not rearrange it

`Approach.jsx` and `About.jsx` each render a `paragraphs` array that is the
client's writing, verbatim and in his order. He asked for these two sections
specifically after an earlier draft split them up:

> *"I don't like how the AI kind of spliced up what I wrote and even took bits
> out of paragraphs and put it elsewhere. It takes away from the cohesiveness…
> I did it with the intention that it would all kind of stay together."*

So: **never** break these paragraphs across cards, pull a sentence out for a
heading or pull-quote, move one into another section, or lift the closing
education paragraph into a credentials grid — it belongs at the end of Meet Our
Doctor as a paragraph, which is where professionals put it. Readability here
comes from typography — measure, spacing, a larger opening paragraph — not from
chopping the text up. Same goes for the testimonials in `Reviews.jsx`.

### Nothing invented — the rule that removed two whole sections

The client reviewed every line and cut both sections that were written *for*
him rather than *by* him: "Ways to work together" (the three care settings) and
"How it works" (a four-step intake timeline). His notes were *"Drop it. I don't
want things off the script"* and *"Again, drop this. Nothing made up."* A
"Free 15-minute consult" offer went the same way — he had never offered one.

So before adding any section, sentence or figure: it comes from him, or it does
not go on the site. Plausible is not the standard. Where a detail is genuinely
unsettled he would rather the page said **"contact for details"** than carried
a number nobody has agreed to — that is what the packages and travel rows do.

### Voice — plain, not clever

The client's second note was about the writing *around* his copy:

> *"Our tone is relaxing, healing and caring. Stop using Claude like language
> where you try to be too 'catch line-y'."*

So the site's own words — headings, subtitles, FAQ answers, the small print
under a fact — are written the way you would say them to a patient, and nothing
is written to land a line. What that ruled out, and what replaced it:

| Cut | Now reads |
|---|---|
| "the whole session, every session" | "you have my full attention" |
| "Out-of-network" / "no insurance-driven limits" | "Without insurance" / "paid at the time of the visit" |
| "Simple and transparent" (rates heading) | "What a session costs" |
| "no queue, no televisions, and no one else booked over the top of your hour" | "wherever you are most comfortable moving" |
| "the aim is for you to need me less, not longer" | "and it is revisited as you go" |
| "Breathe" over the scroll hint | the hairline alone, no caption |

Two tests before a sentence goes in: could he say it out loud to a patient
without wincing, and does it tell them something true rather than sell them
the idea of it? Note that the "televisions" line also broke the
nothing-invented rule — the punchy sentences are usually the invented ones.

**Insurance wording:** the practice does not bill insurance. Say that, in those
words. "Out-of-network", "private pay", "cash-based" and "superbill" are
industry terms that a patient reads as a hedge — and the billing specifics
behind them are unconfirmed anyway.

Rules of thumb for anything new:

- No `border-t` between sections, and no full-width horizontal rules except the deliberate hairline inside Practice
- Cards are borderless: `.soft-card` (warm shadow, no outline), never a 1px box
- Section padding is generous — `py-24 sm:py-32`, or `pt-8 pb-24 sm:pb-32` for the second section in a band
- Wrap each block in `<Reveal>` so it rises into view

### Mobile

Design the phone layout first; the wide one is the variation. What that means
here, and what the second pass fixed:

- **One left edge.** Label, heading, body, buttons and lists all start on the
  same margin at every width. Nothing centres on mobile and left-aligns on
  desktop
- **Buttons stack full width** below `sm` (`w-full sm:w-auto`) — two pills of
  different widths on one row is the ragged look this page is trying to avoid
- **No hard line breaks below `sm`.** The hero's `<br>` is `hidden sm:block`;
  the heading wraps on its own, with `text-balance` keeping the lines even
- **Rows become stacks.** The Practice fact row is stacked with a hairline
  *above* each item on a phone, two columns at `sm`, four with a hairline to the
  *left* at `lg`. The Gallery is one column below `sm` — two columns of 155px
  photos is not showing anyone the work
- **Viewport units are `svh`, not `vh`,** anywhere a section is sized to the
  screen. `100vh` on a phone is taller than the screen until the address bar
  collapses, which pushes the call-to-action out of reach
- Check 320px as well as 390px, and check that
  `document.documentElement.scrollWidth` still equals `clientWidth` — one
  overflowing element gives the whole page a horizontal scroll

## Design tokens (tailwind.config.js)

Earthy and healthy — warm neutrals carry the page, green grounds it, terracotta is the only saturated colour.

The whole set was taken down a step in a later pass — the client asked for a
"slightly darker" page. Same hues, less glare, and enough ground under the
shadows for them to read. If you lighten one of these, lighten the others with
it or the bands stop matching the dividers.

| Token | Value | Used for |
|---|---|---|
| `linen` | `#F7F2EA` | the lightest field; band A and C |
| `oat` | `#EDE4D6` | band B and F; light photo placeholders |
| `clay` | `#E0D2BF` | the warm end of band E (Gallery) |
| `blush` | `#E9D2B7` | the warm end of band F (Booking) |
| `mist` | `#D8E0D2` | green-tinted top of the hero gradient |
| `sage` | `#A9B8A4` | quiet accent, selection colour |
| `sage-deep` | `#6E8470` | list bullets, hero setting dots |
| `fern` | `#3F5143` | band D background; serif accent colour on light |
| `fern-light` | `#4B5D48` | dark photo placeholders |
| `fern-deep` | `#324136` | footer |
| `terracotta` | `#A6613D` | primary buttons — carries `linen` text at AA |
| `terracotta-light` | `#C08262` | small dots and marks, never text |
| `terracotta-deep` | `#8A4E2C` | label text on light, and the button hover |
| `ochre` | `#E6B98C` | label text and icons on `fern` (contrast-safe) |
| `umber` | `#40382F` | body text |
| `umber-soft` | `#5D5348` | secondary text |
| `stone` | `#D9CCBA` | hairlines, ghost-button borders |

Contrast note: `terracotta-light` and `ochre` are too light for text on a light
ground — that is what `terracotta-deep` (on light) and `ochre` (on `fern` only)
are for. Don't set small text in `terracotta` or `terracotta-light`.

### Shadow

Three tokens, each two layers: a close contact shadow so the edge of a surface
reads, and a wide soft one so it lifts off the page. Warm-black
(`rgba(52,44,36,…)`), never neutral grey — a grey shadow on these creams turns
the warmth off.

| Token | Used for |
|---|---|
| `shadow-soft` | buttons, the small resting state |
| `shadow-lift` | `.soft-card`, `.photo-frame`, the navbar pill, hover states |
| `shadow-deep` | the portrait, the map, the dark card on `fern` |

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
- `.photo-frame` — the clip-and-lift wrapper every photo sits in (`overflow-hidden` + `shadow-lift`)
- `.hero-height` — the hero's minimum height, in `svh` where supported so mobile browser chrome can't push the buttons off screen
- `.reveal` — hidden-then-risen state, scoped to `.reveal-ready` so prerendered HTML stays visible without JS

`section[id]` and `footer[id]` carry a `scroll-margin-top` in the base layer,
so an anchor jump stops short of the floating navbar instead of under it.

Motion: `animate-breathe` (11s) and `animate-drift` (16s) on the hero washes, and the reveal transition. All of it is switched off under `prefers-reduced-motion`. There is no pulsing or bouncing anywhere — the whole point is that nothing on this page demands attention.

Texture: a fine SVG grain sits on `body::after` as one fixed, page-wide layer. It was originally per-section, which left a visible seam wherever two bands met — keep it at the page level.

## Section IDs (for anchor links)

`#home` · `#practice` · `#about` · `#approach` · `#services` · `#gallery` · `#reviews` · `#faq` · `#book` · `#contact` (footer)

The Navbar links to `#practice`, `#about`, `#approach`, `#services`, `#reviews` (the `navLinks` array), plus the wordmark (`#home`) and the Book button (`#book`). `#gallery` and `#contact` exist for the footer and deep linking.

## Where the content lives

- **Practice name, doctor, credentials, contact details** — `src/siteInfo.js`, imported everywhere. `index.html` keeps its own copy for `<meta>` tags and JSON-LD — **update both.**
- **Rates** — `src/sections/Practice.jsx` — the `rates` array
- **Session info** — `src/sections/Practice.jsx` — the `infoCards` array
- **Specialties and treatments** — `src/sections/Services.jsx` — the `experience` and `provided` arrays
- **Bio** — `src/sections/About.jsx` — the `paragraphs` array (verbatim)
- **Approach** — `src/sections/Approach.jsx` — the `paragraphs` array (verbatim)
- **FAQ** — `src/sections/FAQ.jsx` — the `faqs` array (mirrored in the `FAQPage` JSON-LD in `index.html`)
- **Testimonials** — `src/sections/Reviews.jsx` — the `reviews` array
- **Map** — `src/sections/BookingCTA.jsx`

## Adding photos

1. Drop the image into `public/images/` (JPG or WebP, keep under 400 KB)
2. Set the `src` on the relevant slot:
   - Hero background — the `heroImage` const at the top of `src/sections/Hero.jsx`. Note the hero is *designed* to work without one; a photo there changes the section's character, so check the contrast of the headline over it
   - Portrait — the `<Photo>` in `src/sections/About.jsx`
   - Approach feature — the `<Photo>` in `src/sections/Approach.jsx` (that band is light, so the default `tone` is right)
   - Practice grid — the `photos` array in `src/sections/Gallery.jsx`. Slots render at the photo's own aspect ratio (`natural` on `<Photo>`), so the masonry staggers by itself — a fixed ratio cropped faces and hands out of frame. One column below `sm`, three at `md`
3. Any slot with a falsy `src` renders the labelled "photo coming soon" placeholder via `src/components/Photo.jsx`, so partial photography is fine
4. Push to `main` — Actions builds and deploys automatically

## Deployment

- **GitHub Pages**: push to `main` triggers `.github/workflows/deploy.yml`
  - Actions pinned to exact versions: `checkout@v6.0.3`, `setup-node@v6.4.0`, `configure-pages@v6.0.0`, `upload-pages-artifact@v5.0.0`, `deploy-pages@v5.0.0`
  - Node 26, `npm ci`, `npm run build`, artifact from `dist/`
  - Enable at: Settings → Pages → Source → GitHub Actions
  - **`base` is `./`** — a relative base, so the same build works both at a custom-domain root (`guy-catz.com/`) and under project pages (`xarlos89.github.io/guy-catz-dot-com/`). This is why the `@font-face` `url()`s are `../fonts/…` (the CSS lands in `/assets/`) and the `index.html` preloads are `./fonts/…`. **Absolute `/…` asset paths silently 404 under the sub-path** — keep new references relative
  - `configure-pages` runs with `enablement: true`, so the first successful run switches Pages on itself. If it lacks permission, enable it by hand: Settings → Pages → Source → GitHub Actions
  - No `public/CNAME` yet — add one containing `guy-catz.com` once DNS points at Pages (adding it before then breaks the default `*.github.io` URL)
- **Self-hosted**: see `Caddyfile` — drop `dist/` at `/var/www/guy-catz/`, Caddy handles HTTPS

## What's placeholder / not yet real

Real, supplied by the practice: the practice name and doctor, his bio and credentials, the approach copy, the specialty and treatment lists, all three testimonials, and the photography — five treatment-room frames in the gallery plus the feature photo in Approach, resized to webp under 400 KB. `public/og-image.jpg` is cut from the same set.

Still invented and needing replacement before launch:

- **All contact details** — `src/siteInfo.js`: the phone number is in the reserved `555-01xx` fictional range, and the email and street address are made up. The office is in West Los Angeles; the exact address is not known
- **Hours** — `Mon–Fri 8am–6pm, Saturday mornings by request` is assumed
- **FAQ answers** — written from the client's copy and plausible, but the insurance, cancellation and direct-access policies must be confirmed
- **The portrait** — `About.jsx` shows `portrait-placeholder.svg`, a drawn cat captioned "portrait coming soon", standing in until the real headshots arrive. Swap the `src` and the alt text when they do
- **The hero** — still the dawn gradient, by design rather than for want of a photo; see "Adding photos"
- **Google Maps embed** — `BookingCTA.jsx` points at a generic West Los Angeles search; swap for a real place embed once the address is known
- **Social links** — `siteInfo.js` Instagram/Google links point at those sites' homepages

### Rates — partly confirmed

Confirmed by the practice: **$250** initial evaluation, **$200** treatment,
**+$50** outside the local area. Still open, and shown on the site anyway:

- **Telehealth $150** — he said "either 100 to 150 depending… if it's a treatment then definitely 150", and then "I gotta think about it". If a cheaper guidance-only tier is wanted, it needs its own row
- **Package pricing** — four- and eight-session bundles are real, but he has not done the math. At his instruction the row reads "contact for details" rather than a number
- **The mileage radius** — still undefined; at his instruction the travel row keeps the +$50 and adds "contact for details" instead of naming a boundary

Superbill / HSA / FSA wording was removed: the out-of-network model comes from
the client's copy, but the billing specifics were invented and are unconfirmed.

One thing to raise with the client rather than fix in code: **patient testimonials in healthcare marketing usually need written, signed permission**, and two of the three describe care given at a rehab hospital. Worth confirming the release before launch.
