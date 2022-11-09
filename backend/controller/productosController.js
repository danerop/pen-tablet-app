const db = require("../database");


module.exports = {
    getProductById,
    getAllProducts
}

async function getProductById(idProduct){
    let consulta = 
    `select p.id,p.nombre,p.descripcion, c.nombre as clasificacion, p.precio,p.imgUrl ` +
    `from productos p join clasificacion c on p.clasificacion = c.id `+
    `where p.id = ${idProduct}`;

    return await db.queryUniqueResult(consulta);
}

async function getAllProducts(){
    let consulta = 
        'select *'+
        'from productos';

    
    return await db.queryMultipleResults(consulta);
}