//Hoisting
// Eleva variáveis e função ao seu topo, sendo ela global, de escopo ou de função.

//Hoisting de variável
//Eleva sua existência, porém não sua atribuição

function fn() {
    console.log(hois);
    let hois = "Texto";
    console.log(hois);
}
fn();

//Saída
//Undefined
//Texto