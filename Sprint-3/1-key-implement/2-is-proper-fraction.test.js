const { isProperFraction } = require("./2-is-proper-fraction");

describe("isProperFraction", () => {
  test("Case 1: identifies proper fractions", () => {
    expect(isProperFraction(2, 3)).toBe(true);
  });
    test("Case 2: identifies improper fractions", () => {
        expect(isProperFraction(5, 2)).toBe(false);
    });
    test("Case 3: identifies negative proper fractions", () => {
        expect(isProperFraction(-4, 7)).toBe(true);
    });
    test("Case 4: identifies equal numerator and denominator as improper", () => {
        expect(isProperFraction(3, 3)).toBe(false);
    });
// Stretch tests can be added here
});

