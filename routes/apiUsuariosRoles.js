import express  from "express"

const rolesUsuario = express();

import { getUsuarioRoles, 
        postUsuarioRoles, 
        putUsuarioRoles, 
        deleteUsuarioRoles
    } from "../controllers/rolesUsuarioController.js";

rolesUsuario.get('', getUsuarioRoles );

rolesUsuario.post('', postUsuarioRoles)

rolesUsuario.put( '/:id', putUsuarioRoles )

rolesUsuario.delete('/:id', deleteUsuarioRoles)

export { rolesUsuario }