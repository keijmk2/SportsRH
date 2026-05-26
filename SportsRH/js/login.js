console.log('hola');
const user = {
    "email": "admin@admin.com",
    "password": "admin123",
    "cargo": "Administrador"
}

const formulario = document.getElementById("InicioSesion");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (user.email === email && user.password === password ) {
        localStorage.setItem("email", email);
        sessionStorage.setItem("cargo", user.cargo);
        localStorage.setItem("cargo", cargo);

        window.location.href="/SportsRH/Paginainiciada/Paginainiciada.html"
        return
    }
    formulario.reset();
    return alert("usuario no encontrado")
    console.log("entre");
})