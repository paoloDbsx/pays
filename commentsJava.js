// comments

// register and logIn

// display variables

let logIn = document.querySelector("#logIn");
let register = document.querySelector("#register");
let logInButton = document.querySelector("#logInButton");
let registerButton = document.querySelector("#registerButton");
let com = document.querySelector(".com");

// display the forms

function displayRegister() {
  logIn.style.display = "none";
  register.style.display = "block";
}

function displayLogIn() {
  register.style.display = "none";
  logIn.style.display = "block";
}

let z = document.querySelector(".z");
z.addEventListener("click", function () {
  setTimeout(() => {
    location.reload();
  }, 1000);
});
function displayForm(i) {
  if (i === 1) {
    displayRegister();
  } else if (i === 2) {
    displayLogIn();
  }
}

let logOut = document.querySelector(".logOut");
let logout = document.querySelector(".logout");

logout.addEventListener("click", () => {
  logOut.classList.toggle("LOgout");
});
