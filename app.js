// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let nombre_amigo = document.getElementById("amigo");
let lista = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");
let btnSortearAmigo = document.getElementsByClassName("button-draw");
const regex = /^[A-Za-z\s]+$/;

function agregarAmigo() {
    if (nombre_amigo.value == "") {
        alert("Por favor inserte un nombre");
    }
    else {
        if (regex.test(nombre_amigo.value)) {
            if (resultado.childElementCount == 1 && lista.childElementCount == amigos.length) {
                amigos = [];
                lista.innerHTML = "";
                resultado.innerHTML = "";
                amigos.push(nombre_amigo.value.toUpperCase());
                lista.innerHTML += `<li>${amigos[amigos.length - 1]}</li>`;
                nombre_amigo.value = "";
            }
            else {
                amigos.push(nombre_amigo.value.toUpperCase());
                lista.innerHTML += `<li>${amigos[amigos.length - 1]}</li>`;
                nombre_amigo.value = "";
            }
        }
        else {
            alert("Por favor inserte un nombre válido");
        }
    }
}

function sortearAmigo() {

    if (amigos.length > 1) {

        if (resultado.childElementCount == 0) {
            let indice = Math.floor(Math.random() * amigos.length);
            resultado.innerHTML = `<li>Tu amigo secreto será ${amigos[indice]}</li>`;
        }
        else {
            alert("Ya se realizó el sorteo");
        }
    }
    else {
        alert("Por favor inserte los nombres de sus amigos, como mínimo 2");
    }
}




