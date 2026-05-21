console.log("hola mundo");

const user = {
    email: "user@sportsrh.com",
    password: "123",
    user: "administrador"
};

const form = document.getElementById("iniciarSesion");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let cargo = document.getElementById("nom").value;
    let email = document.getElementById("correo").value;
    let password = document.getElementById("con").value;

    if (user.email === email && user.password === password) {

        sessionStorage.setItem("user", user);

        // Guardar datos en Local Storage
        localStorage.setItem("correo", email);
        localStorage.setItem("password", password);
        localStorage.setItem("cargo", cargo);

        window.location.href = "../Paginainiciada/Paginainiciada.html";
        return;
    }

    form.reset();
    alert("Credenciales incorrectas");
});