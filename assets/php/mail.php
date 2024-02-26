<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'path/to/PHPMailer/src/Exception.php';
require 'path/to/PHPMailer/src/PHPMailer.php';
require 'path/to/PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $website = $_POST['website'];
    $message = $_POST['message'];

    // Include PHPMailer library files

    $mail = new PHPMailer(true);

    try {
        //Server settings
        $mail->SMTPDebug = 0;                      // Enable verbose debug output
        $mail->isSMTP();                                            // Send using SMTP
        $mail->Host       = 'smtp.gmail.com';                     // Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
        $mail->Username   = 'dyguipro@gmail.com';                     // SMTP username
        $mail->Password   = 'xyvxwepaeegtcdus';                               // SMTP password
        $mail->SMTPSecure = 'tls';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
        $mail->Port       = 587;                                    // TCP port to connect to

        //Recipients
        $mail->setFrom($email, $name);
        $mail->addAddress('dyguipro@gmail.com');     // Add a recipient

        // Content
        $mail->isHTML(false);                                  // Set email format to HTML
        $mail->Subject = 'Flake Contact';
        $mail->Body    = "Name: $name\nEmail: $email\nWebsite: $website\nMessage:\n$message";

        $mail->send();
        echo 'Merci! On vous recontactera bientôt.';
    } catch (Exception $e) {
        echo "Désolé il y a une erreur lors de l'envoie de votre message. Merci de réessayer. Erreur: {$mail->ErrorInfo}";
    }
}
?>
