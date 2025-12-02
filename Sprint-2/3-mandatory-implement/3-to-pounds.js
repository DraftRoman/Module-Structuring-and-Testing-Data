// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs


function toPounds(penceString) {
    // return the amount in pounds and pence format
    const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);
    // Ensure at least 3 digits for correct slicing
    const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
    // Split into pounds and pence
    const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);
    // Get last two digits for pence
    const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"); 
  
    return `£${pounds}.${pence}`;
    }
    
console.log(toPounds("399p")); // £3.99
console.log(toPounds("50p")); // £0.50
console.log(toPounds("5p")); // £0.05
console.log(toPounds("1234p")); // £12.34