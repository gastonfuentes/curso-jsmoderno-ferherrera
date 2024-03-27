import todoStore from '../store/todo.store';
import html from './app.html?raw'
import { renderTodos } from './use-cases';


const ElementsIDs = {
    TodoList: '.todo-list'
}

/**
 * 
 * @param {HTMLElement} elementId 
 */

export const App = (elementId) => {

    //funion para renderizar los todos
    const displayTodos = () => {
        //renderizamos los todos con el filtro que posee actualmente
        const todos = todoStore.getTodos(todoStore.getCurrentFIlter())
        //llamamos al caso de uso renderTodos y mandamos el id del elem html y los todos
        renderTodos(ElementsIDs.TodoList, todos)
    }

    //cuando la funcion app se llama / funcion autoinvocada
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTodos()
    })();

}