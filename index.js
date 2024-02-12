//const express = require('express');
import express from 'express';
import { usuarios } from './routes/apiUsuarios.js';
import { roles } from './routes/apiRoles.js';
import { rolesUsuario } from './routes/apiUsuariosRoles.js';
import { categorias } from './routes/apiCategorias.js';
import { cursos } from './routes/apiCursos.js';
import { matriculados } from './routes/apiMatriculados.js';


const app = express();


app.use(express.json());

const port = 4000;

app.use('/api/usuarios', usuarios);
app.use('/api/roles', roles);
app.use('/api/rolesusuario', rolesUsuario);
app.use('/api/categorias', categorias);
app.use('/api/cursos', cursos);
app.use('/api/matriculados', matriculados);


app.listen(port, ()=>{

    console.log(`Escuchando en el puerto ${port} `);
});