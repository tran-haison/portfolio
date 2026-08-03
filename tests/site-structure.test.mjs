import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function source(path) {
  return readFile(new URL(path, root), "utf8");
}

test("root shell exposes branded metadata and accessible landmarks", async () => {
  // Arrange
  const [layout, header] = await Promise.all([
    source("src/app/layout.tsx"),
    source("src/components/site-header.tsx"),
  ]);

  // Act
  const shell = `${layout}\n${header}`;

  // Assert
  assert.match(shell, /Nosiah Studios/);
  assert.match(shell, /Skip to content/);
  assert.match(shell, /<nav/);
  assert.match(shell, /aria-label="Primary navigation"/);
});

test("root shell tolerates extension attributes and declares smooth scrolling", async () => {
  // Arrange
  const layout = await source("src/app/layout.tsx");

  // Act
  const rootShellAttributes = [
    "data-scroll-behavior=\"smooth\"",
    "<body suppressHydrationWarning>",
  ];

  // Assert
  for (const attribute of rootShellAttributes) {
    assert.ok(layout.includes(attribute));
  }
});

test("homepage contains the approved content sections", async () => {
  // Arrange
  const homepage = await source("src/app/page.tsx");

  // Act
  const sectionIds = ["work", "capabilities", "about", "contact"];

  // Assert
  for (const sectionId of sectionIds) {
    assert.match(homepage, new RegExp(`id="${sectionId}"`));
  }
  assert.match(homepage, /<h1/);
});

test("hero uses an optimized decorative neural-brain asset", async () => {
  // Arrange
  const [homepage, css] = await Promise.all([
    source("src/app/page.tsx"),
    source("src/app/globals.css"),
  ]);

  // Act
  const heroSource = `${homepage}\n${css}`;

  // Assert
  assert.match(heroSource, /hero-neural-brain\.webp/);
  assert.match(heroSource, /<Image/);
  assert.match(heroSource, /alt=""/);
  assert.match(heroSource, /brain-float/);
  assert.match(heroSource, /brain-pulse/);
});

test("work detail route is static and rejects unknown slugs", async () => {
  // Arrange
  const detailRoute = await source("src/app/work/[slug]/page.tsx");

  // Act
  const requiredContracts = [
    "generateStaticParams",
    "generateMetadata",
    "await params",
    "notFound()",
  ];

  // Assert
  for (const contract of requiredContracts) {
    assert.ok(detailRoute.includes(contract));
  }
});

test("global styles include focus and reduced-motion safeguards", async () => {
  // Arrange
  const css = await source("src/app/globals.css");

  // Act
  const safeguards = [
    ":focus-visible",
    "prefers-reduced-motion: reduce",
    "scroll-behavior: auto",
  ];

  // Assert
  for (const safeguard of safeguards) {
    assert.ok(css.includes(safeguard));
  }
});
