import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Carrito } from 'src/app/models/carrito';
import { Producto } from 'src/app/models/producto';
import { Usuario } from 'src/app/models/usuario';
import { CarritoService } from 'src/app/services/carrito.service';
import { ProductoService } from 'src/app/services/producto.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-lista-por-tipo',
  templateUrl: './lista-por-tipo.component.html',
  styleUrls: ['./lista-por-tipo.component.css']
})
export class ListaPorTipoComponent implements OnInit {
  usuario:Usuario = new Usuario;
  carrito:Carrito = new Carrito;
  clasificacionParam : number = 0;
  productosAMostrar: Producto[] = [];
  tipoDeProductos: string = '';

  constructor(
    private productoService:ProductoService,
    private carritoService: CarritoService,
    private _usuarioService: UsuarioService,
    private route: ActivatedRoute
  ) {

    this.route.queryParams.subscribe(params =>{
      if(params['clasificacion'] != this.clasificacionParam){
        //Si el parametro recibido es distinto al que tengo guardado, 
        //recargo el componente.
        this.clasificacionParam = params['idClasificacion'];
        this.ngOnInit();
      }
    });
  }
    
  ngOnInit(): void {
    this.productoService.getByClasificacion(this.clasificacionParam).subscribe(listaDeProductos =>{
      this.productosAMostrar = listaDeProductos;
      this.tipoDeProductos = listaDeProductos[0].clasificacion;
    });
    
    this.usuario = this._usuarioService.getSessionData();
    
    this.carritoService.getCarritoByUser(this.usuario.uid).subscribe( (carr:Carrito) => {
      this.carrito = carr;
    });
  }

  agregarProductoAlCarrito(idProducto:number): void{
    this.carritoService.postAgregarProductoAlCarrito(this.carrito.id, idProducto);
  }
}
