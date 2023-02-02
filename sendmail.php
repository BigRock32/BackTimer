<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);

$mail->setFrom('samarin.vasya.00@mail.ru', 'Vasilii Samarin');

$mail->addAddress('vasya.samarin.00@gmail.com', 'Vasilii Samarin');

$mail->Subject = 'Message from site';

if(trim(!empty($_POST['name']))){
   $body.='<p><strong>Message</strong> '.$_POST['name'].'</p>';
}


$mail->Body = $body;

if(!$mail->send()){
   $message = 'Ошибка';
}else{
   $message = 'Отправлено';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);

?>