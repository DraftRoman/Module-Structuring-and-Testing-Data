/* 
Password Validation

Write a program that should check if a password is valid
and returns a boolean

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one of the following non-alphanumeric symbols: ("!", "#", "$", "%", ".", "*", "&")
- Must not be any previous password in the passwords array. 

You must breakdown this problem in order to solve it. Find one test case first and get that working
*/
const isValidPassword = require("./password-validator");
test("password has at least 5 characters", () => {
    // Arrange
    const password = "As3#";
    // Act
    const result = isValidPassword(password);
    // Assert
    expect(result).toEqual("The password has to have at least five characters");
}
);
test("Password has to have at least one lowercase letter", () => {
    const password = "12345";
    const result = isValidPassword(password);
    expect(result).toEqual("The password has to have at least one lowercase letter");
}
);
test("Password has to have at least one Uppercase letter", () => {
    const password = "12a@q";
    const result = isValidPassword(password);
    expect(result).toEqual("The password has to have at least one uppercase letter");
}
);
test ("Password has to have at least one number", () => {
    const password = "AZa@q";
    const result = isValidPassword(password);
    expect(result).toEqual("The password has to have at least one number");
}
);
test("The password has to have at least one special character", () => {
  const password = "12aAq";
  const result = isValidPassword(password);
  expect(result).toEqual("The password has to have at least one special character");
});
test("The password is the same as a previous one", () => {
  const priviesPasswords = ["Abc12!", "aBc12@", "asdfG12$"];
  const password = "aBc12@";
  const result = isValidPassword(password,priviesPasswords);
  expect(result).toEqual("The password is the same as a previous one");
});
test("The password is strong", () => {
  const priviesPasswords = ["Abc12!", "aBc12@", "asdfG12$"];
  const password = "asdfG12@";
  const result = isValidPassword(password,priviesPasswords);
  expect(result).toEqual("The password is strong");
});

test("throws error if password has spaces", () => {
  expect(() => {
    isValidPassword("aB@1  s");
  }).toThrow("The password has spaces");
});



