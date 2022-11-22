//Hoisting
// Eleva variáveis e função ao seu topo, sendo ela global, de escopo ou de função.

//Hoisting de função
//Eleva a função como um todo

function fn() {
    impressao("Valor teste");
    
    function impressao(value) {
        console.log(value);
    }
}
fn();
