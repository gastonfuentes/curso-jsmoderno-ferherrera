import todoStore from '../store/todo.store';
import html from './app.html?raw'
import { renderTodos } from './use-cases';


const ElementsIDs = {
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input'
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

    //REFERENCIAS html
    //obtenemos el input para crear un todo
    const newDescriptionInput = document.querySelector(ElementsIDs.NewTodoInput)
    //obtenemos el ul con la lista de Todos
    const todoListUl = document.querySelector(ElementsIDs.TodoList)

    //LISTENER o Escuchar eventos
    //escuchamos el evento keyup del input para crear un todo
    newDescriptionInput.addEventListener('keyup', (event) => {

        //hacemos validaciones
        //si no es la tecla enter entonces salimos
        if (event.keyCode !== 13) return;
        //quitamos los espacios adelante y al final con (trim) y luego preguntamos si esta vacio entonces salimos, si posee algo continua el codigo abajo
        if (event.target.value.trim().length === 0) return;

        //agregamos el todo nuevo cuando presiona enter y tenga algo escrito
        todoStore.addTodo(event.target.value)
        //renderizamos nuevamente los todos
        displayTodos()
        //limpiamos el input
        event.target.value = ''
    })

    todoListUl.addEventListener('click', (event) => {
        /* console.log(event.target); */

        //funcion que busca el primer padre que tenga un elemento en particular
        const element = event.target.closest('[data-id]');
        //obtenemos el id del Todo y lo mandamos a la funcion toggle y renderizamos todo de nuevo
        const idTodo = element.getAttribute('data-id');
        todoStore.toggleTodo(idTodo)
        displayTodos()
    })

}