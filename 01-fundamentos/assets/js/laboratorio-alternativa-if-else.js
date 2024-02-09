//sin usar if else ni switch (unicamente con objetos u arreglos) imprimir por pantalla el dia de la semana pasando una variable con un numero como parametro

//CON OBJETO
const diaLetras = {
    0: 'domingo',
    1: 'lunes',
    2: 'martes',
    3: 'miercoles',
    4: 'jueves',
    5: 'viernes',
    6: 'sabado',
}

console.log(diaLetras[11] || 'dia no valido');


// CON ARREGLOS

const diasArreglo = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']
console.log(diasArreglo[4] || 'dia no valido');