import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  productos = [{
    nombre: "HUION HS64",
    imgUrl: "",
    descripcion: "Tablet para dibujo huion",
    clasificacion: "Tabletas Gráficas",
    precio: 12000
  },
  {
    nombre: "INSPIROY H640P",
    imgUrl: "",
    descripcion: "Tablet para dibujo huion",
    clasificacion: "Tabletas Gráficas",
    precio: 15000
  },
  {
    nombre: "INSPIROY H1060P",
    imgUrl: "",
    descripcion: "Tablet para dibujo huion",
    clasificacion: "Tabletas Gráficas",
    precio: 26000
  },
  {
    nombre: "INSPIROY DIAL Q620",
    imgUrl: "",
    descripcion: "Tablet para dibujo huion",
    clasificacion: "Tabletas Gráficas",
    precio: 29000
  },
  {
    nombre: "INSPIROY H640P",
    imgUrl: "",
    descripcion: "Tablet para dibujo huion",
    clasificacion: "Tabletas Gráficas",
    precio: 15000
  },
  {
    nombre: "INSPIROY H1060P",
    imgUrl: "",
    descripcion: "Tablet para dibujo huion",
    clasificacion: "Tabletas Gráficas",
    precio: 26000
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
