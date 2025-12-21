function countChar(stringOfCharacters, findCharacter) {
    if (typeof stringOfCharacters !== 'string' || typeof findCharacter !== 'string' || findCharacter.length !== 1) {
        throw new Error('Invalid arguments: expected a string and a single character.');
    }

    let count = 0;
    for (let i = 0; i < stringOfCharacters.length; i++) {
        if (stringOfCharacters[i] === findCharacter) {
            count++;
        }
    }
    return count;
}


module.exports = countChar;