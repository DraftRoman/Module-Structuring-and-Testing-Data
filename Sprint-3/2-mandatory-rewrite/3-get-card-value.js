function getCardValue(card) {
    if (card.charAt(0) === "A") return 11;
    else if ((card.charAt(0) === "K") || (card.charAt(0) === "Q") || (card.charAt(0) === "J") || (card.slice(0, 2) === "10")) return 10;
    else if (parseInt(card.charAt(0)) >= 2 && parseInt(card.charAt(0)) <= 9) return parseInt(card.charAt(0));
    else throw new Error("Invalid card rank.");
}
module.exports = getCardValue;
