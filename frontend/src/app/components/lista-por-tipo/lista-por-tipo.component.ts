import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-lista-por-tipo',
  templateUrl: './lista-por-tipo.component.html',
  styleUrls: ['./lista-por-tipo.component.css']
})
export class ListaPorTipoComponent implements OnInit {
  clasificacionParam : number = 0;

  productosAMostrar: Producto[] = [];

  tipoDeProductos: string = '';

  constructor(
    private productoService:ProductoService,
    private route: ActivatedRoute) {
      this.route.queryParams
      .subscribe(params =>{
        if(params['clasificacion'] != this.clasificacionParam){
          //Si el parametro recibido es distinto al que tengo guardado, 
          //recargo el componente.
          
          this.clasificacionParam = params['idClasificacion'];
          this.ngOnInit();

        }
      });
    }
    
    ngOnInit(): void {

    this.productoService.getByClasificacion(this.clasificacionParam)
      .subscribe(listaDeProductos =>{
        this.productosAMostrar = listaDeProductos;
        this.tipoDeProductos = listaDeProductos[0].clasificacion;
      });

  }


}
