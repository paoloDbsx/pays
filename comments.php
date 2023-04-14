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
        <?php
            include "pseudo.php"
        ?>
        </div>
      </nav>
      <div class="right"></div>
    </header>
    <main>
      <section class="comments">
        <?php
            include "comConstruct.php";
        ?>
        <div class="spaceComments">
          <?php
            include "comPDO.php"          
          ?>
      </div>  
      <form action="" method="post">
          <input type="text" name="comment" placeholder="Ecrit un commentaire ..." required/>
        </form>
      </section>
    </main>
    <script src="commentsJava.js"></script>
  </body>
</html>


