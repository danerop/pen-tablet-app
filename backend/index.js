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
 });
 var query = connection.query(
    'INSERT INTO productos values (?,?,?,?,?)', [1,'Producto de Ejemplo', 'Este componente fue cargado debido a que no se encontró el solicitado', 1, 99999], 
    function(error, result){
       if(error){
        throw error;
       }else{
        console.log(result);
       }
   });
   var query = connection.query(
    'INSERT INTO productos values (?,?,?,?,?)', [2,'INSPIROY H640P', 'Tablet para dibujo huion', 1, 19000], 
    function(error, result){
       if(error){
        throw error;
       }else{
        console.log(result);
       }
   });
   var query = connection.query(
    'INSERT INTO productos values (?,?,?,?,?)', [3,'INSPIROY H1060P', 'Tablet para dibujo huion', 1, 24000], 
    function(error, result){
       if(error){
        throw error;
       }else{
        console.log(result);
       }
   });
   var query = connection.query(
    'INSERT INTO productos values (?,?,?,?,?)', [4,'INSPIROY DIAL Q620', 'Tablet para dibujo huion', 2, 30000], 
    function(error, result){
       if(error){
        throw error;
       }else{
        console.log(result);
       }
   });
   var query = connection.query(
    'INSERT INTO productos values (?,?,?,?,?)', [5,'HUION HS64', 'Tablet para dibujo huion', 1, 15000], 
    function(error, result){
       if(error){
        throw error;
       }else{
        console.log(result);
       }
   });

   //ESTO SERVIRÍA PARA LISTAR TODOS LOS PRODUCTOS
 var query = connection.query(
     'SELECT * FROM productos p LEFT JOIN clasificacion c ON p.clasificacion = c.id', [], 
     function(error, result){
        if(error){
            throw error;
        }else{
            console.log(result);
        }
    }
 );

 connection.end();