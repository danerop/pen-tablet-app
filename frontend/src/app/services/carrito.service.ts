import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Carrito } from '../models/carrito';
import { CarritoElement } from '../models/carritoElement';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor(private _http:HttpClient, private toastr: ToastrService) {
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
    this._http.post<any>("/api/agregar-producto-carrito", body).subscribe( (res:any) => {
      if(res=="Producto agregado al carrito"){
        this.toastr.success(res);
      }else{
        this.toastr.info(res);
      }
    });
  }
  deleteProductoDelCarrito(idCarrito:number, idProducto:number){
    let b = {
      "idCarrito": idCarrito,
      "idProducto": idProducto
    }
    return this._http.request("delete", "/api/eliminar-producto-carrito", {body: b});
  }

  putComprarCarrito(carrito:Carrito, usuario:string) {
    let body = {
      "carrito": carrito,
      "usuario": usuario 
    };
    return this._http.put<Carrito>('/api/comprar-carrito', body);
  }

  putCarritoProducto(cp:CarritoElement): void{
    let body = {
      id: cp.idCarritoProducto,
      cantidad: cp.cantidad
    };
    this._http.put<CarritoElement>('/api/actualizar-carrito', body).subscribe( () => {});
  }
}
