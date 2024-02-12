import pg from 'pg-promise'
import dotenv from 'dotenv';
dotenv.config();
const pgp = pg()


const user = process.env.USER;
const pass = process.env.PASS;
const dataBase = process.env.DB;
const host = process.env.HOST;
const portDb = process.env.PORT_DB;

const cnstr1 = `postgresql://${user}:${pass}$@${host}:${portDb}/${dataBase}`;

const db = pgp(cnstr1);

db.connect()
    .then( ()=>{
        console.log("Conexion Exitosa");
    } )
    .catch( (err)=>{

        console.log(`Error de conexion ${err}`)
    } )

export { db }