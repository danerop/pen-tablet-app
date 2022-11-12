//Setting up MySQL

const prodController = require("./controller/productosController");
const carritoController = require("./controller/carritoController");
const carritoproductoController = require("./controller/carritoproductoController");
const usuarioController = require("./controller/usuarioController");
//pool.query SIEMPRE retorna un array


////////

const _ = require('lodash');
const fs = require('fs');

const express = require('express');
const app = express();
const port = 3000;


let isLogin = () => true;

let logger = (req, res, next) => {
    console.log('Peticion de tipo: ', req.method );
    next();
}

let showIP = (req, res, next) => {
    console.log('IP: 127.0.0.1');
    next();
}; 


app.use((req, res, next) => {
    if(isLogin()){
        next();
    }else{
        res.send('No estas logeado');
    }
}, logger, showIP);

//app.use(logger);
app.use(express.json());

app.get('/api/prodId/:id', async (req, res) => {
    console.log('Petición para retornar un producto a partir de su ID');
    
    idParam = req.params.id;
    
    const result = await prodController.getProductById(idParam);
    
    console.log(result);

    res.json(result);    //es un resultado UNICO
});

app.get('/api/getAllProducts', async (req, res) => {
    console.log('Petición para retornar todos los productos');

    const result = await prodController.getAllProducts();

    res.json(result);
});

app.get('/api/getByClasificacion/:idClasificacion' , async (req,res) =>{
    console.log('Peticion para obtener productos según clasificación');

    idClass = req.params.idClasificacion;

    const result = await prodController.getProductsByIdClasificacion(idClass);
    
    console.log(result);

    res.json(result);
});

app.post('/api/createProduct', (req, res) => {
    let productoACrear = req.body; //Esto es un Objeto
    console.log("Petición para crear producto RECIBIDA");
    console.log("Producto Recibido --> " + JSON.stringify(productoACrear) );
    
    res.json({
        "Producto a Crear": productoACrear
    })
});

app.post('/api/editProduct', (req, res) => {
    console.log("Petición para editar producto RECIBIDA");
    
    let nuevosValores = req.body;
    
    if(req.body.id == ""){
        res.send("no se eligió un prod a editar");
    }
    else{
        res.send(JSON.stringify(nuevosValores))
        /*let productoAEditar = ProductosDeEjemploJson.find(producto => producto.id == req.body.id);
        if(nuevosValores.precio != ""){
            productoAEditar.precio = nuevosValores.precio;
        }
        if(nuevosValores.nombre != ""){
            productoAEditar.nombre = nuevosValores.nombre;
        }
        if(nuevosValores.clasificacion != ""){
            productoAEditar.clasificacion = nuevosValores.clasificacion;
        }*/
    }
});

app.post('/api/deleteProduct', (req, res) => {
    console.log("Petición para ELIMINAR producto RECIBIDA");
    console.log("id del producto a eliminar: " + req.body.id);
    res.json({
        id: `${req.body}`,
        accion: "Editar Producto"
    })
});

app.put('/', (req, res) => {
    res.send(`Hello World! ${req.method}`)
});

app.delete('/', (req, res) => {
    res.send(`Hello World! ${req.method}`)
});



// -CARRITO- //
//ver carrito de un usuario
app.get('/api/carrito', async (req, res) => {
    let usuario = req.query.usuario;
    let result = await carritoController.getCarritoByUsuario(usuario);
    console.log(result);
    res.json(result);
});

//ver todos los productos de un carrito con sus cantidades
app.get('/api/carrito/:usuario', async(req, res) => {
    let usuario = req.params.usuario;
    let carrito = await carritoController.getCarritoByUsuario(usuario);
    let productosDelCarrito = await carritoproductoController.getAllProductsInCarrito(carrito.id);
    res.json(productosDelCarrito);
});

//crear un nuevo carrito para un usuario
app.post('/api/nuevo-carrito', (req, res) => {
    let usuario = req.params.u;

    carritoController.postCarrito(usuario);
    res.send("carrito creado");
});

//comprar carrito
app.put('/api/comprar-carrito', async (req, res) => {
    let carrito =  JSON.stringify(req.body);
    let idCarrito = JSON.stringify(req.body.id);
    let totalAPagar = 0;

    console.log("comprar-carrito " + carrito + idCarrito);

    let carritoProductos = await carritoproductoController.getAllCarritoProductoByIdCarrito(idCarrito);

    console.log("carritosProductos: " + carritoProductos);

    for(let cp in carritoProductos){
        console.log("carrito producto" + cp);
        let p = prodController.getProductById(cp.producto);
        
        totalAPagar += p.precio * cp.cantidad;
        cp.precioPagadoPorUnidad = p.precio;

        carritoproductoController.putCarritoProducto(cp);
    }

    carrito.totalPagado = totalAPagar;
    carritoController.putCarrito(carrito);

    res.send("carrito comprado");
});

app.post('/api/agregar-producto', async(req, res) => {
    let {idCarrito, idProducto} = JSON.stringify(req.body);

    console.log("agregar-producto: " + idProducto);

    carritoproductoController.postCarritoProducto(idCarrito, idProducto);

    res.send("producto agregado al carrito");
});


app.post('/api/fbRegistrarUsuario', async (req,res) =>{
    let userMail = req.body.email;
    let userPassword = req.body.password;

    const userResponse = await usuarioController.registrarUsuario(userMail,userPassword);

    res.json(userResponse);
});

/*
//actualiza un carritoproducto
app.put('/api/actualizar-carrito', async(req, res) => {
    let usuario = req.query.u;
    let idProducto = req.query.idp;
    let nuevaCantidad = req.query.cantidad;

    let carrito = await carritoController.getCarritoByUsuario(usuario);
    let carritoProducto = await carritoproductoController.getCarritoProductoByIdCarritoAndIdProducto(carrito.id, idProducto);
    await carritoproductoController.putCambiarCantidad(carritoProducto.id, nuevaCantidad);
    res.send("carrito");
});
*/



//listen//
app.listen(port, () => {
    console.log(`App listening on port ${port}!`)
});

