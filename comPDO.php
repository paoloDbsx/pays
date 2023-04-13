<?php

// comments
$mysqlClient = new PDO('mysql:host=localhost;dbname=europa;charset=utf8', 'root');

        $sqlQuery = 'SELECT * FROM comments
        INNER JOIN utilisateur on 
        utilisateur.userID = comments.user_id order by commentID';
        $sqlStatement = $mysqlClient->prepare($sqlQuery);
        $sqlStatement->execute();
        $comments = $sqlStatement->fetchAll();

foreach($comments as $i){
    $txtP = $i["comment"];
    $user_idP = $i["pseudo"];
    $color = $i["color"];
    echo "<p><b class='com' style='color:$color;'>$user_idP</b> :<br>$txtP</p>
    <hr style='width:25vw; margin: 0 auto; color: rgb(0, 0, 0)'>";
}