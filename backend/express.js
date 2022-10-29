const _ = require('lodash');
const fs = require('fs');

const express = require('express');
const app = express();
const port = 3000;

let ProductosDeEjemploJson;
let jsonDirectory = './JsonExamples/productosExample.json' 

fs.readFile(jsonDirectory, 'utf-8', (err, jsonString) =>{
    if(err){
        console.log(err)
    } else{
        try{
            ProductosDeEjemploJson = JSON.parse(jsonString);
        }
        catch(err){
            console.log("Error parsing JSON ",err);
        }
    }
});

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
let producto = 
app.use(express.json());

app.get('/api/prodId/:id', (req, res) => {
    console.log('Petición para retornar un producto a partir de su ID');
    idParam = req.params.id;
    let productoEncontrado = ProductosDeEjemploJson.find(producto => producto.id == idParam);
    console.log(productoEncontrado);
    res.json(productoEncontrado);
});

app.get('/api/getAllProducts', (req, res) => {
    console.log('Petición para retornar todos los productos');
    res.json(ProductosDeEjemploJson);
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


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});


function findById(id){
    return ProductosDeEjemploJson.find(producto => producto.id == id);
}
