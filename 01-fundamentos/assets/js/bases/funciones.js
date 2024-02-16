function saludar() {
    console.log('hola mundo');
    return 10;

    //esto nunca se va a ejecutar
    console.log('codigo despues del return');
}

//funcion anonima
const saludar2 = function () {
    console.log('hola mundoo');
}

//argumentos
function saludar3(nombre) {
    console.log('hola ' + nombre);
}

retornoSaludar = saludar();
console.log({ retornoSaludar });

saludar3('gaston');


//funciones de flecha
const saludarFlecha = () => {
    console.log('hola flecha');
}

saludarFlecha()

const saludarFlecha2 = (nombre) => {
    console.log('hola ' + nombre);
}

saludarFlecha2('mishoo')


//
function sumar(a, b) {
    return a + b;
}

/* const sumar2 = (a, b) => {
    return a + b;
} */
const sumar2 = (a, b) => a + b;

console.log(sumar(4, 5));
console.log(sumar2(4, 4));


/* function getAleatorio() {
    return Math.random();
} */
const getAleatorio2 = () => Math.random();

console.log(getAleatorio2());
