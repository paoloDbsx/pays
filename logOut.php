<?php

if (isset($_POST['Logout'])) {
    unset($_SESSION['name']);
}
