//Setting up MySQL
const _fb2 = require('./firebaseV2');
const prodController = require("./controller/productosController");
const carritoController = require("./controller/carritoController");
const carritoproductoController = require("./controller/carritoproductoController");
const usuarioController = require("./controller/usuarioController");

const cookieParser = require('cookie-parser');
//pool.query SIEMPRE retorna un array


////////

const _ = require('lodash');
const fs = require('fs');

const express = require('express');
const { async } = require('@firebase/util');
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

app.use(cookieParser());
app.use((req, res, next) => {
    if(isLogin()){
        next();
    }else{
        res.send('No estas logeado');
    }
}, logger, showIP);

//app.use(logger);
app.use(express.json());

app.use((req, res, next) => {
    var user = _fb2.authApp.currentUser;

    console.log(user);
    res.locals.currentUser = user;
    next();
})


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

//ver carrito
app.get('/api/ver-carrito/:id', async (req, res) => {
    let idCarrito = req.params.id;
    let result = await carritoController.getCarrito(idCarrito);
    res.json(result);
});
//ver carrito no comprado de un usuario
app.get('/api/carrito', async (req, res) => {
    let usuario = req.query.usuario;
    let result = await carritoController.getCarritoByUsuario(usuario);
    res.json(result);
});
//ver carritos comprados de un usuario
app.get('/api/carritos-comprados', async (req, res) => {
    let usuario = req.query.usuario;
    let result = await carritoController.getCarritosCompradosByUsuario(usuario);
    res.json(result);
});

//ver todos los productos de un carrito con sus cantidades
app.get('/api/carrito/:id', async(req, res) => {
    let idCarrito = req.params.id;
    let productosDelCarrito;
    if(idCarrito != null && idCarrito != undefined && idCarrito != ""){
        productosDelCarrito = await carritoproductoController.getAllProductsInCarrito(idCarrito);
        res.status(200).json(productosDelCarrito);
    }else{
        res.status(404).send("ID de carrito no encontrado.");
    }
});

//crear un nuevo carrito para un usuario
app.post('/api/nuevo-carrito', (req, res) => {
    let usuario = req.body.uid;

    carritoController.postCarrito(usuario);
    res.send("carrito creado");
});

//comprar carrito
app.put('/api/comprar-carrito', async (req, res) => {
    let carrito = req.body.carrito;
    let usuario = req.body.usuario;
    carrito.totalPagado = 0;

    carritoproductoController.getAllCarritoProductoByIdCarrito(carrito.id)
    .then( async (carritoProductos) => {

        await Promise.all(
            carritoProductos.map( async (cp) => {
                cp = JSON.parse(JSON.stringify(cp));    
                await prodController.getProductById(cp.producto).then((prod) => {
                    cp.precioPagadoPorUnidad = prod.precio;
                    carrito.totalPagado += prod.precio * cp.cantidad;
                    carritoproductoController.putCarritoProducto(cp);
                });
            })
        )

        carritoController.putCarrito(carrito).then(() => {
            carritoController.postCarrito(usuario);
            res.json("carrito comprado");
        });
    });

});

//agregar nuevo producto al carrito
app.post('/api/agregar-producto-carrito', async(req, res) => {
    let {idCarrito, idProducto} = JSON.parse(JSON.stringify(req.body));

    let carrProd = await carritoproductoController.getCarritoProductoByIdCarritoAndIdProducto(idCarrito, idProducto);
    if(!carrProd){
        await carritoproductoController.postCarritoProducto(idCarrito, idProducto);
        res.json("producto agregado al carrito");
    } else {
        res.json("el producto ya se encuentra registrado");
    }
});
//elimina un producto del carrito
app.delete('/api/eliminar-producto-carrito', async(req, res) => {
    let {idCarrito, idProducto} = JSON.parse(JSON.stringify(req.body));
    console.log("eliminar producto" + idProducto);
    let carrProd = await carritoproductoController.getCarritoProductoByIdCarritoAndIdProducto(idCarrito, idProducto);
    if(carrProd){
        await carritoproductoController.deleteCarritoProducto(idCarrito, idProducto);
        res.json("producto eliminado del carrito");
    } else {
        res.json("no se encuentra el producto que se desea eliminar");
    }
});

//actualiza un carritoproducto con la nueva cantidad
app.put('/api/actualizar-carrito', async(req, res) => {
    let carritoProducto = JSON.parse(JSON.stringify(req.body));

    await carritoproductoController.putCantidadDeCarritoProducto(carritoProducto);
    res.send("carrito");
});



/*app.post('/api/fbRegistrarUsuario', async (req,res) =>{
    let userMail = req.body.email;
    let userPassword = req.body.password;

    const userResponse = await usuarioController.registrarUsuario(userMail,userPassword);

    res.json(userResponse);
});*/
app.post('/api/checkToken', async (req,res) =>{

    console.log("peticion para checkToken");
    let idToken = req.body.idToken;
    const expiresIn = 60 * 60 * 24 * 5 * 1000;

    //let isValid = await usuarioController.validateToken(idToken);
    //console.log("isvalid = "+isValid);
    if(true){
        usuarioController.createSessionCookie(idToken,expiresIn).then(cookie =>{
            console.log(cookie);
    
    
            const options = { maxAge: expiresIn, httpOnly: true };
            res.cookie("session", cookie, options);
    
            res.end(JSON.stringify({ status: "success" }));

        })
    }
    else{
        //console.log("token inválido");
        res.status(401).send("UNAUTHORIZED REQUEST!");
    }

});

//firebase v2
app.post('/api/fbRegistrarUsuario', async (req,res) =>{
    console.log('Petición para registrar usuario');

    let userMail = req.body.email;
    let userPassword = req.body.password;

    let usuario = JSON.parse(JSON.stringify(req.body));

    usuarioController.registerUser(userMail,userPassword, usuario)
        .then( userCreated=> {
            res.json( userCreated );
        })
        .catch( err => {
            console.log(err);
            res.status(400).send(err);
        });
});

app.post('/api/fbLogearUsuario', async (req,res) => {
    console.log('Petición para logear usuario');

    let userMail = req.body.email;
    let userPassword = req.body.password;

    usuarioController.logInUser(userMail,userPassword)
        .then( userResponse => {
            if(userResponse != null){
                res.json(userResponse);
            }
        })
        .catch(error =>{
            console.log(error);
            res.status(400).json(error);
        });

});

app.post('/api/isThisUserLoggedIn', async (req,res) => {
    let userUid = req.body.uid;

    res.json(usuarioController.isThisUserLoggedIn(userUid))
});

app.get('/api/getUserData', async(req, res) => {
    let userUid = req.query.uid;
    usuarioController.getDataUsuario(userUid).then( (user) => {
        res.status(200).json(user);
    }).catch( (err) => {
        console.log(err);
        res.status(400).send(err);
    });  
})


//listen//
app.listen(port, () => {
    console.log(`App listening on port ${port}!`)
});

