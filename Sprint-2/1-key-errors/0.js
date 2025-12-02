// Predict and explain first...
//  =============> write your prediction here

// this let statement is trying to declare a variable with the same name as the function parameter 'str',
// which will cause a syntax error because you cannot redeclare a parameter within the same scope.

// call the function capitalise with a string input

// we don't call the function here, but if we did, it would result in an error due to the redeclaration of 'str'.
// interpret the error message and figure out why an error is occurring

// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }

// =============> write your explanation here
// =============> write your new code here


function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
console.log(capitalise('hello'));
// Hello 