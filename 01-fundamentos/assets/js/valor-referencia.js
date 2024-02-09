


let a = 10;
let b = a;
a = 30;

console.log({ a, b });


let juan = { nombre: 'juan' };
let ana = juan
ana.nombre = 'Ana'

console.log(juan, ana);


const cambiarNombre = (persona) => {
    persona.nombre = 'tony'
    return persona
}

let peter = { nombre: 'peter' }
let tony = cambiarNombre(peter)

console.log(peter, tony);

//SPRED OPERATOR

let pepe = { nombre: 'pepe' };
let gaston = { ...pepe } //aqui obtenemos una copia del objeto y NO la referencia
gaston.nombre = 'Gaston'

console.log(pepe, gaston);

const cambiarNombre2 = ({ ...persona }) => { //recibe una copia del objeto y NO la referencia
    persona.nombre = 'nacho'
    return persona
}

let camo = { nombre: 'camo' }
let nacho = cambiarNombre2(camo)
console.log(camo, nacho);

// SPRED CON ARREGLOS

const frutas = ['pera', 'manzana', 'banana']
const otrasFrutas = [...frutas] //pasamos una copia del arreglo y NO la referencia

otrasFrutas.push('mangoo')

console.table({ frutas, otrasFrutas });
