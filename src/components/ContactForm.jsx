import { useState } from 'react'
import { site } from '../siteInfo'

// The four tick-box answers are the client's own list — don't add to it
// without him.
const sources = ['Friend/Relative', 'Google', 'Social Media', 'Yelp']

const ENDPOINT = 'https://api.web3forms.com/submit'

const fieldClasses =
  'block w-full rounded-2xl border border-line bg-mist/40 px-4 py-3 font-sans text-[15px] text-ink ' +
  'transition-colors duration-300 focus:outline-none focus:border-sage-deep focus:ring-2 focus:ring-sage/50'

const labelClasses = 'block font-sans font-medium text-[14px] text-ink mb-2'

/**
 * The message form in the booking section. It replaced the "Email instead"
 * `mailto:` button, which does nothing on a computer with no desktop mail app —
 * the client's own laptop among them.
 *
 * The site has no server, so submissions go to Web3Forms, which forwards each
 * one to the inbox the access key was registered with (his Gmail). The key is
 * public by design — it can only send *to* that inbox — and lives in
 * `siteInfo.js`.
 *
 * Privacy: this is a plain contact form, not a HIPAA-compliant intake. Neither
 * Web3Forms nor a personal Gmail signs a BAA, so the concern box asks for a
 * sentence or two and no more. Don't add fields for history, medications,
 * dates of birth or insurance details without moving to a compliant service.
 */
export default function ContactForm() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    // Honeypot: a person never sees or ticks this box.
    if (data.get('botcheck')) return

    const name = data.get('name').trim()
    const contact = data.get('contact').trim()
    const heard = data.getAll('heard')

    const payload = {
      access_key: site.web3formsKey,
      subject: `New message from the website — ${name}`,
      from_name: 'guycatz.com',
      'Full name': name,
      'Email or phone': contact,
      'Primary area of concern': data.get('concern').trim(),
      'How did you hear about us?': heard.length ? heard.join(', ') : 'Not answered',
    }
    // When they gave an email, make "Reply" in Gmail go straight to them.
    if (contact.includes('@')) payload.replyto = contact

    setStatus('sending')
    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      const result = await response.json()
      if (!result.success) throw new Error(result.message)
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div role="status" className="py-6">
        <p className="font-serif text-2xl text-ink mb-3">Thank you</p>
        <p className="font-sans text-[15px] text-ink-soft leading-[1.85] max-w-md">
          Your message has been sent. We will be in touch soon.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="cf-name" className={labelClasses}>Full name</label>
        <input id="cf-name" name="name" type="text" autoComplete="name" required className={fieldClasses} />
      </div>

      <div>
        <label htmlFor="cf-contact" className={labelClasses}>Email or phone #</label>
        <input id="cf-contact" name="contact" type="text" autoComplete="email" required className={fieldClasses} />
      </div>

      <div>
        <label htmlFor="cf-concern" className={labelClasses}>
          Brief description of the primary area of concern
        </label>
        <p id="cf-concern-hint" className="font-sans text-[13px] text-ink-soft mb-2.5">
          A sentence or two is plenty — we will go over the details together.
        </p>
        <textarea
          id="cf-concern"
          name="concern"
          rows={3}
          required
          aria-describedby="cf-concern-hint"
          className={`${fieldClasses} resize-y min-h-[6rem]`}
        />
      </div>

      <fieldset>
        <legend className={labelClasses}>How did you hear about us?</legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mt-1">
          {sources.map((source) => (
            <label key={source} className="flex items-center gap-3 font-sans text-[15px] text-ink cursor-pointer">
              <input type="checkbox" name="heard" value={source} className="w-4 h-4 accent-terracotta shrink-0" />
              {source}
            </label>
          ))}
        </div>
      </fieldset>

      {/* Honeypot — hidden from people and from screen readers */}
      <input type="checkbox" name="botcheck" tabIndex={-1} aria-hidden="true" className="hidden" />

      <div className="pt-2">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="btn-primary w-full sm:w-auto disabled:opacity-70 disabled:cursor-wait"
        >
          {status === 'sending' ? 'Sending…' : 'Send message'}
        </button>
        <p aria-live="polite" className="font-sans text-[14px] text-terracotta-deep mt-4 empty:hidden">
          {status === 'error' &&
            `Something went wrong and your message was not sent. Please try again, or call ${site.phone}.`}
        </p>
      </div>
    </form>
  )
}
