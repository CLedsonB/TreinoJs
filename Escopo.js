//Escopo Global
console.log(user1);
var user1 = "Ana";


if(true) {
    
    //escopo de bloco
    console.log(user2);
    let user2 = "Simões";
}

function imprimirNome(nome) {
    
    //escopo de função
    console.log(nome);
}

imprimirNome("Batista");
imprimirNome("\nJosé");