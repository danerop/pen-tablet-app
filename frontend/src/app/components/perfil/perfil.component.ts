import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carrito } from 'src/app/models/carrito';
import { CarritoElement } from 'src/app/models/carritoElement';
import { Usuario } from 'src/app/models/usuario';
import { CarritoService } from 'src/app/services/carrito.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario:Usuario= new Usuario;
  carritos:Carrito[] = [];
  productos:CarritoElement[] = [];

  constructor(private carritoService: CarritoService, private usuarioService:UsuarioService, private router:Router) {
  }

  ngOnInit(): void {
    this.usuario = this.usuarioService.getSessionData();
    if(this.usuario.uid == null || this.usuario.uid == undefined || this.usuario.uid == ""){
      this.router.navigate(["/login"]);
    }
    this.usuarioService.obtenerDatosDelUsuario(this.usuario).subscribe( (usuario:Usuario) => {
      this.usuario = usuario;
    });

    this.carritoService.getCarritosCompradosByUser(this.usuario.uid).subscribe( (carr:Carrito[]) => {
      this.carritos = carr;
    });
  }

  verCarrito(idCarrito:number):void{
    this.carritoService.getAllProductosInCarrito(idCarrito).subscribe( (prod:CarritoElement[]) => {
      this.productos = [];
      this.productos = prod;
    });
    this.carritoService.getCarrito(idCarrito).subscribe( (carrito:Carrito) => {
          
      if(carrito.usuario == this.usuario.uid){ // verifica que el carrito pertenezca al usuario
    
        this.carritoService.getAllProductosInCarrito(carrito.id).subscribe( (cp:CarritoElement[]) => { //obtiene los elementos del carrito
          this.productos = [];
          this.productos = cp; 
        }); 
      
      }
    });
  }
}
