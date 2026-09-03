// ─────────────────────────────────────────────────────────────
// Phone, email, the office address and the hours are all the
// practice's real details.
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

  address: '11040 Santa Monica Blvd, #480',
  addressCity: 'Los Angeles, CA 90025',

  hours: 'Mon – Thu · 8am – 6pm',
  hoursNote: 'Weekend availability varies',

  // No social links for now. The personal Instagram is deliberately not
  // linked; a business Instagram and a LinkedIn are coming from the
  // practice — drop the URLs in here and the footer picks them up.
  instagram: '',
  linkedin: '',
}
