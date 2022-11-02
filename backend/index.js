const express = require('express');
const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pentablet'
 });
 connection.connect(function(error){
    if(error){
       throw error;
    }else{
       console.log('Conexion correcta.');
    }
    global.db = connection;
 });


 connection.end();


 // import routes
const productRoutes = require('./routes/productos');
const orderRoutes = require('./routes/carrito');

/*
app.get('/', function (request, response, next) {
    db.query("SELECT * FROM category", function (error, rows) {
        return response.json(rows);
    });
});*/

// set routes to api
app.use('/api/product', productRoutes);
app.use('/api/order', orderRoutes);
