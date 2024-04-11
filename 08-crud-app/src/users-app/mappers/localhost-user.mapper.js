import { User } from "../models/user"


/**
 * 
 * @param {Like<User>} localhostUser recibe un usuario mandado del back
 * @returns {User} devuelve una instancia del Usuario bien formateado
 */
export const localhostUserToModel = (localhostUser) => {

    //desestructuramos lo que nos mandan del back 
    const {

        id,
        isActive,
        balance,
        avatar,
        first_name,
        last_name,
        gender

    } = localhostUser


    //mandamos a crear un nuevo usuario pero antes formatiamos
    return new User({
        id,
        isActive,
        balance,
        avatar,
        firstName: first_name,
        lastName: last_name,
        gender
    })

}

