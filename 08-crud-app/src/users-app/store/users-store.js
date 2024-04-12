import { loadUsersByPage } from "../use-cases"


const state = {
    currentPage: 0,
    users: [],
}


const loadNextPage = async () => {
    const data = await loadUsersByPage(state.currentPage + 1)
    //si no hay data entonces salimos
    if (data.length === 0) return
    //si existe data con usuario actualizamos el state
    state.currentPage = state.currentPage + 1
    state.users = data
}

const loadPreviousPage = async () => {
    throw new Error('no implementado todavia')

}

const onUserChanged = () => {
    throw new Error('no implementado todavia')
}

const reloadPage = () => {
    throw new Error('no implementado todavia')
}

/**
 * 
 * @returns {User[]} devuelve una copia del state.users
 */
const getUsers = () => [...state.users]
/**
 * 
 * @returns {Number} devuleve el numero de pagina
 */
const getCurrentPage = () => state.currentPage


export default {
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,
    getUsers,
    getCurrentPage
}




