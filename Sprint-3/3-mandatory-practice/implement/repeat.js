function repeat(str, count) {
    if (typeof count !== 'number' || isNaN(count)) {
        throw new Error("Invalid input: expected a number.");
    }
    if (count < 0) {
        throw new Error("Invalid input: as negative counts are not valid.");
    }
    let result = "";
    for (let i = 1; i <= count; i++) {
        result += str;
    }
    return result;
}

