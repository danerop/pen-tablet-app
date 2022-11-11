import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-ver-producto',
  templateUrl: './ver-producto.component.html',
  styleUrls: ['./ver-producto.component.css']
})

export class VerProductoComponent implements OnInit {
  
  producto:Producto = new Producto;
  prodIdParam:number=0;

  constructor(
      private productoService:ProductoService,
      private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(params => {
      
      this.prodIdParam = params['prodId'];
      
      productoService.getById(this.prodIdParam).subscribe(data => 
        {
          this.producto = data;
          //console.log(this.producto);
        });
  
    });


  }

  ngOnInit(): void {

  }

}
