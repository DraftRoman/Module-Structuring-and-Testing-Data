function createPhoneNumber(numbers) {
  const area = numbers.slice(0, 3).join('');
  const middle = numbers.slice(3, 6).join('');
  const last = numbers.slice(6).join('');
  
  return `(${area}) ${middle}-${last}`;
}


console.assert(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) === '(123) 456-7890', 'Test Case 1 Failed');
console.assert(createPhoneNumber([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) === '(012) 345-6789', 'Test Case 2 Failed');



console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // Output: (123) 456-7890
console.log(createPhoneNumber([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])); // Output: (012) 345-6789
