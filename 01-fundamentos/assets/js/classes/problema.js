const gaston = {
    nombre: 'Gaston',
    edad: 40,
    imprimir() {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
}

const pedro = {
    nombre: 'Pedro',
    edad: 70,
    imprimir() {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
}
/* 
gaston.imprimir();
pedro.imprimir(); */

//metodo viejo para hacer instancias de un objeto // constructor

function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = function () {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
}

const misho = new Persona('misho', 35)
console.log(misho);
misho.imprimir()