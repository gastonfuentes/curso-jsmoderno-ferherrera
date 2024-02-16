/**
 * dias de semana abrimos a las 11
 * pero los fines de semana abriomos a las 9
 */

//un usuario entra al sitio para consultar si esta abierto hoy

const dia = 0; //0 = domingo, 1=lunes... etc etc
const horaActual = 2;

let horaApertura;
let mensaje;


/* if (dia === 0 || dia === 6) {
    console.log('finde de semana');
    horaApertura = 9;
} else {
    console.log('dia de semana');
    horaApertura = 11
} */

dia === 0 || dia === 6 ? horaApertura = 9 : horaApertura = 11


/* if (horaActual >= horaApertura) {
    mensaje = 'esta abierto'
} else {
    mensaje = `esta cerrado, hoy abrimos a las ${horaApertura}`;
}
 */

mensaje = horaActual >= horaApertura ? 'esta abiertoo' : `esta cerrado hoy abrimos a las ${horaApertura}`

/* console.log(mensaje); */

console.log({ horaApertura, mensaje });