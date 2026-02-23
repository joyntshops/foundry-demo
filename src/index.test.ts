import { expect, test } from "vitest";
import { hello } from "./index.js";

test("hello returns greeting", () => {
  expect(hello()).toBe("Hello, World!");
});
