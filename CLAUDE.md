# Healing Path Rehabilitation — Claude Code Guide

## What this project is

Static marketing website for **Healing Path Rehabilitation** — the practice of Guy H. Catz, PT, DPT, in Los Angeles. One-on-one physical therapy delivered three ways: in the patient's home, at the West Los Angeles office, or by telehealth. Single-page scroll. No backend, no router, no database. Builds to `dist/` and deploys to GitHub Pages via GitHub Actions.

The domain is `guy-catz.com`; the practice name is Healing Path Rehabilitation. The wordmark reads "Healing Path" — don't "correct" it to the doctor's name.

The stack is borrowed from the `veli-bol-home` site; the design language is not. Where that site is a photo-led travel page built from hard-edged alternating slabs, this one is built from exactly **two background colours** — a deep blue-green and a cool light blue — alternating in bands joined by curved seams. See "Bands and seams" below before adding anything.

> **The words are the client's, and so are the contact details and prices now.** Bio, approach, services and testimonials are real copy supplied by the practice — keep testimonials verbatim. Phone, email, the office address and every rate but telehealth are confirmed; the opening hours are the last invented fact. See "What's placeholder" at the bottom.

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
    Navbar.jsx       floating translucent pill, fixed at the top from the first
                     pixel; Services carries a Rates/FAQ submenu
    Footer.jsx       practice summary / explore links / contact
    Divider.jsx      the curved seam between two colour bands
    Reveal.jsx       scroll-triggered fade-and-rise wrapper
    Photo.jsx        image slot — <img>, or a "photo coming soon" placeholder when src is falsy
  sections/          one file per visible scroll section, assembled in App.jsx
    Hero.jsx         a flat `fern` band — no photo, no gradient, light-on-dark;
                     carries the recoloured logo mark; laid out mobile-first —
                     see "Mobile" and "The logo" below
    Practice.jsx     hairline fact row (#practice) — the rates moved out
    About.jsx        "Meet Our Doctor" — portrait + his bio, verbatim (`paragraphs`);
                     a `fern` band, so light-on-dark
    Approach.jsx     the Healing Path Approach, verbatim (`paragraphs`)
    Services.jsx     `experience` (8 rehab specialties) + `provided` (what a plan involves)
    Gallery.jsx      masonry grid of the practice — `photos` array
    Reviews.jsx      real patient testimonials — `featured` + `reviews` —
                     closing on the Care Hero certificate photo, with the
                     `award` text as its screen-reader transcript
    FAQ.jsx          accordion — `faqs` array (uses useState per item)
    Rates.jsx        the price list + the insurance note (#rates), at the foot
                     of the page — reached from the menu as Services → Rates
    BookingCTA.jsx   closing call-to-action + map (#book)
  App.jsx            orders the sections and places the dividers between bands
  main.jsx           ViteReactSSG entry; App adds `.reveal-ready` on mount
  index.css          @font-face, base layer, component classes
public/
  fonts/             self-hosted Fraunces + DM Sans (latin subset, woff2)
  images/            photography, plus the logo mark and lock-up
  favicon.svg
  robots.txt
  sitemap.xml
brand/
  healing-path-logo.jpg   the logo as the practice supplied it — the master
scripts/
  build-logo-mark.py      derives everything the site ships from that master
.github/
  workflows/
    deploy.yml       push to main → npm ci → npm run build → GitHub Pages
```

## Bands and seams

**This is the part that makes the page feel calm — don't undo it by accident.**

The page is not eleven alternating light/dark slabs. It is **eight colour bands** plus the footer, joined by **curved dividers**. Sections inside a band share a background and simply continue into each other with no rule, no border, and no colour change.

**There are two background colours on this page and there is no third.** The
client's instruction was literal — *"I only want to see two background colors
on the whole page"* — after pointing at the Services band and saying *"when I
said blue, I meant like the services section"*. So `fern` is that blue-green,
`mist` is its light companion, and every band is one or the other, strictly
alternating.

| Band | Sections | Background |
|---|---|---|
| A | Hero | `fern` |
| B | Practice | `mist` |
| C | About | `fern` |
| D | Approach | `mist` |
| E | Services | `fern` |
| F | Gallery | `mist` |
| G | Reviews | `fern` |
| H | FAQ, Rates, BookingCTA | `mist` |
| — | Footer | `fern` |

One section per band, apart from the closing three — the colour changes at
every seam. Rates sits inside that closing band deliberately: the client asked
for the price list to come only after everything else has been read, and
`.btn-primary` needs the light ground anyway.

**`cream` is never a band background.** It is the surface tone — cards, the
navbar pill, ghost buttons, light photo placeholders — and nothing else. An
earlier draft gave About a `cream` band, and the client's note was that it and
Reviews *"look so bright, why??"*: they were the two lightest areas on the
page. If a section needs to feel different, the alternation already does that;
don't reach for a third background.

### What decides which sections can be dark

**The terracotta button.** `.btn-primary` on `fern` sits at **1.4:1** — the pill
all but vanishes, and no shade of terracotta both separates from `fern` and
carries `cream` text at AA. Any section with a primary CTA (Practice,
BookingCTA) therefore stays on `mist`. The Hero is dark and uses
`.btn-primary-light`, the cream inversion, instead. This is the one hard
constraint on the alternation.

**Long-form copy is not a constraint — the client decided that.** An earlier
pass kept his bio and the Approach on `mist`, on the reasoning that seven
paragraphs of light-on-dark is a readability cost worth avoiding. He asked for
Meet Our Doctor on the dark band anyway, so that is where it is. The cost is
paid down with type rather than colour: a `62ch` measure, `1.85` line height,
`cream` for the serif opening paragraph and `cream/80` for the body. If the
Approach ever moves to `fern` too, do the same there — and note that the two of
them can never both be dark while alternation holds, since they are neighbours.

A dark section also needs its light-on-dark variants throughout —
`.label-light`, `.section-heading-light`, `text-cream`, `text-cream/80` for
body, `.soft-card-dark`, and `ochre` (not `fern`) for any emphasis, since a
fern `<em>` on a fern ground is invisible. Hero, Services and Reviews are the
worked examples.

The seams are placed in `App.jsx`:

```jsx
<Divider from="fern" to="mist" shape="dune" />
```

`from` **must** match the background of the section above and `to` the section below — the SVG paints `to` over a `from` background, so a mismatch shows as a hard line. Four shapes exist in `Divider.jsx` (`dune`, `bowl`, `crest`, `ripple`), deliberately gentle; steep waves read as energetic, which is the opposite of the brief. **Reordering or inserting a section means re-pairing every divider below it.**

### The logo

The practice supplied its logo as a JPEG of the full lock-up — the emblem over
a "HEALING PATH REHABILITATION" wordmark — drawn navy-and-green on white. It is
in `brand/healing-path-logo.jpg`, and **nothing on the page uses it as-is**.
`scripts/build-logo-mark.py` derives what the site actually ships:

| Output | Where |
|---|---|
| `healing-path-mark-{200,340,680}.webp` | the emblem, recoloured for `fern`, in the Hero |
| `healing-path-logo-1200.webp` | the untouched lock-up, the `logo` in the JSON-LD |

Two things were changed on the way in, and both are the page's rules rather
than taste:

- **The wordmark is dropped from the page.** "Healing Path" is already set in
  Fraunces in the navbar and the practice name is in the hero label; shipping
  it again as raster type would say it a third time, in a font that is not
  this page's
- **The colours are remapped.** The logo's navy is 1.3:1 against `fern` —
  invisible — and its navy/green/slate would have been a third, fourth and
  fifth colour on a page that has two. So the cool artwork becomes `cream`, the
  greens become `ochre`, and the white ground becomes transparency. Those are
  the same two inks every other dark band uses, which is why the mark sits on
  the Hero as if it had been drawn for it

The recolour is a per-pixel remap, not a trace: alpha comes from each pixel's
distance from white (so the winding path and the snow on the peaks read as
`fern` showing through), and the cream/ochre split comes from `g - b`. That
discriminant is blurred before it is thresholded — the deep forest green in the
bottom right sits within a few counts of the slate, and classified pixel by
pixel the seam between them comes out as ochre/cream confetti. If you re-run
the script against a new source and see speckle, that blur radius is the knob.

**A vector original would be worth asking for.** What is here is traced out of
a JPEG: fine at the sizes the page uses, not fine on a business card.

The lock-up's own tagline — *"Restore movement. Restore life."* — is real
copy, so it is now `site.tagline` (it replaced an invented one that nothing
rendered) and it sits under the footer wordmark.

### Heading pairs — the name leads, the phrase follows

Sections used to open with a small spaced-caps `.label` over a large
`.section-heading`, which put the *description* at display size and the
section's own name in 11px capitals. The client asked for that reversed
everywhere he saw it: "Testimonials" over "In their words", "The Practice" over
"Where the work happens", "FAQ" over "Good to know", "Meet Our Doctor" over his
name and credentials. So the pattern is now:

```jsx
<h2 className="section-heading mb-3">The Practice</h2>
<p className="section-sub mb-6">Where the work happens</p>
```

The `h2` carries the section's name — which is also what the menu and the
footer call it — and `.section-sub` sets the phrase beneath it in the same
serif, around `1.35rem`. `.label` is still right for a small heading *inside* a
section ("Experienced in", "What that involves", "Book a session"); it is no
longer how a section introduces itself.

The Hero follows the same instruction: the practice name is the largest thing
on the page and "Recovery is more than healing an injury" sits under it at
roughly half the size it used to be.

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

**Insurance wording:** the client gave the sentence himself — **"We currently
do not accept insurance"** — and it is set that way in both places it appears,
followed by the same explanation, verbatim: payment is due at the time of the
visit, and *"this ensures significantly less wait time for appointments, and
you will receive direct one-on-one care guided by your goals rather than what
your plan covers."* Rates.jsx and the FAQ answer carry the identical wording;
change one and change the other, plus the `FAQPage` JSON-LD in `index.html`.
"Out-of-network", "private pay", "cash-based" and "superbill" are industry
terms that a patient reads as a hedge — and the billing specifics behind them
are unconfirmed anyway. "Does not bill insurance" was the earlier phrasing and
he replaced it.

Rules of thumb for anything new:

- No `border-t` between sections, and no full-width horizontal rules except the deliberate hairline inside Practice
- Cards are borderless: `.soft-card` (soft shadow, no outline), never a 1px box
- **Nothing on this page is white.** No `bg-white`, no `#fff`, no white-tinted overlay. A raised surface is `cream` — the lightest band tone — and it separates itself with a shadow, not by being brighter than the palette allows
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

Two backgrounds, one surface, and a small set of type and accent colours.
Everything is cool except terracotta and ochre, which are the only warm things
on the site and all the louder for it.

**The two backgrounds**

| Token | Value | Used for |
|---|---|---|
| `fern` | `#3C4F49` | the dark band — Hero, About, Services, Reviews, Footer |
| `mist` | `#C4D0D5` | the light band — everything else |

They sit 5.5:1 apart, so the alternation is unmistakable. Adding a third
background is the one change this design does not survive; if a section needs
to feel different, move it to the other colour.

**Everything else**

| Token | Value | Used for |
|---|---|---|
| `cream` | `#E1E8EA` | the surface tone: `.soft-card`, the navbar pill, ghost buttons, `.btn-primary-light`, light photo placeholders. Also the text colour on `fern`. **Never a background** |
| `fern-light` | `#485C55` | dark photo placeholders only |
| `sage` | `#9FB3AC` | quiet accent, selection colour |
| `sage-deep` | `#6B8279` | list bullets on light |
| `terracotta` | `#94512F` | primary buttons **on `mist` only** — carries `cream` text at AA, but sits at 1.4:1 on `fern` |
| `terracotta-light` | `#C08262` | small dots and marks, never text |
| `terracotta-deep` | `#7A4023` | label text on light, and the button hover |
| `ochre` | `#E6B98C` | labels, dots and emphasis on `fern` |
| `ink` | `#2C3A38` | body text on `mist` |
| `ink-soft` | `#475654` | secondary text on `mist` |
| `line` | `#A3B5BA` | hairlines, ghost-button borders |

Every text/ground pair clears WCAG AA (4.5:1) at these values. On `mist`: `ink`
7.5, `ink-soft` 4.9, `terracotta-deep` 5.2, `cream` on the terracotta pill 4.9.
On `fern`: `cream` 7.0, `cream/80` 5.2, `ochre` 4.9, and `fern` text on a
`.btn-primary-light` pill 7.0. Light-on-dark text needs **`/75` or higher** on
`fern` — below that it fails, which is why the footer's opacities are what they
are.

Contrast note: `terracotta-light` and `ochre` are too light for text on a light
ground — that is what `terracotta-deep` (on light) and `ochre` (on `fern` only)
are for. Don't set small text in `terracotta` or `terracotta-light`.

### Shadow

Three tokens, each two layers: a close contact shadow so the edge of a surface
reads, and a wide soft one so it lifts off the page. Cool-black
(`rgba(31,44,43,…)`), matching the ground — a warm or neutral-grey shadow on
these blues reads as dirt.

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
- `.section-sub` / `.section-sub-light` — the quiet second line under a heading (see "Heading pairs" above)
- `.lede` / `.lede-light` — the relaxed 1.85 line-height intro paragraph
- `.btn-primary` — terracotta pill, **on `mist` only**; `.btn-primary-light` — its cream inversion, the primary on `fern`; `.btn-ghost` — outlined pill on light; `.btn-ghost-light` — outlined pill on fern
- `.soft-card` / `.soft-card-dark` — borderless rounded surface with a soft shadow. `.soft-card` is solid `cream`, **not** white or a white overlay
- `.photo-frame` — the clip-and-lift wrapper every photo sits in (`overflow-hidden` + `shadow-lift`)
- `.hero-height` — the hero's minimum height, in `svh` where supported so mobile browser chrome can't push the buttons off screen
- `.reveal` — hidden-then-risen state, scoped to `.reveal-ready` so prerendered HTML stays visible without JS

`section[id]` and `footer[id]` carry a `scroll-margin-top` in the base layer,
so an anchor jump stops short of the floating navbar instead of under it.

Motion: `animate-breathe` (11s) on the hero's scroll-hint hairline, and the reveal transition. (`animate-drift` went with the hero's blurred washes — if you reintroduce a slow drift, define the keyframes again.) All of it is switched off under `prefers-reduced-motion`. There is no pulsing or bouncing anywhere — the whole point is that nothing on this page demands attention.

Texture: a fine SVG grain sits on `body::after` as one fixed, page-wide layer. It was originally per-section, which left a visible seam wherever two bands met — keep it at the page level.

## Section IDs (for anchor links)

`#home` · `#practice` · `#about` · `#approach` · `#services` · `#gallery` · `#reviews` · `#faq` · `#rates` · `#book` · `#contact` (footer)

The Navbar links to `#practice`, `#about`, `#approach`, `#services`, `#reviews` (the `navLinks` array), plus the wordmark (`#home`) and the Book button (`#book`). Services is the one entry with `children` — `#rates` then `#faq` — which open on hover and on focus-within, so the submenu is reachable by keyboard. Below `md` the links are hidden entirely and the pill keeps the wordmark, the call icon and Book. `#gallery` and `#contact` exist for the footer and deep linking.

`#practice` is the fact row and nothing else. It used to be the fact row *and*
the rates, which meant clicking "Practice" in the menu landed a visitor on a
price list — the client's complaint, and the reason Rates.jsx exists.

## Where the content lives

- **Practice name, doctor, credentials, contact details** — `src/siteInfo.js`, imported everywhere. `index.html` keeps its own copy for `<meta>` tags and JSON-LD — **update both.**
- **Rates** — `src/sections/Rates.jsx` — the `rates` array
- **Session info** — `src/sections/Practice.jsx` — the `infoCards` array
- **Specialties and treatments** — `src/sections/Services.jsx` — the `experience` and `provided` arrays
- **Bio** — `src/sections/About.jsx` — the `paragraphs` array (verbatim)
- **Approach** — `src/sections/Approach.jsx` — the `paragraphs` array (verbatim)
- **FAQ** — `src/sections/FAQ.jsx` — the `faqs` array (mirrored in the `FAQPage` JSON-LD in `index.html`)
- **Testimonials** — `src/sections/Reviews.jsx` — the `reviews` array
- **The Care Hero award** — `src/sections/Reviews.jsx` — the `award` object
- **Logo** — `brand/healing-path-logo.jpg`, rebuilt by `scripts/build-logo-mark.py`
- **Map** — `src/sections/BookingCTA.jsx` — an embed query on the street address, without the suite number (`#` is a URL fragment delimiter, and the suite does not move the pin)

## Adding photos

Photos ship at **several widths** and the browser picks one that matches the
slot, so a 306px column does not pull down an 1800px file. That means a source
photo becomes a small ladder of files, not one file.

1. Resize and re-encode the source into its ladder. Widths in use:
   - Gallery slots — `400, 700, 1100` (a slot is ~306px wide at three columns,
     and full width on a phone)
   - The Approach feature — `500, 900, 1400` (it sits in a 704px measure)
   - The About portrait — `400, 800, 1200` (~381px wide at `lg`, capped by the
     source width where that is smaller)
   - The hero logo mark — `200, 340, 680` (68px on a phone, 248–288px at `lg`);
     built by `scripts/build-logo-mark.py`, not by the snippet below
   Requires Pillow (`pip install Pillow`); WebP at `quality=80, method=6` is
   what the current set was encoded at, and lands each variant well under
   400 KB:
   ```python
   from PIL import Image
   im = Image.open(src).convert('RGB')
   for w in widths:
       h = round(im.height * w / im.width)
       im.resize((w, h), Image.LANCZOS).save(
           f'public/images/{name}-{w}.webp', 'WEBP', quality=80, method=6)
   ```
2. Drop the variants into `public/images/` as `name-<width>.webp`
3. Point the slot at them. **Never write the URL by hand** — build it with
   `responsivePhoto(name, widths)` (or `asset(path)` for a one-off file) from
   `src/images.js`, which keeps the path relative. See Deployment below for why
   an absolute `/images/…` breaks:
   - **Not the hero.** It takes no photo — the client asked for none, and a photo behind it would break the flat-band pattern the rest of the page keeps. There is no image slot there to fill
   - Portrait — the `<Photo>` in `src/sections/About.jsx`
   - Approach feature — the `<Photo>` in `src/sections/Approach.jsx` (that band is light, so the default `tone` is right)
   - Practice grid — the `photos` array in `src/sections/Gallery.jsx`. Slots render at the photo's own aspect ratio (`natural` on `<Photo>`), so the masonry staggers by itself — a fixed ratio cropped faces and hands out of frame. One column below `sm`, three at `md`
4. Set `width`/`height` on the `<Photo>` to the **largest variant's** own pixel
   dimensions, and pass a `sizes` string describing how wide the slot actually
   is. Without `sizes` the browser assumes the photo is full-viewport-width and
   downloads the largest file every time
5. Any slot with a falsy `src` renders the labelled "photo coming soon" placeholder via `src/components/Photo.jsx`, so partial photography is fine
6. Push to `main` — Actions builds and deploys automatically

## Deployment

- **GitHub Pages**: push to `main` triggers `.github/workflows/deploy.yml`
  - Actions pinned to exact versions: `checkout@v6.0.3`, `setup-node@v6.4.0`, `configure-pages@v6.0.0`, `upload-pages-artifact@v5.0.0`, `deploy-pages@v5.0.0`
  - Node 26, `npm ci`, `npm run build`, artifact from `dist/`
  - Enable at: Settings → Pages → Source → GitHub Actions
  - **`base` is `./`** — a relative base, so the same build works both at a custom-domain root (`guy-catz.com/`) and under project pages (`xarlos89.github.io/guy-catz-dot-com/`). This is why the `@font-face` `url()`s are `../fonts/…` (the CSS lands in `/assets/`) and the `index.html` preloads are `./fonts/…`. **Absolute `/…` asset paths silently 404 under the sub-path** — keep new references relative. The photography did exactly this and 404'd on the `github.io` URL; everything in `public/` now goes through `asset()` / `responsivePhoto()` in `src/images.js`, which emit `./images/…`. Note `import.meta.env.BASE_URL` is **not** the fix — Vite resolves it to `/` for a relative base
  - `configure-pages` runs with `enablement: true`, so the first successful run switches Pages on itself. If it lacks permission, enable it by hand: Settings → Pages → Source → GitHub Actions
  - No `public/CNAME` yet — add one containing `guy-catz.com` once DNS points at Pages (adding it before then breaks the default `*.github.io` URL)
- **Self-hosted**: see `Caddyfile` — drop `dist/` at `/var/www/guy-catz/`, Caddy handles HTTPS

## What's placeholder / not yet real

Real, supplied by the practice: the practice name and doctor, his bio and credentials, the approach copy, the specialty and treatment lists, all three testimonials, the Care Hero award, its certificate photograph and the two patient comments quoted on it, the logo, and the photography — five treatment-room frames in the gallery, the feature photo in Approach, and two portraits. `public/og-image.jpg` is cut from the same set.

The two portraits are `meet-the-doctor` (seated at the treatment table) and
`dr-guy-catz-headshot` (the tighter frame). There is only one portrait slot on
the page, so the seated one fills it — it is the warmer of the two and the page
has no other environmental shot of him. The headshot is the `image` on the
`Person` in the `index.html` JSON-LD, which is what a knowledge panel picks up.
Both are cropped by `object-cover` into a `4/5` slot, and both survive it.

Still invented and needing replacement before launch:

- **Hours** — `Mon–Fri 8am–6pm, Saturday mornings by request` is assumed. It is the last invented fact in `siteInfo.js`; the phone, email and office address are all confirmed
- **FAQ answers** — written from the client's copy and plausible, but the insurance, cancellation and direct-access policies must be confirmed
- **No postal code** — he gave the address without one, so none is set and the `PostalAddress` in the JSON-LD omits `postalCode` rather than carrying a guess. Worth asking for: it is one of the fields local search leans on
- **Social links** — none are rendered. The personal Instagram is deliberately not linked; the practice is setting up a business Instagram and a LinkedIn. Put the URLs in `siteInfo.js` (`instagram`, `linkedin`) and add the links back to the footer
- **Who gave the Care Hero award, and when** — `Reviews.jsx`, the `award`
  object: `issuer` and `period` are empty and render nothing until they are
  filled in. He said only "at the hospital last year", so neither a hospital
  name nor a year was guessed. Now that the hospital's own certificate is on
  the page as artwork, their sign-off matters more than it did

### Rates — one figure still open

Confirmed by the practice: **$250** initial evaluation, **$200** treatment,
**+$50** outside the local area, **$750** for four sessions and **$1,400** for
eight. The packages are their own rows now that they carry numbers — they were
a single "contact for details" line while he was still doing the math. Still
open, and shown on the site anyway:

- **Telehealth $150** — he said "either 100 to 150 depending… if it's a treatment then definitely 150", and then "I gotta think about it". The last unsettled figure on the page. If a cheaper guidance-only tier is wanted, it needs its own row
- **The mileage radius** — still undefined; at his instruction the travel row keeps the +$50 and adds "contact for details" instead of naming a boundary

Superbill / HSA / FSA wording was removed: the out-of-network model comes from
the client's copy, but the billing specifics were invented and are unconfirmed.

One thing to raise with the client rather than fix in code: **patient testimonials in healthcare marketing usually need written, signed permission**, and two of the three describe care given at a rehab hospital. Worth confirming the release before launch. The Care Hero award is the same conversation twice over — the two comments on it are patients', and the award itself is the hospital's to publish, so their sign-off belongs alongside the patients'.

The certificate as supplied is a rainbow-gradient graphic carrying the
hospital's own lettering and a photo of him. It was kept off the page for a
design reason — it puts a third, fourth and fifth colour on a site that has two,
and reads as somebody else's artwork — but **the client asked for it directly,
at the end of the testimonials, in place of the typeset version**, so that
reasoning is overruled and the photograph is what closes Reviews. It ships as
`care-hero-award-{400,642}.webp`; the ladder stops at 642 because that is the
width of the file he supplied, and upscaling would only make a bigger blurry
file. It sits in a `max-w-xl` `.photo-frame` — near its own size, so the small
print stays as legible as the source allows.

**That photo is the exception, not a precedent.** One framed image on the dark
band is contained; a rainbow anywhere else on the page is not. Don't pull its
colours into a heading, a border or a badge, and don't add a second copy of it.

**The certificate is made of text, so `Reviews.jsx` carries a transcript** of it
in an `sr-only` block under the image — the label, the citation, the two patient
comments and his own closing quote. Without it a screen reader gets a picture
and nothing else. Note this is the one place his long "My favorite thing about
being a physical therapist…" quote appears: it is printed on the certificate,
so publishing the photograph publishes it, and the transcript only makes the
same words reachable. That is an equivalent for an image, not the editorial
placement the verbatim-copy rule is about — if he wants it gone, the whole
transcript goes with it. His own
long quote from the certificate ("My favourite thing about being a physical
therapist…") is not on the page either: it is his voice, and Reviews is the
patients' section. It is good writing and would sit well at the end of the
Approach if he wants it there — but that is his verbatim block, so it is his
call, not an edit to make for him.
