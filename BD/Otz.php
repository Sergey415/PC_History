<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST');
    header("Access-Control-Allow-Headers: Content-Type");
    header('Content-Type: application/json;charset=utf-8');
    $mysqli = mysqli_connect("mysql-160578.srv.hoster.ru","srv160578_serega","Sery123","srv160578_serega");
    $mysqli->query("SET NAMES utf8");
    $otziv = $_GET["otziv"];
    $like = $_GET["was_like"];
    $login = $_GET["login"];
    $pass = $_GET["password"];
    $id = "SELECT id FROM Logins WHERE login = '$login' AND password = '$pass'";
   $result = $mysqli->query($id);
        for($i=0;$row = mysqli_fetch_assoc($result);$i++){
        $test[] = $row;
        };
    $sql = "INSERT INTO `Otz` (`id`, `id_user`, `Отзыв`, `was_like`) VALUES (NULL, '$id', '$otziv', '$like')";
    $mysqli->query($sql);
    
?>