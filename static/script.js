/* Abre e fecha menu em modo mobile */

const menuMobile = document.querySelector(".menu-mobile")
const body = document.querySelector("body")

menuMobile.addEventListener("click", () => {
    menuMobile.classList.contains("bi-list")
    ? menuMobile.classList.replace("bi-list", "bi-x")
    : menuMobile.classList.replace("bi-x", "bi-list");
    body.classList.toggle("menu-nav-active");
})

/* Verificação do formulario */
function validateForm() {
    let x = document.forms["myForm"]["fnome"].value;
    let z = document.forms["myForm"]["femail"].value;
    let y = document.forms["myForm"]["fmensagem"].value;
    if (x == "" || y == "" || z == "" || y == null || x == null || z == null) {
        alert("Invalido");
        return false;
    } else {
        alert("Mensagem enviado!");
        return true;
    }
}