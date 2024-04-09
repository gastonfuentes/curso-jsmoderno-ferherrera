

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwaitOptimizadoComponent = async (element) => {

    console.time('start')

    console.log('estamos en asyncAwaitOptimizadoComponent component');

    //cuando son promesas no secuensiales no es necesarios hacer estas lineas sino hacer un promise.all

    /*     const promise1 = await fastPromise()
        const promise2 = await mediumPromise()
        const promise3 = await lowPromise() */

    const [promise1, promise2, promise3] = await Promise.all([
        fastPromise(),
        mediumPromise(),
        lowPromise()
    ])

    element.innerHTML = `
          promise1: ${promise1} <br/>
          promise2: ${promise2} <br/>
          promise3: ${promise3} <br/>
      `

    console.timeEnd('start')

}



const fastPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promesa fast')
        }, 1000)

    })
}

const mediumPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promesa medium')
        }, 2000)
    })
}

const lowPromise = () => new Promise(resolve => setTimeout(() => {
    resolve('promesa low')
}, 2500))



