<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $mensaje = $_POST['mensaje'];

    $destinatario = "tu-email@example.com";
    $asunto = "Mensaje desde tu portafolio";

    $contenido = "Nombre: $nombre\n";
    $contenido .= "Correo: $correo\n\n";
    $contenido .= "Mensaje:\n$mensaje";

    mail($destinatario, $asunto, $contenido);

    header("Location: index.html?enviado=true");
}
?>
