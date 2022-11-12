const mysql = require('mysql2/promise');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
<<<<<<< HEAD
    password: '',
=======
    password: '1564',
>>>>>>> 6ec1ed47f0e03c7a50d3eecf303a7ce9ade597b5
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