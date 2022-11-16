import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { comprasDeEjemplo } from 'src/app/data';
import { Carrito } from '../models/carrito';
import { CarritoElement } from '../models/carritoElement';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor(private _http:HttpClient) {
  }
  
  getCarritoByUser(usuario:string):Observable<Carrito> {
    return this._http.get<Carrito>('/api/carrito?usuario=' + usuario);
  }

  getAllProductosInCarrito(idCarrito:number):Observable<CarritoElement[]> {
    return this._http.get<CarritoElement[]>('/api/carrito/' + idCarrito);
  }
  
  postAgregarProductoAlCarrito(idCarrito:number ,idProducto:number):void {
    let body = {
      "idCarrito": idCarrito,
      "idProducto": idProducto
    }
    this._http.post<any>("/api/agregar-producto", body).subscribe( () => {} );
  }

  putComprarCarrito(carrito:Carrito):void {
    this._http.put<Carrito>('/api/comprar-carrito', carrito,
      {
        headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })}
    ).subscribe( () => {});
  }
}
