// Predict and explain first...

// =============> write your prediction here
// We're going to get 320 and 'The result of multiplying 10 and 32 is undefined' 
// because the multiply function does not return a value; it only logs the product to the console.
function multiply(a, b) {
  return (a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here

// Finally, correct the code to fix the problem
//  =============> write your new code here
// we have to replace console.log with return in the multiply function
