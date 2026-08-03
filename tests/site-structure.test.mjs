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

test("portfolio presents Nosiah Studios in a brand-first voice", async () => {
  // Arrange
  const [homepage, header, footer, layout] = await Promise.all([
    source("src/app/page.tsx"),
    source("src/components/site-header.tsx"),
    source("src/components/site-footer.tsx"),
    source("src/app/layout.tsx"),
  ]);

  // Act
  const publicContent = `${homepage}\n${header}\n${footer}\n${layout}`;
  const requiredContent = [
    "Nosiah Studios",
    "Independent digital studio",
    "Web development",
    "Mobile app development",
    "Full-stack development",
    "UI/UX design",
    "nosiahstudio@gmail.com",
    "https://www.linkedin.com/in/tranhaison/",
    "https://github.com/tran-haison",
  ];

  // Assert
  for (const content of requiredContent) {
    assert.ok(publicContent.includes(content));
  }

  assert.doesNotMatch(publicContent, /Melbourne|Australia/);
  assert.doesNotMatch(publicContent, /Hai Son Tran/i);
  assert.doesNotMatch(publicContent, /\bI\s|I&apos;m|\bme\b|\bmy\b/i);
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
  assert.match(detailRoute, /project\.url/);
  assert.match(detailRoute, /Visit live project/);
});

test("work detail route renders optimized project screenshot galleries", async () => {
  // Arrange
  const [detailRoute, css] = await Promise.all([
    source("src/app/work/[slug]/page.tsx"),
    source("src/app/globals.css"),
  ]);

  // Assert
  assert.match(detailRoute, /import Image from "next\/image"/);
  assert.match(detailRoute, /screenshots\.map/);
  assert.match(detailRoute, /src=\{screenshot\.src\}/);
  assert.match(detailRoute, /width=\{1284\}/);
  assert.match(detailRoute, /height=\{2778\}/);
  assert.match(detailRoute, /className="screen-gallery-phones"/);
  assert.match(detailRoute, /\[project\.screenshots, project\.screenshots\]/);
  assert.match(detailRoute, /aria-hidden=\{setIndex === 1\}/);
  assert.match(css, /animation:\s*project-gallery-scroll/);
  assert.match(css, /@keyframes project-gallery-scroll/);
  assert.match(css, /\.screen-gallery-set\s*\{[\s\S]*?padding-block:\s*clamp\(3rem, 4vw, 4rem\)/);
  assert.match(css, /\.project-phone\s*\{[\s\S]*?15\.5vw/);
  assert.match(css, /@media \(max-width: 720px\)[\s\S]*?\.project-phone\s*\{[\s\S]*?width:\s*38vw/);
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)[\s\S]*?\.screen-gallery-set\[aria-hidden="true"\]/);
  assert.match(css, /\.project-phone img\s*\{[\s\S]*?object-fit:\s*contain/);
  const phoneRule = css.match(/\.project-phone\s*\{([^}]*)\}/)?.[1] ?? "";
  assert.doesNotMatch(phoneRule, /(?:border-radius|box-shadow|background):/);
});

test("Resumie detail visual shows a sample job transformed into two documents", async () => {
  // Arrange
  const [detailRoute, visual, css] = await Promise.all([
    source("src/app/work/[slug]/page.tsx"),
    source("src/components/resumie-project-visual.tsx"),
    source("src/app/globals.css"),
  ]);

  // Assert
  assert.match(detailRoute, /project\.showcase === "application-flow"/);
  assert.match(detailRoute, /<ResumieProjectVisual/);
  assert.match(visual, /Northstar Energy/);
  assert.match(visual, /Software Engineer/);
  assert.match(visual, /Job description/);
  assert.match(visual, /Tailored resume/);
  assert.match(visual, /Matched cover letter/);
  assert.doesNotMatch(visual, /Hai Son Tran/);
  assert.match(css, /\.resumie-resume-document\s*\{[\s\S]*?height:\s*92%[\s\S]*?transform:\s*none/);
  assert.match(css, /\.resumie-cover-document\s*\{[\s\S]*?height:\s*72%[\s\S]*?transform:\s*none/);
  assert.match(css, /\.resumie-input-card\s*\{[\s\S]*?top:\s*17%[\s\S]*?bottom:\s*10%/);
  assert.match(css, /\.resumie-output\s*\{[\s\S]*?top:\s*17%[\s\S]*?bottom:\s*10%/);
  assert.match(css, /\.resumie-input-label,[\s\S]*?\.resumie-output-label\s*\{[\s\S]*?position:\s*absolute/);
});

test("shared project cards render optimized project logos instead of initials", async () => {
  // Arrange
  const projectCard = await source("src/components/project-card.tsx");

  // Assert
  assert.match(projectCard, /import Image from "next\/image"/);
  assert.match(projectCard, /src=\{project\.logo\}/);
  assert.match(projectCard, /className="project-logo"/);
  assert.doesNotMatch(projectCard, /project\.title\.slice/);
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

test("mobile project cards allow long real content to shrink without overflow", async () => {
  // Arrange
  const css = await source("src/app/globals.css");

  // Assert
  assert.match(css, /\.project-card\s*\{[\s\S]*?min-width:\s*0/);
  assert.match(css, /grid-template-columns:\s*minmax\(0,\s*1fr\)\s+auto/);
  assert.match(css, /overflow-wrap:\s*anywhere/);
});
