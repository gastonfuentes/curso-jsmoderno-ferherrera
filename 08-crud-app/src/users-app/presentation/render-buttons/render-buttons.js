import usersStore from '../../store/users-store';
import { renderTable } from '../render-table/render-table';
import './render-buttons.css'


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderButtons = (element) => {

    const nextButton = document.createElement('button');
    nextButton.innerText = ' Next >';

    const prevButton = document.createElement('button');
    prevButton.innerText = '< Prev '

    const currentPage = document.createElement('label')
    currentPage.id = 'current-page'
    currentPage.innerText = usersStore.getCurrentPage()

    element.append(prevButton, currentPage, nextButton)

    nextButton.addEventListener('click', async () => {

        await usersStore.loadNextPage()
        renderTable(element)
        currentPage.innerText = usersStore.getCurrentPage()

    })

    prevButton.addEventListener('click', async () => {

        await usersStore.loadPreviousPage()
        renderTable(element)
        currentPage.innerText = usersStore.getCurrentPage()


    })

}




