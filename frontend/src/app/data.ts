import { Compra } from "./models/compra";
import { Producto } from "./models/producto";

export const productosDeEjemplo: Producto[] = [{
  id: 0,
  nombre: "Producto de Ejemplo",
  imgUrl: "../assets/productos/huion-hs64.jpg",
  descripcion: "Este componente fue cargado debido a que no se encontró el solicitado",
  clasificacion: "Esta es su clasificacion",
  precio: 99999
},
{
  id: 1,
  nombre: "INSPIROY H640P",
  imgUrl: "../assets/productos/inspiroy-h640p.jpg",
  descripcion: "Tablet para dibujo huion",
  clasificacion: "Tabletas Gráficas",
  precio: 19000
},
{
  id: 2,
  nombre: "INSPIROY H1060P",
  imgUrl: "../assets/productos/inspiroy-h1060p.jpg",
  descripcion: "Tablet para dibujo huion",
  clasificacion: "Tabletas Gráficas",
  precio: 24000
},
{
  id: 3,
  nombre: "INSPIROY DIAL Q620",
  imgUrl: "../assets/productos/inspiroy-dial-q620.jpg",
  descripcion: "Tablet para dibujo huion",
  clasificacion: "Tabletas Gráficas",
  precio: 30000
},
{
  id: 4,
  nombre: "HUION HS64",
  imgUrl: "../assets/productos/huion-hs64.jpg",
  descripcion: "Tablet para dibujo huion",
  clasificacion: "Tabletas Gráficas",
  precio: 15000
}];

export const comprasDeEjemplo: Compra[] = [{
    id:1,
    nombre: "INSPIROY H640P",
    imgUrl: "../assets/productos/inspiroy-h640p.jpg",
    descripcion: "Tablet para dibujo huion",
    clasificacion: "Tabletas Gráficas",
    precio: 19000,
    cantidad: 2
  },
  {
    id:2,
    nombre: "INSPIROY H1060P",
    imgUrl: "../assets/productos/inspiroy-h1060p.jpg",
    descripcion: "Tablet para dibujo huion",
    clasificacion: "Tabletas Gráficas",
    precio: 24000,
    cantidad: 2
  }];