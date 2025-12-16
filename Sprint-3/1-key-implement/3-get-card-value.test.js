const {getCardValue} = require("./3-get-card-value");

describe("getCardValue", () => {
    test("Case 1: handles Ace (A)", () => {
        expect(getCardValue("A♠")).toBe(11);
    });
});
