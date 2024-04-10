import { loadUsersByPage } from "../use-cases"


const state = {
    currentPage: 0,
    users: [],
}


const loadNextPage = async () => {
    const data = await loadUsersByPage(state.currentPage + 1)
    return data
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


const getUsers = () => [...state.users]
const getCurrentPage = () => state.currentPage


export default {
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,
    getUsers,
    getCurrentPage
}




