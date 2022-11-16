import { HttpClientModule } from '@angular/common/http';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import{AngularFireModule}from '@angular/fire/compat';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
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
import { NgxSpinnerModule } from "ngx-spinner";
import { ListaPorTipoComponent } from './components/lista-por-tipo/lista-por-tipo.component';
import { PerfilComponent } from './components/perfil/perfil.component';

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
    ListaPorTipoComponent,
    PerfilComponent
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    NgxSpinnerModule.forRoot({ type: "square-loader" }),
    ToastrModule.forRoot(), // ToastrModule added
    AngularFireModule.initializeApp(environment.firebaseConfig),
    HttpClientModule  ],
  providers: [
  
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
