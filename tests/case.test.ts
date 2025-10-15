import { expect, test } from "vitest";
import { snakeCase, splitSeparateNumbers } from "change-case";

test("changes camelCase to snake_case 1", () => {
  expect(snakeCase("version1.2.3")).toBe("version1_2_3");
});

test("changes camelCase to snake_case 2", () => {
  expect(snakeCase("version1.2.3", { split: splitSeparateNumbers })).toBe(
    "version_1_2_3"
  );
});
