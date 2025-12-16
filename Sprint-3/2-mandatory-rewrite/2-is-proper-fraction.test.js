const isProperFraction = require("./2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});
test("should return false for an improper fraction", () => {
  expect(isProperFraction(5, 2)).toEqual(false);
});
test("should return true for a negative proper fraction", () => {
  expect(isProperFraction(-4, 7)).toEqual(true);
});
test("should return false for equal numerator and denominator", () => {
  expect(isProperFraction(3, 3)).toEqual(false);
});

// Stretch Tests:

test("should return true for zero numerator", () => {
  expect(isProperFraction(0, 5)).toEqual(true);
});
test("should return false for negative denominator", () => {
  expect(isProperFraction(3, -4)).toEqual(false);
});
test("should return true for both negative numerator and denominator", () => {
  expect(isProperFraction(-2, -3)).toEqual(true);
});
test("should return false for zero denominator", () => {
  expect(isProperFraction(3, 0)).toEqual(false);
});


// Case 2: Identify Improper Fractions:

// Case 3: Identify Negative Fractions:

// Case 4: Identify Equal Numerator and Denominator:
