// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// The output will be:
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3
// because the function getLastDigit always returns the last digit of the constant variable num which is set to 103.
const num = 103;

function getLastDigit(a) {
  return a.toString().slice(-1);

}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
// Explain why the output is the way it is
// =============> write your explanation here
// Finally, correct the code to fix the problem
// =============> write your new code here
// now it's working properly because we are returning the last digit of the argument a passed to the function getLastDigit 
// instead of the constant variable num.
// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
