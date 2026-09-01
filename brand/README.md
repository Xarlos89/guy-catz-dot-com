# Brand source files

`healing-path-logo.jpg` is the logo the practice supplied — the full lock-up,
emblem over the wordmark, drawn navy-and-green on white. It is the master; keep
it here rather than only in `public/`, because everything the site ships is
derived from it and nothing on the page uses it as-is.

Derived by `scripts/build-logo-mark.py` (run from the repo root):

| Output | Used by |
|---|---|
| `public/images/healing-path-mark-{200,340,680}.webp` | the emblem in the hero, recoloured cream/ochre on transparency for the `fern` band |
| `public/images/healing-path-logo-1200.webp` | the untouched lock-up, for the `logo` in the JSON-LD — never rendered on the page, so its white ground is fine |

If a better source ever turns up — a vector original from whoever drew it — put
it here and re-run the script. A vector would be worth having: the mark is
currently a raster traced out of a JPEG, which is fine at the sizes the page
uses it and would not be fine on a business card.
