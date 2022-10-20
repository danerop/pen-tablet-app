import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { productosDeEjemplo } from '../data';
import { Producto } from '../models/producto';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private _http:HttpClient) {}

  getAll():Producto[]{
    return productosDeEjemplo;
  }

  getById(idParam:number):Producto{
    let productoObtenido: Producto = new Producto;
    const httpGet_ = this._http.get<Producto>('/api/prodId/'+ idParam);
    
    httpGet_.subscribe( (data:Producto) => {
      productoObtenido.id = data.id;
      productoObtenido.nombre = data.nombre;
      productoObtenido.clasificacion = data.clasificacion;
      productoObtenido.descripcion = data.descripcion;
      productoObtenido.imgUrl = data.imgUrl;
      productoObtenido.precio = data.precio;
    });

    return productoObtenido;
  }
}
