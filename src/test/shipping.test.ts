import { describe, expect, it } from "vitest";
import { shippingPrice } from "@/lib/shop";

describe("doprava PPL (ceník z textu majitele)", () => {
  it("osobní odběr je zdarma", () => expect(shippingPrice("pickup", 500, "cod")).toBe(0));
  it("ČR dobírka do 5000 Kč", () => expect(shippingPrice("ppl-cz", 5000, "cod")).toBe(160));
  it("ČR dobírka nad 5000 Kč", () => expect(shippingPrice("ppl-cz", 5001, "cod")).toBe(50));
  it("ČR převodem do 5000 Kč", () => expect(shippingPrice("ppl-cz", 1000, "transfer")).toBe(110));
  it("ČR převodem nad 5000 Kč zdarma", () => expect(shippingPrice("ppl-cz", 5001, "transfer")).toBe(0));
  it("SK dobírka do / nad 5000 Kč", () => {
    expect(shippingPrice("ppl-sk", 5000, "cod")).toBe(300);
    expect(shippingPrice("ppl-sk", 5001, "cod")).toBe(200);
  });
  it("SK převodem do / nad 6000 Kč", () => {
    expect(shippingPrice("ppl-sk", 6000, "transfer")).toBe(260);
    expect(shippingPrice("ppl-sk", 6001, "transfer")).toBe(160);
  });
});
