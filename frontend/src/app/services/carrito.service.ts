import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carrito } from '../models/carrito';
import { CarritoElement } from '../models/carritoElement';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor(private _http:HttpClient) {
  }
  
  getCarrito(idCarrito:number){
    return this._http.get<Carrito>('/api/ver-carrito/' + idCarrito);
  }

  getCarritoByUser(usuario:string):Observable<Carrito> {
    return this._http.get<Carrito>('/api/carrito?usuario=' + usuario);
  }

  getCarritosCompradosByUser(usuario:string):Observable<Carrito[]>{
    return this._http.get<Carrito[]>('/api/carritos-comprados?usuario=' + usuario);
  }

  getAllProductosInCarrito(idCarrito:number):Observable<CarritoElement[]> {
    return this._http.get<CarritoElement[]>('/api/carrito/' + idCarrito);
  }
  
  postAgregarProductoAlCarrito(idCarrito:number ,idProducto:number):void {
    let body = {
      "idCarrito": idCarrito,
      "idProducto": idProducto
    }
    this._http.post<any>("/api/agregar-producto-carrito", body).subscribe( () => {} );
  }
  deleteEliminarProductoDelCarrito(idCarrito:number, idProducto:number){
    let b = {
      "idCarrito": idCarrito,
      "idProducto": idProducto
    }
    return this._http.request("delete", "/api/eliminar-producto-carrito", {body: b});
  }

  putComprarCarrito(carrito:Carrito, usuario:string):void {
    let body = {
      "carrito": carrito,
      "usuario": usuario 
    };
    this._http.put<Carrito>('/api/comprar-carrito', body,
      {
        headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })}
    ).subscribe( () => {});
  }
}
