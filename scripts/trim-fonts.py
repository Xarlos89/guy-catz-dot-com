#!/usr/bin/env python3
"""
Trims the variable axes of the self-hosted fonts down to the ranges this
design actually uses, in place, in public/fonts/.

Google Fonts ships Fraunces and DM Sans with their full designspace —
`wght 100..900` and, on Fraunces, `opsz 9..144`. This page never asks for any
of that. Every serif element carries an explicit `opsz` (24, 26 or 30; see the
`.font-serif` rule in src/index.css, which is why optical sizing never floats
free), the only weight utilities in the source are `font-normal` and
`font-medium`, and all three @font-face blocks already declare
`font-weight: 300 500`. The masters outside those ranges were being downloaded
and never used — about 90 KB across the three files, on a page where fonts were
half the total bytes.

This RESTRICTS the ranges rather than pinning them to one instance, so the axes
stay variable and every value the page asks for is still interpolated rather
than substituted.

What it costs, measured rather than assumed: instancing recomputes deltas, so
rendering is *visually* identical but not byte-identical. A full-page diff at
1280 and 390 (with animations disabled, against a verified 0px noise floor)
moved 0.25% of pixels — antialiasing on text throughout — and changed the
layout of exactly one thing, the navbar wordmark, by 1px of advance width.
Nothing rewraps and no block moves. Side-by-side crops of the hero and the
navbar at 2x magnification are indistinguishable. If you re-run this after
changing the limits, redo that diff rather than trusting the numbers here.

**Re-run this if you replace a font file** — a fresh download from Google Fonts
carries the full designspace again. And widen the limits here first if the
design ever reaches for a heavier weight or a larger explicit `opsz`, or the
browser will clamp to the range instead of honouring it.

    pip install fonttools brotli
    python3 scripts/trim-fonts.py
"""
from pathlib import Path

from fontTools.ttLib import TTFont
from fontTools.varLib import instancer

FONTS = Path(__file__).resolve().parent.parent / 'public' / 'fonts'

# Fraunces: opsz is set explicitly on every serif element, so 9..40 covers the
# 24/26/30 in use with room to spare. DM Sans is left to automatic optical
# sizing (opsz tracks the font size, and nothing here is above ~20px), so only
# its weight range is trimmed.
LIMITS = {
    'fraunces-latin.woff2': {'wght': (300, 500), 'opsz': (9, 40)},
    'fraunces-italic-latin.woff2': {'wght': (300, 500), 'opsz': (9, 40)},
    'dmsans-latin.woff2': {'wght': (300, 500)},
}


def main():
    total_before = total_after = 0
    for name, limits in LIMITS.items():
        path = FONTS / name
        before = path.stat().st_size
        font = TTFont(path)
        instancer.instantiateVariableFont(font, limits, inplace=True, updateFontNames=False)
        font.flavor = 'woff2'
        font.save(path)
        after = path.stat().st_size
        total_before += before
        total_after += after
        print(f'{name:30} {before / 1024:6.0f} KB -> {after / 1024:6.0f} KB')
    saved = total_before - total_after
    print(f'{"total":30} {total_before / 1024:6.0f} KB -> {total_after / 1024:6.0f} KB '
          f'({saved / 1024:.0f} KB, {100 * saved / total_before:.0f}% smaller)')


if __name__ == '__main__':
    main()
