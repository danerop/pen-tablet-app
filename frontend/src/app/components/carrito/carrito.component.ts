import { Component, OnInit} from '@angular/core';
import { Carrito } from 'src/app/models/carrito';
import { CarritoElement } from 'src/app/models/carritoElement';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
    selector: 'carrito',
    templateUrl: './carrito.component.html',
    styleUrls: ['./carrito.component.css']
})

export class CarritoComponent implements OnInit { 
    total:number = 0;
    usuario:string = "bort";
    productosEnCarrito: CarritoElement[] = [];
    
    constructor(private carritoService: CarritoService){
    }

    ngOnInit(): void{
        this.carritoService.getAllProductosInCarrito(this.usuario).subscribe( (carritoElements:CarritoElement[]) => {
            for(let element of carritoElements){
              this.productosEnCarrito.push(element);
            }
            this.calcularTotal();
        });
    }

    comprarProducto(): void{
        let carrito:Carrito = new Carrito;
        this.carritoService.getCarritoByUser(this.usuario).subscribe((carritoDeUsuario:Carrito) => {
            
            carrito = carritoDeUsuario;
            
            this.carritoService.putComprarCarrito(carrito);
        });
    }

    calcularTotal(): void { 
        this.total = 0;

        for(let p of this.productosEnCarrito){
            console.log(p);
            this.total += p.cantidad * p.precio;
        }
    }
    
}