document.addEventListener("DOMContentLoaded", function() {
var nombreUsuario = prompt("Por favor, ingresa tu nombre.");
var saludo = document.querySelector("#nombreUsuario")
var mensajeBienvenida = document.querySelector("#bienvenida");

if(nombreUsuario != null && nombreUsuario !== "") {
    saludo.textContent = " "+nombreUsuario;
    mensajeBienvenida.style.display = "flex";
} else {
    saludo.textContent = "";
    mensajeBienvenida.style.display = "flex";
}});

document.addEventListener("DOMContentLoaded", function() {
    var mensajeBienvenida = document.querySelector("#bienvenida");
    var contenidoAdicional = document.querySelector("#desafio1");

    mensajeBienvenida.addEventListener("animationend", function() {
        mensajeBienvenida.style.display = "none";
        contenidoAdicional.style.display = "flex";
    });
});
