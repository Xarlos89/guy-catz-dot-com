"""Build the Healing Path mark for the fern band out of the supplied logo JPG.

The file the practice supplied is the full lock-up — emblem over the wordmark —
drawn dark on white. Two things had to change before it could sit on the page:

  * The wordmark is dropped. "Healing Path" is already set in Fraunces in the
    navbar and the practice name is in the hero label, so shipping it again as
    raster type would duplicate it in a font that is not the page's.
  * The colours are remapped. Its navy is 1.3:1 against `fern` — invisible —
    and green/navy/slate would have been a third and fourth colour on a page
    that has two. So the cool artwork becomes `cream` and the greens become
    `ochre`, which are exactly the two inks the rest of the dark bands use.

The white ground becomes transparency, taken from each pixel's distance from
white, so the winding path and the snow on the peaks read as `fern` showing
through and the mountains stay translucent behind the runner.

Also re-emits the untouched lock-up as the JSON-LD `logo`, which is never
rendered on the page and so may keep its white ground.

Run from the repo root. Requires Pillow and NumPy (pip install Pillow numpy).
"""
from PIL import Image, ImageFilter
import numpy as np

SRC = 'brand/healing-path-logo.jpg'
OUT = 'public/images'
BOX = (311, 124, 981, 794)   # the emblem, measured off the source, plus a little air

CREAM = (225, 232, 234)      # cream  #E1E8EA
OCHRE = (230, 185, 140)      # ochre  #E6B98C

im = np.asarray(Image.open(SRC).convert('RGB').crop(BOX)).astype(np.float64)
r, g, b = im[..., 0], im[..., 1], im[..., 2]

# Two families in the artwork: the greens (leaves, spine dots, the meadow) and
# everything cool (the arcs, the runner, the mountains). g-b separates them, but
# the source is a JPEG and the deep forest green in the bottom right sits within
# a few counts of the slate — classified pixel by pixel that seam comes out as
# ochre/cream confetti, so blur the discriminant first and clean up after.
gb = np.asarray(
    Image.fromarray(np.clip(g - b + 128, 0, 255).astype(np.uint8), 'L')
    .filter(ImageFilter.GaussianBlur(4.5))
).astype(np.float64) - 128
green = np.asarray(
    Image.fromarray(((gb > 0).astype(np.uint8) * 255), 'L').filter(ImageFilter.MedianFilter(7))
) > 127

# Coverage: how far the pixel sits from the white ground, normalised per family
# so a filled shape reaches full opacity. Anti-aliased edges land part-way,
# which is the alpha they should have.
ink = (255.0 - (0.299 * r + 0.587 * g + 0.114 * b)) / 255.0
alpha = np.clip(np.where(green, ink / 0.74, ink / 0.82), 0.0, 1.0)

out = np.zeros(im.shape[:2] + (4,), dtype=np.uint8)
for i in range(3):
    out[..., i] = np.where(green, OCHRE[i], CREAM[i])
out[..., 3] = np.round(alpha * 255).astype(np.uint8)

mark = Image.fromarray(out, 'RGBA')
for w in (200, 340, 680):
    h = round(mark.height * w / mark.width)
    mark.resize((w, h), Image.LANCZOS).save(
        f'{OUT}/healing-path-mark-{w}.webp', 'WEBP', quality=88, method=6)
    print(f'healing-path-mark-{w}.webp  {w}x{h}')

# The lock-up as supplied, trimmed to its own content with a little margin.
# This one is not recoloured: it is the `logo` in the index.html JSON-LD, which
# a search result or knowledge panel renders on its own white card.
LOCKUP = (100, 100, 1220, 1130)
lockup = Image.open(SRC).convert('RGB').crop(LOCKUP)
lockup.resize((1200, round(lockup.height * 1200 / lockup.width)), Image.LANCZOS).save(
    f'{OUT}/healing-path-logo-1200.webp', 'WEBP', quality=88, method=6)
print('healing-path-logo-1200.webp')
