import express  from "express"

const matriculados = express();

import { getMatriculados, 
        postMatriculados, 
        putMatriculados, 
        deleteMatriculados
    } from "../controllers/matriculadosController.js";

matriculados.get('', getMatriculados );

matriculados.post('', postMatriculados )

matriculados.put( '/:id', putMatriculados )

matriculados.delete('/:id', deleteMatriculados )

export { matriculados }