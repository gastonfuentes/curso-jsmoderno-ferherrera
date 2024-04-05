import { heroes } from "../data/heroes";



/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponents = (element) => {

    console.log('desde el promiseComponent');

    const printHero = (hero) => {

        element.innerHTML = `
            <h2> ${hero.name} </h2>
        `
    }

    const error = (error) => {

        element.innerHTML = `
            <h3>Error: ${error}</h3>
        `

    }

    const printTwoHeroes = (hero1, hero2) => {
        element.innerHTML = `
            <h4> ${hero1.name} / ${hero2.name} </h4>
        `
    }

    const id1 = '5d86371f2343e37870b91ef1'
    const id2 = '5d86371f25a058e5b1c8a65e'


    //!PROMESA SIMPLE ****************
    /* 
    findHero(id1)
        .then(printHero)
        //modo mas largo pero es igual la sintaxis al .then
        .catch((unError) => error(unError))
    */

    //!CADENA DE PROMESAS *************
    //cuando un then tiene un return con otro promesa se encadenan las promesas
    /* let hero1;
    findHero(id1)
        .then(hero => {
            hero1 = hero
            return findHero(id2)
        })
        .then(hero2 => printTwoHeroes(hero1, hero2))
        .catch(error) */

    //!PROMISE ALL
    Promise.all([
        findHero(id1),
        findHero(id2)
    ])
        .then(([hero1, hero2]) => printTwoHeroes(hero1, hero2))
        .catch(error)

}


/**
 * Promesa
 * @param {String} id recibe un id
 * @returns {Promise} devuelve una promesa
 */
const findHero = (id) => {

    return new Promise((resolve, reject) => {

        const hero = heroes.find(hero => hero.id === id)

        if (hero) {
            resolve(hero);
            return;
        }

        reject(` el hero con el id ${id} no ha sido encontrado `)

    })

}



