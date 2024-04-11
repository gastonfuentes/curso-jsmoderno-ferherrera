import { localhostUserToModel } from "../mappers/localhost-user.mapper";
import { User } from "../models/user";

/**
 * 
 * @param {Number} page recibimos el numero de pagina para mostrar usuarios
 * @returns {Promise<User[]>} devuelve un array de User ya formateados que son de esa paginacion
 */
export const loadUsersByPage = async (page = 1) => {

    const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`;
    const res = await fetch(url);
    const data = await res.json();

    //formateo de la data

    const users = data.map((user) => {

        return localhostUserToModel(user)

    })

    /* console.log(users); */

    return users

}

