import todoStore, { Filter } from "../../store/todo.store";

let element;

/**
 * 
 * @param {String} elementId 
 */
export const renderCountPending = (elementId) => {

    if (!element) {
        element = document.querySelector(elementId)
    }
    if (!element) throw new Error(`el elemento ${elementId} no funciona`);

    element.innerHTML = todoStore.getTodos(Filter.Pending).length

}
