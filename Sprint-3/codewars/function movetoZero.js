function movetoZero(arr) {
    let strn = [];
    let zeros = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeros.push(arr[i]);
        } else {
            strn.push(arr[i]);
        }
    }

    return strn.concat(zeros);
}

console.assert(
    str(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])) === str([1, 2, 1, 1, 3, 1, 0, 0, 0, 0]),
    "Failed: Should move zeros to end while keeping order"
);

// Requirement: Does nothing if no zeros
console.assert(
    str(moveZeros([1, 2, 3])) === str([1, 2, 3]),
    "Failed: Should not change array with no zeros"
);

// Requirement: Handles all zeros
console.assert(
    str(moveZeros([0, 0, 0])) === str([0, 0, 0]),
    "Failed: Should handle array of all zeros"
);

// Requirement: Handles mixed types (false is not 0)
console.assert(
    str(moveZeros([false, 1, 0, 1, 2, 0, "a"])) === str([false, 1, 1, 2, "a", 0, 0]),
    "Failed: Should treat 'false' or strings differently than the number 0"
);
