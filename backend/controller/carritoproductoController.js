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
  `SELECT p.* FROM productos p
  INNER JOIN carritoproducto cp ON p.id = cp.producto
  WHERE carrito = ${idCarrito}`;

  return await db.queryMultipleResults(query);
};

async function getAllCarritoProductoByCarrito(idCarrito) {//obtiene todos los carritoproducto de un carrito
  let query = 
  `SELECT * FROM carritoproducto
  WHERE carrito = ${idCarrito}`;

  return await db.queryMultipleResults(query);
};

async function postCarritoProducto(idCarrito, idProducto){//guarda el producto dentro del carrito con una cantidad por defecto de 1
  let query = 
  `INSERT INTO carritoproducto (carrito, producto, cantidad) VALUES
  ( ${idCarrito}, ${idProducto}, 1)`;

  return await db.queryUniqueResult(query);
};

async function putCambiarCantidad(idCarrito, idProducto, cantidad){//para sumar o restar pasar como tercer parametro "cantidad + 1"
  let query =
  `UPDATE carritoproducto SET
  cantidad = ${cantidad}
  WHERE carrito = ${idCarrito}
  AND producto = ${idProducto}`;

  return await db.queryUniqueResult(query);
};

async function putCarritoProducto(idCarrito, idProducto, precioPagado) {//guarda el precio por unidad por el que se pagó el producto al momento de realizar la compra del carrito 
  let query =
  `UPDATE carritoproducto SET
  precioPagado = ${precioPagado}
  WHERE carrito = ${idCarrito}
  AND producto = ${idProducto}`;

  return await db.queryMultipleResults(query);
};