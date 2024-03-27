import { Todo } from "../models/todo.model";
import { createTodoHtml } from "./";


/**
 * funcion para renderizar los todos, recibe como parametro el identificador html y los todos que quieren renderizar
 * @param {String} elementId 
 * @param {Todo} todos 
 */
export const renderTodos = (elementId, todos = []) => {

    //obtenemos el elemento html del dom
    const element = document.querySelector(elementId)

    //barremos los todos y llamamos al caso de uso
    todos.forEach(todo => {
        //insertamos en el elemento html padre los html de los todos creados con la funcion createTodoHtml
        element.append(createTodoHtml(todo))
    });


}

