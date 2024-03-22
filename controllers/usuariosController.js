import { json } from "express";
import { db } from '../db/conn.js'


const getUsuario = async (req, res) => {


    const { id } = req.params

    console.log("Este es", id);

    const params = [id]

    try {

        const sql = `select id, 
                            nombre, 
                            apellido,
                            email,
                            especializacion,
                            fecha_creacion,
                            encode(foto_perfil, 'base64') foto  
                    from usuarios 
                    where id = $1`

        const result = await db.query(sql, params);

        console.log(result);

        if (result.length > 0) {
            res.json(result);
        } else {
            res.status(404).json({ mensaje: "Sin datos que mostrar" });
        }



    } catch (err) {

        res.status(500).json({ mensaje: "Error en busqueda de post" });

    }


}

const postUsuario = async (req, res) => {

    try {

  
        const { nombre, apellido, email, contrasena, especializacion } = req.body;

        const valores = await req.body

        console.log(valores)
    
        const {
            buffer
        } = req.file;


        const params = [nombre, apellido, email, contrasena, buffer, especializacion];

        console.log(params);

        const sql = `insert into usuarios 
                (nombre , apellido, email, contrasena, foto_perfil, especializacion)
                values 
                ($1, $2, $3, $4, $5, $6) returning * `

        const result = await db.query(sql, params);

        res.json(result);

    } catch (err) {

        res.status(500).json({ mensaje: err.message });

    }


}

const putUsuario = async (req, res) => {


    const { nombre, apellido, email, contrasena, especializacion } = req.body;

    const { id } = req.params

    const params = [nombre, apellido, email, contrasena, especializacion, id];

    const sql = `update usuarios 
                  set
                  nombre = $1, 
                  apellido = $2,
                  email = $3,
                  contrasena = $4,
                  especializacion = $5
                where id = $6 returning *`

    const result = await db.query(sql, params)

    res.json(result);

}

const deleteUsuario = async (req, res) => {

    const params = [req.params.id];

    const sql = `delete from usuarios where id = $1 returning *`;

    const result = await db.query(sql, params);

    res.json(result);

}

export { getUsuario, postUsuario, putUsuario, deleteUsuario }