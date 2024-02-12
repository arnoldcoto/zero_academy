import {db} from '../db/conn.js'

const getRoles = async (req,res)=>{

    const sql = `select * from roles order by id`;
    const result = await db.query(sql);
    res.json(result)

}

const postRoles = async (req, res)=>{

    
    const { nombre } = req.body;

    const params =  [nombre ];

    const sql = `insert into roles 
                (nombre)
                values 
                ($1) returning * `

    const result = await db.query(sql , params);

    res.json(result);
    
}

const putRoles = async (req, res)=>{


    const { nombre } = req.body;

    const { id } = req.params

    const params =  [nombre, id];

    const sql = `update roles 
                  set
                  nombre = $1
                where id = $2 returning *`

    const result = await db.query(sql, params)

    res.json(result);

}

const deleteRoles = async (req, res)=>{

    const params = [req.params.id];

    const sql = `delete from roles where id = $1 returning *`;

    const result = await db.query(sql, params);

    res.json(result);

}

export { getRoles, postRoles, putRoles, deleteRoles }