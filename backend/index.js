const express = require('express');
const mysql = require('mysql2');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Manumanu08',
    database: 'pentablet',
    port: 3306
 });

let promesa = new Promise()

getAllProducts();
 


 function getAllProducts(){
   doConectiontoDB();
   productosARetornar;
   query = connection.query(
      "select * " +
      "from productos",
      (error, result) => {
         if(error){
               throw error;
         }else{
               console.log("resultado obtenido");
               productosARetornar = result;
               endConection();
         }
      });
   return productosARetornar;
 }

 function getProductById(id){
   
 }

 function doConectiontoDB(){
   connection.connect(function(error){
      if(error){
         throw error;
      }else{
         console.log('Conexion correcta.');
      }
   });
 }

 function endConection(){
   connection.end();
 }


 /*
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
 );*/