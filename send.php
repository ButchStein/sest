<?php
require '/source/php/PHPMailer.php';
require '/source/php/SMTP.php';
require '/source/php/Exception.php';

$email = $_POST['email'];
$tel = $_POST['tel'];
$text = $_POST['text'];


if (filter_var($email, FILTER_VALIDATE_EMAIL) && !preg_match('|^[0-9]+$|i', $tel)) {

  $mail = new PHPMailer\PHPMailer\PHPMailer();
  try {
    $msg = "ok";
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->Host       = 'smtp.gmail.com';
    $mail->Username   = 'LOGIN';
    $mail->Password   = '123456';
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('tt@mail.com', 'fffff');
    $mail->addAddress('test@test.com');
    $mail->isHTML(true);
    $mail->Subject = 'Заголовок письма';
    $mail->Body    = "<b>Телефон:</b> $tel <br>
        <b>Почта:</b> $email<br><br>
        <b>Сообщение:</b><br>$text";
    if ($mail->send()) {
      echo "$msg";
    } else {
      echo "Сообщение не было отправлено. Неверно указаны настройки вашей почты";
    }
  } catch (Exception $e) {
    echo "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
  }
} else {
  echo 'mailerror';
}
