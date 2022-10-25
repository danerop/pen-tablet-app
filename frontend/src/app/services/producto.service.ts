import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { productosDeEjemplo } from '../data';
import { Producto } from '../models/producto';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private _http:HttpClient) {}

  getAll():Producto[]{
    let lista_productos:Producto[] = [];
    
    this._http.get<Producto[]>('/api/prod-list').subscribe( (data:Producto[]) => {
      for(let i of data){
        lista_productos.push(i);
      }
    });

    return lista_productos;
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
