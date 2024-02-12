import { db } from '../db/conn.js'

const getMatriculados = async (req, res) => {

    const query = `SELECT 
                   u.id AS Alumno_id,
                   u.nombre AS Alumno,
                   c.titulo AS titulo_curso,
                   m.fecha_matricula
                   FROM matriculados m
                   INNER JOIN usuarios u ON m.usuario_id = u.id
                   INNER JOIN cursos c ON m.curso_id = c.id
                   WHERE u.id = u.id`;

    const sql = query;
    const result = await db.query(sql);
    res.json(result)

}

const postMatriculados = async (req, res) => {

    const { usuario_id, curso_id } = req.body;

    const params = [ usuario_id, curso_id ];

    const sql = `insert into matriculados 
                (usuario_id, curso_id)
                values 
                ($1, $2) returning *`

    const result = await db.query(sql, params);

    res.json(result);

}

const putMatriculados = async (req, res) => {


    const { usuario_id, curso_id } = req.body;

    const { id } = req.params

    const params = [usuario_id, curso_id, id];

    const sql = `update matriculados 
                  set
                  usuario_id = $1,
                  curso_id = $2
                where id = $3 returning *`

    const result = await db.query(sql, params)

    res.json(result);

}

const deleteMatriculados = async (req, res) => {

    const params = [req.params.id];

    const sql = `delete from matriculados where id = $1 returning *`;

    const result = await db.query(sql, params);

    res.json(result);

}

export { getMatriculados, postMatriculados, putMatriculados, deleteMatriculados }