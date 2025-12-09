// Predict and explain first...
//  =============> write your prediction here
// We're going to get undefined because the sum function has a return statement that does not return any value.

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// Finally, correct the code to fix the problem
//  =============> write your new code here
// we just remove the semicolon after return statement and return the sum of a and b
