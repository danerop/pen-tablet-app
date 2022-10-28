import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-admin-producto',
  templateUrl: './admin-producto.component.html',
  styleUrls: ['./admin-producto.component.css']
})
export class AdminProductoComponent implements OnInit {
  crearProductoForm:FormGroup;
  //editarProductoForm:FormGroup;
  //eliminarProductoForm:FormGroup;
  productoService:ProductoService

  constructor(private fb: FormBuilder, productoService:ProductoService) {
    this.productoService = productoService;
    
    this.crearProductoForm = this.fb.group({
      nombreProd: ['', Validators.required],
      descripcionProd: ['', Validators.required],
      clasificacionProd: ['', Validators.required],
      precioProd: ['', Validators.required]
    });
    /*this.editarProductoForm = this.fb.group({

    })
    this.eliminarProductoForm = this.fb.group({

    })*/
   }

  ngOnInit(): void {
    
  }

  crearProducto(){
    let productoACrear:Producto = new Producto;

    productoACrear.id = 15;
    productoACrear.nombre = this.crearProductoForm.value.nombreProd;
    productoACrear.descripcion = this.crearProductoForm.value.descripcionProd;
    productoACrear.precio = this.crearProductoForm.value.precioProd;
    productoACrear.clasificacion = this.crearProductoForm.value.clasificacionProd;

    this.productoService.createProducto(productoACrear);

    
  }

  editarProducto(){

  }

  eliminarProducto(){
    
  }
}
