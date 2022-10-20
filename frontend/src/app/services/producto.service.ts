import { Injectable } from '@angular/core';
import { productosDeEjemplo } from '../data';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor() { }

  getAll():Producto[]{
    return productosDeEjemplo;
  }
}
