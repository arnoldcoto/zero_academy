import {db} from '../db/conn.js'

const getUsuario = async (req,res)=>{

    const sql = `select * from usuarios order by id`;
    const result = await db.query(sql);
    res.json(result)

}

const postUsuario = async (req, res)=>{

    
    const { nombre , apellido, email, contrasena, especializacion } = req.body;

    const params =  [nombre , apellido, email, contrasena, especializacion];

    const sql = `insert into usuarios 
                (nombre , apellido, email, contrasena, especializacion)
                values 
                ($1, $2, $3, $4, $5) returning * `

    const result = await db.query(sql , params);

    res.json(result);
    
}

const putUsuario = async (req, res)=>{


    const { nombre , apellido, email, contrasena, especializacion} = req.body;

    const { id } = req.params

    const params =  [nombre , apellido, email, contrasena, especializacion, id];

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

const deleteUsuario = async (req, res)=>{

    const params = [req.params.id];

    const sql = `delete from usuarios where id = $1 returning *`;

    const result = await db.query(sql, params);

    res.json(result);

}

export { getUsuario, postUsuario, putUsuario, deleteUsuario }