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
      <div class="search">
        <input type="text" class="input" placeholder="*recherche un pays" />
        <ul></ul>
      </div>
      <section class="results">
        <img class="country" src="" />
        <div class="info_flag">
          <img class="flag" src="" />
          <div class="info">
            <p><b>Pays : </b><i id="a"></i></p>
            <p><b>Population : </b><i id="b"></i></p>
            <p><b>Capitale : </b><i id="c"></i></p>
            <p><b>Superficie : </b><i id="d"></i></p>
          </div>
        </div>
      </section>
    </main>
    <script src="countries.js"></script>
    <script src="index.js"></script>
  </body>
</html>
