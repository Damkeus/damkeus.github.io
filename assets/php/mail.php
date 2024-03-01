<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

if (isset($_POST["send"])) {
    $mail = new PHPMailer(true);

    try {
        //Server settings
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'dyguipro@gmail.com'; // Your Gmail email address
        $mail->Password   = 'xyvxwepaeegtcdus'; // Your Gmail password or App Password
        $mail->SMTPSecure = 'tls'; // Enable TLS encryption
        $mail->Port       = 587; // TCP port to connect to

        //Recipients
        $mail->setFrom($_POST["email"], $_POST["name"]);
        $mail->addAddress('recipient@example.com');
        $mail->addReplyTo($_POST["email"], $_POST["name"]);

        //Content
        $mail->isHTML(true);
        $mail->Subject = $_POST["subject"];
        $mail->Body    = $_POST["message"];

        $mail->send();
        echo "
            <script> 
                alert('Message was sent successfully!');
                document.location.href = 'index.php';
            </script>
        ";
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
