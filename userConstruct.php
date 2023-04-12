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
        $query = $connection->prepare("INSERT INTO utilisateur (pseudo, mail, password) VALUES (:pseudo, :mail, :password_hash)");
        $query->bindParam("pseudo", $pseudo, PDO::PARAM_STR);
        $query->bindParam("mail", $mail, PDO::PARAM_STR);
        $query->bindParam("password_hash", $password_hash, PDO::PARAM_STR);
        $result = $query->execute();
        if ($result) {
            echo "<p class='txt'>C'est bon! Ton enregistrement s'est parfaitement déroulé.</p>";
        } else {
            echo "<p class='txt'>Oups! Quelque chose s'est mal déroulé.</p>";
        }
    }
}
}



// class DB extends PDO
// {
//     function __construct()
//     {
//         parent::__construct(
//             'mysql:host=localhost;dbname=europa;charset=utf8',
//             'root'
//         );
//     }
// }
// class user extends DB{

// private $pseudo;
// private $mail;
// private $password;

// function __construct(string $p, string $m, string $pw){
//     parent::__construct();
//     $this->pseudo = $p;
//     $this->mail = $m;
//     $this->password = $pw;
// }
// function newUser(){
//     $resultU = $this->prepare("INSERT INTO utilisateur (pseudo, mail, password) VALUES (:pseudo, :mail, :password)");
//     $resultU->bindParam(':pseudo', $this->pseudo);
//     $resultU->bindParam(':mail', $this->mail);
//     $resultU->bindParam(':password', $this->password);
//     $resultU->execute();
// }
// }

// $user = new user($test, $test1, $test2);
// $user->newUser();
// }