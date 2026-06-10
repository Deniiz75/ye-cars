import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("the homepage hero uses a poster matching the video", async () => {
  const source = await readFile(new URL("../src/app/page.tsx", import.meta.url), "utf8");
  const hero = source.slice(source.indexOf('<section className="home-hero">'), source.indexOf('<div className="home-hero__shade"'));

  assert.equal(hero.match(/\/images\/hero-video-poster\.jpg/g)?.length, 2);
  assert.doesNotMatch(hero, /\/images\/hero-ye-cars\.jpg/);
  assert.match(hero, /preload="auto"/);
});
