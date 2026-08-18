document.addEventListener("DOMContentLoaded", () => {

    const guardarCambios = document.getElementById("guardarCambios");

    const correo = document.getElementById("correo");
    const nuevaCon = document.getElementById("nuevaCon");
    const confirmarCon = document.getElementById("confirmarCon");
    const mensaje = document.getElementById("mensaje");

    guardarCambios.addEventListener("click", () => {

        mensaje.style.color = "#dc3545";
        mensaje.textContent = "";

        if (
            correo.value.trim() === "" ||
            nuevaCon.value.trim() === "" ||
            confirmarCon.value.trim() === ""
        ) {
            mensaje.textContent = "Todos los campos son obligatorios.";
            return;
        }
        if (nuevaCon.value.length < 8) {
            mensaje.textContent =
                "La contraseña debe tener al menos 8 caracteres.";
            return;
        }
        if (nuevaCon.value !== confirmarCon.value) {
            mensaje.textContent =
                "Las contraseñas no coinciden.";
            return;
        }

        mensaje.style.color = "#28a745";
        mensaje.textContent =
            "Contraseña actualizada correctamente.";

        guardarCambios.disabled = true;

        setTimeout(() => {

            window.location.href =
                "./IniciarSesion.html";

        }, 2000);

    });

});