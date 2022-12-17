const form = document.querySelector("#login-form");
const errorMessage = document.querySelector(".errorMessage");
const passwordError = document.querySelector(".passwordError");
const usernameInput = document.getElementById("exampleInputText");
const passwordInput = document.getElementById("exampleInputPassword1");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
    event.preventDefault();

    if (usernameInput.value === '' || passwordInput.value === ''){
       
        errorMessage.innerHTML = "Please enter all fields";
        errorMessage.classList.add('error');

        // Remove error after 3 seconds
        setTimeout(() => errorMessage.remove(), 3000);

    } if (usernameInput.value.length > 0 && passwordInput.value.length <= 5) {
        passwordError.innerHTML = "Password must be at least 6 characters";
        passwordError.classList.add('error');

        // Remove error after 3 seconds
        setTimeout(() => passwordError.remove(), 3000);

    } else if (usernameInput.value.length > 0 && passwordInput.value.length >= 6) {
        alert("Success");
    }
}