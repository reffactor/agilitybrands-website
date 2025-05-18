<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';
require 'phpmailer/src/Exception.php';

header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = strip_tags(trim($_POST["nombre"] ?? ''));
    $email = filter_var(trim($_POST["email"] ?? ''), FILTER_SANITIZE_EMAIL);
    $servicio = strip_tags(trim($_POST["servicio"] ?? ''));
    $mensaje = trim($_POST["mensaje"] ?? '');

    if (!$nombre || !$email || !$servicio || !$mensaje) {
        echo json_encode(["success" => false, "message" => "Todos los campos son obligatorios."]);
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["success" => false, "message" => "Correo no válido."]);
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host = 'mail.host.domain ';
        $mail->SMTPAuth = true;
        $mail->Username = 'mail name';
        $mail->Password = 'password';
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;

        $mail->setFrom('mail name', 'From name');
        $mail->addAddress('mail name');

        $mail->isHTML(false);
        $mail->Subject = "Nuevo mensaje de contacto";
        $mail->Body    = "Nombre: $nombre\nCorreo: $email\nServicio: $servicio\n\nMensaje:\n$mensaje";

        $mail->send();
        echo json_encode(["success" => true, "message" => "Mensaje enviado con éxito."]);
    } catch (Exception $e) {
        echo json_encode([
            "success" => false,
            "message" => "Hubo un error al enviar el formulario. Intenta más tarde."
    ]);
}
} else {
    echo json_encode(["success" => false, "message" => "Método no permitido."]);
}