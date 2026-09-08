const formulario =
    document.getElementById(
        "IniciarSesion"
    );
formulario.addEventListener(
    "submit",
    enviar
);

function enviar(event) {

    event.preventDefault();

    let cargo =
        document.getElementById(
            "nom"
        ).value;
    let email =
        document.getElementById(
            "correo"
        ).value;
    let password =
        document.getElementById(
            "con"
        ).value;

    if (cargo === "") {
        alert(
            "Seleccione un cargo"
        );
        return;
    }
    if (email === "") {
        alert(
            "Ingrese el correo"
        );
        return;
    }
    if (password === "") {
        alert(
            "Ingrese la contraseña"
        );
        return;
    }
    // ADMINISTRADOR
    if (
        cargo === "administrador"
        &&
        email ===
        "admin.SportsRH@gmail.com"
        &&
        password === "12345"
    ) {
        alert(
            "Usuario encontrado"
        );
        alert(
            "Bienvenido Administrador"
        );
        localStorage.setItem(
            "usuario",
            "administrador"
        );
        localStorage.setItem(
            "correo",
            email
        );
        window.location.href =
            "/Paginainiciada/Paginainiciada-A.html";
        return;
    }
    // PROFESOR
    if (
        cargo === "profesor"
        &&
        email ===
        "profesor.SportsRH@gmail.com"
        &&
        password === "67890"
    ) {
        alert(
            "Usuario encontrado"
        );
        alert(
            "Bienvenido Profesor"
        );
        localStorage.setItem(
            "usuario",
            "profesor"
        );
        localStorage.setItem(
            "correo",
            email
        );
        window.location.href =
            "/paginainiciada/paginainiciada-P.html";
        return;
    }
    // ESTUDIANTE
    if (
        cargo === "estudiante"
        &&
        email ===
        "estudiante.SportsRH@gmail.com"
        &&
        password === "1234567890"
    ) {
        alert(
            "Usuario encontrado"
        );
        alert(
            "Bienvenido Estudiante"
        );
        localStorage.setItem(
            "usuario",
            "estudiante"
        );
        localStorage.setItem(
            "correo",
            email
        );
        window.location.href =
            "/Paginainiciada/Paginainiciada-U.html";
        return;
    }
    // ERROR INICIO DE SESION
    alert(
        "Usuario no encontrado"
    );
    alert(
        "Correo, contraseña o cargo incorrectos"
    );
}
// CERRAR SESION
function cerrarSesion() {
    alert(
        "Cerrando sesión"
    );
    localStorage.removeItem(
        "usuario"
    );
    localStorage.removeItem(
        "correo"
    );
    alert(
        "Sesión cerrada correctamente"
    );
    window.location.href =
        "Index.html";
}