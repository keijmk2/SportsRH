console.log('hola');
const user = 
[
  {
    "email": "admin@admin.com",
    "password": "admin123",
    "cargo": "Administrador"
  },
  {
    "email": "admin@prof.com",
    "password": "prof123",
    "cargo": "Profesor"
  },
  {
    "email": "admin@estu.com",
    "password": "estu123",
    "cargo": "Estudiante"
  } 
]

function InicioSesion(email, password){
    for (let Index = 0; Index < user.length; Index++ ) {
        const element = user[Index];
        if (element.email === email && element.password === password) {
            alert("Encontrado");
            sessionStorage.setItem("user",element.user);
            break
        }
        alert("No encontrado")

        console.log("index", Index);
        console.log("elemento", element, email);
        console.log("elemento", element, password);
        console.log("elemento", element, cargo);
    }
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