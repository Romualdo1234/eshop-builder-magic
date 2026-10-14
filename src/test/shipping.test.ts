import { describe, expect, it } from "vitest";
import { shippingPrice } from "@/lib/shop";

describe("doprava", () => {
  it("Z-Box stojí 69 Kč", () => expect(shippingPrice("zbox", 1000)).toBe(69));
  it("osobní odběr je zdarma", () => expect(shippingPrice("pickup", 500)).toBe(0));
  it("doprava se platí i u velké objednávky", () => expect(shippingPrice("ppl", 5000)).toBe(119));
});
