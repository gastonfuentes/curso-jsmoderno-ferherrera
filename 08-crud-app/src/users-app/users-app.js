import usersStore from "./store/users-store"



/**
 * 
 * @param {HTMLDivElement} element 
 */
export const UserApp = async (element) => {

    element.innerHTML = '...loading'

    const data = await usersStore.loadNextPage()

    element.innerHTML = data[0].first_name


}

