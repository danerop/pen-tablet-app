const db = require("../database");

module.exports = {
  getAllProductsInCarrito,
  getAllCarritoProductoByCarrito,
  postCarritoProducto,
  putCambiarCantidad,
  putCarritoProducto
}

async function getAllProductsInCarrito(idCarrito) {//obtiene todos los productos de un carrito
  let query =
  `SELECT p.*, cp.cantidad FROM productos p
  INNER JOIN carritoproducto cp ON p.id = cp.producto
  WHERE carrito = ${idCarrito}`;
  let results = await db.queryMultipleResults(query);
  return results;
};

async function getAllCarritoProductoByCarrito(idCarrito) {//obtiene todos los carritoproducto de un carrito
  let query = 
  `SELECT * FROM carritoproducto
  WHERE carrito = ${idCarrito}`;
  console.log(query);
  return await db.queryMultipleResults(query);
};

async function postCarritoProducto(idCarrito, idProducto){//guarda el producto dentro del carrito con una cantidad por defecto de 1
  let query = 
  `INSERT INTO carritoproducto (carrito, producto, cantidad) VALUES
  ( ${idCarrito}, ${idProducto}, 1)`;

  await db.abm(query);
};

async function putCambiarCantidad(idCarritoProducto, cantidad){//para sumar o restar pasar como tercer parametro "cantidad + 1"
  let query =
  `UPDATE carritoproducto SET
  cantidad = ${cantidad}
  WHERE id = ${idCarritoProducto}`;

  await db.abm(query);
};

async function putCarritoProducto(idCarrito, idProducto, precioPagado) {//guarda el precio por unidad por el que se pagó el producto al momento de realizar la compra del carrito 
  let query =
  `UPDATE carritoproducto SET
  precioPagadoPorUnidad = ${precioPagado}
  WHERE carrito = ${idCarrito}
  AND producto = ${idProducto}`;

  await db.abm(query);
};