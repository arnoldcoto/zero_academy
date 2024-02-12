import {db} from '../db/conn.js'

const getCategorias = async (req,res)=>{

    const sql = `select * from categorias order by id`;
    const result = await db.query(sql);
    res.json(result)

}

const postCategorias = async (req, res)=>{

    
    const { nombre } = req.body;

    const params =  [nombre ];

    const sql = `insert into categorias 
                (nombre)
                values 
                ($1) returning * `

    const result = await db.query(sql , params);

    res.json(result);
    
}

const putCategorias = async (req, res)=>{


    const { nombre } = req.body;

    const { id } = req.params

    const params =  [nombre, id];

    const sql = `update categorias 
                  set
                  nombre = $1
                where id = $2 returning *`

    const result = await db.query(sql, params)

    res.json(result);

}

const deleteCategorias = async (req, res)=>{

    const params = [req.params.id];

    const sql = `delete from categorias where id = $1 returning *`;

    const result = await db.query(sql, params);

    res.json(result);

}

export { getCategorias, postCategorias, putCategorias, deleteCategorias }