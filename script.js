const menu = document.querySelector(".menu")
const abrirMenuBoton = document.querySelector(".open-menu")
const cerrarMenuBoton = document.querySelector(".close-menu")

function alternarMenu() {
    menu.classList.toggle("menu_abrirCerrar")
}

abrirMenuBoton.addEventListener("click", alternarMenu);
cerrarMenuBoton.addEventListener("click", alternarMenu);

/** Encriptando entrada de texto */
const textEntrada = document.querySelector(".textoEntrada")
const textSalida = document.querySelector(".textoSalida")

let arrayCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

function encriptar(srtEncriptado) {
    srtEncriptado = srtEncriptado.toLowerCase();
    for (let i = 0; i < arrayCodigo.length; i++) {
        if (srtEncriptado.includes(arrayCodigo[i][0])) {
            srtEncriptado = srtEncriptado.replaceAll(arrayCodigo[i][0], arrayCodigo[i][1])
        }
    }
    return srtEncriptado;
}

/**Llamando a la funcion  encriptar */
function botonEncriptar() {
    const texto_Entrada = encriptar(textEntrada.value)
    console.log(texto_Entrada)
    textoSalida.value = texto_Entrada
    textoSalida.style.backgroundImage = "none";
    textoEntrada.value = "";
}

/** Desencriptando el texto */
function desencriptar(srtDesencriptado) {
    srtDesencriptado = srtDesencriptado.toLowerCase();
    for (let i = 0; i < arrayCodigo.length; i++) {
        if (srtDesencriptado.includes(arrayCodigo[i][0])) {
            srtDesencriptado = srtDesencriptado.replaceAll(arrayCodigo[i][1], arrayCodigo[i][0])
        }
    }
    return srtDesencriptado;
}

/**llamando a la funcion  desencriptar */

function botonDesencriptar() {
    const texto_Entrada = desencriptar(textEntrada.value)
    console.log(texto_Entrada)
    textoSalida.value = texto_Entrada
    textoSalida.style.backgroundImage = "none";
    textoEntrada.value = "";
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Se Desencripto Correctamente',
        showConfirmButton: false,
        timer: 1500
    })
}

/** Copiar texto  */

function botonCopiar() {
    resultado = textSalida.value;
    navigator.clipboard.writeText(resultado);

    Swal.fire({
        title: 'Alerta',
        text: 'Se Guardo correctamente en el portapapeles',
        icon: 'success',
        width: '20%',
        timer: 1000,
        timerProgressBar: true
    })
    textSalida.value = "";
}