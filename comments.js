// comments

// register and logIn

// display variables

let logIn = document.querySelector("#logIn");
let register = document.querySelector("#register");
let logInButton = document.querySelector("#logInButton");
let registerButton = document.querySelector("#registerButton");

// display the forms

function displayRegister() {
  logIn.style.display = "none";
  register.style.display = "block";
}

function displayLogIn() {
  register.style.display = "none";
  logIn.style.display = "block";
}

function displayForm(i) {
  if (i === 1) {
    displayRegister();
  } else if (i === 2) {
    displayLogIn();
  }
}

