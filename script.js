/* funciones lógicas del encriptador-desencriptador */

/* obtengo el estado en los textareas html identificados como clases */
const inputTexto=document.querySelector(".input-text");
const mensaje=document.querySelector(".input-text-area");
var img = document.querySelector(".muneco");
var img2 = document.querySelector(".candadocerrado");
var img3 = document.querySelector(".candadoabierto");
var botonCopiar = document.querySelector(".btn-copiar");
botonCopiar.style.visibility= "hidden";
var ningumMensajeEncontrado = document.querySelector(".nada-por-aqui");
ningumMensajeEncontrado.style.visibility = "visible";
var textoDeseaDesencriptar = document.querySelector(".TextoDeseaDesencriptar");
textoDeseaDesencriptar.style.visibility = "visible";

// Para que no me muestre los candados al iniciar la página.

img2.style.visibility="hidden";
img3.style.visibility="hidden";

/* función para activar con el botón encriptar */

function btnencriptar(){
    const textoEncriptado=encriptar(inputTexto.value);
    mensaje.value=textoEncriptado;
    alert("Mensaje encriptado");
    img.style.visibility="hidden";
    ningumMensajeEncontrado.style.visibility = "hidden";
    textoDeseaDesencriptar.style.visibility = "hidden";
    botonCopiar.style.visibility = "visible";
    img2.style.visibility="visible";
    img3.style.visibility="hidden";
}

/* función para encriptar texto */

function encriptar(stringParaEncriptar){
    let matrizCodigo=[["e","enter"],["i","ines"],["a","ai"],["o","ober"],["u","ufat"]]
    stringParaEncriptar=stringParaEncriptar.toLowerCase();
    for (let i=0; i<matrizCodigo.length;i++){
        if(stringParaEncriptar.includes(matrizCodigo[i][0])){
            stringParaEncriptar=stringParaEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }    
    }
    return stringParaEncriptar;
}

/* función para activar con el botón desencriptar */

function btndesencriptar(){
        const textoDesencriptado=desencriptar(inputTexto.value);
        mensaje.value=textoDesencriptado;
        img.style.visibility = "hidden";
        ningumMensajeEncontrado.style.visibility = "hidden";
        textoDeseaDesencriptar.style.visibility = "hidden";
        botonCopiar.style.visibility = "visible";
        alert("Mensaje desencriptado");
        img2.style.visibility="hidden";
        img3.style.visibility="visible";
 }

/* función para desencriptar texto */

function desencriptar(stringParaDesencriptar){
    let matrizCodigo=[["enter","e"],["ines","i"],["ai","a"],["ober","o"],["ufat","u"]]
    stringParaDesencriptar=stringParaDesencriptar.toLowerCase();
    for(let i=0; i<matrizCodigo.length;i++){
        if(stringParaDesencriptar.includes(matrizCodigo[i][0])){
            stringParaDesencriptar=stringParaDesencriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringParaDesencriptar;
}

/* función para activar con el botón copiar */
function btncopiar() {

    var btnMensaje = document.getElementById("input-text-area").value;
    document.getElementById("input-text").value = btnMensaje;
    mensaje.value = "";
    botonCopiar.style.visibility = "hidden";
    img.style.visibility = "visible";
    ningumMensajeEncontrado.style.visibility = "visible";
    textoDeseaDesencriptar.style.visibility = "visible";
    alert("Copiado y pegado correctamente");
    img2.style.visibility="hidden";
    img3.style.visibility="hidden";
}

/* función para activar con el botón Limpiar el primer recuadro */

function btnlimpiar(){

    document.getElementById("input-text").value="";
    img2.style.visibility="hidden";
    img3.style.visibility="hidden";
}
