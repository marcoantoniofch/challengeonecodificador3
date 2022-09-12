const menu = document.querySelector(".titulo")
const abrirMenuBoton = document.querySelector(".open-menu")
const cerrarMenuBoton = document.querySelector(".close-menu")

function alternarMenu(){
menu.classList.toggle("menu_abrircerrar")
}

abrirMenuBoton.addEventListener("click",alternarMenu);
cerrarMenuBoton.addEventListener("click",alternarMenu);