<?php
// Vérification de la soumission du formulaire
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Récupération des données du formulaire
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // Vérification de la validité des données
  $errors = [];
  if (empty($name)) {
    $errors[] = "Le nom est obligatoire.";
  }
  if (empty($email)) {
    $errors[] = "L'email est obligatoire.";
  } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = "L'email n'est pas valide.";
  }
  if (empty($message)) {
    $errors[] = "Le message est obligatoire.";
  }

  // Si il n'y a pas d'erreurs, envoi du message
  if (empty($errors)) {
    // Envoi du message
    // (exemple d'envoi avec PHP mail())
    $to = "evan9105.e@gmail.com";
    $subject = "Nouveau message de $name";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    mail($to, $subject, $message, $headers);

    // Affichage d'un message de confirmation
    echo "Votre message a été envoyé avec succès.";
  } else {
    // Affichage des erreurs
    echo "Le formulaire contient des erreurs :<br>";
    foreach ($errors as $error) {
      echo "- $error<br>";
    }
  }
}
?>
