
import  Express  from "express";

import { usuarios } from './routes/apiUsuarios.js';
import { roles } from './routes/apiRoles.js';
import { rolesUsuario } from './routes/apiUsuariosRoles.js';
import { categorias } from './routes/apiCategorias.js';
import { cursos } from './routes/apiCursos.js';
import { matriculados } from './routes/apiMatriculados.js';
import cors from 'cors';


const app = Express();
// Middleware 
app.use(Express.json());
const corsOptions = {
    origin : 'http://localhost:5173', 
    credentials : true,
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}
app.use(cors(corsOptions));
// Rutas
app.use('/api/usuarios', usuarios);
app.use('/api/roles', roles);
app.use('/api/rolesusuario', rolesUsuario);
app.use('/api/categorias', categorias);
app.use('/api/cursos', cursos);
app.use('/api/matriculados', matriculados);

const port = 4000;

app.listen(port, ()=>{

    console.log(`Escuchando en el puerto ${port}`);

});