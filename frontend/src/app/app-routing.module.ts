import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProductoComponent } from './components/admin-producto/admin-producto.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { ListaPorTipoComponent } from './components/lista-por-tipo/lista-por-tipo.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RecuperarContaseniaComponent } from './components/recuperar-contasenia/recuperar-contasenia.component';
import { RegistroComponent } from './components/registro/registro.component';
import { VerProductoComponent } from './components/ver-producto/ver-producto.component';

const routes: Routes = [
  {path: "", redirectTo:"listaDeProductos", pathMatch:"full"},//si no coloca nada va a productos
  {path: "listaDeProductos", component: ListaProductosComponent}, //pagina principal, lista de productos
  {path: "producto", component: VerProductoComponent}, //pagina de producto
  {path: "carrito", component: CarritoComponent}, //pagina de carrito
  {path: "perfil", component: PerfilComponent},
  {path: "login", component: LoginComponent} ,//login
  {path: "singUp", component: RegistroComponent},//pagina de registro
  {path: "recuperarContrasenia", component:RecuperarContaseniaComponent},//pagina de recupero de contraseña
  {path: "adminProducto", component:AdminProductoComponent},
  {path: "listaPorClasificacion", component:ListaPorTipoComponent},
  {path: "**", redirectTo:"listaDeProductos", pathMatch:"full"}   //si modifica la url y no ingresa nada va a productos
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
