<?php
// Vérifier si le formulaire a été soumis
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les valeurs du formulaire
    $name = $_POST['name'];
    $email = $_POST['email'];
    $budget = $_POST['Budget'];
    $message = $_POST['message'];

    // Destinataire de l'email (votre adresse email)
    $to = "dyguipro@gmail.com";

    // Sujet de l'email
    $subject = "Nouveau message de $name";

    // Contenu de l'email
    $email_body = "Vous avez reçu un nouveau message de la part de $name.\n\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Budget: $budget\n";
    $email_body .= "Message:\n$message";

    // En-têtes de l'email
    $headers = "De : $name <$email>\r\nReply-To: $email\r\n";

    // Envoyer l'email
    if (mail($to, $subject, $email_body, $headers)) {
        echo 'Thank You! We will be in touch with you very soon.';
    } else {
        echo 'Sorry there was an error sending your message. Please try again';
    }
}
?>
