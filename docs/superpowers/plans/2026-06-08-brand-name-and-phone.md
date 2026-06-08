# YE Cars Brand Name and Phone Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace all user-facing `YE CARS` text with `YE Cars` and configure the confirmed phone and WhatsApp number.

**Architecture:** Keep phone values centralized in `src/data/site.ts`. Apply targeted copy changes only where the brand is rendered or described, while preserving lowercase technical identifiers and the existing image logo.

**Tech Stack:** Next.js 16, React 19, TypeScript, ESLint, shell-based regression checks

---

### Task 1: Add a failing regression check

**Files:**
- Test: tracked source and documentation files

- [x] **Step 1: Run the pre-change regression check**

```bash
if rg -n 'YE CARS|085 - 00 00 00|31850000000' \
  README.md src \
  -g '!src/data/cars.ts' \
  -g '!*.svg'; then
  exit 1
fi
```

Expected: FAIL because the old user-facing brand text and placeholder numbers are still present.

### Task 2: Update central contact data and textual branding

**Files:**
- Modify: `src/data/site.ts`
- Modify: `src/app/layout.tsx`
- Modify: `src/app/page.tsx`
- Modify: `src/app/diensten/page.tsx`
- Modify: `src/app/aanbod/page.tsx`
- Modify: `src/app/aanbod/[slug]/page.tsx`
- Modify: `src/app/contact/page.tsx`
- Modify: `src/app/verkocht/page.tsx`
- Modify: `src/app/over-ons/page.tsx`
- Modify: `src/components/logo.tsx`
- Modify: `src/components/footer.tsx`
- Modify: `src/components/contact-actions.tsx`
- Modify: `src/app/globals.css`
- Modify: `README.md`

- [x] **Step 1: Update the central site values**

Set these exact values in `src/data/site.ts`:

```ts
name: "YE Cars",
phoneDisplay: "+31 6 53435106",
phoneHref: "+31653435106",
whatsapp: "31653435106",
```

- [x] **Step 2: Update textual brand references**

Replace user-facing `YE CARS` with `YE Cars` in page copy, metadata,
accessibility labels, copyright text, the footer wordmark, WhatsApp greeting,
and README prose.

Where an existing parent applies `text-transform: uppercase`, wrap only the
brand name in:

```tsx
<span className="brand-name">YE Cars</span>
```

Add this targeted CSS rule:

```css
.brand-name {
  text-transform: none;
}
```

Do not change:

```text
public/brand/ye-cars-logo.png
ye-cars-previews.vercel.app
info@yecars.nl
/images/hero-ye-cars.jpg
/videos/ye-cars-hero-v2.mp4
```

- [x] **Step 3: Correct README placeholder wording**

Keep the address warning but remove the phone warning:

```md
The current address is a placeholder and must be replaced with the final
YE Cars business details before launch.
```

- [x] **Step 4: Run the regression check again**

```bash
if rg -n 'YE CARS|085 - 00 00 00|31850000000' \
  README.md src \
  -g '!src/data/cars.ts' \
  -g '!*.svg'; then
  exit 1
fi
```

Expected: PASS with no output.

- [x] **Step 5: Confirm the new values**

```bash
rg -n 'YE Cars|\+31 6 53435106|\+31653435106|31653435106' README.md src
```

Expected: the new brand spelling and all three phone formats are present.

### Task 3: Verify production quality

**Files:**
- Verify: all modified files

- [x] **Step 1: Run formatting and whitespace checks**

```bash
git diff --check
```

Expected: PASS with no output.

- [x] **Step 2: Run ESLint**

```bash
npm run lint
```

Expected: PASS with no warnings or errors.

- [x] **Step 3: Run the production build**

```bash
npm run build
```

Expected: PASS and all static routes are generated.

- [x] **Step 4: Review the final diff**

```bash
git diff -- README.md src
git status --short
```

Expected: only the approved brand-name, phone-number, README, and plan changes are present; `.superpowers/` remains untracked local tooling.

- [x] **Step 5: Commit the implementation**

```bash
git add README.md src docs/superpowers/plans/2026-06-08-brand-name-and-phone.md
git commit -m "fix: update YE Cars branding and phone number"
```
