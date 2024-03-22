import express  from "express"
import multer from "multer";
const storage = multer.memoryStorage();
const upload = multer( {storage : storage} );


const categorias = express();

import { getCategorias, 
        postCategorias, 
        putCategorias, 
        deleteCategorias
    } from "../controllers/categoriaController.js";

categorias.get('', getCategorias );

categorias.post('', upload.single('imagen'), postCategorias)

categorias.put( '/:id', putCategorias )

categorias.delete('/:id', deleteCategorias)

export { categorias }