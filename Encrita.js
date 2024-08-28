function encriptar() {
    let texto = document.getElementById("Ingreso_dato").value;
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("Mensaje_Desifrado").value = textoEncriptado;
}

function desencriptar() {
    let textoEncriptado = document.getElementById("Ingreso_dato").value;
    let texto = textoEncriptado
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("Mensaje_Desifrado").value = texto;
}

function copiarTexto() {
    let textoCopiado = document.getElementById("Mensaje_Desifrado");
    textoCopiado.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}
