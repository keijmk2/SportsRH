document.addEventListener("DOMContentLoaded", function () {
    let user = sessionStorage.getItem(user)
    if(user !== "Administrador")
        window.location.href = "/SportRH/IniciarSesion/IniciarSesion.html"
})