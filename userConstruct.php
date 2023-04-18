<?php

// Inscription
include "config.php";
if (isset($_POST['register'])){
$pseudo = filter_input(
    INPUT_POST,
    "pseudo",
);
$mail = filter_input(
    INPUT_POST,
    "mail",
    FILTER_VALIDATE_EMAIL,
);
$password = filter_input(
    INPUT_POST,
    "password",
);
$randomColor = rand(1,4);
if ($randomColor === 1) {
    $color = "blue";
}
else if ($randomColor === 2) {
    $color = "green";
}
else if ($randomColor === 3) {
    $color = "yellow";
}
else {
    $color = "red";
}
$randomImage = rand(1,4);
if ($randomImage === 1) {
    $image = "./othersImages/hibou.png";
}
else if ($randomImage === 2) {
    $image = "./othersImages/lapin.png";
}
else if ($randomImage === 3) {
    $image = "./othersImages/licorne.png";
}
else {
    $image = "./othersImages/loup.png";
}
$password_hash = password_hash($password, PASSWORD_DEFAULT);
$query = $connection->prepare("SELECT * FROM utilisateur WHERE pseudo=:pseudo");
$query->bindParam("pseudo", $pseudo ,PDO::PARAM_STR);
$query->execute();
if ($query->rowCount() > 0) {
    echo "<p class='txt'>Oups! Le pseudo est déjà pris.</p>";
}
else if ($query->rowCount() === 0){
    $query = $connection->prepare("SELECT * FROM utilisateur WHERE mail=:mail");
    $query->bindParam("mail", $mail ,PDO::PARAM_STR);
    $query->execute();
    if ($query->rowCount() > 0) {
        echo "<p class='txt'>Cette adresse mail est déjà enregistré!</p>";
    }
    else if ($query->rowCount() === 0){
        $query = $connection->prepare("INSERT INTO utilisateur (pseudo, mail, password, color, image) VALUES (:pseudo, :mail, :password_hash, :color, :image)");
        $query->bindParam("pseudo", $pseudo, PDO::PARAM_STR);
        $query->bindParam("mail", $mail, PDO::PARAM_STR);
        $query->bindParam("password_hash", $password_hash, PDO::PARAM_STR);
        $query->bindParam("color", $color, PDO::PARAM_STR);
        $query->bindParam("image", $image, PDO::PARAM_STR);
        $result = $query->execute();
        if ($result) {
            echo "<p class='txt'>C'est bon! Ton enregistrement s'est parfaitement déroulé.</p>";
        } else {
            echo "<p class='txt'>Oups! Quelque chose s'est mal déroulé.</p>";
        }
    }
}
}