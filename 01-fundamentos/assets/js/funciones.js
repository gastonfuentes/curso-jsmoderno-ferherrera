function saludar() {
    console.log('hola mundo');
}

//funcion anonima
const saludar2 = function () {
    console.log('hola mundoo');
}

//argumentos
function saludar3(nombre) {
    console.log('hola ' + nombre);
}

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