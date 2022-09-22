const menu = document.querySelector(".menu")
const abrirMenuBoton = document.querySelector(".open-menu")
const cerrarMenuBoton = document.querySelector(".close-menu")

function alternarMenu(){
menu.classList.toggle("menu_abrirCerrar")
}

abrirMenuBoton.addEventListener("click",alternarMenu);
cerrarMenuBoton.addEventListener("click",alternarMenu);