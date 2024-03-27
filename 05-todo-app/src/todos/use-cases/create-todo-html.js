import { Todo } from "../models/todo.model";


/**
 * funcion para crear el html para el todo recibido por parametro y devuelve el html
 * @param {Todo} todo 
 */
export const createTodoHtml = (todo) => {
    if (!todo) throw new Error('el todo es obligatorio')


    //desestructuramos el todo
    const { done, description, id } = todo

    //creamos el html para el todo
    const html = `  
                        <div class="view">
                            <input class="toggle" type="checkbox" ${done ? 'checked' : ''}>
                            <label>${description}</label>
                            <button class="destroy"></button>
                        </div>                        
                   
                    `

    const liTodo = document.createElement('li')
    liTodo.innerHTML = html
    //le agregamos atributos al html creado
    liTodo.setAttribute('data-id', id)

    //ponemos la clase completed si es que lo esta
    done ? liTodo.classList.add('completed') : ''

    return liTodo
}

