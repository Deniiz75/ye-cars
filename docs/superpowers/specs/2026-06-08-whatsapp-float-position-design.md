# WhatsApp Floating Button Position Fix

## Goal

Keep the desktop WhatsApp button fixed in the bottom-right corner of the
viewport on every scroll position.

## Root Cause

The base `.whatsapp-float` rule correctly declares `position: fixed`, but a
later shared interaction rule includes `.whatsapp-float` and overwrites it with
`position: relative`. This places the button in normal document flow near the
footer.

## Fix

Remove `.whatsapp-float` from the shared selector that assigns
`position: relative`, `overflow: hidden`, and `isolation: isolate`.

Keep the separate `.whatsapp-float > *` child rule so the icon remains above
the ripple animation. The button's existing fixed position, link, styling,
animation, and WhatsApp number remain unchanged.

## Responsive Behavior

- Above 680px: show the floating WhatsApp button fixed at the bottom-right.
- At 680px and below: keep hiding the floating button and use the existing
  fixed mobile contact bar with its WhatsApp action.

## Verification

- Before the fix, a computed-style regression check must show
  `.whatsapp-float` resolving to `position: relative`.
- After the fix, the same check must resolve to `position: fixed` at desktop
  width.
- Confirm the WhatsApp link still targets `31653435106`.
- Run ESLint and the production build.
- Verify the deployed page after pushing.
