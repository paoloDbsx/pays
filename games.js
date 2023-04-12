let body = document.querySelector("html");

// displaying variables

let GameChoice = document.querySelector(".GameChoice");
let Game = document.querySelector(".Game");
let GameFlag = document.querySelector(".GameFlag");
let GameCC = document.querySelector(".GameCC");
let h = document.querySelector("#h");

// input variable

let input = document.querySelector("input");

// score variables

let score = document.querySelector(".score");
let f = document.querySelector("#f");
let nbQuestions;
let counter;
let click;
let replay1 = document.querySelector("#replay1");
let replay2 = document.querySelector("#replay2");
let replay3 = document.querySelector("#replay3");
let replay4 = document.querySelector("#replay4");

// time variables

let time = document.querySelector(".time");
let interval;
let timer;

// input conversion

function inputConversion() {
  input.value =
    input.value.substring(0, 1).toUpperCase() +
    input.value.substring(1, input.value.length).toLowerCase();
}

// random

function Random() {
  return Math.floor(Math.random() * 50) + 1;
}

// reset

function reset() {
  counter = 0;
  click = 0;
  timer = 50;
  nbQuestions = 10;
}

// display score

function displayScore() {
  if (click === nbQuestions || timer === -1) {
    stopIteval();
    time.style.color = "black";
    Game.style.display = "none";
    body.style.cursor = "wait";
    setTimeout(() => {
      score.style.display = "flex";
      f.innerText = counter + " / " + nbQuestions;
      body.style.cursor = "auto";
    }, 2000);
  }
}

// update and stop timer

function updateTimer() {
  time.innerText = timer;
  interval = setInterval(() => {
    timer = timer - 1;
    time.innerText = timer;
    if (timer <= 10) {
      time.style.color = "red";
    }
    displayScore();
  }, 1000);
}

function stopIteval() {
  clearInterval(interval);
}

// load Game

function GameLoad(g) {
  GameChoice.style.display = "none";
  // settings.style.display = "none";
  Game.style.display = "flex";
  score.style.display = "none";

  // first Game
  if (g === 1) {
    GameCC.style.display = "none";
    h.innerHTML = `A quel <i><b>Pays</b></i> appartient ce <i><b>Drapeau</b></i> ?`;
    reset();
    updateTimer();
    let r = Random();
    countries.forEach(function (i) {
      if (r === i.id) {
        GameFlag.src = i.flag;
      }
    });
    addEventListener("keydown", (e) => {
      inputConversion();
      if (e.key === "Enter" && input.value != "") {
        click++;
        countries.forEach(function (i) {
          if (i.id === r) {
            if (input.value === i.name) {
              counter++;
            }
          }
        });
        r = Random();
        countries.forEach(function (i) {
          if (r === i.id) {
            GameFlag.src = i.flag;
          }
        });
        input.value = "";
      }
      displayScore();
      replay2.style.display = "none";
      replay3.style.display = "none";
      replay4.style.display = "none";
    });
  }

  // second Game
  else if (g === 2) {
    GameFlag.style.display = "none";
    h.innerHTML = `Quel <i><b>Pays</b></i> correspond cette <i><b>Capitale</b></i> ?`;
    reset();
    updateTimer();
    let r = Random();
    countries.forEach(function (i) {
      if (r === i.id) {
        GameCC.innerText = i.capital;
      }
    });
    addEventListener("keydown", (e) => {
      inputConversion();
      if (e.key === "Enter" && input.value != "") {
        click++;
        countries.forEach(function (i) {
          if (i.id === r) {
            if (input.value === i.name) {
              counter++;
            }
          }
        });
        r = Random();
        countries.forEach(function (i) {
          if (r === i.id) {
            GameCC.innerText = i.capital;
          }
        });
        input.value = "";
      }
      displayScore();
      replay1.style.display = "none";
      replay3.style.display = "none";
      replay4.style.display = "none";
    });
  }

  // third Game
  else if (g === 3) {
    GameCC.style.display = "none";
    h.innerHTML = `Quelle <i><b>Capitale</b></i> correspond à ce <i><b>Drapeau</b></i> ?`;
    reset();
    updateTimer();
    let r = Random();
    countries.forEach(function (i) {
      if (r === i.id) {
        GameFlag.src = i.flag;
      }
    });
    addEventListener("keydown", (e) => {
      inputConversion();
      if (e.key === "Enter" && input.value != "") {
        click++;
        countries.forEach(function (i) {
          if (i.id === r) {
            if (input.value === i.capital) {
              counter++;
            }
          }
        });
        r = Random();
        countries.forEach(function (i) {
          if (r === i.id) {
            GameFlag.src = i.flag;
          }
        });
        input.value = "";
      }
      displayScore();
      replay1.style.display = "none";
      replay2.style.display = "none";
      replay4.style.display = "none";
    });
  }

  //fourth Game
  else if (g === 4) {
    h.innerHTML = `Quelle est la <i><b>Capitale</b></i> de ce <i><b>Pays</b></i> ?`;
    GameFlag.style.display = "none";
    reset();
    updateTimer();
    let r = Random();
    countries.forEach(function (i) {
      if (r === i.id) {
        GameCC.innerText = i.name;
      }
    });
    addEventListener("keydown", (e) => {
      inputConversion();
      if (e.key === "Enter" && input.value != "") {
        click++;
        countries.forEach(function (i) {
          if (i.id === r) {
            if (input.value === i.capital) {
              counter++;
            }
          }
        });
        r = Random();
        countries.forEach(function (i) {
          if (r === i.id) {
            GameCC.innerText = i.name;
          }
        });
        input.value = "";
      }
      displayScore();
      replay1.style.display = "none";
      replay2.style.display = "none";
      replay3.style.display = "none";
    });
  }
}
