import express  from "express"
import multer from "multer";
const storage = multer.memoryStorage();
const upload = multer( {storage : storage} );

const usuarios = express();

import { getUsuario, 
        postUsuario, 
        putUsuario, 
        deleteUsuario
    } from "../controllers/usuariosController.js";

usuarios.get('/:id',  getUsuario );

usuarios.post('', upload.single('foto_perfil'), postUsuario)

usuarios.put( '/:id', putUsuario )

usuarios.delete('/:id', deleteUsuario)

export { usuarios }