<?php

// comments
$mysqlClient = new PDO('mysql:host=localhost;dbname=europa;charset=utf8', 'root');

        $sqlQuery = 'SELECT * FROM comments
        INNER JOIN utilisateur on 
        utilisateur.userID = comments.user_id';
        $sqlStatement = $mysqlClient->prepare($sqlQuery);
        $sqlStatement->execute();
        $comments = $sqlStatement->fetchAll();

foreach($comments as $i){
    $txtP = $i["comment"];
    $user_idP = $i["pseudo"];
    echo "$user_idP :&nbsp $txtP <br>";
}