<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST');
    header("Access-Control-Allow-Headers: Content-Type");
    header('Content-Type: application/json;charset=utf-8');
    $login = $_GET["login"];
    $pass = $_GET["pass"];
    $nam = $_GET["name"];
    $famil = $_GET["family"];
    $mysqli = mysqli_connect("mysql-160578.srv.hoster.ru","srv160578_serega","Sery123","srv160578_serega");
    $mysqli->query("SET NAMES utf8");
    $sql = "INSERT INTO `Logins` (`id`, `Имя`, `Фамилия`, `login`, `password`) VALUES (NULL, '$nam', '$famil', '$login', '$pass')";
    $mysqli->query($sql);
?>