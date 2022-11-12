const db = require("../database");


module.exports = {
    getProductById,
    getAllProducts,
    getProductsByClasificacion,
    getProductsByIdClasificacion
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

async function getProductsByClasificacion(clasificacion){
    let consulta=
        `select *` +
        `from productos p join clasificacion c on c.id = p.clasificacion` +
        `where c.nombre = "${clasificacion}"`;

    return await db.queryMultipleResults(consulta);
}

async function getProductsByIdClasificacion(idClasificacion){
    let consulta=
        `select p.id,p.nombre,p.descripcion, c.nombre as clasificacion, p.precio,p.imgUrl ` +
        `from productos p join clasificacion c on c.id = p.clasificacion ` +
        `where p.clasificacion = ${idClasificacion}`;

    return await db.queryMultipleResults(consulta);
}
