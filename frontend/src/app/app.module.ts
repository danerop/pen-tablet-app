import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import{AngularFireModule}from '@angular/fire/compat';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { VerProductoComponent } from './components/ver-producto/ver-producto.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { RegistroComponent } from './components/registro/registro.component';
import { VerificarEmailComponent } from './components/verificar-email/verificar-email.component';
import { RecuperarContaseniaComponent } from './components/recuperar-contasenia/recuperar-contasenia.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { environment } from 'src/environments/environment';
import { AdminProductoComponent } from './components/admin-producto/admin-producto.component';
import { ListaPorTipoComponent } from './components/lista-por-tipo/lista-por-tipo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    VerProductoComponent,
    ListaProductosComponent,
    CarritoComponent,
    RegistroComponent,
    VerificarEmailComponent,
    RecuperarContaseniaComponent,
    SpinnerComponent,
    AdminProductoComponent,
    ListaPorTipoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    HttpClientModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
