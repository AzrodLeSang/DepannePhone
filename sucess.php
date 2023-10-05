<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="assets/img/vite.svg" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description"
        content="Bienvenue sur mon Portfolio, ici vous découvrirez mon parcours, mes compétences, ma personnalité et bien d'autres choses. " />
    <meta name="keywords"
        content="HTML, CSS, JavaScript, Jérémie Minetto, Jérémie, Minetto, Portfolio, developpeur web, développeur front-end, front-end" />

    <meta name="author" content="Jérémie Minetto" />
    <link rel="stylesheet" href="assets/css/sucess.css" />
    <!-- * librairie JS -->

    <!-- * police d'écriture -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Roboto&display=swap"
        rel="stylesheet" />

    <title>Formulaire envoyer !</title>
</head>

<?php
  if(!empty($_POST["send"])) {
    $userName = $_POST["nom"];
    $userTel = $_POST["tel"];
    $userEmail = $_POST["email"];
    $userMessage = $_POST["content"];
    $toEmail = "jeremie.minetto81@gmail.com";
    
    $mailHeaders = "Nom: " . $userName .
    "\r\n Téléphone: ". $userTel  . 
    "\r\n Email: ". $userEmail  . 
    "\r\n Message: " . $userMessage . "\r\n";
  
    if(mail($toEmail, $userName, $mailHeaders)) {
        $message = "Votre formulaire a bien été envoyé!";
    }
  }
  ?>

<body>
    <div class="card">
        <div class="rond">
            <i class="checkmark">✓</i>
        </div>
        <h1>Réussite !</h1>
        <p>
            Votre formulaire a bien été reçu!<br />
            Nous tenterons d'y répondre aussi vite que possible !
        </p>

        <a href="index.html"><button>Accueil</button></a>
    </div>
</body>

</html>