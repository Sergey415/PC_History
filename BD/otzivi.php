<?php
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST');
        header("Access-Control-Allow-Headers: Content-Type");
        header('Content-Type: application/json;charset=utf-8');
        $mysqli = mysqli_connect("mysql-160578.srv.hoster.ru","srv160578_serega","Sery123","srv160578_serega");
        $mysqli->query("SET NAMES utf8");
        $otzivi = "SELECT * FROM `Otz`";
        $result = $mysqli->query($otzivi);
    for($i=0;$row = mysqli_fetch_assoc($result);$i++){
    $test[] = $row;
    };
    print json_encode($test, JSON_UNESCAPED_UNICODE);
?>