document.addEventListener("DOMContentLoaded", function() {
    let user = sessionStorage.getItem("user");
    if (user !== "administrador") {
        window.location.href = "IniciarSesion.html";
    }
});