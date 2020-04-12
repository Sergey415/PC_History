<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST');
    header("Access-Control-Allow-Headers: Content-Type");
    header('Content-Type: application/json;charset=utf-8');
    $login = $_GET["login"];
    $pass = $_GET["pass"];
    $mysqli = mysqli_connect("mysql-160578.srv.hoster.ru","srv160578_serega","Sery123","srv160578_serega");
    $mysqli->query("SET NAMES utf8");
    $sql = "SELECT id,Имя,Фамилия,login,password FROM Logins WHERE login = '$login' AND password = '$pass'";
        $result = $mysqli->query($sql);
        for($i=0;$row = mysqli_fetch_assoc($result);$i++){
        $test[] = $row;
        };
        print json_encode($test, JSON_UNESCAPED_UNICODE);
?>