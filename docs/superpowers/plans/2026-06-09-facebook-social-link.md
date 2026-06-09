# Facebook Social Link Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add the supplied YE Cars Facebook page as a third action in the existing footer social section.

**Architecture:** Keep the URL in the central `site` object, follow the existing icon helper pattern, and reuse the current `.footer__socials` markup and styling. No new dependency or CSS abstraction is needed.

**Tech Stack:** Next.js 16, React 19, TypeScript, CSS, ESLint, Playwright

---

### Task 1: Add a failing footer regression test

**Files:**
- Test: temporary Playwright test outside the repository

- [x] **Step 1: Start the current production build**

```bash
npm run build
npm start
```

Expected: the site is available at `http://localhost:3000`.

- [x] **Step 2: Assert the requested Facebook action**

Create a temporary Playwright test that checks:

```js
const facebook = page.getByRole("link", { name: "Volg YE Cars op Facebook" });

await expect(facebook).toHaveCount(1);
await expect(facebook).toHaveAttribute(
  "href",
  "https://www.facebook.com/people/YE-Cars/61590799406186/",
);
await expect(facebook).toHaveAttribute("target", "_blank");
await expect(facebook).toHaveAttribute("rel", "noreferrer");
await expect(facebook).toContainText("Facebook");
```

Also assert that the Instagram and TikTok links remain present.

- [x] **Step 3: Run the test and confirm RED**

Expected: FAIL because no Facebook action currently exists.

### Task 2: Implement the Facebook social action

**Files:**
- Modify: `src/data/site.ts`
- Modify: `src/components/icons.tsx`
- Modify: `src/components/footer.tsx`

- [x] **Step 1: Add the central Facebook URL**

Add to the `site` object:

```ts
facebook: "https://www.facebook.com/people/YE-Cars/61590799406186/",
```

- [x] **Step 2: Add the Facebook icon**

Add a `FacebookIcon` export following the existing `IconProps` and `base`
pattern:

```tsx
export function FacebookIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v5h4v-5h3.5l.5-4h-4V9c0-.7.3-1 1-1Z" />
    </svg>
  );
}
```

- [x] **Step 3: Render Facebook after TikTok**

Import `FacebookIcon` in `src/components/footer.tsx` and add:

```tsx
<a href={site.facebook} target="_blank" rel="noreferrer" aria-label="Volg YE Cars op Facebook">
  <FacebookIcon />
  <span>Facebook</span>
</a>
```

- [x] **Step 4: Rebuild and confirm GREEN**

Run the temporary Playwright test again.

Expected: the Facebook, Instagram, and TikTok assertions all pass.

### Task 3: Verify and publish

**Files:**
- Verify: all modified files

- [x] **Step 1: Run repository verification**

```bash
git diff --check
npm run lint
npm run build
```

Expected: all commands pass.

- [x] **Step 2: Review, commit, and push**

```bash
git diff -- src/data/site.ts src/components/icons.tsx src/components/footer.tsx
git add src/data/site.ts src/components/icons.tsx src/components/footer.tsx \
  docs/superpowers/plans/2026-06-09-facebook-social-link.md
git commit -m "feat: add Facebook social link"
git push origin main
```

- [ ] **Step 3: Verify production**

After Vercel reports success, run the same Playwright test against:

```text
https://ye-cars-previews.vercel.app
```

Expected: the live footer contains the correctly configured Facebook action
alongside Instagram and TikTok.
