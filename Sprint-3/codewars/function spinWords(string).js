// function spinWords(string) {
//     if (!string) return string;
//     return string
//         .split(' ')
//         .map(word => (word.length >= 5 ? word.split('').reverse().join('') : word))
//         .join(' '); 
// }
// console.log(spinWords("Hey fellow warriors")); 
// console.log(spinWords("This is a test")); 
// console.log(spinWords("This is another test")); 

function spinWords(string){
  let words = string.split(" ");
  let result = "";
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length >= 5) {
     word = word.split('').reverse().join('');
    }
    if (i > 0) {
     result += " ";
    }
     result += word;
  }
  return result;
}
// console.log(spinWords("Hey fellow warriors")); 
// console.log(spinWords("This is another test"));

let arr = [1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0];
function move_zeros(arr, isRight){
    const nonZero = arr.filter(isnotZero());
  const zeros = arr.filter(n => n === 0);
  return isRight ? nonZero.concat(zeros) : zeros.concat(nonZero);
}
// console.log(move_zeros(arr, true));
// console.log(move_zeros(arr, false));
// function isnotZero(n) {
//     return n !== 0;
// }



function moveZeros(arr) {
  return arr.sort((a, b) => b === 0 ? -1 : 0);
}


// function RomanNumerals(num) {
//     number = num.split('');
//     if (number.length === 4) {
    
            
//             }
//         }

function RomanNumerals(num) {
    const romanNumerals = [
        { key: 1000, value: 'M' },
        { key: 900, value: 'CM' },
        { key: 500, value: 'D' },
        { key: 400, value: 'CD' },
        { key: 100, value: 'C' },
        { key: 90, value: 'XC' },
        { key: 50, value: 'L' },
        { key: 40, value: 'XL' },
        { key: 10, value: 'X' },
        { key: 9, value: 'IX' },
        { key: 5, value: 'V' },
        { key: 4, value: 'IV' },
        { key: 1, value: 'I' },
    ];
    let yournum = num;
    let result = '';
    for (const { key, value } of romanNumerals) {
        while (yournum >= key) {
            result += value;
            yournum -= key;
        }
    }
    return result;
}
console.log(RomanNumerals(1987));
console.log(RomanNumerals(3999));
console.log(RomanNumerals(0));


// 1. Basic Single Symbols
console.assert(RomanNumerals(1) === "I", "Failed: 1 should be 'I'");
console.assert(RomanNumerals(5) === "V", "Failed: 5 should be 'V'");
console.assert(RomanNumerals(10) === "X", "Failed: 10 should be 'X'");

// 2. Simple Addition (No subtraction needed)
console.assert(RomanNumerals(2) === "II", "Failed: 2 should be 'II'");
console.assert(RomanNumerals(6) === "VI", "Failed: 6 should be 'VI'");
console.assert(RomanNumerals(1666) === "MDCLXVI", "Failed: 1666 should be 'MDCLXVI'");

// 3. The Tricky Subtractive Cases
console.assert(RomanNumerals(4) === "IV", "Failed: 4 should be 'IV'");
console.assert(RomanNumerals(9) === "IX", "Failed: 9 should be 'IX'");
console.assert(RomanNumerals(40) === "XL", "Failed: 40 should be 'XL'");
console.assert(RomanNumerals(90) === "XC", "Failed: 90 should be 'XC'");
console.assert(RomanNumerals(900) === "CM", "Failed: 900 should be 'CM'");

// 4. Complex Years
console.assert(RomanNumerals(1990) === "MCMXC", "Failed: 1990 should be 'MCMXC'");
console.assert(RomanNumerals(2024) === "MMXXIV", "Failed: 2024 should be 'MMXXIV'");