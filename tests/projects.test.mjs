import assert from "node:assert/strict";
import test from "node:test";

import {
  getNextProject,
  getProjectBySlug,
  projects,
} from "../src/data/projects.mjs";

const requiredTextFields = [
  "slug",
  "title",
  "discipline",
  "year",
  "summary",
  "status",
  "url",
  "logo",
  "overview",
  "challenge",
  "approach",
  "outcome",
];

test("project catalogue has complete, uniquely addressable records", () => {
  // Arrange
  const slugs = projects.map((project) => project.slug);

  // Act
  const uniqueSlugs = new Set(slugs);

  // Assert
  assert.ok(projects.length >= 3);
  assert.equal(uniqueSlugs.size, projects.length);

  for (const project of projects) {
    for (const field of requiredTextFields) {
      assert.equal(typeof project[field], "string");
      assert.ok(project[field].trim().length > 0);
    }

    assert.ok(project.services.length > 0);
    assert.ok(project.technology.length > 0);
    assert.ok(Array.isArray(project.screenshots));
    assert.equal(typeof project.featured, "boolean");
    assert.equal(new URL(project.url).protocol, "https:");
  }
});

test("Keeps includes the four supplied product screenshots", () => {
  // Arrange
  const keeps = getProjectBySlug("keeps");

  // Act
  const screenshotPaths = keeps?.screenshots.map((screenshot) => screenshot.src);

  // Assert
  assert.deepEqual(screenshotPaths, [
    "/images/projects/keeps-1.png",
    "/images/projects/keeps-2.png",
    "/images/projects/keeps-3.png",
    "/images/projects/keeps-4.png",
  ]);
  assert.ok(keeps?.screenshots.every((screenshot) => screenshot.alt.length > 0));
});

test("project catalogue contains the three supplied live products", () => {
  // Arrange
  const expectedProjects = new Map([
    ["keeps", "https://keeps.nosiahstudios.com/"],
    ["resumie", "https://www.resumie.space/"],
    ["workouch", "https://workouch.nosiahstudios.com/"],
  ]);

  // Act / Assert
  assert.deepEqual(
    projects.map((project) => project.slug),
    [...expectedProjects.keys()],
  );

  for (const [slug, url] of expectedProjects) {
    const project = getProjectBySlug(slug);
    assert.equal(project?.url, url);
    assert.equal(project?.logo, `/images/projects/${slug}-logo.png`);
  }
});

test("project lookup returns a matching record and undefined for unknown slugs", () => {
  // Arrange
  const firstProject = projects[0];

  // Act
  const match = getProjectBySlug(firstProject.slug);
  const missing = getProjectBySlug("missing-project");

  // Assert
  assert.equal(match, firstProject);
  assert.equal(missing, undefined);
});

test("next project navigation wraps around the catalogue", () => {
  // Arrange
  const firstProject = projects[0];
  const lastProject = projects.at(-1);

  // Act
  const afterFirst = getNextProject(firstProject.slug);
  const afterLast = getNextProject(lastProject.slug);

  // Assert
  assert.equal(afterFirst, projects[1]);
  assert.equal(afterLast, firstProject);
});
