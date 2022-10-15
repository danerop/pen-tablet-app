import { Component, OnInit} from '@angular/core';

@Component({
    selector: 'carrito',
    templateUrl: './carrito.component.html',
    styleUrls: ['./carrito.component.scss']
})

export class CarritoComponent implements OnInit {
    
    total: number = 0;
   /* tablets : Tablets[] =
    [{
        name: "Tableta 1",
        price:100000,
        stock:1,
        style: "Tableta grafica",
        image: "assets/images/tableta1.png",
        clearance: false,
        quantity: 0,
    },
    {
        name: "Tableta 2",
        price:150000,
        stock:1,
        style: "Tableta grafica",
        image: "assets/images/tableta1.png",
        clearance: false,
        quantity: 0,
    }]*/
    constructor(    ){

    }

    ngOnInit(): void{
        /*this.tablets.forEach(tablets => {
            this.total += tablets.quantity * tablets.price
        });*/
    }

}