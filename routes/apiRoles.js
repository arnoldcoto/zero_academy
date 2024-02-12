import express  from "express"

const roles = express();

import { getRoles, 
        postRoles, 
        putRoles, 
        deleteRoles
    } from "../controllers/rolesController.js";

roles.get('', getRoles );

roles.post('', postRoles)

roles.put( '/:id', putRoles )

roles.delete('/:id', deleteRoles)

export { roles }