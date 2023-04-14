<?php
if (isset($_SESSION['name'])) {
        if (isset($_SESSION['image'])) {
                $Simage = $_SESSION['image'];
                $Sp = $_SESSION['name'];
                echo "<img src= '$Simage' alt=''>
                <p>$Sp</p>";
        }
}
