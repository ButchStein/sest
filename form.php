<?php
// require_once './source/php/config.php';
require_once './source/php/functions.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $email = $_POST['email'];
  $email = check_symbol($email, "Ваш E-mail", "1", "/^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,6}\z/i");
  $tel = $_POST['tel'];
  $tel = check_symbol($tel, "Ваш телефон", "1", "/^\s?(\+\s?7|8)([- ()]*\d){10}$/");
  $message = $_POST['message'];
  $message = check_symbol($message, "Текст сообщения", "0", "");
  echo nl2br($email . "\n" . $tel . "\n" . $message);
  if (!empty($GLOBALS['alert'])) {
    $GLOBALS['alert'] = 'Данные из формы не отправлены. Обнаружены следующие ошибки: \n' . $GLOBALS['alert'];
    include "./alert.php";
  }
}
