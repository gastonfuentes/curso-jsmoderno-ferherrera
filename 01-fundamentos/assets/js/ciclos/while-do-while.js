


const carros = ['ford', 'mazda', 'honda', 'fiat', 'chevrolet']

let i = 0;

//while se ejecuta siempre y cuando la condicion sea verdadera
/* while (i < carros.length) {
    console.log(carros[i]);
    i++
}
 */
//undefined, null y false son condiciones falsas

/* while (carros[i]) {
    console.log(carros[i]);
    i++
} */



//si no quiere que se imprima la 2da posicion
while (carros[i]) {
    if (i === 1) {
        i++;
        continue
    }

    console.log(carros[i]);
    i++

}



console.warn('do while');

//DO WHILE
//la diferencia es que el do while va a ejecutar el bloque interno al menos una vez

let a = 0

do {
    console.log(carros[a]);
    a++
} while (carros[a]);
