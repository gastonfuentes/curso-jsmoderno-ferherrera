import { Todo } from "../todos/models/todo.model";


const Filter = {
    All: 'All',
    Completed: 'Completed',
    Pending: 'Pending',
}
//estado global de la app
const state = {
    todos: [
        new Todo('piedra del alma'),
        new Todo('piedra del infinito'),
        new Todo('piedra del mar'),
        new Todo('piedra del dada'),
    ],
    filter: Filter.All
}


const initStore = () => {
    console.log(state);
    console.log('store iniciado');
}

const loadStore = () => {
    throw new Error('funcion no implementada')
}

const getTodos = (filter = Filter.All) => {
    switch (filter) {
        case Filter.All:
            return state.todos;

        case Filter.Completed:
            return state.todos.filter(todo => todo.done);

        case Filter.Pending:
            return state.todos.filter(todo => !todo.done);

        default:
            throw new Error(`el ${filter} no es valido`);
    }
}

/**
 * funcion para crear un nuevo Todo
 * @param {String} description 
 */
const addTodo = (description) => {
    throw new Error('funcion no implementada')

}

const toggleTodo = (todoId) => {
    throw new Error('funcion no implementada')
}


const deleteTodo = (todoId) => {
    throw new Error('funcion no implementada')
}


const deleteTodosCompleted = () => {
    throw new Error('funcion no implementada')
}

const setFilter = (newFilter = Filter.All) => {
    throw new Error('funcion no implementada')
}

const getCurrentFIlter = () => {
    throw new Error('funcion no implementada')
}


export default {
    initStore,
    toggleTodo,
    deleteTodo,
    getTodos,
    deleteTodosCompleted,
    setFilter,
    getCurrentFIlter,
}