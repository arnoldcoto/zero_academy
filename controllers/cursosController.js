import {db} from '../db/conn.js'

const getCursos = async (req,res)=>{

    const query = `SELECT 
                    u.id AS instructor_id,
                    u.nombre AS Instructor,
                    c.id AS curso_id,
                    c.titulo AS curso_titulo,
                    c.descripcion AS curso_descripcion,
                    c.fecha_creacion AS curso_fecha_creacion,
                    cat.nombre AS categoria
                FROM cursos c
                INNER JOIN usuarios u ON c.instructor_id = u.id
                INNER JOIN categorias cat ON c.categoria_id = cat.id;

`;

    const sql = query;
    const result = await db.query(sql);
    res.json(result)

}

const postCursos = async (req, res)=>{

    
    const { titulo, descripcion, categoria_id, instructor_id} = req.body;

    const params =  [titulo, descripcion, categoria_id, instructor_id ];

    const sql = `insert into cursos 
                (titulo, descripcion, categoria_id, instructor_id)
                values 
                ($1, $2, $3, $4) returning * `

    const result = await db.query(sql , params);

    res.json(result);
    
}

const putCursos = async (req, res)=>{


    const { titulo, descripcion, categoria_id, instructor_id } = req.body;

    const { id } = req.params

    const params =  [titulo, descripcion, categoria_id, instructor_id, id];

    const sql = `update cursos 
                  set
                  titulo = $1,
                  descripcion = $2,
                  categoria_id = $3,
                  instructor_id = $4 
                where id = $5 returning *`

    const result = await db.query(sql, params)

    res.json(result);

}

const deleteCursos = async (req, res)=>{

    const params = [req.params.id];

    const sql = `delete from cursos where id = $1 returning *`;

    const result = await db.query(sql, params);

    res.json(result);

}

export { getCursos, postCursos, putCursos, deleteCursos }