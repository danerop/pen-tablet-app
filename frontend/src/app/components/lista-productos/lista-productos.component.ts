import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carrito } from 'src/app/models/carrito';
import { Producto } from 'src/app/models/producto';
import { Usuario } from 'src/app/models/usuario';
import { CarritoService } from 'src/app/services/carrito.service';
import { ProductoService } from 'src/app/services/producto.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  usuario:Usuario = new Usuario;
  carrito:Carrito = new Carrito;
  productos:Producto[] = [];

  constructor(
    private productoService:ProductoService,
    private carritoService: CarritoService,
    private _usuarioService: UsuarioService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.productoService.getAll2().subscribe( productosDelBack => {
        this.productos = productosDelBack;
      });

    this.usuario = this._usuarioService.getSessionData();
    
    this.carritoService.getCarritoByUser(this.usuario.uid).subscribe( (carr:Carrito) => {
      this.carrito = carr;
    });
  }

  agregarProductoAlCarrito(idProducto:number): void{
    if(this.carrito != null){
      this.carritoService.postAgregarProductoAlCarrito(this.carrito.id, idProducto);
    }else{
      this.router.navigate(["/login"]);
    }
  }
}
