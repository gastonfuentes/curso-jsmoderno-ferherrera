import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = (element) => {

    console.log('estamos en callbacks');
    const id = '5d86371f1efebc31def272e2'
    //llamamos a la funcion findHeroe y le mandamos el id y un callbacks
    findHeroe(id, (hero) => {
        //codicional corta
        element.innerHTML = hero?.name || 'el hero no existe'
    })
}

/**
 * 
 * @param {String} id 
 * @param {(heroe) => void} callbacks 
 */
export const findHeroe = (id, callbacks) => {

    const heroObtenido = heroes.find(heroe => heroe.id === id)
    callbacks(heroObtenido)

}

