// displaying and searching variables

let results = document.querySelector(".results");
let input = document.querySelector(".input");
let ul = document.querySelector("ul");

// countries variables 

let country = document.querySelector(".country");
let flag = document.querySelector(".flag");
let a = document.querySelector("#a");
let b = document.querySelector("#b");
let c = document.querySelector("#c");
let d = document.querySelector("#d");

// input conversion

function inputConversion() {
  input.value =
    input.value.substring(0, 1).toUpperCase() +
    input.value.substring(1, input.value.length).toLowerCase();
}

// display country

function displayCountry() {
  countries.forEach(function (i) {
    if (input.value === i.name) {
      input.value = "";
      results.style.display = "block";
      country.src = i.country;
      flag.src = i.flag;
      a.innerText = i.name;
      b.innerText = i.population;
      c.innerText = i.capital;
      d.innerText = i.surface;
      if (i.position === "1") {
        country.style.width = "50vw";
      } else {
        country.style.width = "50vw";
      }
    }
  });
}

// display names as suggests

function displayNames(value) {
  input.value = value;
  removeNames();
  displayCountry();
}

// remove names

function removeNames() {
  let items = document.querySelectorAll(".item");
  items.forEach(function (j) {
    j.remove();
  });
}

function createItems() {
  NameCountry.forEach(function (i) {
    if (i.startsWith(input.value) && input.value != "") {
      let li = document.createElement("li");
      li.classList.add("item");
      li.setAttribute("onclick", "displayNames('" + i + "')");
      let word = "<b>" + i.substring(0, input.value.length) + "</b>";
      word += i.substring(input.value.length);
      li.innerHTML = word;
      ul.appendChild(li);
    }
  });
}

input.addEventListener("keyup", () => {
  removeNames();
  inputConversion();
  createItems();
});

input.addEventListener("keydown", (e) => {
  inputConversion();
  if (e.key === "Enter") {
    displayCountry();
  }
});
