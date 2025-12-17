const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal number for 1
// When the number is 1,
// Then the function should return "1st"

test("should return '1st' for 1", () => {
    expect(getOrdinalNumber(1)).toEqual("1st");
});
// Case 2: Identify the ordinal number for 2
test("should return '2nd' for 2", () => {
    expect(getOrdinalNumber(2)).toEqual("2nd");
});
// Case 3: Identify the ordinal number for 3
test("should return '3rd' for 3", () => {
    expect(getOrdinalNumber(3)).toEqual("3rd");
});
// Case 4: Identify the ordinal number for 4
test("should return '4th' for 4", () => {
    expect(getOrdinalNumber(4)).toEqual("4th");
});
// Case 5: Identify the ordinal number for 11
test("should return '11th' for 11", () => {
    expect(getOrdinalNumber(11)).toEqual("11th");
});
// Case 6: Identify the ordinal number for 22
test("should return '22nd' for 22", () => {
    expect(getOrdinalNumber(22)).toEqual("22nd");
});
// Case 7: Identify the ordinal number for 33
test("should return '33rd' for 33", () => {
    expect(getOrdinalNumber(33)).toEqual("33rd");
});
// Case 8: Identify the ordinal number for 21
test("should return '21st' for 21", () => {
    expect(getOrdinalNumber(21)).toEqual("21st");
});
// Case 9: Identify the ordinal number for 112
test("should return '112th' for 112", () => {
    expect(getOrdinalNumber(112)).toEqual("112th");
});
// Case 10: Identify the ordinal number for 0
test("should return '0th' for 0", () => {
    expect(getOrdinalNumber(0)).toEqual("0th");
});
// Case 11: Identify the ordinal number for non-integer numbers
test("should return '1.5th' for 1.5", () => {
    expect(getOrdinalNumber(1.5)).toEqual("1.5th");
});
// Case 12: Identify the ordinal number for very large numbers
test("should return '1000000th' for 1000000", () => {
    expect(getOrdinalNumber(1000000)).toEqual("1000000th");
});
// Case 13: Invalid input (negative numbers)
test("should throw error for negative input", () => {
    expect(() => {
        getOrdinalNumber(-5);
    }).toThrow("Invalid input: expected a ordinal number. Negative numbers are not allowed.");
});
// Case 14: Invalid input (non-numeric)
test("should throw error for non-numeric input", () => {
    expect(() => {
        getOrdinalNumber("abc");
    }).toThrow("Invalid input: expected a number.");
});
// Case 15: Invalid input (null or undefined)
test("should throw error for null input", () => {
    expect(() => {
        getOrdinalNumber(null);
    }).toThrow("Invalid input: expected a number.");
});
test("should throw error for undefined input", () => {
    expect(() => {
        getOrdinalNumber(undefined);
    }).toThrow("Invalid input: expected a number.");
});