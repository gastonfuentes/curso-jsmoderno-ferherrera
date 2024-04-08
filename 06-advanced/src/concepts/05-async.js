import { heroes } from "../data/heroes";


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncComponent = (element) => {

    console.log('estamos en async components');

    const id1 = '5d86371f2343e37870b91ef1';

    findHero(id1)
        .then(name => element.innerHTML = name)
        .catch(error => element.innerHTML = error)

}

/**
 * 
 * @param {String} id 
 */
const findHero = async (id) => {
    const hero = heroes.find(hero => hero.id === id)
    if (!hero) throw `el id ${id} no es valido`
    return hero.name
}

