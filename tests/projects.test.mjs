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
    assert.equal(typeof project.featured, "boolean");
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

