<?php
      session_start();
      // if (isset($_SESSION)) {
      //   if (isset($_SESSION['name'])) {
      //     header("Location: learn.php");
      //   }
      // }
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
        <div style="text-align: center;">
        <?php
            include "pseudo.php";
        ?>
        </div>
      </nav>
      <div class="right"></div>
    </header>
    <main>
    <form method="post" class="logOut">
          <input class="Logout" name="Logout" type="submit" value="Déconnexion">
        </form>
        <?php
            include "logOut.php";
        ?>
    <form action="" method="post" id="logIn" class="form">
          <p>Connectez-vous Maintenant !</p>
          <p class="change" onclick="displayForm(1)">register</p>
            <input
                type="text"
                name="pseudo1"
                minlength="4"
                maxlength="20"
                placeholder="Pseudo"
                pattern= "[a-zA-Z0-9]+" 
                required
            /> <br>
            <input 
                type="password" 
                name="password1" 
                minlength="4"
                maxlength="50"
                placeholder="Mot de passe"
                required 
            /> <br>
            <button type="submit" class="z" name="logIn" value="logIn" id="logInButton">OK</button>
        </form>
        <div>
        <?php
            include "userPDO.php"
        ?>
        </div>
         <form action="" method="post" id="register" class="form">
          <p>Enregistrez-vous Maintenant !</p>
          <p class="change" onclick="displayForm(2)">log in</p>
            <input
                type="text"
                name="pseudo"
                minlength="4"
                maxlength="20"
                pattern= "[a-zA-Z0-9]+" 
                placeholder="Pseudo"
                required
            /> <br>
            <input 
                type="mail" 
                name="mail"
                maxlength="60"
                placeholder="Adresse Mail"
                required 
            /> <br>
            <input 
                type="password" 
                name="password" 
                minlength="4"
                maxlength="50"
                placeholder="Mot de passe"
                required 
            /> <br>
            <button type="submit" id="registerButton" name="register" value="register" onclick="displayForm(2)">OK</button>
        </form>
        <div>
        <?php
             include "userConstruct.php"
        ?>
        
        </div>
    </main>
    <script src="commentsJava.js"></script>
  </body>
</html>