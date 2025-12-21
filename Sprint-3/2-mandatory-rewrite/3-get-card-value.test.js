const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
});
test("should return 5 for 5 of Hearts", () => {
    const fiveofHearts = getCardValue("5♥");
    expect(fiveofHearts).toEqual(5);
});
test("should return 10 for King of Diamonds", () => {
    const kingofDiamonds = getCardValue("K♦");
    expect(kingofDiamonds).toEqual(10);
});
test("should return 10 for Queen of Clubs", () => {
    const queenofClubs = getCardValue("Q♣");
    expect(queenofClubs).toEqual(10);
});
test("should return 10 for Jack of Spades", () => {
    const jackofSpades = getCardValue("J♠");
    expect(jackofSpades).toEqual(10);
});
test("should return 10 for 10 of Hearts", () => {
    const tenofHearts = getCardValue("10♥");
    expect(tenofHearts).toEqual(10);
});
// Stretch Tests:
test("should throw error for invalid card rank '1♠'", () => {
    expect(() => {
        getCardValue("1♠");
    }).toThrow("Invalid card rank.");
});
test("should throw error for invalid card rank 'X♠'", () => {
    expect(() => {
        getCardValue("X♠");
    }).toThrow("Invalid card rank.");
});

// Case 2: Handle Number Cards (2-10):
// Case 3: Handle Face Cards (J, Q, K):
// Case 4: Handle Ace (A):
// Case 5: Handle Invalid Cards:
