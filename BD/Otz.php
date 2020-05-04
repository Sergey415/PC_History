<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST');
    header("Access-Control-Allow-Headers: Content-Type");
    header('Content-Type: application/json;charset=utf-8');
    $otziv = $_GET["otziv"];
    $mysqli = mysqli_connect("mysql-160578.srv.hoster.ru","srv160578_serega","Sery123","srv160578_serega");
    $mysqli->query("SET NAMES utf8");
    "INSERT INTO `Otz` (`id`, `id_user`, `Отзыв`, `was_like`) VALUES (NULL, '3', '$otziv', '1')";
    $mysqli->query($sql)
?>