# WhatsApp Floating Button Position Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Keep the desktop WhatsApp action fixed at the bottom-right of the viewport while preserving the existing mobile contact bar.

**Architecture:** Correct the CSS cascade at its source by excluding `.whatsapp-float` from the later shared rule that assigns `position: relative`. Preserve the button component, WhatsApp URL, animation, and responsive breakpoint behavior.

**Tech Stack:** Next.js 16, React 19, CSS, ESLint, temporary Playwright computed-style regression test

---

### Task 1: Prove the CSS cascade regression

**Files:**
- Test: production CSS served by the local Next.js app

- [x] **Step 1: Start the production app**

```bash
npm run build
npm start
```

Expected: the app listens on `http://localhost:3000`.

- [x] **Step 2: Run the failing computed-style check**

```bash
npm install --prefix /tmp/ye-cars-playwright @playwright/test
/tmp/ye-cars-playwright/node_modules/.bin/playwright test \
  /tmp/ye-cars-playwright/whatsapp-position.spec.js
```

Expected: FAIL and report `position: "relative"`.

### Task 2: Remove the conflicting selector

**Files:**
- Modify: `src/app/globals.css`

- [x] **Step 1: Apply the minimal CSS fix**

Change:

```css
.button,
.menu-button,
.whatsapp-float,
.mobile-contact a,
```

to:

```css
.button,
.menu-button,
.mobile-contact a,
```

Keep `.whatsapp-float > *` in the following child selector unchanged.

- [x] **Step 2: Rebuild and rerun the computed-style check**

Run the commands from Task 1 again.

Expected:

```text
position: fixed
right: 27px
bottom: 27px
href contains https://wa.me/31653435106
```

- [x] **Step 3: Verify mobile behavior**

The temporary Playwright test also uses a `390x844` viewport and asserts:

```text
.whatsapp-float display: none
.mobile-contact display: grid
.mobile-contact__whatsapp href contains https://wa.me/31653435106
```

### Task 3: Verify and publish

**Files:**
- Verify: `src/app/globals.css`

- [x] **Step 1: Run source checks**

```bash
git diff --check
npm run lint
npm run build
```

Expected: all commands pass.

- [ ] **Step 2: Commit and push**

```bash
git add src/app/globals.css docs/superpowers/plans/2026-06-08-whatsapp-float-position.md
git commit -m "fix: keep WhatsApp button fixed on desktop"
git push origin main
```

- [ ] **Step 3: Verify production**

After Vercel reports the deployment as successful, check the live page at
`https://ye-cars-previews.vercel.app` with a desktop viewport.

Expected: the computed style is `position: fixed`, the button remains at the
bottom-right before and after scrolling, and the link targets
`https://wa.me/31653435106`.
