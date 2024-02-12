import express  from "express"

const categorias = express();

import { getCategorias, 
        postCategorias, 
        putCategorias, 
        deleteCategorias
    } from "../controllers/categoriaController.js";

categorias.get('', getCategorias );

categorias.post('', postCategorias)

categorias.put( '/:id', putCategorias )

categorias.delete('/:id', deleteCategorias)

export { categorias }