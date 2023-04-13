<?php
      session_start();
      if (isset($_SESSION)) {
        if (isset($_SESSION['name'])) {
        }
        else{
          header("location: logIn.php");
        }
      }
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
      <section class="comments">
      <form action="" method="post">
          <input type="text" name="comment" placeholder="Ecrit un commentaire ..." required/>
        </form>
        <?php
            include "comConstruct.php";
        ?>
        <div>
          <?php
            include "comPDO.php"          
          ?>
      </div>  
      </section>
    </main>
    <script src="commentsJava.js"></script>
  </body>
</html>


