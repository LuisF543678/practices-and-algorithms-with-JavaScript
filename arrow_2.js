
// fat arrow function
// funciones anonimas

function suma(a, b) {
    return a + b;
}

const resultado = suma(1, 5)

console.log(resultado);



// tiene return implicito fat
//const suma = (a,b) => a+b
const suma = (a, b) => {
    const c = a + b
    return c + 1
}



// sintaxis antes

const suma = (a, b) => a + b

const resultado = suma(1, 5);

console.log(resultado);
