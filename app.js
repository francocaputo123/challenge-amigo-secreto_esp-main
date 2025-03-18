// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let amigo = inputAmigo.value;

    if(amigo.trim() === ''){
        alert("Por favor, inserte un nombre válido.")
    } else {
        amigos.push(amigo);
        inputAmigo.value = "";
        mostrarAmigo();
    }
}

function mostrarAmigo() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function sortearAmigo() {
    if(amigos == 0){
        alert("No hay amigos para sortear :(");
    } else {
        let amigoAleatorio = Math.floor(Math.random() * amigos.length);
        console.log(amigoAleatorio)
        let amigoElegido = amigos[amigoAleatorio];

        document.getElementById('listaAmigos').innerHTML = "";
        document.getElementById('resultado').innerHTML = `<p style="color:green">El amigo sorteado es: ${amigoElegido}</p>`;
    }
}

