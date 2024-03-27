import { Todo } from "../models/todo.model";
import { createTodoHtml } from "./";

//creamos esta variable para guardar el elemento hmtl que se va a buscar
let element;

/**
 * funcion para renderizar los todos, recibe como parametro el identificador html y los todos que quieren renderizar
 * @param {String} elementId 
 * @param {Todo} todos 
 */
export const renderTodos = (elementId, todos = []) => {

    //si la variable element esta vacia entonces buscamos el elemento html en el DOM
    if (!element) element = document.querySelector(elementId);
    //si luego de buscar el elemento sigue vacia la variable es que mandaron mal el parametro
    if (!element) throw new Error('el elementId enviado no lo encontro, por favor mandar correctamente ura')


    //aqui purgamos o limpiamos todo el contenido para que no se apile
    element.innerHTML = '';

    //barremos los todos y llamamos al caso de uso
    todos.forEach(todo => {
        //insertamos en el elemento html padre los html de los todos creados con la funcion createTodoHtml
        element.append(createTodoHtml(todo))
    });


}

