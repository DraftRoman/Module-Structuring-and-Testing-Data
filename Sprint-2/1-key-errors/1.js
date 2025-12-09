// Predict and explain first...

// Why will an error occur when this program runs?
// SyntaxError: Identifier 'decimalNumber' has already been declared
// We don't need to redeclare the variable decimalNumber inside the function because it's already declared as a
// parameter. This causes a conflict in the scope of the function.
// =============> write your prediction here

// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

// console.log(decimalNumber);

// =============> write your explanation here

// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}
console.log(convertToPercentage(0.75)); // 75%
console.log(convertToPercentage(0.2));  // 20%
console.log(convertToPercentage(0.5));  // 50%