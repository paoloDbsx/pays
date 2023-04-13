<?php
     session_start()
    ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>EUROPA</title>
  </head>
  <body>
    <header>
      <div class="left"></div>
      <nav>
        <a href="learn">Découvrir</a>
        <a href="games">Mini-jeux</a>
        <a href="comments">Notes & Commentaires</a>
        <a href="logIn">Connexion</a>
        <div>
          <img src="./othersImages/profil.png" alt="">
          <p> <?php
            include "pseudo.php"
        ?></p>
        </div>
      </nav>
      <div class="right"></div>
    </header>
    <main>
      <h2>MINI - JEUX</h2>
      <span>Difficulté " + "</span>

      <!-- Set timer and nbQuestions -->

      <!-- Game Choice -->

      <section class="GameChoice">
        <div class="firstDiv">
          <p class="firstp">Trouve le PAYS</p>
          <div class="secondDiv">
            <img class="arrow" src="./othersImages/arrow.png" alt="" />
            <div class="thirdDiv">
              <p class="secondp" onclick="GameLoad(1)">
                A l'aide du DRAPEAU (+)
              </p>
              <br />
              <p class="secondp" onclick="GameLoad(2)">
                A l'aide de la CAPITALE (++)
              </p>
            </div>
          </div>
        </div>
        <div class="firstDiv">
          <p class="firstp">Trouve la CAPITALE</p>
          <div class="secondDiv">
            <img class="arrow" src="./othersImages/arrow.png" alt="" />
            <div class="thirdDiv">
              <p class="secondp" onclick="GameLoad(3)">
                A l'aide du DRAPEAU (+++)
              </p>
              <br />
              <p class="secondp" onclick="GameLoad(4)">A l'aide du PAYS (++)</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Game -->

      <section class="Game">
        <img class="GameFlag" src="${i.flag}" />
        <p class="GameCC"></p>
        <div>
          <p id="h"></p>
          <br /><br />
          <input type="text" />
        </div>
        <div class="timer">
          <img class="gif" src="./othersImages/giphy.gif" />
          <p class="time"></p>
        </div>
      </section>

      <!-- Score -->

      <section class="score">
        <div>
          <p><b>Votre score est de : </b><i id="f"></i></p>
          <p class="option" id="replay1" onclick="GameLoad(1)">Rejouer</p>
          <p class="option" id="replay2" onclick="GameLoad(2)">Rejouer</p>
          <p class="option" id="replay3" onclick="GameLoad(3)">Rejouer</p>
          <p class="option" id="replay4" onclick="GameLoad(4)">Rejouer</p>
          <a href="comments.php">
            <p class="option" id="comment">Donne ton avis</p>
          </a>
        </div>
      </section>
    </main>
    <script src="countries.js"></script>
    <script src="games.js"></script>
  </body>
</html>
