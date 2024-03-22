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
            return [...state.todos];

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
    if (!description) throw new Error('la descripcion es requerida')
    state.todos.push(new Todo(description))

}

const toggleTodo = (todoId) => {
    state.todos = state.todos.map((todo) => {
        if (todo.id === todoId) {
            todo.done = !todo.done
        }
        return todo;
    })
}


const deleteTodo = (todoId) => {
    if (!todoId) throw new Error('todoId es necesario');
    state.todos = state.todos.filter(todo => todo.id !== todoId)
}


const deleteTodosCompleted = () => {
    state.todos = state.todos.filter(todo => todo.done)
}

/**
 * 
 * @param {Filter} newFilter 
 */
const setFilter = (newFilter = Filter.All) => {
    state.filter = newFilter
}

const getCurrentFIlter = () => {
    return state.filter
}


export default {
    addTodo,
    initStore,
    toggleTodo,
    deleteTodo,
    getTodos,
    deleteTodosCompleted,
    setFilter,
    getCurrentFIlter,
    loadStore
}