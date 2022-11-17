const db = require("../database");

module.exports = {
  getAllProductsInCarrito,
  getAllCarritoProductoByIdCarrito,
  getCarritoProductoByIdCarritoAndIdProducto,
  postCarritoProducto,
  deleteCarritoProducto,
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

async function getAllCarritoProductoByIdCarrito(idCarrito){
  let query =
  `SELECT * FROM carritoproducto
  WHERE carrito = ${idCarrito}`;

  let results = await db.queryMultipleResults(query);
  return results;
}

async function getCarritoProductoByIdCarritoAndIdProducto(idCarrito, idProducto) {//obtiene todos los carritoproducto de un carrito
  let query = 
  `SELECT * FROM carritoproducto
  WHERE carrito = ${idCarrito}
  AND producto = ${idProducto}`;

  let result = await db.queryUniqueResult(query);
  return result;
};

async function postCarritoProducto(idCarrito, idProducto){//guarda el producto dentro del carrito con una cantidad por defecto de 1
  let query = 
  `INSERT INTO carritoproducto (carrito, producto, cantidad) VALUES
  ( ${idCarrito}, ${idProducto}, 1)`;

  await db.abm(query);
};

async function deleteCarritoProducto(idCarrito, idProducto){
  let query = 
  `DELETE FROM carritoproducto
  WHERE carrito = ${idCarrito} 
  AND producto = ${idProducto};`;

  console.log("producto a punto de ser eliminado");
  await db.abm(query);
}

async function putCarritoProducto(carritoProducto) {//actualiza carritoproducto 
  let query =
  `UPDATE carritoproducto
  SET carrito = ${carritoProducto.carrito}
  , producto = ${carritoProducto.producto}
  , cantidad = ${carritoProducto.cantidad}
  , precioPagadoPorUnidad = ${carritoProducto.precioPagadoPorUnidad}
  WHERE id = ${carritoProducto.id}`;

  await db.abm(query);
};