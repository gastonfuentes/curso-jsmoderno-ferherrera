import html from './app.html?raw'


/**
 * 
 * @param {HTMLElement} elementId 
 */

export const App = (elementId) => {


    //cuando la funcion app se llama / funcion autoinvocada
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
    })();

}