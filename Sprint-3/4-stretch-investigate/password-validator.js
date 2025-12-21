function passwordValidator(password,priviesPasswords=[]) {
    let hasLowercase = false;
    let hasUppercase = false;
    let hasNumber = false;
    if (password.length < 5) {
        return "The password has to have at least five characters";
    }
    for (let i = 0; i < password.length; i++) {
        const char = password[i];
        if (char >= "a" && char <= "z") hasLowercase = true;
        if (char >= "A" && char <= "Z") hasUppercase = true;
        if (char >= "0" && char <= "9") hasNumber = true;
    }
    if (!hasLowercase) {
        return "The password has to have at least one lowercase letter";
    }
    if (!hasUppercase) {
        return "The password has to have at least one uppercase letter";
    }
    if (!hasNumber) {
        return "The password has to have at least one number";
    }
    
    if (!password.match(/^(?=.*[!@#$%.*&]).+$/)) {
        return "The password has to have at least one special character";
    }
    for (let i = 0; i < priviesPasswords.length; i++) {
        if (password === priviesPasswords[i]) {
            return "The password is the same as a previous one";
        }
    }
    
    if (password.includes(" ")) {
        throw new Error("The password has spaces"); 
    }
    priviesPasswords.push(password);
    return "The password is strong";
}



module.exports = passwordValidator;