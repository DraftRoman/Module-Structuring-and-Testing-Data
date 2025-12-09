class Human  {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;

  constructor(
    firstName: string = "John",
    lastName: string = "Doe",
    age: number = 0,
    gender: string = "Male"
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }

  sayFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  static greetExtraTerrestrials(raceName: string): string {
    return `Welcome to Planet Earth ${raceName}`;
  }
}

// Example usage
const roman = new Person("Roman", "Pavlenko", 36, "Male");
console.log(roman.sayFullName()); 
// Output: Roman Pavlenko

console.log(Person.greetExtraTerrestrials("Martians"));
// Output: Welcome to Planet Earth Martians
