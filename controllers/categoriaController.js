import { db } from '../db/conn.js'

const getCategorias = async (req, res) => {

    const sql = `select nombre, descripcion, imagen, encode(imagen, 'base64') imagen  from categorias`;
    const result = await db.query(sql);
    res.json(result)

}



const postCategorias = async (req, res) => {

    try {
        const { nombre, descripcion } = req.body;

        const { buffer } = req.file;

        const params = [nombre, descripcion, buffer];

        console.log(params)

        const sql = `insert into categorias 
                    (nombre, descripcion, imagen)
                    values 
                    ($1, $2, $3) returning * `

        const result = await db.query(sql, params);

        res.json(result);
    } catch {
        res.status(500).json({ mensaje: "Error en insercion" });
    }




}

const putCategorias = async (req, res) => {


    const { nombre } = req.body;

    const { id } = req.params

    const params = [nombre, id];

    const sql = `update categorias 
                  set
                  nombre = $1
                where id = $2 returning *`

    const result = await db.query(sql, params)

    res.json(result);

}

const deleteCategorias = async (req, res) => {

    const params = [req.params.id];

    const sql = `delete from categorias where id = $1 returning *`;

    const result = await db.query(sql, params);

    res.json(result);

}

export { getCategorias, postCategorias, putCategorias, deleteCategorias }