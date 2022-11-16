import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Carrito } from 'src/app/models/carrito';
import { CarritoElement } from 'src/app/models/carritoElement';
import { Usuario } from 'src/app/models/usuario';
import { CarritoService } from 'src/app/services/carrito.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
    selector: 'carrito',
    templateUrl: './carrito.component.html',
    styleUrls: ['./carrito.component.css']
})

export class CarritoComponent implements OnInit { 
    total:number = 0;
    usuario: Usuario = new Usuario();
    carritoDeUsuario: Carrito = new Carrito();
    productosEnCarrito: CarritoElement[] = [];
    
    constructor(private carritoService: CarritoService, private _usuarioService: UsuarioService, private router: Router){
    }

    ngOnInit(): void{
        //comprueba que el usuario este logueado, en caso negativo, lo envia a la pagina de login
        this.usuario= this._usuarioService.getSessionData();
        if(this.usuario.uid == null || this.usuario.uid == undefined || this.usuario.uid == ""){
            this.router.navigate(["/login"]);
        }

        //obtiene el carrito del usuario
        this.carritoService.getCarritoByUser(this.usuario.uid).subscribe((carrito: Carrito) => {
            this.carritoDeUsuario = carrito;
    
            //obtiene todos los productos del carrito del usuario
            this.carritoService.getAllProductosInCarrito(this.carritoDeUsuario.id).subscribe( (carritoElements:CarritoElement[]) => {
                for(let element of carritoElements){
                  this.productosEnCarrito.push(element);
                }
                this.calcularTotal();
            });
        });

    }

    comprarProducto(): void{
        this.carritoService.putComprarCarrito(this.carritoDeUsuario);
    }

    calcularTotal(): void { 
        this.total = 0;

        for(let p of this.productosEnCarrito){
            console.log(p);
            this.total += p.cantidad * p.precio;
        }
    }
    
}