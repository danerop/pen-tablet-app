const db = require("../database");

module.exports = {
  getCarrito,
  getCarritoByUsuario,
  getCarritosCompradosByUsuario,
  postCarrito,
  putCarrito
}

async function getCarrito(id){ //obtiene un carrito segun el id
  let query = 
  `SELECT * FROM carrito
  WHERE id = ${id}`;

  return await db.queryUniqueResult(query);
}

async function getCarritoByUsuario(usuario){ //obtiene el ultimo carrito de un usuario
  let query = 
  `SELECT * FROM carrito
  WHERE usuario = "${usuario}"
  AND totalPagado IS NULL`;

  return await db.queryUniqueResult(query);
}

async function getCarritosCompradosByUsuario(usuario){
  let query = 
  `SELECT * FROM carrito
  WHERE usuario = "${usuario}"
  AND totalPagado IS NOT NULL
  ORDER BY fecha DESC`;

  return await db.queryMultipleResults(query);
}

async function postCarrito(usuario) { //crea un carrito nuevo para el usuario
  let query =
  `INSERT INTO carrito (usuario, fecha) VALUES
  ( "${usuario}", NOW() )
  ;`;
  
  await db.abm(query);
};

async function putCarrito(carrito) { //marca a un carrito como comprado
  let query = 
  `UPDATE carrito
  SET totalPagado = ${carrito.totalPagado}
  , fecha = NOW()
  WHERE id = ${carrito.id}`;

  await db.abm(query);
};
