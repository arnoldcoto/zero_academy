import express  from "express"

const usuarios = express();

import { getUsuario, 
        postUsuario, 
        putUsuario, 
        deleteUsuario
    } from "../controllers/usuariosController.js";

usuarios.get('', getUsuario );

usuarios.post('', postUsuario)

usuarios.put( '/:id', putUsuario )

usuarios.delete('/:id', deleteUsuario)

export { usuarios }