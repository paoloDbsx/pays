<?php
try {
    $connection = new PDO('mysql:host=localhost;dbname=europa;charset=utf8', 'root');
} catch (\PDOException $e) {
    exit("Error: " . $e->getMessage());
}