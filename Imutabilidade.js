//Imutabilidade
//Dados e variáveis criadas não são atualizadas e sim clonadas

user = {
    firstName: "Renato",
    lastName: "Cabral Santos"
}

function getUserFullName(user) {
    return {
        ...user,
        fullName: ${firstName} ${lastName}
    }
}

const userWithFullName = getUserFullName(user);

console.log(userWithFullName);