"use strict";

//CRIANDO UM OBJETO

const usuario1 = {
    nomeUsuario : "rita-lee",
    senhaUsuario : "00000"
}

const usuario2 = {
    nomeUsuario : "ptt01",
    senhaUsuario : "12345"
}

// console.log(usuario1.nomeUsuario);
// console.log(usuario2.nomeUsuario);
// usuario2.nomeUsuario = "Juquinha";
// console.log(usuario2.nomeUsuario);


//LISTA DE USUARIOS 
let listaDeUsuarios = [];
listaDeUsuarios.push(usuario1)
listaDeUsuarios.push(usuario2)
console.log(usuario2.nomeUsuario);

addEventListener("click", (evento)=>{

    let userInput = document.querySelector("#idUser");  
    let passInput = document.querySelector("#idPass");  
   

        // console.log(evento.target);
        if(evento.target.id == "btnSubmit"){

            listaDeUsuarios.forEach((usuario)=>{});
        
                if(userInput.value == usuario.nomeUsuario && passInput.value ==
                usuario.senhaUsuario){
                    console.log("USUÁRIO VALIDADO!");

                }else{
                    console.log("USUÁRIO OU SENHA INCORRETOS!");
                }
            
        }
        
});

