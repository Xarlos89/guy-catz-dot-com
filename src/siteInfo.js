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

  // The practice's own accounts. The personal Instagram is deliberately not
  // linked. LinkedIn is still to come — drop the URL in and the footer picks
  // it up. index.html carries these in the JSON-LD `sameAs`: update both.
  instagram: 'https://www.instagram.com/HealingPathRehab/',
  instagramHandle: '@HealingPathRehab',
  // Tracking parameter stripped from the link the practice sent.
  yelp: 'https://www.yelp.com/biz/healing-path-rehabilitation-los-angeles',
  linkedin: '',

  // Web3Forms access key — the contact form in BookingCTA sends through it,
  // and Web3Forms forwards each message to the inbox the key was registered
  // with. Public by design (it can only send to that inbox). While it is
  // empty the form stays hidden and the old "Email instead" button shows.
  web3formsKey: '5fa28fc8-dbd8-4be5-9338-34a35f0282f2',
}
