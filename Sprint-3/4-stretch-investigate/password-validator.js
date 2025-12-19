function passwordValidator(password) {
    let hasLowercase = false;
    let hasUppercase = false;
    for (let i = 0; i < password.length; i++) {
        const char = password[i];
        if (char >= "a" && char <= "z") hasLowercase = true;
        if (char >= "A" && char <= "Z") hasUppercase = true;
    }
    return hasLowercase && hasUppercase && password.length >= 5;
}


module.exports = passwordValidator;