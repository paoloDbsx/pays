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
        <a href="learn.php">Découvrir</a>
        <a href="games.php">Mini-jeux</a>
        <a href="comments.php">Commentaires</a>
        <a href="logIn.php">Connexion</a>
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
      <h1>
        Bienvenue sur <i><b>EUROPA</b></i>
        , le site qui te permet de découvrir l'Europe tout en t'amusant. Alors
        commence dès maintenant !!!
      </h1>
    </main>
  </body>
</html>
