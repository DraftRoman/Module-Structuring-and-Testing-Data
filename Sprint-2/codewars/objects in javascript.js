const list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' },
    { firstName: 'Fatima', lastName: 'K.', country: 'Saudi Arabia', continent: 'Asia', age: 25, language: 'JavaScript' },
    { firstName: 'Agustin', lastName: 'V.', country: 'Spain', continent: 'Europe', age: 37, language: 'JavaScript' },
  ];
function getFirstEuropeanJSDevIndex(list) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].continent === 'Europe' && list[i].language === 'JavaScript') {
            return i;
        }
    }
    return 0;
}

function countDevelopers(list) {
    return list.filter(dev => dev.continent === 'Europe' && dev.language === 'JavaScript').length;
}

console.log(`The index of the JaveScript developer from Europe is ${getFirstEuropeanJSDevIndex(list1)}`);
console.log(countDevelopers(list1));


function greetDevelopers(list) {
    return list.map(dev => {
        return { ...dev, greeting: `Hi ${dev.firstName}, what do you like the most about ${dev.language}?` };
    });
}

console.log(`The index of the JaveScript developer from Europe is ${getFirstEuropeanJSDevIndex(list1)}`);

function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}
console.log(basicOp('+', 4, 7));
console.log(basicOp('-', 15, 18));
console.log(basicOp('*', 5, 5));
console.log(basicOp('/', 49, 7));


function descendingOrder(n) {
    return Number(n.toString()
        .split('') // convert to string and split into array
        .sort((a, b) => b - a) // sort in descending order
        .join('')); // join back into string and convert to number
}
console.log(descendingOrder(42145)); // Output: 54421
console.log(descendingOrder(145263)); // Output: 654321

let a = (123456789).toString().split('');
console.log(a);



