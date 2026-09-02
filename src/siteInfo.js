// ─────────────────────────────────────────────────────────────
// Phone and email are the practice's real details. The street
// address and hours are still PLACEHOLDER — see CLAUDE.md.
// The practice name, doctor, credentials and service settings
// below are real. Everything on the site reads from here, so one
// edit updates the whole page.
// (index.html keeps its own copy for <meta> tags and JSON-LD.)
// ─────────────────────────────────────────────────────────────
export const site = {
  practice: 'Healing Path Rehabilitation',
  practiceShort: 'Healing Path',
  doctor: 'Guy H. Catz',
  credentials: 'PT, DPT',
  // From the practice's own logo lock-up — his words, not a written one.
  tagline: 'Restore movement. Restore life.',
  city: 'Los Angeles, California',
  neighborhood: 'West Los Angeles',

  phone: '(323) 380-2039',
  phoneHref: 'tel:+13233802039',
  email: 'GuyHCatz@gmail.com',
  emailHref: 'mailto:GuyHCatz@gmail.com',

  // PLACEHOLDER
  address: '1200 Placeholder Blvd, Suite 3',
  addressCity: 'Los Angeles, CA 90025',
  hours: 'Mon – Fri · 8am – 6pm',
  hoursNote: 'Saturday mornings by request',

  // No social links for now. The personal Instagram is deliberately not
  // linked; a business Instagram and a LinkedIn are coming from the
  // practice — drop the URLs in here and the footer picks them up.
  instagram: '',
  linkedin: '',
}
