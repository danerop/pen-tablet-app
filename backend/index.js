const express = require('express');
const mysql = require('mysql2');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pentablet',
    port: 3306
 });
 connection.connect(function(error){
    if(error){
       throw error;
    }else{
       console.log('Conexion correcta.');
    }
    //global.db = connection;
 });

  //ESTO SERVIRÍA PARA LISTAR TODOS LOS PRODUCTOS, HAY QUE LLEVARLO AL CONTROLLER
 var query = connection.query(
     'SELECT DISTINCT * FROM productos p LEFT JOIN clasificacion c ON p.clasificacion = c.id', [], 
     function(error, result){
        if(error){
            throw error;
        }else{
            console.log(result);
        }
    }
 );

 connection.end();