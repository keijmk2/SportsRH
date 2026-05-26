// FORMULARIO

const formulario =
    document.getElementById("IniciarSesion");

// EVENTO SUBMIT

formulario.addEventListener("submit", enviar);

// FUNCION PRINCIPAL

function enviar(event) {

    // EVITAR RECARGA

    event.preventDefault();

    // CAPTURAR DATOS

    let cargo =
        document.getElementById("nom").value;

    let email =
        document.getElementById("email").value;

    let password =
        document.getElementById("password").value;

    // VALIDACIONES

    if (cargo === "") {

        alert("Seleccione un cargo");

        return;
    }

    if (email === "") {

        alert("Ingrese el correo");

        return;
    }

    if (password === "") {

        alert("Ingrese la contraseña");

        return;
    }

    // -------------------------
    // ADMINISTRADOR
    // -------------------------

    if (
        cargo === "administrador" &&
        email === "admin@sportsrh.com" &&
        password === "123"
    ) {

        // GUARDAR USUARIO

        localStorage.setItem(
            "usuario",
            "administrador"
        );

        localStorage.setItem(
            "correo",
            email
        );

        // REDIRECCION

        window.location.href =
            "/SportsRH/Admin/Admin.html";

        return;
    }

    // -------------------------
    // PROFESOR
    // -------------------------

    if (
        cargo === "profesor" &&
        email === "profe@sportsrh.com" &&
        password === "456"
    ) {

        // GUARDAR USUARIO

        localStorage.setItem(
            "usuario",
            "profesor"
        );

        localStorage.setItem(
            "correo",
            email
        );

        // REDIRECCION

        window.location.href =
            "/SportsRH/Profesor/Profesor.html";

        return;
    }

    // -------------------------
    // ESTUDIANTE
    // -------------------------

    if (
        cargo === "estudiante" &&
        email === "estudiante@sportsrh.com" &&
        password === "789"
    ) {

        // GUARDAR USUARIO

        localStorage.setItem(
            "usuario",
            "estudiante"
        );

        localStorage.setItem(
            "correo",
            email
        );

        // REDIRECCION

        window.location.href =
            "/SportsRH/Estudiante/Estudiante.html";

        return;
    }

    // --------------------------
    // ERROR
    // --------------------------

    alert(
        "Correo, contraseña o cargo incorrectos"
    );
}

// --------------------------------------
// FUNCION CERRAR SESION
// --------------------------------------

function cerrarSesion() {

    // BORRAR STORAGE

    localStorage.removeItem("usuario");

    localStorage.removeItem("correo");

    // REDIRECCION

    window.location.href =
        "/Index.html";
}