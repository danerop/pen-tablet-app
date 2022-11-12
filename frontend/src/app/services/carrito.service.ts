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

  getAllProductosInCarrito(usuario:string):Observable<CarritoElement[]> {
    return this._http.get<CarritoElement[]>('/api/carrito/' + usuario);
  }

  getCarritoByUser(usuario:string):Observable<Carrito> {
    return this._http.get<Carrito>('/api/carrito?usuario=' + usuario);
  }
  
  putComprarCarrito(carrito:Carrito):void{
    console.log("metodo de comprar carrito" + carrito);
    this._http.put<Carrito>('/api/comprar-carrito', carrito,
      {
        headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })}
    );
  }
}
