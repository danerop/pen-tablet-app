import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-producto',
  templateUrl: './admin-producto.component.html',
  styleUrls: ['./admin-producto.component.css']
})
export class AdminProductoComponent implements OnInit {
  crearProductoForm:FormGroup;

  constructor(private fb: FormBuilder, private afAuth: AngularFireAuth) {
    this.crearProductoForm = this.fb.group({
      nombreProd: ['', Validators.required],
      descripcionProd: ['', Validators.required],
      clasificacionProd: ['', Validators.required],
      precioProd: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  crearProducto(){

  }

  editarProducto(){

  }

  eliminarProducto(){
    
  }
}
