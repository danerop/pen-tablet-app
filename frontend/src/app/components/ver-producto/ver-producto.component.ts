import { Component, OnInit } from '@angular/core';

let producto = {
  nombre: 'HUION HS64',
  precio: 12000,
  
};

@Component({
  selector: 'app-ver-producto',
  templateUrl: './ver-producto.component.html',
  styleUrls: ['./ver-producto.component.css']
})
export class VerProductoComponent implements OnInit {
  producto = producto;
  constructor() { }

  ngOnInit(): void {
  }

}
