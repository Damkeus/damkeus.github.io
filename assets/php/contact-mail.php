<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $website = htmlspecialchars($_POST['website']);
    $message = htmlspecialchars($_POST['message']);

    // Sender Email and Name
    $from = "$name <$email>";

    // Recipient Email Address
    $to = 'matabsaifeddine@gmail.com';

    // Email Subject
    $subject = 'Flake Contact';

    // Email Header
    $headers = "From: $from\r\n" .
               "MIME-Version: 1.0\r\n";

    // Message Body
    $body = "Name: $name\nEmail: $email\nWebsite: $website\nMessage:\n$message";

    // Check that data was sent to the mailer.
    if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo 'Please fill all the fields and try again.';
        exit;
    }

    // If there are no errors, send the email
    if (mail($to, $subject, $body, $headers)) {
        echo 'Thank You! We will be in touch with you very soon.';
    } else {
        echo 'Sorry there was an error sending your message. Please try again';
    }
}
?>
