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
    return productosDeEjemplo;
  }

  getById(idParam:number):Observable<Producto>{
    return this._http.get<Producto>('/api/prodId/'+ idParam);
  }
}
