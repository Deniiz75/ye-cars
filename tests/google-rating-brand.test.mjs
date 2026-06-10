import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("the Google rating card shows the Google logo beside the brand name", async () => {
  const [pageSource, iconSource] = await Promise.all([
    readFile(new URL("../src/app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../src/components/icons.tsx", import.meta.url), "utf8"),
  ]);

  const ratingCard = pageSource.slice(
    pageSource.indexOf('className="google-rating"'),
    pageSource.indexOf("</a>", pageSource.indexOf('className="google-rating"')),
  );

  assert.match(ratingCard, /<GoogleIcon className="google-rating__logo" \/>/);
  assert.match(ratingCard, /<span>Google<\/span>/);
  assert.match(iconSource, /export function GoogleIcon/);
});
