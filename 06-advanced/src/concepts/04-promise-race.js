

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseRaceComponents = (element) => {

    //cuando el componente se monta
    element.innerHTML = '...loading'

    const printPromiseRace = (mensaje) => {
        element.innerHTML = mensaje
    }

    Promise.race([
        mediumPromise(),
        fastPromise(),
        mediumPromise(),
        fastPromise(),
        lowPromise(),
        mediumPromise(),
        mediumPromise(),
    ])
        .then(printPromiseRace)

}


const fastPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promesa fast resuelta primero')
        }, 2000)

    })
}


const mediumPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promesa medium resuelta primero')
        }, 1000)
    })
}


const lowPromise = () => new Promise(resolve => setTimeout(() => {
    resolve('promesa low resulta primero')
}, 500))

