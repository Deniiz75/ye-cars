# YE Cars Brand Name and Phone Update

## Goal

Update the website's textual brand name from `YE CARS` to `YE Cars` and replace
the placeholder phone details with the confirmed number `+31 6 53435106`.

## Scope

- Set the central site name to `YE Cars`.
- Set the displayed phone number to `+31 6 53435106`.
- Set telephone links to the normalized value `+31653435106`.
- Set WhatsApp links to the normalized value `31653435106`.
- Replace all user-facing `YE CARS` text in page content, metadata,
  accessibility labels, copyright text, and prefilled WhatsApp messages with
  `YE Cars`.
- Update the README so it no longer says the phone number is a placeholder.

## Explicitly Unchanged

- Keep `public/brand/ye-cars-logo.png` unchanged, even though the image contains
  the uppercase wordmark `YE CARS`.
- Keep lowercase technical identifiers, URLs, email addresses, filenames, and
  asset paths unchanged.
- Keep the address placeholder unchanged.
- Do not refactor unrelated content or components.

## Implementation

Use `src/data/site.ts` as the single source of truth for the phone and WhatsApp
values. Make targeted textual replacements in files that contain the brand
name. No new dependencies or architectural changes are required.

## Verification

- Search tracked content to confirm no unintended user-facing `YE CARS`
  occurrences remain.
- Confirm the normalized phone and WhatsApp values are present centrally.
- Run `npm run lint`.
- Run `npm run build`.
- Confirm the Git worktree contains only the intended changes.
