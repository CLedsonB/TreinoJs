//Closure

//Executar retornos de funções

function init() {
    const test = "SHAZAM";
    
    return function () {
        console.log("1 - Retorno: ${test}");
        
        return function () {
            console.log("2 - Retorno: ${test}");
            
            return function() {
                console.log("3 - Retorno: ${test}");
            }
        }
    }
}

init()()();