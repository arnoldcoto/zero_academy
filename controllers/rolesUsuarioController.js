import {db} from '../db/conn.js'

const getUsuarioRoles = async (req,res)=>{

    const query = `SELECT u.id AS usuario_id, u.nombre, u.apellido,
                   r.id AS rol_id, r.nombre AS nombre_rol,
                   ur.id AS registro_rol,
                   ur.fecha_creacion AS fecha_creacion_usuario_rol
                   FROM usuarios_roles ur
                   INNER JOIN usuarios u ON ur.usuario_id = u.id
                   INNER JOIN roles r ON ur.role_id = r.id`;


    const sql = query;
    const result = await db.query(sql);
    res.json(result)

}

const postUsuarioRoles = async (req, res)=>{

    
    const { usuario_id, role_id } = req.body;

    const params =  [usuario_id,  role_id];

    const sql = `insert into usuarios_roles 
                (usuario_id, role_id)
                values 
                ($1, $2) returning * `

    const result = await db.query(sql , params);

    res.json(result);
    
}

const putUsuarioRoles = async (req, res)=>{


    const { usuario_id, role_id } = req.body;

    const { id } = req.params

    const params =  [usuario_id, role_id, id];

    const sql = `update usuarios_roles 
                  set
                  usuario_id = $1,
                  role_id = $2
                where id = $3 returning *`

    const result = await db.query(sql, params)

    res.json(result);

}

const deleteUsuarioRoles = async (req, res)=>{

    const params = [req.params.id];

    const sql = `delete from usuarios_roles where id = $1 returning *`;

    const result = await db.query(sql, params);

    res.json(result);

}

export { getUsuarioRoles, postUsuarioRoles, putUsuarioRoles, deleteUsuarioRoles }