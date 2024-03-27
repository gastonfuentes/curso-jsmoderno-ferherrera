import { Todo } from "../models/todo.model";


/**
 * funcion para crear el html para el todo recibido por parametro y devuelve el html
 * @param {Todo} todo 
 */
export const createTodoHtml = (todo) => {
    if (!todo) throw new Error('el todo es obligatorio')


    //creamos el html para el todo
    const html = `<h3>${todo.description}</h3>`

    const liTodo = document.createElement('li')

    liTodo.innerHTML = html

    return liTodo
}

