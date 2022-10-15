import { Component, OnInit} from '@angular/core';
import { Compra } from 'src/app/models/compra';
import { CompraService } from 'src/app/services/compra/compra.service';

@Component({
    selector: 'carrito',
    templateUrl: './carrito.component.html',
    styleUrls: ['./carrito.component.css']
})

export class CarritoComponent implements OnInit {
    //number->tipo de variable; 
    total = 0;
   // cantidad = 0;
    compras: Compra[] = [];
    
    constructor(   private compraService: CompraService){
        this.compras = compraService.getAll();
    }

    ngOnInit(): void{
        this.calcularTotal();
    }

    agregar(id:number): void{
        this.compras.forEach(compra => {
           if(compra.id === id) {
            compra.cantidad ++;
            this.calcularTotal();
           }
        });
        
    }
    eliminar(id:number): void{
        this.compras.forEach(compra => {
           if(compra.id === id) {
            compra.cantidad --;
            this.calcularTotal();
           }
        });
    }

    calcularTotal(): void { 
        this.total = 0;
        this.compras.forEach(compra => {
            this.total += compra.cantidad * compra.precio
        });
    }


}