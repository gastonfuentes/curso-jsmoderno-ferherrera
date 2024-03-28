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
    loadStore()
    console.log('store iniciado');
}

//funcion que carga los datos del localStorage
const loadStore = () => {
    //preguntamos si tenemos algo en el local storage
    if (!localStorage.getItem('state')) return;

    const { todos = [], filter = Filter.All } = JSON.parse(localStorage.getItem('state'))

    //asignamos los datos obtenidos del localstorage al state inicial para mantener los datos
    state.todos = todos
    state.filter = filter
}

const saveStateLocalStorage = () => {
    //api de localStorage
    //guardamos el state completo a traves de la func stringify
    localStorage.setItem('state', JSON.stringify(state))


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

    //agregamos la info para el localstorage
    saveStateLocalStorage();
}

/**
 * funcion que cambia el estado del todo a completado o al reves
 * @param {String} todoId id del Todo
 */
const toggleTodo = (todoId) => {
    state.todos = state.todos.map((todo) => {
        if (todo.id === todoId) {
            todo.done = !todo.done
        }
        return todo;
    })

    saveStateLocalStorage();
}

/**
 * funcion que borra un Todo
 * @param {String} todoId Id del Todo a borrar
 */
const deleteTodo = (todoId) => {
    if (!todoId) throw new Error('todoId es necesario');
    state.todos = state.todos.filter(todo => todo.id !== todoId)

    saveStateLocalStorage()
}


const deleteTodosCompleted = () => {
    state.todos = state.todos.filter(todo => todo.done)

    saveStateLocalStorage()
}

/**
 * 
 * @param {Filter} newFilter 
 */
const setFilter = (newFilter = Filter.All) => {
    state.filter = newFilter

    saveStateLocalStorage()
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