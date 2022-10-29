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
  editarProductoForm:FormGroup;
  eliminarProductoForm:FormGroup;
  productoService:ProductoService;

  todosLosProductos: Producto[] = [];


  constructor(private fb: FormBuilder, productoService:ProductoService) {
    this.productoService = productoService;
    this.productoService.getAll2().subscribe(res => {
      this.todosLosProductos = res;
    });
    
    this.crearProductoForm = this.fb.group({
      
      nombreProd: ['', Validators.required],
      descripcionProd: ['', Validators.required],
      clasificacionProd: ['', Validators.required],
      precioProd: [0, Validators.required]
    });
    this.editarProductoForm = this.fb.group({
      idProdAEditar : [0, Validators.required],
      nuevoNombre : ['', Validators.required],
      nuevaDescripcion: ['', Validators.required],
      nuevaClasificacion: ['', Validators.required],
      nuevoPrecio: [0]
    })
    this.eliminarProductoForm = this.fb.group({
      idProdAEliminar : [0, Validators.required]
    })
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
    let productoAEditar:Producto = new Producto;
    productoAEditar.id = this.editarProductoForm.value.idProdAEditar;
    productoAEditar.nombre = this.editarProductoForm.value.nuevoNombre;
    productoAEditar.descripcion = this.editarProductoForm.value.nuevaDescripcion;
    productoAEditar.precio = this.editarProductoForm.value.nuevoPrecio;
    productoAEditar.clasificacion = this.editarProductoForm.value.nuevaClasificacion;

    this.productoService.editarProduct(productoAEditar);
  }


  eliminarProducto(){
    this.productoService.eliminarProduct( this.eliminarProductoForm.value.idProdAEliminar );
  }
}
