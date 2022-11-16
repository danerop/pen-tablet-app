import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import { ActivatedRoute } from '@angular/router';
import { CarritoService } from 'src/app/services/carrito.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario';
import { Carrito } from 'src/app/models/carrito';

@Component({
  selector: 'app-ver-producto',
  templateUrl: './ver-producto.component.html',
  styleUrls: ['./ver-producto.component.css']
})

export class VerProductoComponent implements OnInit {
  
  usuario:Usuario = new Usuario;
  carrito:Carrito = new Carrito;
  producto:Producto = new Producto;
  prodIdParam:number = 0;
  tipoProducto:number = 1;

  constructor(
      private productoService: ProductoService,
      private carritoService: CarritoService,
      private _usuarioService: UsuarioService,
      private route: ActivatedRoute
  ) {
  }
  
  ngOnInit(): void {
    this.usuario = this._usuarioService.getSessionData();
    
    this.carritoService.getCarritoByUser(this.usuario.uid).subscribe( (carr:Carrito) => {
      this.carrito = carr;
    });

    this.route.queryParams.subscribe(params => {
      
      this.prodIdParam = params['prodId'];
      this.productoService.getById(this.prodIdParam).subscribe(data => {
        this.producto = data;
        if(this.producto.clasificacion == 'Tableta Gráfica') 
          this.tipoProducto = 1;
        if(this.producto.clasificacion == 'Monitor Gráfico')
          this.tipoProducto = 2;
      });
    });
  }

  agregarProductoAlCarrito(idProducto:number): void{
    this.carritoService.postAgregarProductoAlCarrito(this.carrito.id, idProducto);
  }
}
