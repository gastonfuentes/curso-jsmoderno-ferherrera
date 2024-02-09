

const regresaTrue = () => {
    console.log('regresa true');
    return true
}


const regresaFalse = () => {
    console.log('regresa false');
    return false
}

//negacion
console.warn('not o la negacion');
console.log(true); // devuelve true
console.log(!true); //false
console.log(!false); // true

//se puede hacer la negacion en cualquier cosa que regrese un valor booleano por ej una funcion
console.log(!regresaTrue()); //primero se ejecuta la funcion y luego se le hace la negacion a lo devuelto por la funcion

//OPERADOR AN - regresa true si todos los valores son verdaderos
console.warn('And');
console.log(true && true); // true
console.log(true && false); // regresa false - porq no todas las condiciones son true
console.log(false && false); // false 
console.log(true && !false); // true - porque primero se ejecuta la negacion y luego la otra comprobacion

console.log('============');
console.log(regresaFalse() && regresaTrue()); //se ejecuta sola la primer funcion y como es false lo demas ya no se ejecuta
console.log(regresaTrue() && regresaFalse()); // se ejecutan las dos funciones porque la primera es true y pasa a la segunda 

regresaTrue() && regresaFalse() //le decimos a js que ejecute la segunda funcion solo si la primera es TRUE... si lo primero es verdadero entonces ejecutame los segundo tambien

//OR - es basicamente lo opuesto al AND ... para que regrese true por los menos una condicion debe ser TRUE, no hace falta que todos sean TRUE
console.warn('OR');
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //FALSE 

console.log(regresaTrue() || regresaFalse()); //js va ejecutar solo la primera funcion porque ya sabe que lo que venga despues va a ser TRUE
console.log(regresaFalse() || regresaTrue()); //ejecuta las dos funciones porque la primera el false y sigue preguntando por las demas funciones hasta encontrar un TRUE 
console.log(false || false || true); // true

console.warn('and y or para asignaciones');