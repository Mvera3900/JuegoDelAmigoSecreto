let listaDeAmigos= [];

function agregarAmigo(){
    let compañero = document.getElementById('amigo').value;
    amigos = document.getElementById("listaAmigos");
    if(compañero!= ""){
        listaDeAmigos.push(compañero);
        amigos.innerHTML = listaDeAmigos;
        limpiarCaja();
    }else{
        alert('Introduzca un nombre válido')
    }
}

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
    }

function sortearAmigo(){
    let numeroLimite = listaDeAmigos.length;
    if (numeroLimite != 0){
        let ganador = Math.floor(Math.random()*numeroLimite);
        document.getElementById("listaAmigos").innerHTML = listaDeAmigos[ganador];
    }
}




