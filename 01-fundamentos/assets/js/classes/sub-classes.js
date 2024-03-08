

class Persona {

    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + ' instancias'
    }
    static mensaje() {
        console.log(this.nombre);
        console.log('hola a todos, soy un metodo estatico');
    }

    nombre = '';   //aqui inicializamos las propiedades de clases, en este caso ponemos por defecto string vacio
    codido = '';
    frase = '';
    comida = '';

    constructor(nombre, codigo, frase) {  //el constructor recibe los parametros y asi crear el objeto
        this.nombre = nombre;
        this.codido = codigo;
        this.frase = frase

        Persona._conteo++;
    }
    //sets y gets
    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase()
    }

    get getComidaFavorita() {
        console.log(`para ${this.nombre} ${this.comida}`);
    }


    //metodos
    quienSoy() {
        console.log(`soy ${this.nombre} y mi codigo es ${this.codido}`);
    }

    miFrase() {
        this.quienSoy() //podemos llamar a otro metodo dentro de la clase
        console.log(`la frase es: ${this.frase}`);
    }
}

//extendemos de la clase persona
class Heroe extends Persona {
    clan;
}

const misho = new Persona('gaston', '1234', 'hola soy misho aca desde cordoba') // aqui creamos una instancia de esa clase 

const misho2 = new Heroe('gaston2', '4321', 'soy gaston dos creado de la clase Heroe que extiende de la clase Persona')

console.log(misho2);