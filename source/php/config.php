<?php
$host = "localhost";
$user = "root";
$password = "";
$database = "sest";
$link = mysqli_connect($host, $user, $password, $database);
if(!$link) {
die('Соединение не удалось: Код ошибки: '.mysqli_connect_errno().' - '.mysqli_connect_error());
}
if(!mysqli_set_charset($link, "utf8")) {
die('Ошибка при загрузке набора символов utf8: '.mysqli_errno($link).' - '.mysqli_error($link));
}