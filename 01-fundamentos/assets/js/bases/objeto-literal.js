let personaje = {
    nombre: 'gaston',
    codeName: 'Iroman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 32453.545,
        lng: -1223.4344
    },
    trajes: ['mark 1', 'mark 5', 'traje rojo'],
    direccion: {
        zip: 500,
        ubicacion: 'Cordoba, Argentina'
    },
    'ultima-pelicula': 'infinity war'
}
console.log(personaje);
console.log('nombre: ', personaje.nombre);
console.log('nombre: ', personaje['nombre']);
console.log('edad: ', personaje.edad);
console.log('coord', personaje.coords);
console.log('lat', personaje.coords.lat);
console.log('num trajes: ', personaje.trajes.length, personaje.trajes);
console.log('ultimo traje: ', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';

console.log('vivo: ', personaje[x]);

console.log('ultima pelicula: ', personaje["ultima-pelicula"]);


//mas detalles

// borrar una propiedad el objeto
delete personaje.edad
console.log(personaje);

//crear una nueva propiedad
personaje.casado = true

//pares de valores
const entriesPares = Object.entries(personaje)
console.log(entriesPares);

//bloqueo de las propiedades
Object.freeze(personaje); //bloquea al objeto y no puedo agregar una nueva propiedad
personaje.dinero = 100000;
personaje.casado = false;
personaje.direccion.ubicacion = 'argentina' //pero no puede bloquear un objeto que se encuentra adentro del objeto padre, debe llamar al object.frezzer y pasar el objeto hijo

console.log(personaje);

//listado de todas las propiedades del objeto
const propiedades = Object.getOwnPropertyNames(personaje);
console.log(propiedades);

//listado de valores
const valores = Object.values(personaje)
console.log({ valores });
