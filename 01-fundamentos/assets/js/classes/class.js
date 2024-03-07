

class Persona {

    nombre = '';   //aqui inicializamos las propiedades de clases, en este caso ponemos por defecto string vacio
    codido = '';
    frase = '';
    comida = '';

    constructor(nombre, codigo, frase) {  //el constructor recibe los parametros y asi crear el objeto
        this.nombre = nombre;
        this.codido = codigo;
        this.frase = frase
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

const misho = new Persona('gaston', '1234', 'hola soy misho aca desde cordoba') // aqui creamos una instancia de esa clase 


misho.quienSoy()
misho.miFrase()

misho.setComidaFavorita = 'la comida favorita de misho son los fideos'

console.log(misho);

misho.getComidaFavorita