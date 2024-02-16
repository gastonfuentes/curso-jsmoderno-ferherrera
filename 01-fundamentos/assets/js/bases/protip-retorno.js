
function crearPersona(nombre, apellido) {
    return {
        nombre: nombre,
        apellido: apellido,
    }
}

const persona = crearPersona('gaston', 'fuentes')

console.log(persona);

//PRO TIP

function crearPersona2(nombre, apellido) {
    return {
        nombre,
        apellido,
    }
}

const persona2 = crearPersona2('gaston', 'fuentes')

console.log(persona2);

//FUNCION DE FLECHA
const crearPersona3 = (nombre, apellido) => ({ nombre, apellido })
//los parentesis () le indican a js que queremos retornar un objeto y no el cuerpo de la funcion

const persona3 = crearPersona3('gaston', 'fuentes')

console.log(persona3);

// ------------------ OTRO EJERCICIO -------------------

function imprimeArgumentos() {
    console.log(arguments);
    return arguments
}

imprimeArgumentos('dada', 345, false, 'misho')

//PASANDO A FUNCION DE FLECHA
//se debe poner el operador rest ... para obtener los argumentos que se envian a la funcion
const imprimeArgumentos2 = (...argumentos) => {
    console.log(argumentos);
}

imprimeArgumentos2('dada', 345, false, 'misho')


//MAS TIPS
//llamamos a la funcion que devuelve un array de argumentos
const argumentos = imprimeArgumentos('gaston', 'false', true, 40, 'hola')
console.log(argumentos);

//le damos nombres a cada una de las posiciones del arreglo
const [nombre, casada, vivo, edad, saludo] = imprimeArgumentos('gaston', 'false', true, 40, 'hola')
console.log({ nombre, casada, vivo, edad, saludo });

//LO MISMO PODEMOS HACER CON LAS FUNCIONES QUE RETORNAN OBJETOS
//podemos poner entre llaves tmb solo la propiedad que me interesa
const { apellido } = crearPersona3('gaston', 'fuentes')
console.log(apellido);

//cambiar el nombre a la variable
const { nombre: nuevoNombre } = crearPersona3('ignacio', 'fuentes')
console.log({ nuevoNombre });



//DESTRUCTURACION DE ARGUMENTOS


let tony = {
    nombre: 'gaston',
    codeName: 'Iroman',
    vivo: false,
    /* edad: 40, */
    trajes: ['mark 1', 'mark 5', 'traje rojo'],
};

const imprimePropiedades = (personaje) => {
    console.log(personaje.nombre);
    console.log(personaje.codeName);
    console.log(personaje.vivo);
    console.log(personaje.edad);
    console.log(personaje.trajes);
}

imprimePropiedades(tony)

//PRO TIP DESESTRUCTURACION
//podemos desestructurar el objeto y ademas podemos asignar un valor por defecto como por ej en edad
const imprimePropiedades2 = ({ nombre, codeName, vivo, edad = 40, trajes }) => {
    console.log(nombre);
    console.log(codeName);
    console.log(vivo);
    console.log(edad);
    console.log(trajes);
}

imprimePropiedades2(tony)