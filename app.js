let listaDeAmigos= [];

function agregarAmigo(){
    let compañero = document.getElementById('amigo').value;    
    if(compañero!= ""){
        listaDeAmigos.push(compañero);
        limpiarCaja();
        sumaAmigo();
    }else{
        alert('Introduzca un nombre válido')
    }
}

function sumaAmigo(){
    let amigos = document.getElementById("listaAmigos");
    amigos.innerHTML = "";
    for(let i = 0 ; i < listaDeAmigos.length; i++){
        let item = document.createElement('li');
        item.textContent = listaDeAmigos[i];
        amigos.appendChild(item);
    }
}

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
    }

function sortearAmigo(){
    let numeroLimite = listaDeAmigos.length;
    if (numeroLimite != 0){
        let ganador = listaDeAmigos[Math.floor(Math.random()*numeroLimite)];
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `El amigo sorteado es: ${ganador}`
        let amigos = document.getElementById("listaAmigos");
        amigos.innerHTML = "";
    }else{
        alert('No hay amigos para sortear')
    }
}




