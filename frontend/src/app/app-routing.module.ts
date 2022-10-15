import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './components/carrito/carrito.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { VerProductoComponent } from './components/ver-producto/ver-producto.component';

const routes: Routes = [
  {path: "", component: ListaProductosComponent}, //pagina principal, lista de productos
  {path: "producto", component: VerProductoComponent}, //pagina de producto
  {path: "carrito", component: CarritoComponent} //pagina de carrito
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
