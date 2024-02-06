

let juego = ['celda', 'mario', 'fifa', 'call of duty']
console.log('Largo:', juego.length);

//primer elemento
let primero = juego[0]

//ultimo elemento
let ultimo = juego.length - 1
console.log(juego[ultimo]);

let ultimoo = juego[juego.length - 1]
console.log('ultimo:', ultimoo);

console.log({ primero, ultimoo });

//barrer
juego.forEach((elemento, indice, arr) => {
    console.log({ elemento, indice, arr });
})

//añadir un juego al final
let nuevaLogintud = juego.push('fifa2023')
console.log({ nuevaLogintud, juego });

//añadir juego al principio
let nuevaNuevaLongitud = juego.unshift('fir bird')
console.log({ nuevaNuevaLongitud, juego });

//borrar elemento del final
let ultimoElemento = juego.pop()
console.log(ultimoElemento, juego);


//borrar elemento en posicion especifica
let posicion = 1;
console.log(juego);
let juegosBorrados = juego.splice(posicion, 2)
console.log(juegosBorrados, juego);


//saber la posicion indice
let fifaIndice = juego.indexOf('fifa')
console.log({ fifaIndice });
