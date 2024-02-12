import express  from "express"

const cursos = express();

import { getCursos, 
        postCursos, 
        putCursos, 
        deleteCursos
    } from "../controllers/cursosController.js";

cursos.get('', getCursos );

cursos.post('', postCursos)

cursos.put( '/:id', putCursos )

cursos.delete('/:id', deleteCursos)

export { cursos }