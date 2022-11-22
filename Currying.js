//nodejs v8.10.0

//No currying utilizamos uma segunda funcao para reduzir sua quantidade de paramentos, enquanto reutiliza-se a mesma
a = 2;
b = 3;

//Comum
function multiplicacao (a,b) {
    return console.log(a*b)
}

//Use currying
function produto (a,b) {
    return function (b) {
        return a*b;
    }
}

//Version EM6
// const produto = a => (b => a*b);

var dobro = produto(2);
var triplo = produto(3);

console.log("dobro -> ", dobro(8));
console.log("dobro -> ", dobro(16));
console.log("triplo -> ", triplo(3));

//_______________________________________


function primeiroGrau()