const {getCardValue} = require("./3-get-card-value");

describe("getCardValue", () => {
    test("Case 1: handles Ace (A)", () => {
        expect(getCardValue("A♠")).toBe(11);
    });
    test("Case 2: handles Number Cards (2-10)", () => {
        expect(getCardValue("5♥")).toBe(5);
    });
    test("Case 3: handles Face Cards (J, Q, K)", () => {
        expect(getCardValue("K♦")).toBe(10);
        expect(getCardValue("Q♣")).toBe(10);
        expect(getCardValue("J♠")).toBe(10);
        expect(getCardValue("10♥")).toBe(10);
    });
    
});
