import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
  getAll2():Observable<Producto[]>{
    return this._http.get<Producto[]>('/api/getAllProducts');
  }
  
  getById(idParam:number):Observable<Producto>{
    return this._http.get<Producto>('/api/prodId/'+ idParam);
  }
  
  createProducto(productoACrear:Producto):void{
    console.log(JSON.stringify(productoACrear));
    this._http.post<Producto>('/api/createProduct',productoACrear)
    .subscribe(r=>{});
  }
  
  editarProduct(nuevosValores:Producto):void{
    //console.log(JSON.stringify(nuevosValores));
    this._http.post<Producto>('/api/editProduct',nuevosValores)
    .subscribe(r=>{});
    
  }
  eliminarProduct(idProdAEliminar:number):void{
    console.log(JSON.stringify(idProdAEliminar));
    this._http.post<Producto>('/api/deleteProduct', {"id":idProdAEliminar} )
    .subscribe(r=>{});

  }

  getByClasificacion(clasificacionParam: number):Observable<Producto[]> {
    console.log(JSON.stringify(clasificacionParam));
    return this._http.get<Producto[]>('/api/getByClasificacion/'+ clasificacionParam);
  }
}
