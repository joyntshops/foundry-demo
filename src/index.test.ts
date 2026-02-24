import { describe, it, expect } from "vitest";
import { greet } from "./index";

describe("greet", () => {
  it("returns a greeting with the given name", () => {
    expect(greet("World")).toBe("Hello, World!");
  });

  it("works with other names", () => {
    expect(greet("Foundry")).toBe("Hello, Foundry!");
  });
});
