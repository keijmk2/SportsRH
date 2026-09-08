const user = [
    {
        "email": "admin@admin.com",
        "password": "admin123",
        "cargo": "Administrador"
    },
    {
        "email": "admin@estu.com",
        "password": "estu123",
        "cargo": "Estudiante"
    },
    {
        "email": "admin@prof.com",
        "password": "prof123",
        "cargo": "Profesor"
    }
];
function iniciarSesion(email, password) {
    for (let index = 0; index < user.length; index++) {
        
        let usuarioEncontrado;
        for (const element of user) {
            if (element.email === email && element.password === password) {
                usuarioEncontrado = element;
                break;
            }
        }
    }
    if (usuarioEncontrado) {
        alert("usuario encontrado");
        sessionStorage.setItem("user", usuarioEncontrado.user);
    } else {
        alert("usuario no encontrado");
    }
}

const formulario = document.getElementById("InicioSesion");
formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (user.email === email && user.password === password) {
        localStorage.setItem("email", email);
        sessionStorage.setItem("cargo", user.cargo);
        localStorage.setItem("cargo", cargo);

        window.location.href = "/Paginainiciada/Paginainiciada-A.html"
        return
    }
    formulario.reset();
    return alert("usuario no encontrado")
})