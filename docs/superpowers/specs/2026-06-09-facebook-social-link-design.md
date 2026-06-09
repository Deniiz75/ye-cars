# Facebook Social Link

## Goal

Add the YE Cars Facebook page to the existing `Volg YE Cars` section in the
footer.

## Data

Store the Facebook URL centrally in `src/data/site.ts`:

```text
https://www.facebook.com/people/YE-Cars/61590799406186/
```

## Interface

Add a third social action after Instagram and TikTok:

- Label: `Facebook`
- Icon: a Facebook `f` mark matching the existing line-icon style
- Accessible label: `Volg YE Cars op Facebook`
- Opens in a new browser tab with `rel="noreferrer"`

Reuse the existing `.footer__socials` layout and button styling. No new CSS is
required unless verification shows the third action does not wrap correctly.

## Scope

- Modify `src/data/site.ts`.
- Add `FacebookIcon` to `src/components/icons.tsx`.
- Render the Facebook action in `src/components/footer.tsx`.
- Do not change Instagram, TikTok, footer layout, or other contact details.

## Verification

- Confirm the footer contains exactly one Facebook link with the supplied URL.
- Confirm the link has the correct label, accessible name, target, and rel.
- Confirm Instagram and TikTok remain present.
- Run ESLint and the production build.
- Push to `main` and verify the live Vercel page.
