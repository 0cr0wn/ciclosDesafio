"use strict";

//For
for (var i = 1; i <= 6; i++) {
  document.write("<h" + i + "> Tamaño" + i + "</h>");
  console.log("tamaño " + i);
} //While


var numeroCorrecto = "10";
var numeroUsuario = prompt("Cuanto es 5 + 5");

while (numeroUsuario != numeroCorrecto) {
  alert("No es correcto");
  numeroUsuario = prompt("Cuanto es 5 + 5");
}

if (numeroUsuario == numeroCorrecto) {
  alert("Correcto, Felicidades!");
} //Do... While