function find(str, char) {
  let index = 0;

  while (index < str.length) {
    if (str[index] === char) {
      return index;
    }
    index++;
    console.log(index);
  }
  return -1;
}

console.log(find("code your future", "u"));
console.log(find("code your future", "z"));

// The while loop statement allows us to do iteration - the repetition of a certain number of tasks according to some condition
// See the docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

// Use the Python Visualiser to help you play computer with this example and observe how this code is executed
// Pay particular attention to the following:

// a) How the index variable updates during the call to find
// starts from 0, than while loop while index less than 15. This loop for going through the string. 

// b) What is the if statement used to check
// If statement to find on what index we have the same character as a char 
// When it's true it will go to return index, which will be the exit form the loop. 

// c) Why is index++ being used?
// it been used as an index of the current position in the string. 
// ++ is adding 1 to the index to move to the next position in the string  
// d) What is the condition index < str.length used for?
// length how long this string is and the while loop will be doing everything inside the bode of the loop until index get through 
// the string  
