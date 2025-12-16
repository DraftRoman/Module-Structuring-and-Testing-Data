const getAngleType = require("./1-get-angle-type");

test("should identify right angle (90°)", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

// REPLACE the comments with the tests
// make your test descriptions as clear and readable as possible

// Case 2: Identify Acute Angles:
// When the angle is less than 90 degrees,
// Then the function should return "Acute angle"
test("should identify acute angle (45°)", () => {
  expect(getAngleType(45)).toEqual("Acute angle");
});

// Case 3: Identify Obtuse Angles:
test("should identify obtuse angle (120°)", () => {
  expect(getAngleType(120)).toEqual("Obtuse angle");
});

// Case 4: Identify Straight Angles:
test("should identify straight angle (180°)", () => {
  expect(getAngleType(180)).toEqual("Straight angle");
} );

// Case 5: Identify Reflex Angles:
test("should identify reflex angle (270°)", () => {
  expect(getAngleType(270)).toEqual("Reflex angle");
});

// Case 6: Identify Full Rotation:
test("should identify full rotation (360°)", () => {
  expect(getAngleType(360)).toEqual("Full rotation");
});

// Stretch Case: Handle Invalid Angles:
test("should throw error for invalid angle (-10°)", () => {
  expect(() => {
    getAngleType(-10);
  }).toThrow("Invalid angle");
});

test("should throw error for invalid angle (400°)", () => {
  expect(() => {
    getAngleType(400);
  }).toThrow("Invalid angle");
});
