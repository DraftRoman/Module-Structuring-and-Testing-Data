class Person {
  constructor(firstName = 'John', lastName = 'Doe', age = 0, gender = 'Male') {
    Object.assign(this, { firstName, lastName, age, gender });
  }
  sayFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  static greetExtraTerrestrials(raceName) {
    return `Welcome to Planet Earth ${raceName}`;
  }
}
const person1 = new Person('Roman', 'Pavlenko', 36, 'Male');
console.log(person1.sayFullName()); // Output: Jane Doe

console.log(Person.greetExtraTerrestrials('Martians')); // Output: Welcome to Planet Earth Martians