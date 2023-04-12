<?php

// connexion
include "config.php";
if (isset($_POST['logIn'])){
$pseudo1 = filter_input(
    INPUT_POST,
    "pseudo1",
);
$password1 = filter_input(
    INPUT_POST,
    "password1",
);
$query = $connection->prepare("SELECT * FROM utilisateur WHERE pseudo=:pseudo");
$query->bindParam("pseudo", $pseudo1, PDO::PARAM_STR);
$query->execute();
$result = $query->fetch(PDO::FETCH_ASSOC);
    if (!$result) {
        echo "<p class='txt'>Ce pseudo n'existe pas!</p>";
    } else {
        if (password_verify($password1, $result['password'])) {
            $_SESSION['user_id'] = $result['userID'];
            $_SESSION['name'] = $result['pseudo'];
            echo "<p class='txt'>Félicitations! Vous êtes connectés!</p>";
        } else {
            echo "<p class='txt'>Veuillez vérifier votre pseudo et votre mot de passe!</p>";
        }
    }
}
