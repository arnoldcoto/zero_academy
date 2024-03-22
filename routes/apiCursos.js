import express  from "express"
import multer from "multer";
const storage = multer.memoryStorage();
const upload = multer( {storage : storage} );

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