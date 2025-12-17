function getOrdinalNumber(num) {
    if (typeof num !== 'number' || isNaN(num)) {
        throw new Error("Invalid input: expected a number.");
    }

    if (!Number.isInteger(num)) {
        throw new Error("Invalid input: expected an integer.");
    }

    if (num < 0) {
        throw new Error("Invalid input: expected an ordinal number. Negative numbers are not allowed.");
    }

    switch (true) {
        case num === 1:
            return "1st";
        case num === 2:
            return "2nd";
        case num === 3:
            return "3rd";
        case num % 10 == 1 && num % 100 != 11:
            return num + "st";
        case num % 10 == 2 && num % 100 != 12:
            return num + "nd";
        case num % 10 == 3 && num % 100 != 13:
            return num + "rd";
        case num >= 0:
            return num + "th"
    }
}

module.exports = getOrdinalNumber;