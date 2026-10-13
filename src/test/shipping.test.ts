import { describe, expect, it } from "vitest";
import { shippingPrice } from "@/lib/shop";

describe("doprava", () => {
  it("Z-Box stojí 69 Kč pod limitem", () => expect(shippingPrice("zbox", 1000)).toBe(69));
  it("doprava zdarma od 1 499 Kč", () => expect(shippingPrice("ppl", 1499)).toBe(0));
  it("těsně pod limitem se platí", () => expect(shippingPrice("ppl", 1498)).toBe(119));
});
