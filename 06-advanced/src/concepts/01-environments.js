

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const enviromentsComponents = (element) => {

    //Asi se llaman las variables de entorno en VITE
    console.log(import.meta.env);

    const html = `
    
    Dev: ${import.meta.env.DEV} <br/>
    Prod: ${import.meta.env.PROD} </br> 
    API KEY: ${import.meta.env.VITE_API_KEY} </br> 
    
    `

    element.innerHTML = html;

}

