# Before the site goes live

Everything below is either invented or unconfirmed. The site is built and
deploys, but it should not be pointed at `guy-catz.com` until the items in
**Part 1 — blockers** have real answers.

Part 1 is written for Guy: plain questions, no code. Part 2 says where each
answer goes in the repo.

---

## Part 1 — Questions for Guy

### Blockers (the site should not launch without these)

- [ ] **Phone number.** The site currently shows `(323) 555-0142`, which is a
      number reserved for films — it does not ring anywhere. What number
      should patients call, and is it the same one for texts?
- [ ] **Email address.** `hello@guy-catz.com` is a guess. Which address should
      the contact links use, and does it exist yet?
- [ ] **Office address.** The site says `1200 Placeholder Blvd, Suite 3`.
      What is the real street address and suite in West Los Angeles?
- [ ] **Hours.** We assumed `Mon–Fri 8am–6pm, Saturday mornings by request`.
      Correct as written, or different?
- [ ] **Photos.** There are none, so every image slot on the page currently
      shows a grey "photo coming soon" box. The minimum for launch is a
      portrait of you. See the photo list below.

### Prices — three still open

Confirmed and already on the site: **$250** initial evaluation, **$200**
treatment, **+$50** for travel outside the local area.

- [ ] **Telehealth.** You said "either 100 to 150 depending… if it's a
      treatment then definitely 150", then "I gotta think about it". The site
      currently says **$150** flat. Keep it, or add a cheaper guidance-only
      row alongside it?
- [ ] **Packages.** Four- and eight-session bundles are real, but there is no
      math behind them yet, so the site just says "discounted". What are the
      two prices?
- [ ] **Travel radius.** "$50 outside a certain mileage" needs an actual
      distance, or a patient cannot tell whether it applies to them. What is
      the radius, measured from where?

### Policies quoted on your behalf

These are on the site as answers in the FAQ. They were written from your copy
and sound right, but they are ours, not yours — please confirm or correct each
sentence:

- [ ] **Insurance.** "The practice works outside insurance networks… Payment is
      due at the time of the visit." True? Do you provide a superbill on
      request? (Superbill / HSA / FSA wording was removed from the site
      because it was invented — say the word and it goes back in.)
- [ ] **Referrals.** "No. California is a direct-access state, so you can be
      seen without a physician referral." Correct for how you practise?
- [ ] **Cancellations.** "Twenty-four hours notice, no charge. Inside that
      window the session is billed." Is 24 hours your actual policy, and do
      you charge the full rate or part of it?
- [ ] **Session count.** "Most people are seen weekly at first and taper."
      Fair description?

### Testimonials — get this in writing

All three testimonials are real and are on the site verbatim. Two of them
describe care given at a rehab hospital rather than at this practice.

- [ ] **Written, signed permission from each of the three patients** to use
      their words publicly. Patient testimonials in healthcare marketing
      normally require it, and consent given verbally to a therapist is not
      the same thing.
- [ ] **Check the two hospital ones** — confirm you are free to publish care
      delivered under a former employer, and that nothing in the wording
      identifies the facility or another patient.
- [ ] Decide how each name appears: first name only, initials, or full name.

### Photos

Every slot works without a photo, so partial delivery is fine — send what you
have and the rest keep showing placeholders. Roughly in order of value:

- [ ] **Portrait of you** — the one that matters most; it sits beside your bio.
- [ ] **Treatment room, West LA office**
- [ ] **Hands-on work at the table**
- [ ] **The strength / loading area**
- [ ] **A home visit** — working in someone's living room
- [ ] **Balance or gait work**
- [ ] **Reviewing a home program with a patient**
- [ ] **One wide shot for link previews** — what shows up when the site is
      shared in a text or on Instagram.

If a patient appears in any photo, that needs written permission too.

### Accounts and links

- [ ] **Instagram** — the site links to instagram.com generally. What is the
      handle, or should the link come off?
- [ ] **Google Business Profile** — same: the map/reviews link points at Google
      Maps generally. Is there a listing yet? If not, it is worth creating —
      it is how most local patients find a practice.
- [ ] **Domain.** Who owns `guy-catz.com` and where is it registered? We need
      access to point it at the site.

---

## Part 2 — Where each answer lands in the repo

| Answer from Guy | Change here |
|---|---|
| Phone, email, address, hours, socials | `src/siteInfo.js` **and** the JSON-LD + `<meta>` block in `index.html` — two copies, both must change |
| Telehealth price, package prices | `rates` array in `src/sections/Practice.jsx`; the `$200` in `index.html` JSON-LD `offers` if the headline rate moves |
| Travel radius | `rates` row label in `src/sections/Practice.jsx`, and the Programs copy if it repeats it |
| Hours (if different) | `site.hours` / `site.hoursNote` in `siteInfo.js` **and** `openingHoursSpecification` in `index.html` |
| FAQ policy corrections | `faqs` array in `src/sections/FAQ.jsx` **and** the mirrored `FAQPage` JSON-LD in `index.html` |
| Testimonial names / removals | `featured` + `reviews` in `src/sections/Reviews.jsx` — keep the text verbatim |
| Photos | drop in `public/images/`, then set `src` on the slot: portrait in `About.jsx`, feature in `Approach.jsx` (`tone="dark"`), grid in the `photos` array in `Gallery.jsx`, hero in the `heroImage` const in `Hero.jsx` |
| Link-preview image | `public/og-image.jpg` at 1200×630, then uncomment the `og:image` tags in `index.html` |
| Real office address | also swap the generic West LA search embed in `src/sections/BookingCTA.jsx` for a real place embed |

### Launch mechanics (ours, not Guy's)

- [ ] Point DNS at GitHub Pages, **then** add `public/CNAME` containing
      `guy-catz.com`. Adding it before DNS resolves breaks the current
      `*.github.io` URL.
- [ ] Confirm Pages is on: Settings → Pages → Source → GitHub Actions.
- [ ] After the domain is live, re-check that every absolute URL in
      `index.html` (`og:url`, JSON-LD `@id`s) reads `https://guy-catz.com/`.
- [ ] Run `npm run build && npm run preview` and click through once on a
      phone-sized window before announcing it.
