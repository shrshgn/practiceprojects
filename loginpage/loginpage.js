const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click",(e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if(username === "user" && password === "web-dev") {
        alert("You have succesfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.styles.opacity = 1;
    }
})