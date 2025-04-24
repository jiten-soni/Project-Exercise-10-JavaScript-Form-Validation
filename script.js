let myForm = document.getElementById("myForm");
let name = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");

let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let passwordError = document.getElementById("passwordError");

myForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let isValid = true;

    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    if (name.value.trim() === "") {
        nameError.textContent = "Name is required.";
        isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        emailError.textContent = "Enter a valid email.";
        isValid = false;
    }

    if (password.value.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters.";
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully");
        myForm.reset();
    }
});