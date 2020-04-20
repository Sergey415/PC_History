<?php
  header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST');
    header("Access-Control-Allow-Headers: Content-Type");
    header('Content-Type: application/json;charset=utf-8');
    $login = $_GET["login"];
    $pass = $_GET["pass"];
    $name = $_GET["name"];
    $family = $_GET["family"]
    $mysqli = mysqli_connect("mysql-160578.srv.hoster.ru","srv160578_serega","Sery123","srv160578_serega");
    $mysqli->query("SET NAMES utf8");
    $sql = "INSERT INTO `Logins` (`id`, `Имя`, `Фамилия`, `login`, `password`) VALUES (NULL, '$name', '$family', '$login', '$pass')";
    $mysqli->query($sql);
?>