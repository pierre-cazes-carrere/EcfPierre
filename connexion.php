<?php
// Connexion à la base de données MySQL
$mysqli = new mysqli("localhost", "utilisateur", "mot_de_passe", "ma_base_de_données");

// Vérifier la connexion
if ($mysqli->connect_error) {
    die("Échec de la connexion à la base de données : " . $mysqli->connect_error);
}

// Récupérer les données du formulaire de connexion
$email = $_POST['email'];
$password = $_POST['password'];

// Requête pour récupérer le mot de passe associé à l'adresse e-mail
$sql = "SELECT id, password FROM utilisateurs WHERE email = ?";

if ($stmt = $mysqli->prepare($sql)) {
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows == 1) {
        $stmt->bind_result($user_id, $hashed_password);
        $stmt->fetch();

        // Vérifier si le mot de passe saisi correspond au mot de passe haché dans la base de données
        if (password_verify($password, $hashed_password)) {
            // Authentification réussie
            session_start();
            $_SESSION['user_id'] = $user_id;
            header("Location: accueil.php");
            exit();
        } else {
            // Mot de passe incorrect
            echo "Mot de passe incorrect.";
        }
    } else {
        // Adresse e-mail non trouvée
        echo "Adresse e-mail non trouvée.";
    }

    $stmt->close();
} else {
    echo "Erreur de préparation de la requête : " . $mysqli->error;
}

$mysqli->close();
?>
