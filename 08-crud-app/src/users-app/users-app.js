import { renderAddButton } from "./presentation/render-add-button/render-add-button"
import { renderButtons } from "./presentation/render-buttons/render-buttons"
import { renderModal } from "./presentation/render-modal/render-modal"
import { renderTable } from "./presentation/render-table/render-table"
import usersStore from "./store/users-store"



/**
 * 
 * @param {HTMLDivElement} element 
 */
export const UserApp = async (element) => {

    element.innerHTML = '...loading'

    const data = await usersStore.loadNextPage()

    /* console.log(usersStore.getUsers()); */

    element.innerHTML = 'data cargada'

    renderTable(element)
    renderButtons(element)
    renderAddButton(element)
    renderModal(element)

}

