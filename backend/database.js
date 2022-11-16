const mysql = require('mysql2/promise');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'pentablet',
    port: 3306
});

module.exports = {
    queryUniqueResult,
    queryMultipleResults,
    abm
};

async function queryUniqueResult(consulta){
    let [result] = await pool.query(consulta);
    return result[0];
}

async function queryMultipleResults(consulta){
    let [result] = await pool.query(consulta);
    return result;
}

async function abm(accion){
    await pool.execute(accion);
}