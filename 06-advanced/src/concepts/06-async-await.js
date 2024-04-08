import { heroes } from "../data/heroes";


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwaitComponent = async (element) => {

    console.log('estamos en async await component');

    const id1 = '5d86371f1efebc31def272e2';
    const id2 = '5d86371f2343e37870b91ef1';

    try {
        const hero1 = await findHero(id1);
        const hero2 = await findHero(id2)

        element.innerHTML = `${hero1} / ${hero2}`

    } catch (error) {
        element.innerHTML = error
    }


}


const findHero = async (id) => {

    const hero = heroes.find(hero => hero.id === id)
    if (!hero) throw `el id mandado ${id} no es correcto`
    return hero.name
}

